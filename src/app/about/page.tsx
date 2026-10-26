import Link from "next/link";
import Photo from "@/components/PhotoTile";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About ASPIN",
  description: "Learn how ASPIN helps students explore courses, compare Bengaluru colleges and plan their next step.",
};

const principles = [
  ["01", "Start with the student", "Interests, priorities and circumstances matter. We begin by understanding what the student is looking for."],
  ["02", "Make options easier to compare", "Course and college information is more useful when the important details are clear and easy to explore."],
  ["03", "Keep sources visible", "Use official college and admissions sources to confirm current requirements, dates and course details."],
  ["04", "Leave room for choice", "Guidance should help students make their own informed decision, without pressure or promises."],
];

const journeys = [
  ["After 10th", "Explore subject combinations, PUC options and the questions to consider before choosing a direction."],
  ["After 12th", "Compare undergraduate pathways, colleges and admission information that fits your interests."],
  ["After graduation", "Look into postgraduate and professional study routes, and decide what to research next."],
];

export default function AboutPage() {
  return <div className="about-page">
    <section className="about-hero"><div className="container about-hero-grid"><Reveal><div className="about-hero-copy"><p className="section-kicker">About ASPIN · Bengaluru</p><h1>A clearer way to explore what comes next.</h1><p>Choosing a course or college can feel like a lot to carry. ASPIN brings helpful information and practical guidance together, so students can explore their options with more clarity.</p><div className="about-actions"><Link href="/courses" className="button button-coral">Explore courses <span aria-hidden="true">↗</span></Link><Link href="/contact" className="text-link">Talk with ASPIN <span aria-hidden="true">↗</span></Link></div></div></Reveal><Reveal delay={100}><div className="about-hero-image"><Photo tile="student-two" label="Student considering their next education step" className="about-portrait" /><Photo tile="campus" label="Bengaluru college campus" className="about-campus-inset" /><span className="about-image-caption">A more considered next step</span></div></Reveal></div></section>

    <section className="about-story section-shell"><div className="container about-story-grid"><Reveal><div className="about-story-image"><Photo tile="campus" label="Students walking through a Bengaluru campus" /><span>Explore with context. Choose with confidence.</span></div></Reveal><Reveal delay={100}><div className="about-story-copy"><p className="section-kicker">Our purpose</p><h2>Make the search feel more human.</h2><p>Students are often asked to make big decisions while sorting through scattered information. ASPIN is here to make that process more manageable: understand what matters, explore real study paths, compare colleges and get clear on what to check next.</p><p>We focus on Bengaluru colleges and course pathways, while keeping the student’s goals at the centre of the conversation.</p><Link href="/colleges" className="text-link">Explore the college directory <span aria-hidden="true">↗</span></Link></div></Reveal></div></section>

    <section className="about-principles section-shell"><div className="container"><Reveal><div className="about-section-heading"><p className="section-kicker">What guides us</p><span className="section-rule" aria-hidden="true" /><h2>Good guidance makes the next step clearer.</h2></div></Reveal><div className="about-principle-grid">{principles.map(([n, title, body], index) => <Reveal key={n} delay={index * 70}><article className="about-principle-card"><span>{n}</span><h3>{title}</h3><p>{body}</p><i aria-hidden="true" /></article></Reveal>)}</div></div></section>

    <section className="about-process"><div className="container"><Reveal><div className="about-process-heading"><p className="section-kicker">A useful process</p><h2>From questions to a practical next step.</h2><p>There is no one-size-fits-all answer. We help make each stage easier to work through.</p></div></Reveal><div className="about-process-list" role="list">{[["01", "Listen", "Understand interests, priorities and the questions in front of you."], ["02", "Explore", "Look across relevant course and college options."], ["03", "Check", "Use official sources to confirm changing details."], ["04", "Plan", "Choose a next step that feels manageable." ]].map(([n, title, body], index) => <Reveal key={n} delay={index * 70}><article role="listitem"><span>{n}</span><h3>{title}</h3><p>{body}</p></article></Reveal>)}</div></div></section>

    <section className="about-journeys section-shell"><div className="container"><Reveal><div className="college-heading"><div><p className="section-kicker">Who we help</p><h2>Support for the step you’re at.</h2><p>Start from your current study stage and explore what may be relevant to you.</p></div><Link href="/career-guidance" className="text-link">Explore guidance <span aria-hidden="true">↗</span></Link></div></Reveal><div className="about-journey-grid">{journeys.map(([title, body], index) => <Reveal key={title} delay={index * 80}><article className="about-journey-card"><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p><Link href="/courses">Explore options <span aria-hidden="true">↗</span></Link></article></Reveal>)}</div></div></section>

    <section className="about-sources section-shell"><div className="container about-source-grid"><Reveal><div><p className="section-kicker">Reliable information</p><h2>Clear about what we know—and what to verify.</h2><p>Course offerings, eligibility and admission dates can change. We help students know what to look for, and point them to official institution sources to confirm the details that matter.</p><Link href="/colleges" className="button button-primary">Browse colleges <span aria-hidden="true">↗</span></Link></div></Reveal><Reveal delay={100}><div className="source-list">{[["01", "Official college pages", "Confirm current programmes, campus details and application steps."], ["02", "Admissions notices", "Check the latest eligibility rules, deadlines and required documents."], ["03", "A question-first approach", "If something is unclear, note it and ask the institution or a counsellor."]].map(([n, title, body]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></Reveal></div></section>

    <section className="about-cta"><div className="container"><Reveal><p className="section-kicker">Your next step starts here</p><h2>Explore first. Decide with clarity.</h2><p>Browse course pathways, compare Bengaluru colleges or speak with ASPIN about what you want to understand.</p><div className="hero-actions"><Link href="/courses" className="button button-coral">Explore courses <span aria-hidden="true">↗</span></Link><Link href="/contact" className="button button-outline-light">Contact ASPIN <span aria-hidden="true">↗</span></Link></div></Reveal></div></section>
  </div>;
}
