"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import "./page.css";
import Link from "next/link";

const timelineItems = [
  {
    date: "15TH FEBRUARY",
    title: "REGISTRATIONS OPEN",
    desc: "TEAM SIGN-UPS, CONCEPT SUBMISSIONS, AND PARTICIPANT QUALIFICATION COMMENCE.",
  },
  {
    date: "4TH MARCH - 15TH MARCH",
    title: "ENVISION PHASE",
    desc: "PARTICIPANTS PRESENT CHALLENGE ASSESSMENTS, TARGET AUDIENCE RESEARCH, AND INITIAL DESIGN CONCEPTS.",
  },
  {
    date: "20TH MARCH - 20TH MAY",
    title: "EXECUTION PHASE",
    desc: "GUIDED SUPPORT, CONTINUOUS PROTOTYPE DEVELOPMENT, AND CATEGORY-SPECIFIC MILESTONE EVALUATIONS.",
  },
  {
    date: "5TH JUNE",
    title: "GRAND FINALE",
    desc: "IN-PERSON DEMONSTRATIONS, CLOSING PRESENTATIONS, AND RECOGNITION CEREMONY BEFORE EXPERT JUDGES.",
  },
];

const faqs = [
  {
    q: "WHAT IS HACKATHONX?",
    a: "HACKATHONX IS A TECHNOLOGY ENTREPRENEURSHIP CHALLENGE WHERE STUDENT GROUPS DEVELOP, TEST, AND PRESENT GROUNDBREAKING SOLUTIONS.",
  },
  {
    q: "WHO CAN PARTICIPATE?",
    a: "UNIVERSITY UNDERGRADUATES FROM ACCREDITED INSTITUTIONS MAY JOIN IN GROUPS RANGING FROM 2 TO 5 PARTICIPANTS.",
  },
  {
    q: "WHAT ARE THE COMPETITION TRACKS?",
    a: "CATEGORIES CONSIST OF PLATFORMS, INTELLIGENCE, AND HARDWARE & SECURITY, EACH WITH SPECIALIZED PROBLEM STATEMENTS.",
  },
  {
    q: "HOW DOES THE COMPETITION PROGRESS?",
    a: "THE EVENT PROCEEDS THROUGH SIGN-UP, PLANNING, BUILDING, AND CULMINATES IN A LIVE FINALE WITH PANEL JUDGING.",
  },
  {
    q: "WHEN DO REGISTRATIONS OPEN?",
    a: "SIGN-UPS BEGIN ON FEBRUARY 15TH VIA THE OFFICIAL COMPETITION WEBSITE.",
  },
  {
    q: "IS THERE A REGISTRATION FEE?",
    a: "NO. ENTRY IS COMPLETELY FREE FOR QUALIFYING STUDENT GROUPS.",
  },
  {
    q: "WHAT DO WINNERS RECEIVE?",
    a: "VICTORS ARE AWARDED MONETARY PRIZES, PROFESSIONAL GUIDANCE, PUBLIC RECOGNITION, AND POTENTIAL STARTUP ACCELERATION OPPORTUNITIES.",
  },
];

const contacts = [
  {
    name: "THARINDU NIMSARA",
    role: "EVENT CHAIR",
    phone: "+94 77 111 2222",
    email: "tharindu@hackathonx.lk",
    img: "/images/head-shot1.jpg",
  },
  {
    name: "AMAYA PERERA",
    role: "OPERATIONS LEAD",
    phone: "+94 77 333 4444",
    email: "amaya@hackathonx.lk",
    img: "/images/head-shot2.webp",
  },
  {
    name: "HESHAN SILVA",
    role: "TECH LEAD",
    phone: "+94 77 555 6666",
    email: "heshan@hackathonx.lk",
    img: "/images/head-shot3.jpg",
  },
  {
    name: "NETHMI FERNANDO",
    role: "PARTNERSHIP LEAD",
    phone: "+94 77 777 8888",
    email: "nethmi@hackathonx.lk",
    img: "/images/head-shot4.jpg",
  },
];

const gallery = [
  "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
  "https://images.pexels.com/photos/8345975/pexels-photo-8345975.jpeg",
  "https://images.pexels.com/photos/2774566/pexels-photo-2774566.jpeg",
  "https://images.pexels.com/photos/15470542/pexels-photo-15470542.jpeg",
  "https://images.pexels.com/photos/15448073/pexels-photo-15448073.jpeg",
  "https://images.pexels.com/photos/20044375/pexels-photo-20044375.jpeg",
  "https://images.pexels.com/photos/28683719/pexels-photo-28683719.jpeg",
  "https://images.pexels.com/photos/6805146/pexels-photo-6805146.jpeg",
  // "https://images.pexels.com/photos/18999471/pexels-photo-18999471.jpeg",
  // "https://images.pexels.com/photos/4940642/pexels-photo-4940642.jpeg",
];

const stats = [
  { value: 1200000, label: "PRIZEPOOL", suffix: "+", prefix: "" },
  { value: 29, label: "UNIVERSITIES", suffix: "+", prefix: "" },
  { value: 620, label: "TEAMS", suffix: "+", prefix: "" },
  { value: 2750, label: "DELEGATES", suffix: "+", prefix: "" },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(-1);
  const [activeSlide, setActiveSlide] = useState(0);
  const [counters, setCounters] = useState(stats.map(() => 0));

  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const statsRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const dragRef = useRef({ isDown: false, startX: 0, startLeft: 0 });

  const sectionClass =
    "section-reveal border-t border-white/5 px-4 py-16 md:px-12 md:py-24";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observed = document.querySelectorAll(
      "[data-reveal], [data-timeline]",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 },
    );

    observed.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsRef.current) return;
    let raf;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            const start = performance.now();
            const duration = 2000;

            const tick = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - (1 - progress) ** 3;
              setCounters(stats.map((stat) => Math.floor(stat.value * eased)));
              if (progress < 1) {
                raf = requestAnimationFrame(tick);
              } else {
                setCounters(stats.map((stat) => stat.value));
              }
            };

            raf = requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(statsRef.current);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  const updateSlide = useMemo(
    () => () => {
      if (!galleryRef.current) return;
      const track = galleryRef.current;
      const first = track.firstElementChild;
      if (!first) return;
      const cardWidth = first.getBoundingClientRect().width + 16;
      const index = Math.round(track.scrollLeft / cardWidth);
      setActiveSlide(index);
    },
    [],
  );

  useEffect(() => {
    const track = galleryRef.current;
    if (!track) return;
    updateSlide();
    track.addEventListener("scroll", updateSlide, { passive: true });
    return () => track.removeEventListener("scroll", updateSlide);
  }, [updateSlide]);

  const scrollGallery = (dir) => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  const beginDrag = (pageX) => {
    if (!galleryRef.current) return;
    galleryRef.current.style.scrollBehavior = "auto";
    dragRef.current = {
      isDown: true,
      startX: pageX,
      startLeft: galleryRef.current.scrollLeft,
    };
  };

  const moveDrag = (pageX) => {
    if (!galleryRef.current || !dragRef.current.isDown) return;
    const walk = pageX - dragRef.current.startX;
    galleryRef.current.scrollLeft = dragRef.current.startLeft - walk;
  };

  const endDrag = () => {
    dragRef.current.isDown = false;
    if (galleryRef.current) {
      galleryRef.current.style.scrollBehavior = "smooth";
    }
  };

  const beginTouchDrag = (touches) => {
    if (!touches?.[0]) return;
    beginDrag(touches[0].pageX);
  };

  const moveTouchDrag = (touches) => {
    if (!touches?.[0]) return;
    moveDrag(touches[0].pageX);
  };

  return (
    <main className="relative overflow-x-hidden bg-black text-white">
      <div
        className={`fixed inset-0 z-[999] grid place-items-center bg-black transition-all duration-700 ${
          isLoading ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="font-[var(--font-display)] text-[clamp(2rem,9vw,5rem)] tracking-[0.12em]">
          HACKATHON<span className="text-[#16A34A]">X</span>
        </div>
      </div>

      <header className="fixed inset-x-0 top-0 z-50 px-4 py-3 md:px-6 md:py-4">
        <nav className="mx-auto grid w-full max-w-[1120px] grid-cols-[1fr_auto] items-center gap-3 rounded-md border border-white/10 bg-black/45 px-3 py-2 backdrop-blur-sm md:grid-cols-[auto_1fr_auto] md:gap-4 md:px-4">
          <a
            href="#top"
            className="font-[var(--font-display)] text-[1.45rem] tracking-[0.09em] md:text-2xl"
          >
            HACKATHON<span className="text-[#16A34A]">X</span>
          </a>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-white/10 text-xl md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            =
          </button>

          <div
            className={`col-span-2 items-center justify-center gap-2 text-[0.62rem] font-medium tracking-[0.16em] md:col-span-1 md:flex md:text-[0.66rem] md:tracking-[0.18em] ${
              mobileOpen
                ? "flex flex-wrap justify-start border-t border-white/10 pt-3 md:border-t-0 md:pt-0"
                : "hidden"
            }`}
          >
            <a href="/rules">RULES</a>
            <span className="text-white/35">.</span>
            <a href="#timeline">TIMELINE</a>
            <span className="text-white/35">.</span>
            <a href="#contact">CONTACT</a>
            <span className="text-white/35">.</span>
            <a href="#faq">FAQ</a>
          </div>

          <div
            className={`col-span-2 items-center gap-2 md:col-span-1 md:flex ${
              mobileOpen
                ? "flex flex-wrap border-t border-white/10 pt-3 md:border-t-0 md:pt-0"
                : "hidden"
            }`}
          >
            <a
              href="/delegate-book"
              className="action-btn border border-white/10 px-4 py-2 text-[0.62rem] tracking-[0.12em] md:text-[0.64rem]"
            >
              DELEGATE BOOKLET
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdeTa69Vn1pt0C1IRaBFOkEVkGmnGAms6laVyiL1uu20omPVA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn bg-[#16A34A] px-4 py-2 text-[0.62rem] font-bold tracking-[0.12em] md:text-[0.64rem]"
            >
              REGISTER NOW
            </a>
          </div>
        </nav>
      </header>

      <section
        id="top"
        ref={heroRef}
        className="home-hero relative flex min-h-screen items-end px-4 pb-16 pt-28 md:px-12 md:pb-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.64), rgba(0,0,0,0.78)), url('hero-bg.jpg'), url('https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="ml-2 w-full max-w-[700px] md:ml-8">
          <div className="hero-line mb-3 text-[0.65rem] text-[#16A34A]">
            • HACKATHONX - 2026
          </div>
          <h1 className="m-0 leading-[0.92]">
            <span className="hero-line block font-[var(--font-display)] text-[clamp(2.4rem,9vw,6.5rem)]">
              CODE
            </span>
            <span className="hero-line -ml-[0.09em] block font-[var(--font-serif)] text-[clamp(1.5rem,5vw,3.8rem)] italic opacity-70 tracking-[0.03em]">
              TOMORROW&apos;S
            </span>
            <span className="hero-line -ml-[0.15em] block font-[var(--font-serif)] text-[clamp(2.2rem,7.5vw,5.2rem)] italic text-[#16A34A]">
              TECH
            </span>
          </h1>
          <p className="hero-line mt-7 w-full max-w-[520px] text-[0.62rem] leading-[1.8] text-white/55">
            HACKATHONX IS A TECH STARTUP CHALLENGE FOR UNIVERSITIES, ORGANIZED
            BY THE IEEE STUDENT BRANCH AT UNNIVERSITY OF X. WE COMBINE CREATIVE
            THINKING, BUSINESS ACUMEN, AND REAL-WORLD CONNECTIONS TO EMPOWER
            STUDENT ENTREPRENEURS IN LAUNCHING AMBITIOUS PROJECTS WITH TANGIBLE
            RESULTS.
          </p>
          <br />
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdeTa69Vn1pt0C1IRaBFOkEVkGmnGAms6laVyiL1uu20omPVA/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="solid-btn"
          >
            Register Now
          </Link>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-[0.6rem] text-white/55">
          SCROLL DOWN
          <div className="arrow-bounce mx-auto mt-2 h-4 w-4 rotate-0 border-b-2 border-r-2 border-[#16A34A]" />
        </div>
      </section>

      <section
        ref={statsRef}
        className="stats-section relative flex min-h-screen items-center overflow-hidden border-t border-white/5 px-4 py-20 md:px-12 md:py-28"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.88)), url('https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(22,163,74,0.08),transparent_70%)]" />

        <div className="relative mx-auto max-w-[1400px] text-center">
          <div className="mb-3 text-[0.5rem] tracking-[0.24em] text-[#16A34A]">
            • OUR LEGACY
          </div>
          <h2 className="m-0 leading-none">
            <span className="font-[var(--font-display)] text-[clamp(1.8rem,4.5vw,3.2rem)]">
              THE NUMBERS
            </span>{" "}
            <span className="font-[var(--font-serif)] text-[clamp(1.6rem,4vw,3rem)] italic text-[#16A34A]">
              Speak
            </span>
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-5 md:mt-12 md:grid-cols-4 md:gap-6">
            {stats.map((stat, index) => (
              <div key={stat.label} className="stat-card group">
                <div className="stat-icon mb-4">
                  <div className="stat-icon-inner">
                    {index === 0 && (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg
                        className="h-6 w-6"
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
                    )}
                    {index === 3 && (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="stat-value font-[var(--font-display)] text-[clamp(1.6rem,3.5vw,2.6rem)] leading-none text-white">
                  {stat.prefix}
                  {index === 0
                    ? `${(counters[index] / 1000000).toFixed(1)}M`
                    : counters[index].toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="stat-label mt-2 text-[0.52rem] tracking-[0.18em] text-white/55">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" data-reveal className={sectionClass}>
        <div className="grid items-center gap-8 md:grid-cols-[1.05fr_1fr]">
          <article>
            <div className="mb-4 text-[0.66rem] text-[#16A34A]">
              • ABOUT THE COMPETITION
            </div>
            <h2 className="m-0 leading-none">
              <span className="font-[var(--font-display)] text-[clamp(1.8rem,4.5vw,3.2rem)]">
                STARTUP
              </span>{" "}
              <span className="font-[var(--font-serif)] text-[clamp(1.6rem,4vw,3rem)] italic">
                Tracks
              </span>
            </h2>
            <p className="mt-6 max-w-[550px] text-[0.74rem] leading-[1.9] text-white/55">
              HACKATHONX OFFERS AN INTENSIVE EXPERIENCE FOR DRIVEN INNOVATORS.
              PARTICIPANTS MOVE THROUGH STAGES FROM IDENTIFYING CHALLENGES TO
              TESTING PROTOTYPES, ENGAGING IN GUIDED MENTORING, PITCH
              ASSESSMENTS, AND INVESTOR-GRADE FEEDBACK SESSIONS.
            </p>
          </article>

          <div className="relative min-h-[360px] md:min-h-[540px]">
            <img
              src="https://images.pexels.com/photos/7170771/pexels-photo-7170771.jpeg"
              alt="Astronaut child artwork"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="float-art mx-auto w-[min(340px,80vw)] border border-white/10 object-cover md:absolute md:right-[10%] md:top-[5%] md:w-[min(360px,70vw)]"
            />

            <div className="relative mt-4 border-l border-white/10 pl-3 text-[0.58rem] leading-[1.6] text-white/75 md:absolute md:mt-0 md:w-[min(260px,65vw)] md:border-l-0 md:pl-0 md:left-0 md:top-[18%]">
              PLATFORMS TRACK: ONLINE MARKETPLACES, EDUCATIONAL TECHNOLOGY,
              HEALTHCARE APPS, ONLINE RETAIL, SOFTWARE-AS-A-SERVICE
            </div>
            <div className="relative mt-4 border-l border-white/10 pl-3 text-[0.58rem] leading-[1.6] text-white/75 md:absolute md:mt-0 md:w-[min(260px,65vw)] md:border-l-0 md:pl-0 md:left-0 md:top-[46%]">
              INTELLIGENCE TRACK: HEALTH FORECASTING, AI GENERATION, FINANCIAL
              INTELLIGENCE, COMPUTATIONAL BIOLOGY
            </div>
            <div className="relative mt-4 border-l border-white/10 pl-3 text-[0.58rem] leading-[1.6] text-white/75 md:absolute md:mt-0 md:w-[min(260px,65vw)] md:border-l-0 md:pl-0 md:left-0 md:top-[73%]">
              HARDWARE & SECURITY TRACK: EMBEDDED SYSTEMS, INTERNET OF THINGS,
              CYBERSECURITY SOLUTIONS
            </div>
          </div>
        </div>
      </section>

      <section
        data-reveal
        className="section-reveal grid border-t border-white/5 md:grid-cols-[65%_35%]"
      >
        <article className="relative min-h-[460px] p-3">
          <img
            src="https://images.pexels.com/photos/4940642/pexels-photo-4940642.jpeg"
            alt="Past event video thumbnail"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="h-full w-full border border-white/20 object-cover"
          />
          <div className="absolute inset-3 bg-black/45" />
          <button
            type="button"
            aria-label="Play event video"
            className="absolute left-1/2 top-1/2 z-10 grid h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/45 bg-black/45"
          >
            <span className="ml-1 block h-0 w-0 border-b-[12px] border-l-[19px] border-t-[12px] border-b-transparent border-l-white border-t-transparent" />
          </button>
        </article>
        <article className="relative min-h-[460px] p-3">
          <img
            src="https://images.pexels.com/photos/19012046/pexels-photo-19012046.jpeg"
            alt="Atmospheric close up"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="h-full w-full border border-white/20 object-cover"
          />
          <div className="absolute inset-3 bg-[linear-gradient(to_top,rgba(0,0,0,0.7),transparent)]" />
        </article>
      </section>

      <section
        id="timeline"
        data-reveal
        className={`${sectionClass} text-center`}
      >
        <div className="mb-4 text-[0.66rem] text-[#16A34A]">• OUR JOURNEY</div>
        <h2 className="m-0 leading-none">
          <span className="font-[var(--font-display)] text-[clamp(1.8rem,4.5vw,3.2rem)]">
            THE
          </span>{" "}
          <span className="font-[var(--font-serif)] text-[clamp(1.6rem,4vw,3rem)] italic">
            Journey
          </span>
        </h2>
        <p className="mt-4 text-[0.58rem] text-white/55">
          KEY MILESTONES ON THE ROAD TO THE GRAND FINALE
        </p>

        <div className="relative mx-auto mt-9 max-w-[1200px] text-left">
          <div className="absolute bottom-0 top-0 left-1/2 hidden w-[2px] bg-[#16A34A] md:block" />
          <div className="absolute bottom-0 top-0 left-3 block w-[2px] bg-[#16A34A] md:hidden" />

          {timelineItems.map((item, idx) => {
            const isRight = idx % 2 === 1;
            return (
              <article
                key={item.title}
                data-timeline
                className={`mb-5 w-[calc(100%-34px)] border border-white/10 bg-[#111111]/85 p-4 md:w-[calc(50%-30px)] ${
                  isRight
                    ? "timeline-reveal-right ml-[34px] md:ml-auto"
                    : "timeline-reveal-left ml-[34px] md:ml-0"
                } ${isRight ? "md:ml-[calc(50%+30px)]" : "md:mr-[calc(50%+30px)]"}`}
              >
                <div
                  className={`absolute top-5 h-3 w-3 rotate-45 bg-[#16A34A] ${
                    isRight
                      ? "-left-[26px] md:-left-[36px]"
                      : "-left-[26px] md:-right-[36px]"
                  }`}
                />
                <div className="text-[0.64rem] text-[#16A34A]">{item.date}</div>
                <h3 className="my-2 font-[var(--font-display)] text-[1.35rem] leading-none">
                  {item.title}
                </h3>
                <p className="m-0 text-[0.67rem] leading-[1.8] text-white/55">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="legacy"
        data-reveal
        className={`${sectionClass} text-center`}
      >
        <div className="mb-4 text-[0.66rem] text-[#16A34A]">• OUR LEGACY</div>
        <h2 className="m-0 leading-none">
          <span className="font-[var(--font-display)] text-[clamp(1.8rem,4.5vw,3.2rem)]">
            PAST
          </span>{" "}
          <span className="font-[var(--font-serif)] text-[clamp(1.6rem,4vw,3rem)] italic">
            Events
          </span>
        </h2>

        <div className="relative mt-8">
          <div
            ref={galleryRef}
            className="gallery-track grid auto-cols-[minmax(220px,72vw)] grid-flow-col gap-4 overflow-x-auto scroll-smooth md:auto-cols-[minmax(260px,28vw)]"
            onMouseDown={(e) => beginDrag(e.pageX)}
            onMouseMove={(e) => moveDrag(e.pageX)}
            onMouseLeave={endDrag}
            onMouseUp={endDrag}
            onTouchStart={(e) => beginTouchDrag(e.touches)}
            onTouchMove={(e) => moveTouchDrag(e.touches)}
            onTouchEnd={endDrag}
          >
            {gallery.map((src, idx) => (
              <article key={src} className="gallery-card snap-center">
                <img
                  src={src}
                  alt={`Past event ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="h-[280px] w-full object-cover"
                />
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollGallery(-1)}
            aria-label="Previous image"
            className="action-btn absolute left-1 top-1/2 z-10 h-10 w-10 -translate-y-1/2 border border-white/10 bg-black/65 text-xl"
          >
            {"<"}
          </button>
          <button
            type="button"
            onClick={() => scrollGallery(1)}
            aria-label="Next image"
            className="action-btn absolute right-1 top-1/2 z-10 h-10 w-10 -translate-y-1/2 border border-white/10 bg-black/65 text-xl"
          >
            {">"}
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {gallery.map((_, idx) => (
              <button
                key={`dot-${idx}`}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => {
                  const track = galleryRef.current;
                  if (!track) return;
                  const target = track.children[idx];
                  target?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest",
                  });
                }}
                className={`action-btn h-2 w-2 rounded-full border border-white/10 ${
                  activeSlide === idx
                    ? "border-[#16A34A] bg-[#16A34A]"
                    : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="faq" data-reveal className={`${sectionClass} text-center`}>
        <div className="mb-4 text-[0.66rem] text-[#16A34A]">• FAQ</div>
        <h2 className="m-0 leading-none">
          <span className="font-[var(--font-display)] text-[clamp(1.8rem,4.5vw,3.2rem)]">
            FREQUENTLY ASKED
          </span>{" "}
          <span className="font-[var(--font-serif)] text-[clamp(1.6rem,4vw,3rem)] italic">
            Questions
          </span>
        </h2>

        <div className="mx-auto mt-6 max-w-[980px] border-t border-white/10 text-left">
          {faqs.map((item, idx) => {
            const open = activeFaq === idx;
            return (
              <article key={item.q} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveFaq(open ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[0.68rem] text-[#16A34A]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-[var(--font-display)] text-[1rem] md:text-[1.15rem]">
                      {item.q}
                    </span>
                  </span>
                  <span className="text-lg text-[#16A34A]">
                    {open ? "-" : "+"}
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-[max-height] duration-300"
                  style={{ maxHeight: open ? "160px" : "0px" }}
                >
                  <p className="mb-4 mt-0 text-[0.69rem] leading-[1.8] text-white/55">
                    {item.a}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="contact" data-reveal className={sectionClass}>
        <div className="mb-4 text-center text-[0.66rem] text-[#16A34A]">
          • MISSION CONTROL
        </div>
        <h2 className="m-0 text-center leading-none">
          <span className="font-[var(--font-display)] text-[clamp(1.8rem,4.5vw,3.2rem)]">
            CONTACT
          </span>{" "}
          <span className="font-[var(--font-serif)] text-[clamp(1.6rem,4vw,3rem)] italic">
            Us
          </span>
        </h2>

        <div className="mx-auto mt-7 flex max-w-[1100px] flex-wrap justify-center gap-2.5">
          {contacts.map((person) => (
            <article
              key={person.email}
              className="contact-card flex w-full max-w-[240px] flex-col items-center justify-between p-6 text-center"
            >
              <div className="flex flex-col items-center">
                <img
                  src={person.img}
                  alt={person.name}
                  width={100}
                  height={100}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="contact-avatar mx-auto mb-4 h-[100px] w-[100px] rounded-full object-cover"
                />
                <h3 className="m-0 font-[var(--font-display)] text-[1.18rem] leading-none">
                  {person.name}
                </h3>
                <p className="mt-1 text-[0.6rem] text-white/55">
                  {person.role}
                </p>
              </div>
              <div className="mt-4 w-full border-t border-white/10 pt-4">
                <p className="my-1 text-[0.6rem] text-white/55">
                  {person.phone}
                </p>
                <p className="my-1 text-[0.6rem] text-white/55">
                  {person.email}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <section
          className="relative grid min-h-[700px] items-center px-4 pb-8 pt-14 text-center"
          style={{
            backgroundImage: " url('/footer-img.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 mt-12 md:mt-16">
            <h2 className="m-0 font-[var(--font-display)] text-[clamp(1.8rem,4.5vw,3.2rem)] leading-none">
              LAUNCH BOLD IDEAS
            </h2>
            <p className="mx-auto mt-3 w-full max-w-[760px] text-[0.72rem] leading-[1.8] text-white/55">
              WE ARE CULTIVATING TOMORROW&apos;S ENTREPRENEURS, INNOVATIONS, AND
              PURPOSE-DRIVEN VENTURES. BECOME PART OF HACKATHONX AND TRANSFORM
              POTENTIAL INTO PROGRESS.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <a
                href="#"
                aria-label="Email"
                className="action-btn grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="action-btn grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="action-btn grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="action-btn grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="action-btn grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="action-btn grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47a2.78 2.78 0 0 0-1.95 1.95A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon
                    points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                    fill="black"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="action-btn grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.79 1.54V6.78a4.85 4.85 0 0 1-1.02-.09z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative z-10 mt-24 w-full border-t border-white/15 pt-4 md:mt-92">
            <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-2 text-center text-[0.58rem] text-white/55 md:flex-row md:px-2 md:text-left">
              <div>COPYRIGHT 2026 HACKATHONX. ALL RIGHTS RESERVED.</div>
              <div>DESIGNED BY IEEE SB UNNIVERSITY OF X</div>
              <div className="font-[var(--font-display)] text-base text-white">
                HACKATHON<span className="text-[#16A34A]">X</span>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </main>
  );
}
