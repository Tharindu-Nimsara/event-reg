import React from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";

const RulesPage = () => {
  return (
    <main className="page-shell">
      <section className="hero-panel" style={{ minHeight: "56vh" }}>
        <NavBar />
        <div className="hero-content reveal-up">
          <p className="eyebrow">HackathonX Guidelines</p>
          <h1>
            EVENT
            <span>Ground</span>
            <em>Rules</em>
          </h1>
          <p className="hero-copy">
            Review the key requirements before submitting your team application.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="card-grid two-col">
          <article className="info-card">
            <h3>Team Composition</h3>
            <p>
              Each team must include 2 to 5 active undergraduate students from a
              recognized institution.
            </p>
          </article>
          <article className="info-card">
            <h3>Originality</h3>
            <p>
              All submitted ideas must be your own work and must not infringe
              existing intellectual property.
            </p>
          </article>
          <article className="info-card">
            <h3>Pitch Standards</h3>
            <p>
              Final pitch decks should clearly define problem, solution,
              business model, and validation evidence.
            </p>
          </article>
          <article className="info-card">
            <h3>Code of Conduct</h3>
            <p>
              Teams must maintain respectful behavior during all mentorship
              sessions and event activities.
            </p>
          </article>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <Link href="/" className="outline-btn">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default RulesPage;
