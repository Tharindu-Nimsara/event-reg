import Link from "next/link";
import React from "react";
import NavBar from "../components/NavBar";

const DelegateBook = () => {
  return (
    <main className="page-shell">
      <section className="hero-panel" style={{ minHeight: "56vh" }}>
        <NavBar />
        <div className="hero-content reveal-up">
          <p className="eyebrow">HackathonX Resources</p>
          <h1>
            DELEGATE
            <span>Event</span>
            <em>Booklet</em>
          </h1>
          <p className="hero-copy">
            Everything you need to prepare for submission, mentorship rounds,
            and the final stage.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="card-grid two-col">
          <article className="info-card">
            <h3>Inside This Booklet</h3>
            <p>
              Judging criteria, deliverable checklist, pitch flow, and on-site
              schedule details.
            </p>
          </article>
          <article className="info-card">
            <h3>Need the PDF?</h3>
            <p>
              The final printable booklet will be shared with shortlisted teams
              via email.
            </p>
          </article>
        </div>
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          <Link href="#" className="solid-btn">
            Download Preview
          </Link>
          <Link href="/" className="outline-btn">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default DelegateBook;
