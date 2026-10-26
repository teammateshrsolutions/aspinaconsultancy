"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { courses } from "@/lib/site-data";
import Photo from "@/components/PhotoTile";
import Reveal from "@/components/Reveal";

type Stage = "After 10th" | "After 12th" | "After graduation";
const groups: Record<string, string> = {
  engineering: "Technology",
  "medical-allied-health": "Health",
  management: "Business",
  law: "Law & society",
  "arts-science": "Arts & science",
  "information-technology": "Technology",
  "design-media": "Creative",
  "professional-courses": "Professional",
};
const filters = ["All areas", "Technology", "Health", "Business", "Law & society", "Arts & science", "Creative", "Professional"];
const stages: Stage[] = ["After 10th", "After 12th", "After graduation"];
const photos = ["study", "library", "campus"] as const;

export default function CourseBrowser() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All areas");
  const [stage, setStage] = useState<Stage>("After 12th");
  const visibleCourses = useMemo(() => {
    const search = query.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesText = `${course.title} ${course.short} ${course.subjects.join(" ")}`.toLowerCase().includes(search);
      const matchesGroup = filter === "All areas" || groups[course.slug] === filter;
      return matchesText && matchesGroup;
    });
  }, [query, filter]);

  return <>
    <div className="study-stage-picker" role="group" aria-label="Choose your study stage">
      {stages.map((item) => <button key={item} type="button" className={stage === item ? "is-active" : ""} aria-pressed={stage === item} onClick={() => setStage(item)}><span>{item}</span><i aria-hidden="true">↗</i></button>)}
    </div>
    {stage === "After 10th" ? <div className="after-tenth-panel"><div><p className="section-kicker">Your next study stage</p><h3>First, explore the route that fits.</h3><p>After 10th, students often compare PUC subject combinations, diploma and vocational routes. Start with your interests, then confirm available options and eligibility with the relevant board or institution.</p></div><Link href="/career-guidance" className="text-link">Explore guidance for your next step <span aria-hidden="true">↗</span></Link></div> : <>
      <div className="course-browser-tools">
        <label className="course-search"><span aria-hidden="true">⌕</span><span className="sr-only">Search course areas</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a course, subject or specialisation" /></label>
        <p aria-live="polite">{visibleCourses.length} {visibleCourses.length === 1 ? "pathway" : "pathways"} to explore</p>
      </div>
      <div className="course-filters" role="group" aria-label="Filter course pathways">{filters.map((item) => <button type="button" key={item} className={filter === item ? "is-active" : ""} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div>
      {visibleCourses.length ? <div className="course-directory-grid">{visibleCourses.map((course, index) => <Reveal key={course.slug} delay={(index % 4) * 55}><Link href={`/courses/${course.slug}`} className="course-directory-card"><Photo tile={photos[index % photos.length]} label={`${course.title} study pathway`} /><div className="course-directory-card-copy"><p>{groups[course.slug]}</p><h3>{course.title}</h3><span>{course.short}</span><b>Explore pathway <i aria-hidden="true">↗</i></b></div></Link></Reveal>)}</div> : <p className="course-empty">No course areas match that search. Try a broader subject name or choose “All areas”.</p>}
      <p className="course-stage-note">{stage === "After graduation" ? "Postgraduate and professional routes vary by programme. Confirm current eligibility and course details with the institution." : "Course options and eligibility vary by institution. Use official college sources to confirm current information."}</p>
    </>}
  </>;
}
