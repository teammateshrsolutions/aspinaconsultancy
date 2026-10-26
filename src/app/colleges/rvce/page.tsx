import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "R.V. College of Engineering, Bengaluru",
  description: "Explore RVCE courses, published management quota fees, admission routes and college details with ASPIN.",
};

const courses = [
  "Civil Engineering", "Mechanical Engineering", "Electrical & Electronics Engineering",
  "Electronics & Communication Engineering", "Industrial Engineering & Management", "Chemical Engineering",
  "Computer Science & Engineering", "Electronics & Telecommunication Engineering", "Biotechnology",
  "Aerospace Engineering", "CSE (Artificial Intelligence & Machine Learning)",
  "CSE (Cyber Security)", "CSE (Data Science)",
];

const managementFees = [
  ["Civil Engineering", "₹24 lakh"], ["Mechanical Engineering", "₹24 lakh"], ["Electrical & Electronics Engineering", "₹24 lakh"],
  ["Electronics & Communication Engineering", "₹38 lakh"], ["Industrial Engineering & Management", "₹20 lakh"],
  ["Chemical Engineering", "₹16 lakh"], ["Computer Science & Engineering", "₹70 lakh"],
  ["Electronics & Telecommunication Engineering", "₹24 lakh"], ["Biotechnology", "₹25 lakh"],
  ["Aerospace Engineering", "₹31 lakh"], ["CSE (Artificial Intelligence & Machine Learning)", "₹60 lakh"],
  ["CSE (Cyber Security)", "₹50 lakh"], ["CSE (Data Science)", "₹55 lakh"],
];

const faqs = [
  ["How long is the B.E. programme at RVCE?", "The B.E. programmes listed for RVCE are four-year undergraduate courses."],
  ["What admission routes are available for B.E.?", "RVCE publishes separate admission information for KEA / government quota, COMEDK, management quota, and NRI / foreign national categories. Requirements and steps depend on the route and admission year."],
  ["Are the fees the same for every student?", "No. Fees differ by programme and admission category. The table on this page shows the total management-quota tuition listed for 2025–26 and should not be treated as the current-year fee."],
  ["Does the published fee include hostel and transport?", "The 2025–26 management schedule states that other annual fees are additional and that hostel and transport charges are communicated separately."],
];

export default function RVCECollegePage() {
  return <main className="college-profile-page">
    <div className="college-profile-hero-image"><div className="container"><Link href="/colleges" className="college-profile-breadcrumb">Colleges <span>/</span> Engineering <span>/</span> RVCE</Link></div></div>
    <section className="college-profile-heading"><div className="container college-profile-heading-inner">
      <div className="college-profile-seal" aria-hidden="true">RV</div>
      <p className="section-kicker">R.V. College of Engineering · Bengaluru</p>
      <h1>RVCE Bengaluru</h1>
      <p className="college-profile-subtitle">Courses, fees &amp; admission guide</p>
      <div className="college-profile-facts"><span>Established <strong>1963</strong></span><span>Institution <strong>Autonomous</strong></span><span>Affiliation <strong>VTU</strong></span><span>Location <strong>Mysuru Road</strong></span></div>
    </div></section>
    <nav className="college-profile-nav" aria-label="RVCE page sections"><div className="container"><a href="#overview">Overview</a><a href="#courses">Courses</a><a href="#fees">Fees</a><a href="#admissions">Admissions</a><a href="#faqs">FAQs</a><a href="#student-notes">Student notes</a></div></nav>
    <div className="container college-profile-layout">
      <article className="college-profile-content">
        <section id="overview" className="college-profile-section"><p className="section-kicker">College overview</p><h2>About R.V. College of Engineering</h2><p>R.V. College of Engineering (RVCE) is an autonomous engineering institution on Mysuru Road in Bengaluru. Established in 1963, it is affiliated with Visvesvaraya Technological University (VTU) and approved by AICTE. The college’s published programme information includes undergraduate engineering, postgraduate and doctoral study.</p><div className="college-profile-stat-row"><div><strong>1963</strong><span>Year established</span></div><div><strong>15</strong><span>UG engineering programmes*</span></div><div><strong>VTU</strong><span>Affiliated university</span></div></div><p className="college-profile-caption">*Programme count shown in RVCE’s institutional overview. Individual offerings and intake may change by academic year.</p></section>
        <section id="courses" className="college-profile-section"><p className="section-kicker">What can you study?</p><h2>Undergraduate engineering courses</h2><p>These B.E. branches are listed in RVCE’s 2025–26 management-quota admission schedule. The published duration for B.E. is four years.</p><div className="college-table-wrap"><table className="college-data-table"><thead><tr><th>Programme</th><th>Level</th><th>Duration</th></tr></thead><tbody>{courses.map((course) => <tr key={course}><td>{course}</td><td>B.E.</td><td>4 years</td></tr>)}</tbody></table></div><p className="college-profile-caption">Course names shown here are based on RVCE’s published 2025–26 schedule. Check the relevant academic-year information for current availability and intake.</p></section>
        <section id="fees" className="college-profile-section"><p className="section-kicker">Plan your budget</p><h2>Management quota fee structure</h2><p className="college-fee-alert"><strong>Published schedule: 2025–26.</strong> These are total tuition fees for the four-year programme, not a confirmed 2026–27 price. Fees differ by admission route.</p><div className="college-table-wrap"><table className="college-data-table"><thead><tr><th>Programme</th><th>Duration</th><th>Total tuition fee</th></tr></thead><tbody>{managementFees.map(([course, fee]) => <tr key={course}><td>{course}</td><td>4 years</td><td>{fee}</td></tr>)}</tbody></table></div><div className="college-fee-note"><span>PLEASE NOTE</span><p>The 2025–26 schedule lists other fees of approximately ₹65,000 per year in addition to tuition. Hostel and transport charges are separate. KEA / government, COMEDK, NRI and other admission routes use separate fee information.</p></div></section>
        <section id="admissions" className="college-profile-section"><p className="section-kicker">Your application path</p><h2>RVCE admission routes</h2><p>Admission steps depend on the programme, eligibility and seat category. RVCE publishes separate information for each route; use the current-year schedule when planning an application.</p><div className="college-admission-route-list">{[["01", "KEA / Government quota", "Seat allotment and admission instructions are published through the relevant KEA process."], ["02", "COMEDK", "Check the current COMEDK counselling, eligibility and seat-allotment information."], ["03", "Management quota", "The college publishes a separate programme-wise fee and application schedule for each academic year."], ["04", "NRI / Foreign national", "Separate application and document requirements apply to international admission categories."]].map(([n, title, copy]) => <div key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div><div className="college-profile-callout"><strong>Need help comparing routes?</strong><p>ASPIN can help you understand the steps and prepare questions before you apply.</p><Link className="button button-primary" href="/contact">Talk to an ASPIN advisor <span>↗</span></Link></div></section>
        <section id="faqs" className="college-profile-section"><p className="section-kicker">Quick answers</p><h2>Frequently asked questions</h2><div className="college-profile-faq">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}</div></section>
        <section id="student-notes" className="college-profile-section college-student-notes"><p className="section-kicker">Student perspective</p><h2>Student reviews</h2><p>We’re preparing a verified review section for this college. ASPIN will publish student ratings and comments after collecting and checking submissions.</p><div className="college-review-empty"><span>ASPIN</span><strong>Student voices belong here.</strong><p>No verified student reviews have been published yet.</p></div></section>
      </article>
      <aside className="college-profile-aside"><div className="college-enquiry-card"><p className="section-kicker">Planning to apply?</p><h2>Get help with RVCE</h2><p>Tell us what you’re considering. An ASPIN advisor can help you understand your next steps.</p><Link className="button button-coral" href="/contact">Request guidance <span>↗</span></Link><div className="college-enquiry-divider" /><span className="college-enquiry-label">ON THIS PAGE</span><a href="#courses">Courses <span>↗</span></a><a href="#fees">Fees &amp; budget <span>↗</span></a><a href="#admissions">Admission routes <span>↗</span></a><a href="#faqs">Common questions <span>↗</span></a></div><div className="college-aside-note"><span>ASPIN GUIDE</span><p>Use this page to compare key details. Always confirm current-year course availability, fees and eligibility before making an application decision.</p></div></aside>
    </div>
    <section className="college-profile-bottom-cta"><div className="container"><p className="section-kicker">Your next step, made clearer</p><div><h2>Want to explore more Bengaluru colleges?</h2><Link className="button button-coral" href="/colleges">Back to colleges <span>↗</span></Link></div></div></section>
  </main>;
}
