"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const interests = ["Technology", "Health", "Business", "Creative work", "Law", "Science"] as const;
type Interest = (typeof interests)[number];
const suggestions: Record<Interest, { headline: string; pathways: { title: string; slug: string }[]; note: string }> = {
  Technology: { headline: "Explore how things work—and how to build what’s next.", pathways: [{ title: "Engineering", slug: "engineering" }, { title: "Information Technology", slug: "information-technology" }], note: "Compare technical courses, specialisations and entry requirements." },
  Health: { headline: "Look at study paths that connect science and care.", pathways: [{ title: "Medical & Allied Health", slug: "medical-allied-health" }], note: "Explore course structures and the qualifications each path requires." },
  Business: { headline: "Consider how people, organisations and ideas grow.", pathways: [{ title: "Management", slug: "management" }], note: "Compare undergraduate and professional study options." },
  "Creative work": { headline: "Turn your curiosity into ideas people can see and use.", pathways: [{ title: "Design & Media", slug: "design-media" }], note: "Explore creative disciplines and the ways they are taught." },
  Law: { headline: "Explore how rules, rights and public life shape society.", pathways: [{ title: "Law", slug: "law" }, { title: "Arts & Science", slug: "arts-science" }], note: "Review course options and current eligibility requirements." },
  Science: { headline: "Follow questions about the natural and applied world.", pathways: [{ title: "Arts & Science", slug: "arts-science" }, { title: "Medical & Allied Health", slug: "medical-allied-health" }], note: "Look at subject combinations, specialisations and further study." },
};

export default function CourseFinder() {
  const [level, setLevel] = useState("After 12th");
  const [interest, setInterest] = useState<Interest | null>(null);
  const result = useMemo(() => interest ? suggestions[interest] : null, [interest]);

  return (
    <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
      <div className="max-w-lg"><span className="eyebrow">A useful place to begin</span><h2 className="mt-5">A direction starts with what interests you.</h2><p className="mt-6 text-base leading-8 text-[var(--muted)]">Choose a study stage and an area you’re curious about. You’ll get a few broad starting points to explore—then you can go deeper with a counsellor.</p><p className="mt-7 text-xs font-semibold uppercase tracking-[.15em] text-[#8993A7]">A guide to explore, not an eligibility decision</p></div>
      <div className="rounded-[28px] border border-[var(--line)] bg-white p-6 shadow-[0_24px_70px_rgb(16_24_43_/_6%)] sm:p-9">
        <label htmlFor="study-level" className="block font-heading text-lg font-bold tracking-[-.04em]">Where are you in your studies?</label>
        <select id="study-level" value={level} onChange={(event) => setLevel(event.target.value)} className="mt-4 min-h-12 w-full rounded-xl border border-[var(--line)] bg-[var(--paper)] px-4 text-sm font-semibold text-[var(--ink)] outline-none focus:border-[var(--electric)] sm:w-auto sm:min-w-[230px]">
          {["After 10th", "After 12th", "Graduate"].map((item) => <option key={item}>{item}</option>)}
        </select>
        <fieldset className="mt-8"><legend className="font-heading text-lg font-bold tracking-[-.04em]">What would you like to explore?</legend><div className="mt-4 flex flex-wrap gap-2">{interests.map((item) => <button key={item} type="button" aria-pressed={interest === item} onClick={() => setInterest(item)} className="course-chip" ><span className="text-[#FCA423]" aria-hidden="true">✳</span>{item}</button>)}</div></fieldset>
        <div className="mt-8 min-h-40 rounded-2xl bg-[#FFFFFF] p-5 sm:p-6" aria-live="polite">
          {result ? <><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#023760]">A starting point · {level}</p><h3 className="mt-3 max-w-xl text-[1.45rem]">{result.headline}</h3><div className="mt-4 flex flex-wrap gap-2">{result.pathways.map((pathway) => <Link key={pathway.slug} href={`/courses/${pathway.slug}`} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#023760] transition-colors hover:bg-[#FFFFFF]">{pathway.title} <span aria-hidden="true">↗</span></Link>)}</div><p className="mb-0 mt-4 text-sm leading-6 text-[var(--muted)]">{result.note}</p></> : <div className="flex min-h-28 items-center text-sm leading-6 text-[var(--muted)]">Select an area that interests you to see a few pathways to look into.</div>}
        </div>
      </div>
    </div>
  );
}
