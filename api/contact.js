// ============================================================
// POST /api/contact  —  Vercel serverless function
// ------------------------------------------------------------
// Sends contact-form enquiries through your own Hostinger mailbox
// using Nodemailer (free, no third-party form service).
//
// Set these in Vercel → Project → Settings → Environment Variables:
//   SMTP_USER    hello@oddlambda.com
//   SMTP_PASS    the mailbox password (from Hostinger → Emails)
//   CONTACT_TO   hello@oddlambda.com                  (optional, default = SMTP_USER)
//   CONTACT_CC   chaitanyagohar@gmail.com             (optional, comma-separate for more)
//   SMTP_HOST    smtp.hostinger.com                   (optional, this is the default)
//   SMTP_PORT    465                                  (optional, this is the default)
// ============================================================

import nodemailer from "nodemailer";

const LIMITS = { name: 100, email: 150, phone: 30, projectType: 120, message: 5000 };

// Best-effort spam brake: max 5 submissions per IP per 10 minutes (per server instance)
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const clean = (v, max) => String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

  // Honeypot: real visitors never see or fill this field; bots do.
  if (body.website) return res.status(200).json({ ok: true });

  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return res.status(429).json({ ok: false, error: "Too many messages. Please try again in a few minutes." });
  }

  const name = clean(body.name, LIMITS.name);
  const email = clean(body.email, LIMITS.email);
  const phone = clean(body.phone, LIMITS.phone);
  const projectType = clean(body.projectType, LIMITS.projectType);
  const message = String(body.message ?? "").trim().slice(0, LIMITS.message);

  if (!name || !email || !message || !projectType) {
    return res.status(400).json({ ok: false, error: "Please fill in all required fields." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return res.status(400).json({ ok: false, error: "Please enter a valid email address." });
  }

  const { SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("contact: SMTP_USER / SMTP_PASS not set");
    return res.status(500).json({ ok: false, error: "Email is not configured yet. Please email hello@oddlambda.com." });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Project type", projectType],
  ];

  const html = `
  <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:620px;margin:0 auto;color:#0a0a0a">
    <div style="background:#0a0a0a;color:#EAE6CD;padding:20px 24px;border-radius:12px 12px 0 0">
      <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;opacity:.6">oddlambda.com</div>
      <div style="font-size:22px;font-weight:700;margin-top:4px">New project enquiry</div>
    </div>
    <div style="background:#EAE6CD;padding:24px;border-radius:0 0 12px 12px">
      <table style="width:100%;border-collapse:collapse;font-size:15px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 0;width:130px;opacity:.6;vertical-align:top">${k}</td><td style="padding:8px 0;font-weight:600">${esc(v)}</td></tr>`
          )
          .join("")}
      </table>
      <div style="margin-top:16px;padding-top:16px;border-top:1px solid rgba(10,10,10,.15)">
        <div style="opacity:.6;font-size:13px;margin-bottom:6px">Message</div>
        <div style="font-size:15px;line-height:1.6;white-space:pre-wrap">${esc(message)}</div>
      </div>
      <div style="margin-top:20px;font-size:12px;opacity:.5">Hit "Reply" to answer ${esc(name)} directly.</div>
    </div>
  </div>`;

  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMessage:\n${message}`;

  try {
    await transporter.sendMail({
      from: `"OddLambda Website" <${SMTP_USER}>`,
      to: process.env.CONTACT_TO || SMTP_USER,
      cc: process.env.CONTACT_CC || undefined,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `New enquiry: ${projectType} — ${name}`,
      text,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact: sendMail failed", err);
    return res.status(502).json({ ok: false, error: "Couldn't send right now. Please email hello@oddlambda.com." });
  }
}
