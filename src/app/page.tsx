import Link from "next/link";
import Reveal from "@/components/Reveal";
import Photo from "@/components/PhotoTile";
import { courses, guides } from "@/lib/site-data";

const benefits = [
  ["◎", "Explore more courses", "Compare options across undergraduate and postgraduate streams."],
  ["⌂", "Find the right college", "Browse Bengaluru institutions with clear details and sources."],
  ["☷", "Understand admissions", "Get practical guidance on applications, eligibility and next steps."],
  ["✳", "Choose with confidence", "Use trusted information to make a decision that fits your goals."],
];

const collegeList = [
  { name: "R.V. College of Engineering", area: "Mysuru Road", kind: "Engineering college", photo: "campus" as const },
  { name: "B.M.S. College of Engineering", area: "Basavanagudi", kind: "Engineering college", photo: "campus" as const },
  { name: "CHRIST (Deemed to be University)", area: "Hosur Road · Central Campus", kind: "Deemed-to-be university", photo: "study" as const },
];

const faqs = [
  ["How can ASPIN help me choose a course?", "ASPIN helps you explore course areas, compare options and prepare useful questions. It is a starting point for research, not an admissions decision."],
  ["Can I compare colleges in Bengaluru?", "Yes. Browse the directory, filter by study area and institution type, and follow official links to confirm current details."],
  ["Where should I check admission requirements?", "Check the relevant college or university admissions page. Requirements and deadlines can change from one intake to the next."],
  ["Does ASPIN guarantee admission or a career outcome?", "No. ASPIN provides information and guidance to support your decisions. Institutions make admissions decisions, and career outcomes vary."],
];

const testimonials = [
  { quote: "ASPIN helped me compare course options and understand what to check before choosing a college.", name: "Ananya R.", role: "Student · Bengaluru" },
  { quote: "The guidance made the admission process easier to understand. I knew which questions to ask and where to verify the details.", name: "Karthik S.", role: "Student · Bengaluru" },
  { quote: "I had several courses in mind, and ASPIN helped me explore the differences and decide what to research next.", name: "Meera N.", role: "Parent · Bengaluru" },
];

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <div className="section-heading"><p className="section-kicker">{eyebrow}</p><span className="section-rule" aria-hidden="true" /><h2>{title}</h2>{body && <p className="section-intro">{body}</p>}</div>;
}

export default function HomePage() {
  return <div className="home-page-theme">
    <section className="home-hero" aria-labelledby="home-title">
      <div className="hero-icons" aria-hidden="true"><span>⌂</span><span>✧</span><span>▤</span></div>
      <div className="hero-copy"><p className="hero-kicker">Bengaluru colleges · brighter futures</p><h1 id="home-title">Find your place in<br className="hidden sm:block" /> what comes next.</h1><p className="hero-subtitle">Explore courses, compare Bengaluru colleges, and get clear guidance for the future.</p><div className="hero-actions"><Link href="/courses" className="button button-coral">Explore courses <span aria-hidden="true">↗</span></Link><Link href="/colleges" className="button button-outline-light">Find a college <span aria-hidden="true">↗</span></Link></div></div>
      <div className="hero-portraits" aria-label="Students looking ahead to their next step"><Photo tile="student-one" label="College student smiling" /><Photo tile="student-two" label="College student smiling" /><Photo tile="student-three" label="College student smiling" /></div>
    </section>

    <section className="story-section section-shell" id="about"><div className="container story-grid"><Reveal><Photo tile="campus" label="Students walking through a Bengaluru college campus" className="story-photo" /></Reveal><Reveal delay={100}><div className="story-copy"><p className="section-kicker">A clearer path forward</p><h2>A clearer path to college.</h2><p>We help students explore the right courses, compare Bengaluru colleges and understand the admissions process—all in one place. With reliable information and practical guidance, ASPIN makes it easier to take the next step with confidence.</p><Link href="/about" className="text-link">Learn more about ASPIN <span aria-hidden="true">↗</span></Link></div></Reveal></div></section>

    <section className="pathways-section section-shell"><div className="container"><Reveal><SectionHeading eyebrow="Explore what’s right for you" title="Popular subject pathways" body="Discover courses across streams and find the best fit for your interests." /></Reveal><div className="pathway-grid">{courses.slice(0, 6).map((course, index) => <Reveal key={course.slug} delay={index * 55}><Link href={`/courses/${course.slug}`} className="pathway-card"><Photo tile={(["study", "library", "campus", "study", "library", "campus"] as const)[index]} label={`${course.title} study area`} /><div className="pathway-card-copy"><span>{course.title}</span><span aria-hidden="true">↗</span></div></Link></Reveal>)}</div><div className="center-link"><Link href="/courses" className="text-link">View all course areas <span aria-hidden="true">↗</span></Link></div></div></section>

    <section className="why-section section-shell" aria-labelledby="why-title">
      <div className="container"><Reveal><SectionHeading eyebrow="Why ASPIN" title="Clear guidance for your next step." /></Reveal>
        <div className="benefit-grid">{benefits.map(([icon, title, body], i) => <Reveal key={title} delay={i * 80}><article className="benefit-card"><span className="benefit-icon" aria-hidden="true">{icon}</span><div className="benefit-art" aria-hidden="true" /><h3>{title}</h3><p>{body}</p></article></Reveal>)}</div>
      </div>
    </section>

    <section className="college-section section-shell" id="college-list"><div className="container"><Reveal><div className="college-heading"><div><p className="section-kicker">Explore Bengaluru colleges</p><h2>Good options, easier to compare.</h2><p>Start with a few institutions and compare the details that matter for your next step.</p></div><Link href="/colleges" className="text-link">View all colleges <span aria-hidden="true">↗</span></Link></div></Reveal>
      <div className="college-toolbar"><span>College directory · Bengaluru</span><Link href="/colleges">Search and filter <span aria-hidden="true">↗</span></Link></div>
      <div className="college-rows">{collegeList.map((college, i) => <Reveal key={college.name} delay={i * 70}><article className="college-row"><Photo tile={college.photo} label={`${college.name} campus`} className="college-thumb" /><div className="college-name"><h3>{college.name}</h3><p>{college.area}</p></div><span className="college-kind">{college.kind}</span><Link href="/colleges" className="college-link">View details <span aria-hidden="true">↗</span></Link></article></Reveal>)}</div>
      <p className="source-note">Compare courses, campus location and institution type as you shortlist colleges.</p>
    </div></section>

    <section className="trust-band" aria-label="ASPIN service highlights"><div className="container trust-grid"><div><span aria-hidden="true">⌂</span><p>Bengaluru colleges</p></div><div><span aria-hidden="true">▤</span><p>Courses to explore</p></div><div><span aria-hidden="true">◎</span><p>Guidance when you need it</p></div><div><span aria-hidden="true">↗</span><p>Official sources to check</p></div></div></section>

    <section className="guides-section section-shell"><div className="container"><Reveal><div className="college-heading"><div><p className="section-kicker">Guides &amp; resources</p><h2>Helpful articles for your journey.</h2><p>Practical advice to help you ask better questions and make informed choices.</p></div><Link href="/guides" className="text-link">Explore all guides <span aria-hidden="true">↗</span></Link></div></Reveal><div className="guide-grid">{guides.map((guide, i) => <Reveal key={guide.slug} delay={i * 80}><Link href={`/guides/${guide.slug}`} className="guide-card"><Photo tile={(["library", "campus", "study"] as const)[i]} label={guide.title} /><div className="guide-card-copy"><p>{guide.category}</p><h3>{guide.title}</h3><span>Read guide <span aria-hidden="true">↗</span></span></div></Link></Reveal>)}</div></div></section>

    <section className="student-section section-shell"><div className="container student-grid"><Reveal><div className="student-copy"><p className="section-kicker">Real students · real journeys</p><h2>Different paths. Brighter futures.</h2><p>Every student starts with different questions. ASPIN helps bring useful course, college and guidance information together.</p><Link href="/career-guidance" className="text-link">Explore guidance <span aria-hidden="true">↗</span></Link></div></Reveal><Reveal delay={100}><div className="student-collage"><Photo tile="student-three" label="Student portrait" className="student-main-photo" /><Photo tile="student-one" label="Student portrait" /><Photo tile="student-two" label="Student portrait" /></div></Reveal></div></section>

    <section className="testimonial-section"><div className="container"><Reveal><div className="testimonial-panel"><p className="section-kicker">Student &amp; parent voices</p><h2 className="testimonial-heading">A little clarity goes a long way.</h2><div className="testimonial-grid">{testimonials.map((testimonial) => <article className="testimonial-card" key={testimonial.name}><span className="testimonial-quote-mark" aria-hidden="true">“</span><blockquote>{testimonial.quote}</blockquote><div className="testimonial-person"><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div></article>)}</div></div></Reveal></div></section>

    <section className="faq-section section-shell"><div className="container faq-grid"><Reveal><div className="faq-intro"><p className="section-kicker">Common questions</p><h2>Let’s make the next step clearer.</h2><p>Answers to common questions about exploring courses and colleges with ASPIN.</p><Link href="/contact" className="text-link">Still have a question? <span aria-hidden="true">↗</span></Link></div></Reveal><div className="faq-list">{faqs.map(([question, answer], i) => <Reveal key={question} delay={i * 60}><details className="faq-item"><summary>{question}<span aria-hidden="true" /></summary><p>{answer}</p></details></Reveal>)}</div></div></section>

    <section className="final-cta"><div className="container"><Reveal><p className="section-kicker">Ready for what’s next?</p><h2>Explore. Compare. Find your place.</h2><p>Start with courses, colleges and clear guidance—all in one place.</p><div className="hero-actions"><Link href="/courses" className="button button-coral">Explore courses <span aria-hidden="true">↗</span></Link><Link href="/colleges" className="button button-outline-light">Browse colleges <span aria-hidden="true">↗</span></Link></div></Reveal></div></section>
  </div>;
}
