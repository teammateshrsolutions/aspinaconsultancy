import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import { guides } from "@/lib/site-data";
export const metadata = { title: "Student Guides", description: "Practical guides for choosing courses, comparing colleges and preparing questions." };
export default function GuidesPage() { return <ContentPage eyebrow="ASPIN guides" title="Useful questions for your next decision." intro="Short, practical starting points for course research, college comparison and application planning."><div className="grid gap-5 md:grid-cols-3">{guides.map((g) => <Link key={g.slug} href={`/guides/${g.slug}`} className="course-option flex min-h-64 flex-col p-7"><span className="text-xs font-bold uppercase tracking-widest text-[#FCA423]">{g.category}</span><h2 className="mt-7 text-2xl">{g.title}</h2><p className="mt-3 text-sm leading-7 text-[var(--muted)]">{g.intro}</p><span className="mt-auto pt-5 text-sm font-bold">Read guide →</span></Link>)}</div></ContentPage>; }
