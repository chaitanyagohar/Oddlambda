import React from "react";
import { Link } from "react-router-dom";
import LegalLayout from "../../components/LegalLayout";

// NOTE: Review this policy and update it whenever you add a new tool
// (e.g. Google Analytics, Meta Pixel, a CRM, WhatsApp API) that receives visitor data.
const UPDATED = "23 November 2026";

const sections = [
  {
    id: "who-we-are",
    title: "Who we are",
    content: (
      <>
        <p>
          OddLambda ("<strong>OddLambda</strong>", "<strong>we</strong>", "<strong>us</strong>") is a website
          design and development studio based in Delhi, India. We operate the website{" "}
          <Link to="/">oddlambda.com</Link> and are responsible for the personal data collected through it.
        </p>
        <p>
          This policy explains what personal data we collect, why, who we share it with and the choices you have.
          It is written to meet the Digital Personal Data Protection Act, 2023 and the Information Technology Act,
          2000 (with the rules made under them).
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "Information we collect",
    content: (
      <>
        <p>
          <strong>Information you give us.</strong> When you fill in our contact form we collect your name, email
          address, phone number, the type of project you are interested in and your message. If you book a call, the
          booking tool collects your name, email address and chosen time. If you email or message us, we receive
          whatever you include.
        </p>
        <p>
          <strong>Information collected automatically.</strong> Like most websites, our hosting provider records
          technical data such as IP address, browser type, device type, pages requested and date/time, mainly for
          security and to keep the site running. We use Vercel Web Analytics and Speed Insights to understand
          aggregate traffic and page performance; these produce anonymised statistics and are not used to identify
          you personally.
        </p>
        <p>
          <strong>Information we do not ask for.</strong> We do not ask for financial account details, government
          ID numbers, health information or other sensitive personal data through this website. Please don't send
          them to us through the contact form.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    content: (
      <>
        <p>We use personal data only for these purposes:</p>
        <ul>
          <li>to reply to your enquiry, send you a proposal or quote, and schedule calls;</li>
          <li>to plan, deliver and support a project if you become a client;</li>
          <li>to issue invoices and keep records required under tax and accounting laws;</li>
          <li>to keep the website secure, prevent misuse and fix technical problems;</li>
          <li>to understand, in aggregate, how the site is used so we can improve it.</li>
        </ul>
        <p>
          We do not sell your personal data, and we do not add you to marketing lists unless you ask us to. If we
          ever send you an update you didn't request, you can opt out at any time.
        </p>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "Why we're allowed to use it",
    content: (
      <p>
        We process your data on the basis of your consent (for example, when you choose to submit the contact form
        or book a call), to take steps you have asked for before entering into a contract and to perform that
        contract, and where a law requires us to keep or disclose records. You can withdraw consent at any time by
        emailing us; this won't affect anything we did before you withdrew it.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    content: (
      <>
        <p>
          We share personal data only with service providers that help us run the website and our business, and
          only as much as they need:
        </p>
        <ul>
          <li><strong>Vercel</strong> — website hosting, analytics and performance monitoring;</li>
          <li><strong>FormSubmit</strong> — delivers contact-form submissions to our inbox;</li>
          <li><strong>Cal.com</strong> — call scheduling;</li>
          <li><strong>Our email provider</strong> — sending and receiving email;</li>
          <li><strong>Google Fonts</strong> — serves the typefaces on this site, which means your browser connects to Google's servers.</li>
        </ul>
        <p>
          We may also disclose information where required by law, court order or a government authority, or to
          protect our legal rights. Each of these providers has its own privacy policy, which applies to the data
          it handles.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    title: "Where your data is stored",
    content: (
      <p>
        Some of our service providers store or process data on servers outside India. Where that happens, we rely on
        providers that maintain recognised security standards, and we transfer data only as permitted under Indian
        law.
      </p>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    content: (
      <p>
        If you contact us but don't become a client, we keep your enquiry for up to 24 months so we can follow up
        on the conversation, then delete it. Client project records and invoices are kept for as long as we need to
        support the project and for the period required by applicable tax, accounting and other laws. Analytics data
        is kept in aggregate form only.
      </p>
    ),
  },
  {
    id: "security",
    title: "How we protect it",
    content: (
      <p>
        The website is served only over encrypted HTTPS connections, access to our inboxes and tools is restricted
        and protected by strong authentication, and we use reputable providers with their own security programmes.
        No method of transmission or storage is completely secure, but we take reasonable steps to protect your data
        and will notify you and the authorities of a personal data breach where the law requires it.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    content: (
      <>
        <p>Subject to applicable law, you can ask us to:</p>
        <ul>
          <li>tell you what personal data we hold about you and how we use it;</li>
          <li>correct, complete or update it;</li>
          <li>erase it, where we no longer need it or you withdraw consent;</li>
          <li>withdraw your consent to further processing;</li>
          <li>nominate another person to exercise your rights if you are unable to.</li>
        </ul>
        <p>
          To make a request, email <a href="mailto:hello@oddlambda.com">hello@oddlambda.com</a> with the subject
          line "Privacy request". We may need to confirm your identity before acting. If you are not satisfied with
          our response, you may approach the Data Protection Board of India.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & local storage",
    content: (
      <p>
        We don't use advertising or cross-site tracking cookies. The site stores a small value in your browser's
        local storage to remember that you've dismissed the cookie notice, and our analytics run without advertising
        identifiers. You can clear local storage or block cookies in your browser settings at any time; the site
        will still work.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children",
    content: (
      <p>
        This website is intended for businesses and adults. We don't knowingly collect personal data from anyone
        under 18. If you believe a child has sent us their details, please contact us and we will delete them.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "Links to other websites",
    content: (
      <p>
        Our portfolio links to websites we have built for clients and to third-party services. Those sites are run
        by their owners, not by OddLambda, and have their own privacy policies.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this policy as our services or the law change. The date at the top of this page shows when it
        was last revised; significant changes will be highlighted on this page.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact & grievances",
    content: (
      <p>
        For any question, complaint or grievance about how we handle personal data, write to our Grievance Officer at{" "}
        <a href="mailto:hello@oddlambda.com">hello@oddlambda.com</a>. We aim to acknowledge requests promptly and
        resolve them within the time limits set by applicable law.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      label="Legal / Privacy"
      title={<>Privacy <br />Policy</>}
      updated={UPDATED}
      intro="We collect as little personal data as we need to answer your enquiry and deliver great work — and we never sell it. Here's exactly what we collect and how it's handled."
      sections={sections}
    />
  );
}
