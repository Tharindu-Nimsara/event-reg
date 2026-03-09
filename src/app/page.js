"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const timelineItems = [
  {
    date: "15TH FEBRUARY",
    title: "REGISTRATIONS OPEN",
    desc: "TEAM APPLICATIONS, IDEA BRIEFS, AND ELIGIBILITY VERIFICATION BEGINS.",
  },
  {
    date: "4TH MARCH - 15TH MARCH",
    title: "ENVISION PHASE",
    desc: "TEAMS SUBMIT PROBLEM ANALYSIS, USER VALIDATION, AND EARLY SOLUTION BLUEPRINTS.",
  },
  {
    date: "20TH MARCH - 20TH MAY",
    title: "EXECUTION PHASE",
    desc: "MENTORING, ITERATIVE PROTOTYPE BUILDS, AND TRACK-WISE PROGRESS REVIEWS.",
  },
  {
    date: "5TH JUNE",
    title: "GRAND FINALE",
    desc: "LIVE DEMO DAY, FINAL PITCHES, AND AWARDS IN FRONT OF INDUSTRY PANELISTS.",
  },
];

const faqs = [
  {
    q: "WHAT IS HACKATHONX?",
    a: "HACKATHONX IS A TECH STARTUP COMPETITION FOR STUDENT TEAMS TO BUILD, VALIDATE, AND PITCH INNOVATIVE PRODUCTS.",
  },
  {
    q: "WHO CAN PARTICIPATE?",
    a: "UNDERGRADUATE STUDENTS FROM RECOGNIZED UNIVERSITIES CAN APPLY IN TEAMS OF 2 TO 5 MEMBERS.",
  },
  {
    q: "WHAT ARE THE COMPETITION TRACKS?",
    a: "TRACKS INCLUDE PLATFORMS, INTELLIGENCE, AND HARDWARE & SECURITY WITH DOMAIN-SPECIFIC CHALLENGES.",
  },
  {
    q: "HOW DOES THE COMPETITION PROGRESS?",
    a: "IT RUNS THROUGH REGISTRATION, ENVISION, EXECUTION, AND A LIVE GRAND FINALE WITH JURY EVALUATION.",
  },
  {
    q: "WHEN DO REGISTRATIONS OPEN?",
    a: "REGISTRATIONS OPEN ON 15TH FEBRUARY THROUGH THE OFFICIAL COMPETITION PORTAL.",
  },
  {
    q: "IS THERE A REGISTRATION FEE?",
    a: "NO. PARTICIPATION IS FREE FOR ELIGIBLE STUDENT TEAMS.",
  },
  {
    q: "WHAT DO WINNERS RECEIVE?",
    a: "WINNERS RECEIVE CASH PRIZES, INDUSTRY MENTORSHIP, MEDIA EXPOSURE, AND POSSIBLE INCUBATION PATHWAYS.",
  },
];

const contacts = [
  {
    name: "THARINDU NIMSARA",
    role: "EVENT CHAIR",
    phone: "+94 77 111 2222",
    email: "tharindu@hackathonx.lk",
    img: "https://picsum.photos/140/140?person,1",
  },
  {
    name: "AMAYA PERERA",
    role: "OPERATIONS LEAD",
    phone: "+94 77 333 4444",
    email: "amaya@hackathonx.lk",
    img: "https://picsum.photos/140/140?person,2",
  },
  {
    name: "HESHAN SILVA",
    role: "TECH LEAD",
    phone: "+94 77 555 6666",
    email: "heshan@hackathonx.lk",
    img: "https://picsum.photos/140/140?person,3",
  },
  {
    name: "NETHMI FERNANDO",
    role: "PARTNERSHIP LEAD",
    phone: "+94 77 777 8888",
    email: "nethmi@hackathonx.lk",
    img: "https://picsum.photos/140/140?person,4",
  },
];

const gallery = [
  "https://picsum.photos/700/500?1,event",
  "https://picsum.photos/700/500?2,event",
  "https://picsum.photos/700/500?3,event",
  "https://picsum.photos/700/500?4,event",
  "https://picsum.photos/700/500?5,event",
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(-1);
  const [activeSlide, setActiveSlide] = useState(0);

  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const dragRef = useRef({ isDown: false, startX: 0, startLeft: 0 });

  const sectionClass =
    "section-reveal border-t border-white/5 px-4 py-16 md:px-12 md:py-24";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      heroRef.current.style.backgroundPosition = `center calc(50% + ${window.scrollY * 0.25}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
    dragRef.current = {
      isDown: true,
      startX: pageX,
      startLeft: galleryRef.current.scrollLeft,
    };
  };

  const moveDrag = (pageX) => {
    if (!galleryRef.current || !dragRef.current.isDown) return;
    const walk = (pageX - dragRef.current.startX) * 1.3;
    galleryRef.current.scrollLeft = dragRef.current.startLeft - walk;
  };

  const endDrag = () => {
    dragRef.current.isDown = false;
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

      <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
        <nav className="grid grid-cols-[auto_auto] items-center justify-between gap-4 md:grid-cols-[auto_1fr_auto]">
          <a
            href="#top"
            className="font-[var(--font-display)] text-2xl tracking-[0.09em]"
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
            className={`col-span-2 items-center justify-center gap-2 text-[0.66rem] font-medium tracking-[0.18em] md:col-span-1 md:flex ${
              mobileOpen ? "flex flex-wrap pt-2" : "hidden"
            }`}
          >
            <a href="#about">RULES</a>
            <span className="text-white/35">.</span>
            <a href="#timeline">TIMELINE</a>
            <span className="text-white/35">.</span>
            <a href="#contact">CONTACT</a>
            <span className="text-white/35">.</span>
            <a href="#faq">FAQ</a>
          </div>

          <div
            className={`col-span-2 items-center gap-2 md:col-span-1 md:flex ${
              mobileOpen ? "flex pt-2" : "hidden"
            }`}
          >
            <a
              href="#legacy"
              className="border border-white/10 px-4 py-2 text-[0.64rem] tracking-[0.12em]"
            >
              DELEGATE BOOKLET
            </a>
            <a
              href="#contact"
              className="bg-[#16A34A] px-4 py-2 text-[0.64rem] font-bold tracking-[0.12em] transition hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(22,163,74,0.4)]"
            >
              REGISTER NOW
            </a>
          </div>
        </nav>
      </header>

      <section
        id="top"
        ref={heroRef}
        className="relative flex min-h-screen items-end px-4 pb-16 pt-28 md:px-12 md:pb-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.64), rgba(0,0,0,0.78)), url('hero-bg.jpg'), url('https://picsum.photos/1920/1080?grayscale&blur=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full max-w-[700px]">
          <div className="hero-line mb-3 text-[0.65rem] text-[#16A34A]">
            • HACKATHONX - 2026
          </div>
          <h1 className="m-0 leading-[0.92]">
            <span className="hero-line block font-[var(--font-display)] text-[clamp(3.2rem,12vw,9rem)]">
              TRANSFORM
            </span>
            <span className="hero-line block font-[var(--font-serif)] text-[clamp(2rem,7vw,5.1rem)] italic opacity-70 tracking-[0.03em]">
              IDEAS INTO
            </span>
            <span className="hero-line block font-[var(--font-serif)] text-[clamp(3rem,10vw,7rem)] italic text-[#16A34A]">
              REALITY
            </span>
          </h1>
          <p className="hero-line mt-7 w-full max-w-[520px] text-[0.72rem] leading-[1.8] text-white/55">
            HACKATHONX IS AN INTER-UNIVERSITY TECH STARTUP COMPETITION BY THE
            IEEE STUDENT BRANCH OF UNNIVERSITY OF X. WE BLEND INNOVATION,
            ENTREPRENEURSHIP, AND INDUSTRY EXPOSURE TO HELP STUDENT FOUNDERS
            SHIP BOLD IDEAS INTO REAL-WORLD IMPACT.
          </p>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-[0.6rem] text-white/55">
          SCROLL DOWN
          <div className="arrow-bounce mx-auto mt-2 h-4 w-4 rotate-45 border-b-2 border-r-2 border-[#16A34A]" />
        </div>
      </section>

      <section id="about" data-reveal className={sectionClass}>
        <div className="grid items-center gap-8 md:grid-cols-[1.05fr_1fr]">
          <article>
            <div className="mb-4 text-[0.66rem] text-[#16A34A]">
              • ABOUT THE COMPETITION
            </div>
            <h2 className="m-0 leading-none">
              <span className="font-[var(--font-display)] text-[clamp(2.2rem,6vw,4.5rem)]">
                STARTUP
              </span>{" "}
              <span className="font-[var(--font-serif)] text-[clamp(2rem,5vw,4rem)] italic">
                Tracks
              </span>
            </h2>
            <p className="mt-6 max-w-[550px] text-[0.74rem] leading-[1.9] text-white/55">
              HACKATHONX PROVIDES A HIGH-INTENSITY JOURNEY FOR AMBITIOUS
              BUILDERS. FROM PROBLEM DISCOVERY TO PROTOTYPE VALIDATION, TEAMS
              NAVIGATE MENTORSHIP SPRINTS, PRODUCT REVIEWS, AND INVESTOR-STYLE
              EVALUATION.
            </p>
          </article>

          <div className="relative min-h-[500px]">
            <img
              src="https://picsum.photos/520/680?astronaut,child"
              alt="Astronaut child artwork"
              className="float-art absolute right-[10%] top-[5%] w-[min(360px,70vw)] border border-white/10 object-cover sepia-[0.35] contrast-[1.1] md:right-[10%]"
            />

            <div className="relative mt-4 border-l border-white/10 pl-3 text-[0.58rem] leading-[1.6] text-white/75 md:absolute md:mt-0 md:w-[min(260px,65vw)] md:border-l-0 md:pl-0 md:left-0 md:top-[18%]">
              PLATFORMS TRACK: MARKETPLACES, EDTECH, DIGITAL HEALTH, E-COMMERCE,
              SAAS
            </div>
            <div className="relative mt-4 border-l border-white/10 pl-3 text-[0.58rem] leading-[1.6] text-white/75 md:absolute md:mt-0 md:w-[min(260px,65vw)] md:border-l-0 md:pl-0 md:left-[4%] md:top-[46%]">
              INTELLIGENCE TRACK: PREDICTIVE HEALTH, GENERATIVE AI, FINTECH
              ANALYTICS, BIO-INFORMATICS
            </div>
            <div className="relative mt-4 border-l border-white/10 pl-3 text-[0.58rem] leading-[1.6] text-white/75 md:absolute md:mt-0 md:w-[min(260px,65vw)] md:border-l-0 md:pl-0 md:right-0 md:top-[73%] md:text-right">
              HARDWARE & SECURITY TRACK: EMBEDDED, IOT, CYBER DEFENSE
            </div>
          </div>
        </div>
      </section>

      <section
        data-reveal
        className="section-reveal grid border-t border-white/5 md:grid-cols-[65%_35%]"
      >
        <article className="relative min-h-[460px]">
          <img
            src="https://picsum.photos/1200/800?event,stage"
            alt="Past event video thumbnail"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <button
            type="button"
            aria-label="Play event video"
            className="absolute left-1/2 top-1/2 z-10 grid h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/45 bg-black/45"
          >
            <span className="ml-1 block h-0 w-0 border-b-[12px] border-l-[19px] border-t-[12px] border-b-transparent border-l-white border-t-transparent" />
          </button>
        </article>
        <article className="min-h-[460px]">
          <img
            src="https://picsum.photos/900/800?astronaut,plane"
            alt="Atmospheric close up"
            className="h-full w-full object-cover"
          />
        </article>
      </section>

      <section
        id="timeline"
        data-reveal
        className={`${sectionClass} text-center`}
      >
        <div className="mb-4 text-[0.66rem] text-[#16A34A]">• OUR JOURNEY</div>
        <h2 className="m-0 leading-none">
          <span className="font-[var(--font-display)] text-[clamp(2.2rem,6vw,4.5rem)]">
            THE
          </span>{" "}
          <span className="font-[var(--font-serif)] text-[clamp(2rem,5vw,4rem)] italic">
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

      <section id="legacy" data-reveal className={sectionClass}>
        <div className="mb-4 text-[0.66rem] text-[#16A34A]">• OUR LEGACY</div>
        <h2 className="m-0 leading-none">
          <span className="font-[var(--font-display)] text-[clamp(2.2rem,6vw,4.5rem)]">
            PAST
          </span>{" "}
          <span className="font-[var(--font-serif)] text-[clamp(2rem,5vw,4rem)] italic">
            Events
          </span>
        </h2>

        <div className="relative mt-8">
          <div
            ref={galleryRef}
            className="grid auto-cols-[minmax(220px,72vw)] grid-flow-col gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] md:auto-cols-[minmax(260px,28vw)]"
            onMouseDown={(e) => beginDrag(e.pageX)}
            onMouseMove={(e) => moveDrag(e.pageX)}
            onMouseLeave={endDrag}
            onMouseUp={endDrag}
            onTouchStart={(e) => beginTouchDrag(e.touches)}
            onTouchMove={(e) => moveTouchDrag(e.touches)}
            onTouchEnd={endDrag}
          >
            {gallery.map((src, idx) => (
              <article
                key={src}
                className="snap-center border border-white/10 bg-[#0e0e0e]"
              >
                <img
                  src={src}
                  alt={`Past event ${idx + 1}`}
                  className="h-[280px] w-full object-cover sepia-[0.4] contrast-[1.1]"
                />
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollGallery(-1)}
            aria-label="Previous image"
            className="absolute left-1 top-1/2 z-10 h-10 w-10 -translate-y-1/2 border border-white/10 bg-black/65 text-xl"
          >
            {"<"}
          </button>
          <button
            type="button"
            onClick={() => scrollGallery(1)}
            aria-label="Next image"
            className="absolute right-1 top-1/2 z-10 h-10 w-10 -translate-y-1/2 border border-white/10 bg-black/65 text-xl"
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
                className={`h-2 w-2 rounded-full border border-white/10 ${
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
          <span className="font-[var(--font-display)] text-[clamp(2.2rem,6vw,4.5rem)]">
            FREQUENTLY ASKED
          </span>{" "}
          <span className="font-[var(--font-serif)] text-[clamp(2rem,5vw,4rem)] italic">
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
        <div className="mb-4 text-[0.66rem] text-[#16A34A]">
          • MISSION CONTROL
        </div>
        <h2 className="m-0 leading-none">
          <span className="font-[var(--font-display)] text-[clamp(2.2rem,6vw,4.5rem)]">
            CONTACT
          </span>{" "}
          <span className="font-[var(--font-serif)] text-[clamp(2rem,5vw,4rem)] italic">
            Us
          </span>
        </h2>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((person) => (
            <article
              key={person.email}
              className="border border-white/10 bg-[#111111] p-4 text-center"
            >
              <img
                src={person.img}
                alt={person.name}
                className="mx-auto mb-3 h-[88px] w-[88px] rounded-full object-cover sepia-[0.35] contrast-[1.1]"
              />
              <h3 className="m-0 font-[var(--font-display)] text-[1.18rem] leading-none">
                {person.name}
              </h3>
              <p className="my-1 text-[0.6rem] text-white/55">{person.role}</p>
              <p className="my-1 text-[0.6rem] text-white/55">{person.phone}</p>
              <p className="my-1 text-[0.6rem] text-white/55">{person.email}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <section
          className="grid min-h-[420px] place-items-center px-4 py-12 text-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.8)), url('https://picsum.photos/1800/1000?rocket,night')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h2 className="m-0 font-[var(--font-display)] text-[clamp(2.3rem,7vw,5rem)] leading-none">
              LAUNCH BOLD IDEAS
            </h2>
            <p className="mx-auto mt-3 w-full max-w-[760px] text-[0.72rem] leading-[1.8] text-white/55">
              WE ARE BUILDING THE NEXT GENERATION OF FOUNDERS, PRODUCTS, AND
              IMPACT-DRIVEN STARTUPS. JOIN HACKATHONX AND TURN POSSIBILITY INTO
              MOMENTUM.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["EM", "FB", "IG", "WA", "IN", "YT", "TT"].map((code) => (
                <a
                  key={code}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-[0.6rem]"
                >
                  {code}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 px-4 py-4 text-center text-[0.58rem] text-white/55 md:flex-row md:px-6 md:text-left">
          <div>COPYRIGHT 2026 HACKATHONX. ALL RIGHTS RESERVED.</div>
          <div>DESIGNED BY IEEE SB UNNIVERSITY OF X</div>
          <div className="font-[var(--font-display)] text-base text-white">
            HACKATHON<span className="text-[#16A34A]">X</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
