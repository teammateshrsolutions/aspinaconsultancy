import Link from "next/link";
import Image from "next/image";
import { courses } from "@/lib/site-data";

const quickLinks = [["Home", "/"], ["About", "/about"], ["Admissions 2026–27", "/admissions"], ["Colleges", "/colleges"], ["Blog", "/guides"], ["Contact Us", "/contact"]];

function ContactMark({ kind }: { kind: "pin" | "phone" | "email" }) {
  const paths = {
    pin: <><path d="M19 10c0 5-7 12-7 12S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/></>,
    phone: <path d="M7 3h3l2 5-2 2a15 15 0 0 0 4 4l2-2 5 2v3c0 1-1 2-2 2C10 18 6 14 4 5c0-1 1-2 3-2Z"/>,
    email: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[kind]}</svg>;
}

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-invite"><div className="container footer-invite-inner"><div><p className="section-kicker">Your next step, made clearer</p><h2>Have a question about your options?</h2></div><Link href="/contact" className="button button-primary">Talk with ASPIN <span aria-hidden="true">↗</span></Link></div></div>
    <div className="container footer-main">
      <div className="footer-brand"><Link href="/" aria-label="ASPIN home" className="footer-wordmark"><Image src="/aspin-education-consultancy-logo.jpeg" alt="ASPIN Education Consultancy" width={250} height={88} className="brand-logo-image footer-brand-logo" /></Link><p>Thoughtful course and college guidance for students exploring what comes next.</p></div>
      <nav aria-label="Quick links"><h2>Quick links</h2><ul>{quickLinks.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul></nav>
      <nav aria-label="Courses"><h2>Courses</h2><ul>{courses.map((course) => <li key={course.slug}><Link href={`/courses/${course.slug}`}>{course.title}</Link></li>)}</ul></nav>
      <address className="footer-contact"><h2>Contact info</h2><ul>
        <li><span className="footer-contact-icon"><ContactMark kind="pin" /></span><span>#2065, 3rd Stage, 16th “B” Cross,<br />Mother Dairy Cross, Yelahanka New Town,<br />Bangalore - 560064</span></li>
        <li><span className="footer-contact-icon"><ContactMark kind="phone" /></span><a href="tel:+916360812255">+91 63608 12255</a></li>
        <li><span className="footer-contact-icon"><ContactMark kind="email" /></span><a href="mailto:info@aspin.in">info@aspin.in</a></li>
      </ul><Link href="/contact" className="footer-contact-link">Contact ASPIN <span aria-hidden="true">↗</span></Link></address>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} ASPIN Education Consultancy. All rights reserved.</span><div><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></div></div>
  </footer>;
}
