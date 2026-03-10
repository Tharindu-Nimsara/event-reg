"use client";

import Link from "next/link";
import React from "react";
import "./delegate-book.css";

const DelegateBook = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-4 pb-8 pt-5 text-white md:px-6">
      <div className="delegate-noise pointer-events-none absolute inset-0 opacity-55" />
      <div className="delegate-vignette pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-[980px]">
        <header className="mb-12 flex items-center justify-between border-b border-white/10 pb-4 text-[0.58rem] tracking-[0.18em] text-white/55 md:mb-16">
          <Link href="/" className="transition hover:text-white">
            &lt; HOME_TERMINAL
          </Link>
          <div className="hidden items-center gap-2 md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A] shadow-[0_0_10px_rgba(22,163,74,0.75)]" />
            <span>NODE: ONLINE</span>
          </div>
          <span className="font-[var(--font-display)] text-[1rem] tracking-[0.09em] text-white">
            HACKATHONX
          </span>
        </header>

        <section className="mx-auto max-w-[620px] text-center">
          <p className="text-[0.56rem] tracking-[0.28em] text-[#16A34A]">
            SECURE RESOURCE GATEWAY
          </p>

          <h1 className="mt-3 leading-none">
            <span className="block font-[var(--font-display)] text-[clamp(3rem,8vw,5.6rem)] text-white/18 [text-shadow:0_0_1px_rgba(255,255,255,0.45)]">
              DELEGATE
            </span>
            <span className="delegate-booklet-line block font-[var(--font-serif)] text-[clamp(2.7rem,7vw,5rem)] italic text-white">
              Booklet
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-[500px] text-[0.6rem] leading-[1.9] tracking-[0.13em] text-white/55">
            Access the official HackathonX delegate handbook with submission
            milestones, judging rubrics, and final-round logistics for all
            shortlisted teams.
          </p>

          <div className="mx-auto mt-9 grid max-w-[580px] grid-cols-3 rounded-sm border border-[#16A34A]/30 bg-[linear-gradient(90deg,rgba(22,163,74,0.12),rgba(22,163,74,0.03))] p-4 text-center">
            <div>
              <div className="font-[var(--font-display)] text-2xl text-[#16A34A]">
                01
              </div>
              <div className="mt-1 text-[0.5rem] tracking-[0.2em] text-white/45">
                DOCUMENT
              </div>
            </div>
            <div className="border-x border-[#16A34A]/30">
              <div className="font-[var(--font-display)] text-2xl text-[#16A34A]">
                VX1
              </div>
              <div className="mt-1 text-[0.5rem] tracking-[0.2em] text-white/45">
                REVISION
              </div>
            </div>
            <div>
              <div className="font-[var(--font-display)] text-2xl text-[#16A34A]">
                24
              </div>
              <div className="mt-1 text-[0.5rem] tracking-[0.2em] text-white/45">
                PAGES
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-[760px] rounded-md border border-[#16A34A]/20 bg-[rgba(9,17,12,0.68)] p-4 shadow-[0_0_40px_rgba(22,163,74,0.12)] md:p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-[0.56rem] tracking-[0.18em] text-white/55">
              <span className="text-[#16A34A]">+</span>
              <span>CORE RESOURCE PACK</span>
            </div>
            <a
              href="#"
              className="rounded-sm border border-[#16A34A]/50 bg-[#16A34A]/15 px-4 py-2 text-[0.56rem] tracking-[0.18em] text-[#84f8ae] transition hover:bg-[#16A34A]/25"
            >
              DOWNLOAD
            </a>
          </div>

          <article className="rounded-sm border border-white/10 bg-black/70 p-3 md:p-4">
            <img
              src="https://picsum.photos/1200/740?technology,event"
              alt="HackathonX delegate booklet preview"
              className="h-auto w-full rounded-sm border border-[#16A34A]/25 object-cover"
            />
          </article>
        </section>

        <footer className="mt-10 border-t border-white/10 pt-4 text-center text-[0.5rem] tracking-[0.19em] text-white/40">
          COPYRIGHT 2026 | IEEE SB UNNIVERSITY OF X | ALL RIGHTS RESERVED
        </footer>
      </div>
    </main>
  );
};

export default DelegateBook;
