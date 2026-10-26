import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ContactEnquiryForm from "@/components/ContactEnquiryForm";

export const metadata = {
  title: "Contact ASPIN",
  description: "Talk with ASPIN about course choices, college options and your next education step.",
};

const prompts = [
  ["01", "Your goals", "What are you hoping to study, and where do you see yourself in the future?"],
  ["02", "Your background", "Tell us about your current stage, interests and any preferred locations or colleges."],
  ["03", "Your questions", "Share what you’d like guidance on—courses, colleges, admissions or anything else."],
];

const questions = [
  ["Who can contact ASPIN?", "Students, parents and guardians can all get in touch with questions about course pathways and college research."],
  ["What should I include in my enquiry?", "Share your current study stage, the subjects or courses you’re considering, and the question you’d like help with."],
  ["Can I ask about a specific college?", "Yes. Include the college or course name and the details you are trying to compare. Current admissions information should be confirmed with the institution."],
];

export default function ContactPage() {
  return <div className="contact-page">
    <section className="contact-intro">
      <div className="container contact-intro-grid">
        <Reveal><div className="contact-intro-copy">
          <p className="section-kicker">Contact ASPIN · Bengaluru</p>
          <h1>Let’s talk about your next step.</h1>
          <p className="contact-intro-lede">Personalised course and college guidance for students and families exploring what comes next.</p>
          <div className="contact-route-list">
            <a href="#enquiry" className="contact-route">
              <span className="contact-route-icon" aria-hidden="true">⌁</span>
              <span><strong>Course &amp; college guidance</strong><small>Explore pathways, compare options, ask your questions.</small></span>
              <span className="contact-route-arrow" aria-hidden="true">↘</span>
            </a>
            <a href="#enquiry" className="contact-route">
              <span className="contact-route-icon" aria-hidden="true">✳</span>
              <span><strong>General enquiry</strong><small>For students, parents and guardians.</small></span>
              <span className="contact-route-arrow" aria-hidden="true">↘</span>
            </a>
          </div>
        </div></Reveal>
        <Reveal delay={100}><div className="contact-intro-visual">
          <Image src="/aspin-contact-advising.png" alt="An education advisor talking with a student about course options" width={1536} height={1024} priority className="contact-advising-photo" />
          <div className="contact-image-caption"><span aria-hidden="true">✳</span><p>A thoughtful conversation can bring your options into focus.</p></div>
          <span className="contact-photo-index">01 / YOUR NEXT CHAPTER</span>
        </div></Reveal>
      </div>
    </section>

    <section className="contact-enquiry-section" id="enquiry">
      <div className="container contact-enquiry-grid">
        <Reveal><aside className="contact-context-panel">
          <p className="section-kicker">Get in touch</p>
          <h2>A little context helps us get started.</h2>
          <div className="contact-context-list">{prompts.map(([number, title, body]) => <article key={number}>
            <span className="contact-context-number">{number}</span><div><h3>{title}</h3><p>{body}</p></div>
          </article>)}</div>
        </aside></Reveal>
        <Reveal delay={100}><ContactEnquiryForm /></Reveal>
      </div>
    </section>

    <section className="contact-faq-section section-shell">
      <div className="container contact-faq-grid">
        <Reveal><div className="contact-faq-intro"><p className="section-kicker">FAQ</p><h2>A few things you may be wondering.</h2><p>Useful details to help you feel prepared before you send an enquiry.</p><Link href="/guides" className="text-link">Explore student guides <span aria-hidden="true">↗</span></Link></div></Reveal>
        <div className="contact-faq-list">{questions.map(([question, answer], index) => <Reveal key={question} delay={index * 60}><details className="faq-item"><summary>{question}<span aria-hidden="true" /></summary><p>{answer}</p></details></Reveal>)}</div>
      </div>
    </section>
  </div>;
}
