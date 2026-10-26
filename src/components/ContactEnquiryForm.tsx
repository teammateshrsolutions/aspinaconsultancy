"use client";

import { useState, type FormEvent } from "react";

export default function ContactEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return <div className="contact-form-card">
    <div className="contact-form-heading">
      <p className="section-kicker">Your enquiry</p>
      <h2>Tell us what you’re exploring.</h2>
      <p>Fill in a few details to shape the conversation.</p>
    </div>
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-fields-grid">
        <label className="contact-field">Name <span aria-hidden="true">*</span><input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
        <label className="contact-field">Email <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" placeholder="Your email address" required /></label>
        <label className="contact-field">Study stage <span aria-hidden="true">*</span><select name="studyStage" defaultValue="" required><option value="" disabled>Select your study stage</option><option>Class 10 or below</option><option>Class 11 or 12</option><option>Completed Class 12</option><option>Currently in college</option><option>Graduated</option><option>Parent or guardian</option><option>Other</option></select></label>
        <label className="contact-field">Topic <span aria-hidden="true">*</span><select name="topic" defaultValue="" required><option value="" disabled>Select a topic</option><option>Course selection</option><option>College options</option><option>Admission information</option><option>Career direction</option><option>Something else</option></select></label>
        <label className="contact-field contact-field-full">Message <span aria-hidden="true">*</span><textarea name="message" rows={4} placeholder="Tell us a little about your interests, questions or what you’re looking for guidance on." required /></label>
      </div>
      <button className="button button-coral contact-submit" type="submit">Send enquiry <span aria-hidden="true">↗</span></button>
      <p className={`contact-form-status${submitted ? " is-submitted" : ""}`} role="status" aria-live="polite">
        {submitted ? "This form is a preview and isn’t connected yet, so your message has not been sent." : "Preview only · Enquiry submissions are not connected yet."}
      </p>
    </form>
  </div>;
}
