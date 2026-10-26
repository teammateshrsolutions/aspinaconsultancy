"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { courses } from "@/lib/site-data";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Courses", "/courses"],
  ["Admissions", "/admissions"],
  ["Colleges", "/colleges"],
  ["Blog", "/guides"],
  ["Contact Us", "/contact"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const coursesMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isCurrentPage = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    setCoursesOpen(false);
    setMobileCoursesOpen(false);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!coursesOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!coursesMenuRef.current?.contains(event.target as Node)) setCoursesOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setCoursesOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [coursesOpen]);

  return <header className="site-header">
    <div className="container flex min-h-[78px] items-center justify-between gap-6">
      <Link href="/" aria-label="ASPIN home" className="header-brand-link shrink-0" onClick={() => setOpen(false)}>
        <Image src="/aspin-education-consultancy-logo.jpeg" alt="ASPIN Education Consultancy" width={210} height={74} priority className="brand-logo-image header-brand-logo" />
      </Link>

      <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
        {links.map(([label, href]) => label === "Courses" ? <div className="courses-nav-item" key={href} ref={coursesMenuRef}>
          <button type="button" className={`courses-nav-trigger ${isCurrentPage(href) ? "is-current" : ""}`} aria-expanded={coursesOpen} aria-controls="courses-mega-panel" onClick={() => setCoursesOpen((value) => !value)}>
            Courses <svg className={`courses-nav-chevron ${coursesOpen ? "is-open" : ""}`} aria-hidden="true" viewBox="0 0 16 16" fill="none"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          {coursesOpen && <>
            <button className="courses-mega-backdrop" type="button" aria-label="Close courses menu" onClick={() => setCoursesOpen(false)} />
            <div className="courses-mega-panel" id="courses-mega-panel" aria-label="Explore course areas">
              <div className="courses-mega-intro">
                <p className="courses-mega-eyebrow">Explore courses</p>
                <h2>Find a direction that feels right.</h2>
                <p>Browse study areas, compare pathways, and decide what you’d like to learn more about.</p>
                <Link href="/courses" className="courses-mega-all">View all courses <span aria-hidden="true">↗</span></Link>
              </div>
              <div className="courses-mega-list" aria-label="Course categories">
                {courses.map((course) => <Link key={course.slug} href={`/courses/${course.slug}`} className="courses-mega-link">
                  <span className="courses-mega-link-icon" aria-hidden="true">↗</span>
                  <span><strong>{course.title}</strong><small>{course.short}</small></span>
                </Link>)}
              </div>
              <aside className="courses-mega-feature">
                <span className="courses-mega-feature-mark" aria-hidden="true">✳</span>
                <p className="courses-mega-eyebrow">Not sure where to begin?</p>
                <h3>Start with your study stage.</h3>
                <p>See course areas based on where you are in your education.</p>
                <Link href="/courses#course-explorer">Explore by stage <span aria-hidden="true">↗</span></Link>
                <Link href="/career-guidance">Talk through your options <span aria-hidden="true">↗</span></Link>
              </aside>
            </div>
          </>}
        </div> : <Link key={href} href={href} aria-current={isCurrentPage(href) ? "page" : undefined} className={`whitespace-nowrap text-[13px] font-semibold transition-colors hover:text-[#FF623F] ${isCurrentPage(href) ? "text-[#FF8064]" : "text-white/80"}`}>{label}</Link>)}
      </nav>

      <Link href="/contact" className="button button-coral header-desktop-cta min-h-[44px] px-5 text-xs">Get started <span className="button-arrow" aria-hidden="true">↗</span></Link>
      <button type="button" className="mobile-menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <span className="text-xl" aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>
    </div>

    {open && <nav aria-label="Mobile navigation" className="mobile-menu"><div className="flex flex-col">
      {links.map(([label, href]) => label === "Courses" ? <div className="mobile-courses-group" key={href}>
        <button type="button" className="mobile-courses-toggle" aria-expanded={mobileCoursesOpen} onClick={() => setMobileCoursesOpen((value) => !value)}>
          Courses <span aria-hidden="true">{mobileCoursesOpen ? "−" : "+"}</span>
        </button>
        {mobileCoursesOpen && <div className="mobile-courses-list">
          <Link href="/courses" onClick={() => setOpen(false)} className="mobile-course-all">View all courses ↗</Link>
          {courses.map((course) => <Link key={course.slug} href={`/courses/${course.slug}`} onClick={() => setOpen(false)}>{course.title}</Link>)}
          <Link href="/courses#course-explorer" onClick={() => setOpen(false)}>Explore by study stage ↗</Link>
        </div>}
      </div> : <Link key={href} href={href} aria-current={isCurrentPage(href) ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link href="/contact" onClick={() => setOpen(false)} className="button button-coral mt-4">Get started <span aria-hidden="true">↗</span></Link>
    </div></nav>}
  </header>;
}
