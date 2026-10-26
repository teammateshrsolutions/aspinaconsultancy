import ContentPage from "@/components/ContentPage";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms for using ASPIN’s education information and guidance website.",
};

const sections = [
  ["Using this website", "These terms apply when you browse or use the ASPIN website. By using the site, you agree to use it lawfully and not interfere with its operation, security or other visitors’ access. If you do not agree, please stop using the website."],
  ["What ASPIN provides", "ASPIN provides general education information and guidance to help students and families explore courses, colleges and possible next steps. Website content is a starting point for your own research. It is not an offer of admission, a formal academic assessment, legal or financial advice, or a substitute for information published by a college or examination authority."],
  ["Check important details with official sources", "Course availability, fees, eligibility rules, entrance examinations, recognition status, application steps and deadlines can change and may differ by programme, institution and applicant. You are responsible for checking current details directly with the relevant institution or official authority before applying, paying fees or making a decision. ASPIN does not guarantee admission, a particular result, employment or a specific career outcome."],
  ["Enquiry form status", "The enquiry form currently shown on the website is a preview and is not connected. It does not send or store a message. Do not rely on it to contact ASPIN until the form is connected and a successful submission is clearly confirmed. Use only a contact channel ASPIN has verified and published."],
  ["Third-party websites", "The site may link to college, examination-authority or other third-party websites for convenience. ASPIN does not control those sites and is not responsible for their content, availability, privacy practices, fees, admissions decisions or services. Visiting an external website is your choice; review its own terms and notices."],
  ["Website content and permitted use", "Unless a page says otherwise, ASPIN’s original website text, design and branding are owned by or used with permission by ASPIN. You may browse and share links to public pages for personal, non-commercial reference. Do not copy, republish, sell or materially redistribute site content, or use ASPIN branding, without prior permission. College names and marks belong to their respective owners."],
  ["Availability and changes", "ASPIN may update, remove or temporarily suspend website pages to maintain or improve the service. We aim to keep information useful, but do not promise uninterrupted access or that every page will always be complete, current or error-free."],
  ["Limitation of responsibility", "To the extent permitted by applicable law, ASPIN is not responsible for decisions you make solely from general website information, for changes made by colleges or authorities, or for a third-party website’s content or service. Nothing in these terms excludes a responsibility that cannot lawfully be excluded."],
  ["Changes and contact", "These terms should be updated when ASPIN’s legal operating name or services are confirmed. The date of the latest review should be added before publication. For questions about these terms, email info@aspin.in or call +91 63608 12255."],
];

export default function TermsPage() {
  return <ContentPage eyebrow="Website terms" title="A few clear terms for using ASPIN." intro="These terms explain what ASPIN’s education guidance website is for and how to use its information responsibly.">
    <div className="legal-draft-note"><strong>Draft for ASPIN review.</strong> Confirm the legal operating name and applicable legal review before publishing as final.</div>
    <div className="legal-document"><p className="legal-updated">Effective date: to be added after review · Last reviewed: not yet reviewed</p>{sections.map(([title, body], index) => <section key={title}><span>0{index + 1}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}</div>
  </ContentPage>;
}
