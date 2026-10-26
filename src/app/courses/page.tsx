import Link from "next/link";
import Reveal from "@/components/Reveal";
import Photo from "@/components/PhotoTile";
import CourseBrowser from "@/components/CourseBrowser";
import { guides } from "@/lib/site-data";

export const metadata = { title: "Explore Courses", description: "Explore courses by study stage and subject area, then compare college options with ASPIN." };

const comparisonPoints = [
  ["What you’ll study", "Look into subjects, specialisations and practical components."],
  ["What you need", "Check current entry requirements and required subjects."],
  ["Where it can lead", "Explore further study and career possibilities without assuming one fixed outcome."],
];
const questions = [
  ["How do I choose a course after 12th?", "Start with subjects and activities that interest you. Compare what different courses cover, then check eligibility and admissions information with official sources."],
  ["Can I explore postgraduate courses here?", "Yes. Choose “After graduation” to browse postgraduate and professional study areas. Programme requirements differ, so confirm them with the institution."],
  ["Where can I verify course eligibility and dates?", "Use the official college or examination authority website for current eligibility, application dates and required documents."],
];
const colleges = [
  ["R.V. College of Engineering", "Mysuru Road", "Engineering", "https://rvce.edu.in/"],
  ["B.M.S. College of Engineering", "Basavanagudi", "Engineering", "https://www.bmsce.ac.in/"],
  ["CHRIST (Deemed to be University)", "Hosur Road · Central Campus", "Multi-disciplinary", "https://christuniversity.in/campuses"],
];

export default function CoursesPage() {
  return <div className="courses-page">
    <section className="inner-hero courses-hero"><div className="container"><Reveal><p className="section-kicker">Course pathways · Bengaluru and beyond</p><h1>Find a course that feels worth exploring.</h1><p>Start from where you are. Search by subject or browse study areas, then follow the details that matter to you.</p><div className="inner-hero-actions"><Link href="#course-explorer" className="button button-coral">Explore course areas <span aria-hidden="true">↓</span></Link><Link href="/career-guidance" className="button button-outline-light">Get guidance <span aria-hidden="true">↗</span></Link></div></Reveal></div></section>

    <section className="course-explorer-section section-shell" id="course-explorer"><div className="container"><Reveal><div className="college-heading"><div><p className="section-kicker">Your starting point</p><h2>Explore by study stage.</h2><p>Course choices depend on where you are in your education. Choose a stage, then browse subject areas relevant to your next step.</p></div></div></Reveal><CourseBrowser /></div></section>

    <section className="course-compare-section section-shell"><div className="container"><Reveal><div className="about-section-heading"><p className="section-kicker">Before you decide</p><span className="section-rule" aria-hidden="true" /><h2>Look beyond the course name.</h2><p className="section-intro">A little research can help you compare pathways on the details that matter.</p></div></Reveal><div className="course-compare-grid">{comparisonPoints.map(([title, body], index) => <Reveal key={title} delay={index * 80}><article><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article></Reveal>)}</div></div></section>

    <section className="course-college-section section-shell"><div className="container"><div className="course-college-grid"><Reveal><Photo tile="campus" label="Students walking on a Bengaluru university campus" className="course-college-photo" /></Reveal><Reveal delay={100}><div><p className="section-kicker">Continue your research</p><h2>See where your interests could take you.</h2><p>Explore Bengaluru colleges, compare institution details and use official links to verify current programmes and admission information.</p><Link href="/colleges" className="button button-primary">Browse all colleges <span aria-hidden="true">↗</span></Link></div></Reveal></div><Reveal><div className="course-college-list"><div className="course-college-list-heading"><h3>Start with Bengaluru colleges</h3><Link href="/colleges">View full directory <span aria-hidden="true">↗</span></Link></div>{colleges.map(([name, area, category, url]) => <article key={name}><div><h4>{name}</h4><p>{area}</p></div><span>{category}</span><a href={url} target="_blank" rel="noreferrer">Official website <span aria-hidden="true">↗</span></a></article>)}<p>Use each institution’s official website to confirm current programmes, eligibility and admission dates.</p></div></Reveal></div></section>

    <section className="course-admissions-band"><div className="container"><span aria-hidden="true">↗</span><div><p className="section-kicker">Admissions and entrance exams</p><h2>Check current information at the source.</h2><p>Eligibility, exam schedules and application dates can change. Confirm them with the relevant college or official examination authority.</p></div><Link href="/colleges" className="button button-outline-light">Find official college links <span aria-hidden="true">↗</span></Link></div></section>

    <section className="courses-faq-section section-shell"><div className="container courses-faq-grid"><Reveal><div className="faq-intro"><p className="section-kicker">Common questions</p><h2>Good questions make better research.</h2><p>Use these as a starting point when comparing course options.</p><Link href="/college-admission-guidance" className="text-link">Read admission guidance <span aria-hidden="true">↗</span></Link></div></Reveal><div className="faq-list">{questions.map(([question, answer], index) => <Reveal key={question} delay={index * 60}><details className="faq-item"><summary>{question}<span aria-hidden="true" /></summary><p>{answer}</p></details></Reveal>)}</div></div></section>

    <section className="courses-guides-section section-shell"><div className="container"><Reveal><div className="college-heading"><div><p className="section-kicker">Guides for your next step</p><h2>Make your questions more useful.</h2></div><Link href="/guides" className="text-link">All guides <span aria-hidden="true">↗</span></Link></div></Reveal><div className="course-guide-links">{guides.slice(0, 2).map((guide, index) => <Reveal key={guide.slug} delay={index * 80}><Link href={`/guides/${guide.slug}`}><span>0{index + 1}</span><div><p>{guide.category}</p><h3>{guide.title}</h3></div><b aria-hidden="true">↗</b></Link></Reveal>)}</div></div></section>

    <section className="course-end-cta"><div className="container"><Reveal><p className="section-kicker">Take the next step</p><h2>Want help making sense of your options?</h2><p>Bring your questions to ASPIN, or continue by comparing Bengaluru colleges.</p><div className="hero-actions"><Link href="/career-guidance" className="button button-coral">Explore guidance <span aria-hidden="true">↗</span></Link><Link href="/contact" className="button button-outline-light">Contact ASPIN <span aria-hidden="true">↗</span></Link></div></Reveal></div></section>
  </div>;
}
