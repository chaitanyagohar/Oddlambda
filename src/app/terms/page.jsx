import React from "react";
import { Link } from "react-router-dom";
import LegalLayout from "../../components/LegalLayout";

// NOTE: These are general terms. A signed proposal / agreement for a specific
// project takes priority over anything here (see section 3).
const UPDATED = "23 November 2026";

const sections = [
  {
    id: "about",
    title: "About these terms",
    content: (
      <>
        <p>
          These terms apply to your use of <Link to="/">oddlambda.com</Link> and to website design, development
          and related services provided by OddLambda ("<strong>we</strong>", "<strong>us</strong>"), a studio based
          in Delhi, India. By using this website or engaging us for a project, you agree to them.
        </p>
        <p>
          If you are engaging us on behalf of a business, you confirm you are authorised to accept these terms for
          that business.
        </p>
      </>
    ),
  },
  {
    id: "website-use",
    title: "Using this website",
    content: (
      <>
        <p>
          You may browse this website for your own information. You must not misuse it — for example by attempting
          to gain unauthorised access, introducing malicious code, scraping it at scale, or submitting false or
          abusive enquiries.
        </p>
        <p>
          The design, text, code and graphics of this website belong to OddLambda. Screenshots and names of client
          projects shown in our portfolio belong to their respective owners and are shown with their permission for
          portfolio purposes.
        </p>
      </>
    ),
  },
  {
    id: "proposals",
    title: "Proposals, scope & pricing",
    content: (
      <>
        <p>
          Every project starts with a written proposal or quote that sets out the scope, deliverables, timeline and
          price. If a signed proposal or agreement conflicts with these terms, the proposal or agreement prevails.
        </p>
        <p>
          Package prices shown on this website are starting prices for the scope described. Taxes are charged
          additionally where applicable. Domain and hosting are billed separately unless your package or
          proposal says they are included (for example, Speed Launch includes a domain of up to ₹1,000). Other
          third-party costs — such as paid plugins, apps or themes, Shopify plans, payment-gateway fees, paid APIs,
          stock media and fonts — are also billed separately unless the proposal says they are included.
        </p>
        <p>
          Work outside the agreed scope (new pages, features or integrations) is quoted separately before we start
          it.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payments",
    content: (
      <>
        <p>
          Unless the proposal says otherwise, projects are billed <strong>50% in advance</strong> to book and start
          the work and <strong>50% on completion</strong>, before the website goes live or files and access are
          handed over. Invoices are payable within 7 days of issue.
        </p>
        <p>
          The advance reserves our time and covers work that starts immediately, so it is not refundable once work
          has begun, except where we agree otherwise in writing. We may pause work on overdue invoices.
        </p>
      </>
    ),
  },
  {
    id: "timelines",
    title: "Timelines & your responsibilities",
    content: (
      <>
        <p>
          Timelines in our proposals assume we receive content, feedback, approvals and access (domain, hosting,
          accounts) on time. You are responsible for:
        </p>
        <ul>
          <li>providing accurate text, images, logos and other materials, and having the right to use them;</li>
          <li>reviewing work and giving consolidated feedback within the agreed review windows;</li>
          <li>making sure the content and products on your website comply with the laws that apply to your business.</li>
        </ul>
        <p>
          Delays in these items move the timeline accordingly. If a project is paused by the client for more than 30
          days, we may reschedule it around other work, and we may close it and invoice for work completed if it
          remains inactive for 90 days.
        </p>
      </>
    ),
  },
  {
    id: "revisions",
    title: "Revisions",
    content: (
      <p>
        Revisions are part of our process. The number of revision rounds is set out in your package or proposal.
        Further rounds, or changes to something you have already approved, may be charged at our then-current rates.
      </p>
    ),
  },
  {
    id: "ownership",
    title: "Ownership & intellectual property",
    content: (
      <>
        <p>
          Once we receive full payment, you own the final designs, content and custom code we create specifically
          for your project, and we will hand over the relevant files and access.
        </p>
        <p>
          We keep ownership of our pre-existing tools, components, frameworks, templates and know-how. Where these
          are part of your website, you receive a perpetual, non-exclusive licence to use them as part of that
          website. Open-source software and third-party assets are governed by their own licences.
        </p>
      </>
    ),
  },
  {
    id: "portfolio-credit",
    title: "Portfolio & website credit",
    content: (
      <p>
        Unless you ask us not to in writing, we may show your project in our portfolio and on social media after
        launch, and we may place a small "Website by OddLambda" credit link in your website's footer. You can ask us
        to remove the credit at any time, and we will do so at no charge. We will never publish confidential
        information about your business.
      </p>
    ),
  },
  {
    id: "support",
    title: "Launch, hosting & support",
    content: (
      <p>
        Post-launch support is included for 6 months with Speed Launch and for
        1 year with Brand Ecosystem and Commerce Scale, or as set out in your proposal. Ongoing maintenance, content
        updates, hosting management and new features after that period are available as a separate engagement.
        Hosting, domain and third-party services are provided by their respective companies under their own terms,
        and we are not responsible for their outages or policy changes.
      </p>
    ),
  },
  {
    id: "no-guarantees",
    title: "Results & warranties",
    content: (
      <p>
        We build every website with care for performance, accessibility and search-engine best practice. However,
        search rankings, traffic, leads and sales depend on many factors outside our control, so we do not guarantee
        specific business results or positions on Google or other platforms. Apart from what is expressly stated in
        your proposal, our services are provided without other warranties to the extent permitted by law.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    content: (
      <p>
        To the maximum extent permitted by law, OddLambda is not liable for indirect or consequential losses, such
        as loss of profit, revenue, data or business opportunity. Our total liability for any project is limited to
        the fees you paid us for that project.
      </p>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    content: (
      <p>
        We keep the business information, login credentials and unpublished material you share with us confidential
        and use it only to deliver your project. We ask that you treat our proposals and pricing in the same way.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Ending a project",
    content: (
      <p>
        Either party may end a project by written notice if the other materially breaches these terms or the
        proposal and does not fix the breach within 14 days. If a project ends early, you pay for work completed up
        to that date, and ownership of that completed work passes to you once it is paid for.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    content: (
      <p>
        These terms are governed by the laws of India. We will always try to resolve disagreements through
        discussion first. Any dispute that can't be resolved this way is subject to the exclusive jurisdiction of
        the courts at New Delhi.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    content: (
      <p>
        We may update these terms from time to time. The version on this page at the time you sign a proposal
        applies to that project.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      label="Legal / Terms"
      title={<>Terms of <br />Service</>}
      updated={UPDATED}
      intro="Clear terms for using our website and working with us on a project — what you can expect from us, and what we need from you."
      sections={sections}
    />
  );
}
