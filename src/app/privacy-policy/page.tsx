import ContentPage from "@/components/ContentPage";

export const metadata = {
  title: "Privacy Policy",
  description: "How ASPIN handles information when you use this website or contact the team.",
};

const sections = [
  ["Who this policy covers", "This policy applies to the ASPIN website and its course, college and education guidance content. It explains the website’s current enquiry form status and what should happen if ASPIN enables enquiry processing in the future."],
  ["Information you choose to provide", "The enquiry form currently shown on this website is a preview and is not connected. Submitting it does not send your name, email address, study stage, topic or message to ASPIN. If ASPIN later enables a contact form or another enquiry channel, the information you choose to provide may be used to respond to your question and provide the guidance you requested. The live policy should identify the actual form provider and any other service that receives this information before that feature is enabled."],
  ["Information collected when you browse", "The website’s hosting and security services may process basic technical request information to deliver pages and protect the site. The website owner should confirm the hosting provider, server log retention and any analytics or cookie tools before publishing this policy as final. This website does not currently describe or promise analytics or advertising practices."],
  ["How information may be used", "If an enquiry channel is enabled, ASPIN should use enquiry details only for the purposes described when you provide them, such as responding to your request or continuing the guidance conversation you asked for. Your details should not be used for unrelated promotional messages without an appropriate basis and choice."],
  ["Sharing and external links", "ASPIN should limit access to enquiry information to people and service providers who need it to respond or operate the website, and should explain those providers when they are selected. College and examination-authority links may take you to independent websites. Their privacy notices and practices are their own."],
  ["Storage, security and retention", "Before collecting enquiries, ASPIN should document where information is stored, which service providers can access it, the security measures in place and how long it is kept. Information should be retained only for the time needed for the stated purpose or applicable requirements, then securely deleted or de-identified."],
  ["Your choices and requests", "If you have contacted ASPIN through an active channel, you may ask the team to correct or delete information you provided, or raise a privacy concern. Email info@aspin.in or call +91 63608 12255. Requests may be subject to applicable law and records that must be retained."],
  ["Children and students", "Students under 18 should involve a parent or guardian when sharing personal details online. ASPIN should establish and publish an appropriate process before intentionally collecting personal information from children."],
  ["Changes to this policy", "This draft must be reviewed and updated when ASPIN connects enquiry forms, adds analytics or cookies, selects service providers, or changes its information practices. The publication date should be added after that review."],
];

export default function PrivacyPage() {
  return <ContentPage eyebrow="Privacy" title="Your information deserves care." intro="A clear explanation of how this website handles information, including the current status of its enquiry form.">
    <div className="legal-draft-note"><strong>Draft for ASPIN review.</strong> Confirm the actual hosting, form, analytics and retention details before treating this page as final. India’s Digital Personal Data Protection Act and Rules have phased commencement dates, so the applicable requirements should be checked at launch. <a href="https://www.meity.gov.in/digital-personal-data-protection-act" target="_blank" rel="noreferrer">See the Ministry of Electronics and IT’s DPDP resources ↗</a></div>
    <div className="legal-document"><p className="legal-updated">Website enquiry form status: preview only · Last reviewed: not yet reviewed</p>{sections.map(([title, body], index) => <section key={title}><span>0{index + 1}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}</div>
  </ContentPage>;
}
