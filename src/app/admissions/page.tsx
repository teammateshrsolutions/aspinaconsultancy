import Link from "next/link";

export const metadata = {
  title: "Admissions 2026–27",
  description: "Explore verified 2026–27 admissions updates for selected colleges and universities.",
};

const colleges = [
  {
    name: "Yenepoya Bengaluru School of Business",
    group: "Yenepoya (Deemed to be University)",
    location: "Bengaluru · MBA programmes",
    status: "2026–27 admissions listed",
    tone: "published",
    summary: "The Bengaluru School of Business lists an Admission 2026–27 intake and an online application route. Confirm the programme and current availability directly with the campus.",
    source: "https://www.ysb.yenepoya.edu.in/admissions.php",
    sourceLabel: "View official admissions page",
  },
  {
    name: "St. Benedict’s College",
    group: "St. Benedict’s Academy",
    location: "Bengaluru",
    status: "Admissions open · 2026–27",
    tone: "open",
    summary: "The college’s official page currently states that admission is open for 2026–27. Check the specific course, eligibility and application instructions before applying.",
    source: "https://stbenedictsacademybangalore.com/st-benedict-degree-college/",
    sourceLabel: "View official admissions page",
  },
  {
    name: "Krupanidhi Institute of Technology",
    group: "Krupanidhi Group of Institutions",
    location: "Bengaluru · Engineering",
    status: "Admissions open · Engineering 2026–27",
    tone: "open",
    summary: "The institute’s official engineering admissions site lists applications for 2026–27. This status applies to its engineering programmes; check other Krupanidhi colleges separately.",
    source: "https://engineering.krupanidhi.edu.in/admissions",
    sourceLabel: "View official admissions page",
  },
  {
    name: "SJES College of Nursing and Management",
    group: "SJES",
    location: "Bengaluru · Medahalli",
    status: "Status to be confirmed",
    tone: "confirm",
    summary: "The current official pages we found show earlier intake information. Contact the college to confirm which 2026–27 courses are still accepting applications.",
    source: "https://sjescollege.com/contact-us/",
    sourceLabel: "View college contact details",
  },
  {
    name: "Vidya Vikas Institute of Engineering & Technology",
    group: "Vidya Vikas",
    location: "Mysuru",
    status: "Status to be confirmed",
    tone: "confirm",
    summary: "We could not confirm a current 2026–27 admissions notice on the official pages found. Check with the institute for active programmes, entry routes and deadlines.",
    source: "https://www.vidyavikasengineering.com/",
    sourceLabel: "Visit institute website",
  },
  {
    name: "LF Group",
    group: "Institution identity needs confirmation",
    location: "Location to be confirmed",
    status: "Status to be confirmed",
    tone: "confirm",
    summary: "The fee document title alone did not identify the exact college or campus. Confirm the full institution name so ASPIN can link the correct official application source.",
    source: null,
    sourceLabel: "Ask ASPIN about this college",
  },
];

export default function AdmissionsPage() {
  return <div className="admissions-page">
    <section className="admissions-hero">
      <div className="container admissions-hero-grid">
        <div>
          <p className="section-kicker">College applications · Bengaluru &amp; Mysuru</p>
          <h1>Admissions <span>2026–27</span></h1>
          <p>See which colleges have published an intake update, what still needs confirmation, and where to check the official application details.</p>
          <div className="admissions-hero-actions"><a className="button admissions-button-dark" href="#college-updates">Explore college updates <span aria-hidden="true">↓</span></a><a className="button admissions-button-outline" href="mailto:info@aspin.in?subject=2026-27%20admissions%20question">Ask ASPIN <span aria-hidden="true">↗</span></a></div>
        </div>
        <aside className="admissions-hero-note"><span>01 / 26–27</span><p>Check the latest course availability, eligibility and dates with the college before applying.</p><a href="tel:+916360812255">Call ASPIN <span aria-hidden="true">↗</span></a></aside>
      </div>
    </section>

    <section className="admissions-updates section-shell" id="college-updates">
      <div className="container">
        <div className="college-heading admissions-heading"><div><p className="section-kicker">Verified college updates</p><h2>Start with the colleges on your list.</h2><p>Status shown here was checked against each linked source on 22 October 2026. Availability can change by course and campus, so verify it before applying.</p></div><span className="admissions-count">06 <small>COLLEGES</small></span></div>
        <div className="admissions-card-grid">{colleges.map((college, index) => <article className="admissions-card" key={college.name}>
          <div className="admissions-card-top"><span className="admissions-index">0{index + 1}</span><span className={`admissions-status is-${college.tone}`}>{college.status}</span></div>
          <p className="admissions-card-group">{college.group}</p>
          <h3>{college.name}</h3>
          <p className="admissions-location"><span aria-hidden="true">⌖</span>{college.location}</p>
          <p className="admissions-summary">{college.summary}</p>
          <a className="admissions-source-link" href={college.source ?? "mailto:info@aspin.in?subject=LF%20Group%20college%20details"} target={college.source ? "_blank" : undefined} rel={college.source ? "noreferrer" : undefined}>{college.sourceLabel}<span aria-hidden="true">↗</span></a>
        </article>)}</div>
        <p className="admissions-source-note">Admission status is not a guarantee of eligibility or a seat. Confirm current course details and application requirements directly with the institution. Fee amounts will be added after the college fee sheets are reviewed.</p>
      </div>
    </section>

    <section className="admissions-process section-shell"><div className="container admissions-process-grid"><div><p className="section-kicker">Before you apply</p><h2>Make the next steps clear.</h2><p>Use this quick checklist when comparing 2026–27 options. Apply and pay only through a route confirmed by the college.</p></div><ol><li><span>01</span><div><h3>Confirm the exact course</h3><p>Ask whether the programme and campus are accepting applications now.</p></div></li><li><span>02</span><div><h3>Check eligibility and fees</h3><p>Get the current course-wise requirements and fee schedule in writing.</p></div></li><li><span>03</span><div><h3>Verify deadlines and documents</h3><p>Follow the official college application page for the current intake.</p></div></li></ol></div></section>

    <section className="admissions-contact"><div className="container admissions-contact-inner"><div><p className="section-kicker">Need help comparing?</p><h2>Talk through your options with ASPIN.</h2><p>Call or email us with the colleges and courses you’re considering.</p></div><div className="admissions-contact-actions"><a href="tel:+916360812255" className="button admissions-button-dark">+91 63608 12255 <span aria-hidden="true">↗</span></a><a href="mailto:info@aspin.in?subject=2026-27%20admissions%20question" className="button admissions-button-outline">info@aspin.in <span aria-hidden="true">↗</span></a></div></div></section>
  </div>;
}
