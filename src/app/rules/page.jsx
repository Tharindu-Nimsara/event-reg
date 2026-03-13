"use client";

import React, { useState } from "react";
import Link from "next/link";
import "../components/navbar.css";
import "./rules.css";

const rulesData = [
  {
    id: 1,
    title: "Team Composition & Eligibility",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    details: [
      "Teams must consist of 3-5 members, all from the same university.",
      "Each individual may register in only one team.",
      "All members must provide their NIC number.",
      "All student members should provide their university student number.",
      "Finalists of past editions cannot take part in this edition.",
    ],
  },
  {
    id: 2,
    title: "Team Registration & Modification",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
    details: [
      "Team registration must be completed before the deadline.",
      "Team name modifications are allowed until registration closes.",
      "Member changes require approval from event organizers.",
      "Teams must verify all information before final submission.",
    ],
  },
  {
    id: 3,
    title: "Compliance with Event Guidelines",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    details: [
      "All participants must comply with the following directives.",
      "Non-compliance will initiate disqualification protocols.",
      "Teams must attend all mandatory briefing sessions.",
      "Safety and security protocols must be followed at all times.",
    ],
  },
  {
    id: 4,
    title: "Code of Conduct",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    details: [
      "Maintain professional and respectful behavior at all times.",
      "No plagiarism or intellectual property violations.",
      "Collaboration between teams is strictly prohibited.",
      "Any form of cheating will result in immediate disqualification.",
    ],
  },
  {
    id: 5,
    title: "Data Protection & Confidentiality",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    details: [
      "All personal data will be handled according to privacy regulations.",
      "Project ideas and code must remain confidential until final presentation.",
      "Organizers reserve the right to use project demos for promotional purposes.",
      "Participants must not share sensitive competition information publicly.",
    ],
  },
  {
    id: 6,
    title: "Disqualification & Appeals",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    details: [
      "Violation of any rule may result in immediate disqualification.",
      "Teams have the right to appeal decisions within 24 hours.",
      "Final decisions rest with the organizing committee.",
      "Disqualified teams forfeit all prizes and recognition.",
    ],
  },
];

const RulesPage = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <main className="rules-page min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="event-nav-wrap fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md md:px-12">
        <Link
          href="/"
          className="brand-mark font-[var(--font-display)] text-[1.1rem] tracking-[0.12em] text-white transition hover:text-[#16A34A]"
        >
          HACKATHONX
        </Link>
        <div className="nav-links hidden gap-5 text-[0.65rem] tracking-[0.15em] md:flex">
          <Link href="/#about">ABOUT</Link>
          <Link href="/#timeline">TIMELINE</Link>
          <Link href="/rules" className="text-[#16A34A]">
            RULES
          </Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/#contact">CONTACT</Link>
        </div>
        <Link
          href="/delegate-book"
          className="solid-btn hidden md:inline-block"
        >
          DELEGATE BOOK
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5 px-4 pb-16 pt-32 md:px-12 md:pb-20 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(22,163,74,0.08),transparent_50%)]" />

        {/* Stats Panel */}
        <div className="relative mx-auto mb-12 grid max-w-[800px] grid-cols-3 gap-4 rounded-sm border border-[#16A34A]/20 bg-gradient-to-r from-[rgba(22,163,74,0.08)] to-transparent p-6 text-center md:mb-16">
          <div>
            <div className="font-[var(--font-display)] text-[2rem] text-[#16A34A] md:text-[2.8rem]">
              06
            </div>
            <div className="mt-1 text-[0.52rem] tracking-[0.2em] text-white/50 md:text-[0.58rem]">
              ESSENTIAL PROTOCOLS
            </div>
          </div>
          <div>
            <div className="font-[var(--font-display)] text-[2rem] text-[#16A34A] md:text-[2.8rem]">
              18
            </div>
            <div className="mt-1 text-[0.52rem] tracking-[0.2em] text-white/50 md:text-[0.58rem]">
              TOTAL GUIDELINES
            </div>
          </div>
          <div>
            <div className="font-[var(--font-display)] text-[2rem] text-[#16A34A] md:text-[2.8rem]">
              V11
            </div>
            <div className="mt-1 text-[0.52rem] tracking-[0.2em] text-white/50 md:text-[0.58rem]">
              EDITION
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="relative text-center">
          <div className="mb-3 text-[0.52rem] tracking-[0.28em] text-[#16A34A]">
            • PROTOCOL OVERVIEW // V.11.0
          </div>
          <h1 className="m-0 leading-none">
            <span
              className="block font-[var(--font-display)] text-[clamp(2.5rem,8vw,5rem)] tracking-[0.02em] text-white"
              style={{ textShadow: "0 0 1px rgba(255,255,255,0.3)" }}
            >
              RULES &
            </span>
            <span className="block font-[var(--font-serif)] text-[clamp(2.2rem,7vw,4.5rem)] italic text-white">
              Regulations<span className="text-[#16A34A]">_</span>
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-[600px] text-[0.6rem] leading-[1.9] text-white/50">
            All participants must comply with the following directives.
            <br />
            Non-compliance will initiate disqualification protocols.
          </p>
        </div>
      </section>

      {/* Rules Accordion */}
      <section className="px-4 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-[750px] space-y-3">
          {rulesData.map((rule) => (
            <div
              key={rule.id}
              className="rule-card group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[rgba(15,15,15,0.95)] to-[rgba(8,8,8,0.95)] transition-all duration-300"
              onMouseEnter={() => setExpandedCard(rule.id)}
              onMouseLeave={() => setExpandedCard(null)}
            >
              <div className="flex items-center justify-between p-3 md:p-4">
                <div className="flex items-center gap-3">
                  <div className="rule-number font-[var(--font-display)] text-[1rem] text-[#16A34A] md:text-[1.2rem]">
                    {String(rule.id).padStart(2, "0")}
                  </div>
                  <div className="rule-icon flex h-8 w-8 items-center justify-center rounded-full border border-[#16A34A]/30 bg-[rgba(22,163,74,0.08)] text-[#16A34A] transition-all duration-300 group-hover:border-[#16A34A]/60 group-hover:bg-[rgba(22,163,74,0.15)] group-hover:shadow-[0_0_20px_rgba(22,163,74,0.2)]">
                    {rule.icon}
                  </div>
                  <h3 className="m-0 font-[var(--font-display)] text-[0.72rem] tracking-[0.08em] text-white md:text-[0.85rem]">
                    {rule.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  <button className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/40 transition-all hover:border-[#16A34A]/40 hover:bg-[#16A34A]/10 hover:text-[#16A34A]">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Expanded Content */}
              <div
                className="rule-details overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: expandedCard === rule.id ? "350px" : "0",
                  opacity: expandedCard === rule.id ? 1 : 0,
                }}
              >
                <div className="border-t border-[#16A34A]/15 bg-gradient-to-b from-transparent to-[rgba(22,163,74,0.03)] px-4 pb-4 pt-3 md:px-5">
                  <ul className="space-y-2">
                    {rule.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2.5 text-[0.56rem] leading-[1.7] text-white/65"
                      >
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#16A34A]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-4 py-8 text-center">
        <div className="mx-auto flex max-w-[900px] flex-col items-center justify-between gap-4 text-[0.58rem] tracking-[0.15em] text-white/40 md:flex-row">
          <div>
            HACKATHONX <span className="text-white/25">—</span> 2026 BY
            UNIVERSITY OF X
          </div>
          <Link href="/" className="transition hover:text-[#16A34A]">
            ← BACK TO MAIN PAGE
          </Link>
          <div>ALL RIGHTS RESERVED</div>
        </div>
      </footer>
    </main>
  );
};

export default RulesPage;
