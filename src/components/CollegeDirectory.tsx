"use client";

import { useMemo, useState } from "react";
import { addedCollegeProfiles } from "@/lib/college-profiles";

type Area = string;
type College = { id: string; name: string; location: string; areas: Area[]; kind: string; initials: string; note: string; overview: string };

const areas: Area[] = ["Engineering", "Management", "Commerce", "Computing", "Health Sciences", "Nursing", "Pharmacy", "Physiotherapy", "Law", "Education", "Hospitality", "Social Work", "Multidisciplinary"];
const colleges: College[] = [
  { id: "rvce", name: "R.V. College of Engineering", location: "Mysuru Road, Bengaluru", areas: ["Engineering"], kind: "Autonomous engineering college", initials: "RV", note: "Engineering & technology", overview: "An engineering-focused institution in Bengaluru. Explore its engineering study options, campus location and the admission route that applies to your chosen programme." },
  { id: "bmsce", name: "B.M.S. College of Engineering", location: "Basavanagudi, Bengaluru", areas: ["Engineering"], kind: "Autonomous engineering college", initials: "BM", note: "Engineering & applied sciences", overview: "An engineering college located in Basavanagudi. Compare its engineering pathways with your interests, then review programme eligibility and admission requirements." },
  { id: "pes", name: "PES University", location: "RR Campus · Electronic City, Bengaluru", areas: ["Engineering", "Management", "Commerce", "Multidisciplinary"], kind: "Private university", initials: "PES", note: "Technology, business & more", overview: "A Bengaluru university with more than one campus and study areas spanning technology and business. Check which campus and programme best match your plans." },
  { id: "ramaiah-tech", name: "Ramaiah Institute of Technology", location: "Mathikere, Bengaluru", areas: ["Engineering"], kind: "Autonomous engineering college", initials: "RIT", note: "Engineering & technology", overview: "An engineering and technology institution in Mathikere. Use your preferred engineering branch to narrow down the programmes and admissions information to compare." },
  { id: "dsce", name: "Dayananda Sagar College of Engineering", location: "Kumaraswamy Layout, Bengaluru", areas: ["Engineering"], kind: "Autonomous engineering college", initials: "DS", note: "Engineering & technology", overview: "An engineering college in Kumaraswamy Layout. Explore the available engineering fields and compare their entry requirements before shortlisting." },
  { id: "christ", name: "CHRIST (Deemed to be University)", location: "Hosur Road · Central Campus, Bengaluru", areas: ["Management", "Commerce", "Law", "Multidisciplinary"], kind: "Deemed-to-be university", initials: "CH", note: "Business, commerce, law & more", overview: "A multidisciplinary university with Bengaluru campuses and study options across areas such as business, commerce and law. Confirm the campus and programme for your chosen course." },
  { id: "jain", name: "JAIN (Deemed-to-be University)", location: "Jayanagar · multiple campuses, Bengaluru", areas: ["Management", "Commerce", "Multidisciplinary"], kind: "Deemed-to-be university", initials: "JN", note: "Business, commerce & more", overview: "A Bengaluru university with multiple campuses and a range of study areas, including business and commerce. Compare programme choices and campus details before applying." },
  { id: "alliance", name: "Alliance University", location: "Anekal · Central Bengaluru", areas: ["Management", "Law", "Engineering", "Multidisciplinary"], kind: "Private university", initials: "AU", note: "Business, law, technology & more", overview: "A multidisciplinary university with study areas including business, law and technology. Explore the programme-specific admission process and campus information." },
  { id: "nlsiu", name: "National Law School of India University", location: "Nagarbhavi, Bengaluru", areas: ["Law"], kind: "Public law university", initials: "NL", note: "Legal education & research", overview: "A university focused on legal education and research in Nagarbhavi. Prospective students can compare law programme options and the relevant entrance and eligibility requirements." },
  { id: "sjcc", name: "St. Joseph’s College of Commerce", location: "Brigade Road, Bengaluru", areas: ["Management", "Commerce"], kind: "Autonomous college", initials: "SJ", note: "Commerce, management & economics", overview: "A city-centre college focused on commerce and related study areas. Explore the available programmes and compare course structure, eligibility and admissions." },
  { id: "mount-carmel", name: "Mount Carmel (Deemed-to-be University)", location: "Vasanth Nagar, Bengaluru", areas: ["Management", "Commerce", "Multidisciplinary"], kind: "Deemed-to-be university", initials: "MC", note: "Business, commerce, sciences & more", overview: "A Bengaluru university with study options across areas such as business, commerce and sciences. Check programme and campus details against your academic interests." },
  { id: "ramaiah-med", name: "Ramaiah Medical College", location: "Mathikere, Bengaluru", areas: ["Health Sciences"], kind: "Medical college", initials: "RM", note: "Medicine & health sciences", overview: "A medical college in Mathikere. Explore the medical programme pathway, eligibility and admissions steps that apply to your intended level of study." },
];

const profileColleges: College[] = addedCollegeProfiles.map((profile) => ({ id: profile.slug, name: profile.name, location: `${profile.location}, ${profile.city}`, areas: profile.areas, kind: profile.kind, initials: profile.initials, note: profile.areas.join(" · "), overview: profile.overview }));
const directoryColleges = [...colleges, ...profileColleges];

export default function CollegeDirectory() {
  const [search, setSearch] = useState("");
  const [area, setArea] = useState<Area | "All areas">("All areas");
  const [shortlist, setShortlist] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const results = useMemo(() => {
    const term = search.trim().toLowerCase();
    return directoryColleges.filter((college) => `${college.name} ${college.location} ${college.areas.join(" ")} ${college.note}`.toLowerCase().includes(term) && (area === "All areas" || college.areas.includes(area)));
  }, [search, area]);
  const toggle = (id: string) => setShortlist((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);

  return <main className="college-directory">
    <section className="college-directory-hero">
      <div className="container">
        <div className="college-directory-eyebrow"><span>ASPIN COLLEGE DIRECTORY</span><i /> Karnataka, India</div>
        <div className="college-directory-hero-grid">
          <div><h1>Find your place<br /><em>to begin.</em></h1><p>Explore colleges across Bengaluru and beyond. Search by name, city or study area, then open a profile for courses and fee details.</p></div>
          <div className="college-directory-hero-note"><span className="college-note-mark">A.</span><p>Good choices start with<br /><strong>the right questions.</strong></p><a href="#browse-colleges">Explore the directory <span>↓</span></a></div>
        </div>
        <div className="college-search-panel">
          <label className="college-search-box"><span aria-hidden="true">⌕</span><input aria-label="Search colleges" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search colleges, areas or study interests" /></label>
          <div className="college-search-count"><strong>{directoryColleges.length.toString().padStart(2, "0")}</strong><span>selected<br />institutions</span></div>
        </div>
      </div>
      <div className="college-hero-index" aria-hidden="true">01 — {String(directoryColleges.length).padStart(2, "0")}</div>
    </section>

    <section id="browse-colleges" className="college-directory-body">
      <div className="container">
        <div className="college-directory-intro"><div><p className="section-kicker">Explore by interest</p><h2>Colleges across Karnataka.</h2></div><p>Browse institutions by study area, compare programme costs from supplied fee schedules and open a detailed profile to explore your options.</p></div>
        <div className="college-area-tabs" role="group" aria-label="Filter colleges by study area">
          <button type="button" className={area === "All areas" ? "active" : ""} onClick={() => setArea("All areas")}>All colleges <span>{directoryColleges.length}</span></button>
          {areas.map((item) => <button type="button" key={item} className={area === item ? "active" : ""} onClick={() => setArea(item)}>{item}<span>{directoryColleges.filter((college) => college.areas.includes(item)).length}</span></button>)}
        </div>
        <div className="college-results-bar"><p><strong>{results.length.toString().padStart(2, "0")}</strong> institutions to explore</p><button type="button" onClick={() => { setSearch(""); setArea("All areas"); }} disabled={!search && area === "All areas"}>Clear filters <span>↗</span></button></div>
        {results.length ? <div className="college-directory-grid">{results.map((college, index) => <article className="college-listing-card" key={college.id}>
          <div className="college-listing-top"><span className="college-listing-index">{String(index + 1).padStart(2, "0")}</span><button type="button" aria-label={`${shortlist.includes(college.id) ? "Remove" : "Add"} ${college.name} ${shortlist.includes(college.id) ? "from" : "to"} shortlist`} aria-pressed={shortlist.includes(college.id)} onClick={() => toggle(college.id)} className="college-save">{shortlist.includes(college.id) ? "♥" : "♡"}</button></div>
          <div className="college-monogram" aria-hidden="true">{college.initials}</div>
          <div className="college-listing-copy"><p className="college-listing-kind">{college.kind}</p><h3>{college.name}</h3><p className="college-listing-location"><span>⌖</span>{college.location}</p></div>
          {expanded === college.id && <div className="college-listing-overview"><span>COLLEGE OVERVIEW</span><p>{college.overview}</p><strong>Explore: {college.areas.join(" · ")}</strong></div>}
          <div className="college-listing-bottom"><div className="college-tags">{college.areas.slice(0, 2).map((item) => <span key={item}>{item}</span>)}{college.areas.length > 2 && <span>+{college.areas.length - 2}</span>}</div>{college.id === "rvce" || addedCollegeProfiles.some((profile) => profile.slug === college.id) ? <a href={`/colleges/${college.id}`}>College details <span>↗</span></a> : <button type="button" aria-expanded={expanded === college.id} onClick={() => setExpanded((current) => current === college.id ? null : college.id)}>{expanded === college.id ? "Close overview" : "College overview"}<span>{expanded === college.id ? "−" : "↗"}</span></button>}</div>
        </article>)}</div> : <div className="college-no-results"><span>⌕</span><h3>No colleges found</h3><p>Try a different name, neighbourhood or study area.</p><button type="button" onClick={() => { setSearch(""); setArea("All areas"); }}>Show all colleges</button></div>}
        <div className="college-directory-footnote"><span>FEE DATA NOTE</span><p>Profiles with fee tables reflect the brochures supplied for their stated academic year and student category. Charges and offerings can change; confirm the latest details before applying. This directory is not a ranking or complete catalogue.</p></div>
      </div>
    </section>
    <section className="college-directory-cta"><div className="container"><p className="section-kicker">Need a little direction?</p><div><h2>Let’s make your next step clearer.</h2><a className="button button-coral" href="/contact">Talk to an advisor <span>↗</span></a></div></div></section>
  </main>;
}
