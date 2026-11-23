// ============================================================
// "Website by OddLambda" footer credit — React / Next.js / Vite
// ------------------------------------------------------------
// Drop into the client's footer:
//
//   import OddLambdaCredit from "./OddLambdaCredit";
//   <OddLambdaCredit client="elitairs.com" theme="dark" />
//
// Props
//   client  (required) the client's domain — used for UTM tracking so you can
//           see in analytics which client site sent each visitor
//   theme   "dark" (light text, for dark footers) | "light" (dark text)
//   follow  false (default) adds rel="nofollow" — see README for why
// ============================================================

export default function OddLambdaCredit({ client, theme = "dark", follow = false, className = "" }) {
  const href =
    "https://oddlambda.com/?utm_source=" +
    encodeURIComponent(client || "client") +
    "&utm_medium=referral&utm_campaign=footer_credit";

  const color = theme === "dark" ? "rgba(234,230,205,0.65)" : "rgba(10,10,10,0.6)";
  const hover = theme === "dark" ? "#EAE6CD" : "#0a0a0a";

  return (
    <a
      href={href}
      target="_blank"
      rel={follow ? "noopener" : "noopener nofollow"}
      title="OddLambda — website design & development"
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontSize: 12,
        letterSpacing: "0.04em",
        color,
        textDecoration: "none",
        transition: "color .2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = hover)}
      onMouseLeave={(e) => (e.currentTarget.style.color = color)}
    >
      <span
        aria-hidden="true"
        style={{
          width: 16,
          height: 16,
          display: "inline-grid",
          placeItems: "center",
          background: hover,
          borderRadius: "4px 0 4px 0",
          fontWeight: 700,
          fontSize: 10,
          lineHeight: 1,
        }}
      >
        <span style={{ color: theme === "dark" ? "#0a0a0a" : "#EAE6CD" }}>O</span>
      </span>
      <span>
        Website by <strong style={{ fontWeight: 600 }}>OddLambda</strong>
      </span>
    </a>
  );
}
