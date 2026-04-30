"use client";

import {
  ArrowSquareOut,
  Brain,
  Cpu,
  Database,
  GithubLogo,
  Globe,
  GraduationCap,
  LinkedinLogo,
  Monitor,
  Network,
  Sparkle,
  Terminal,
} from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import ButtonLink from "@/components/ButtonLink";
import SiteNav from "@/components/SiteNav";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    title: "IDEAROOM",
    type: "REAL-TIME WHITEBOARD",
    stack: ["Next.js", "Socket.IO", "Redis", "RabbitMQ"],
    metric: "sub-100ms",
    href: "https://github.com/VampKunal/IdeaRoom",
    live: "https://idea-room-ashy.vercel.app",
    image: "/idearoom-mock.svg",
    copy: "Live canvas sync, resilient services, and queue-backed snapshots.",
  },
  {
    title: "EKLAVYA",
    type: "AI VOICE TUTOR",
    stack: ["Next.js", "TypeScript", "OpenAI API", "Speech API"],
    metric: "voice-first",
    href: "https://github.com/VampKunal/EKLAVYA",
    live: "",
    image: "/eklavya-mock.svg",
    copy: "Speak, listen, quiz, and generate practice from one learning loop.",
  },
  {
    title: "VIBLY",
    type: "CHAT AND VIDEO",
    stack: ["React", "Node.js", "MongoDB", "Stream APIs"],
    metric: "HD calls",
    href: "https://github.com/VampKunal/VIBLY",
    live: "",
    image: "/vibly-mock.svg",
    copy: "Messaging, video, presence, friend flows, and polished client state.",
  },
  {
    title: "SYNC LAYER",
    type: "SYSTEM MODULE",
    stack: ["Socket.IO", "Latency", "Events", "Canvas"],
    metric: "realtime",
    href: "https://github.com/VampKunal/IdeaRoom",
    live: "",
    image: "/idearoom-mock.svg",
    copy: "Event architecture for fast shared-state collaboration.",
  },
  {
    title: "AI LOOP",
    type: "LEARNING MODULE",
    stack: ["Prompts", "Voice", "Quiz", "Feedback"],
    metric: "adaptive",
    href: "https://github.com/VampKunal/EKLAVYA",
    live: "",
    image: "/eklavya-mock.svg",
    copy: "Voice interaction flow shaped around learning feedback.",
  },
  {
    title: "SOCIAL CORE",
    type: "PRODUCT MODULE",
    stack: ["Presence", "Calls", "Themes", "State"],
    metric: "polished",
    href: "https://github.com/VampKunal/VIBLY",
    live: "",
    image: "/vibly-mock.svg",
    copy: "Communication primitives with clean product behavior.",
  },
];

const education = [
  {
    title: "Class 10",
    place: "Vivekanand International Senior Secondary School",
    note: "Built the academic base: math, science, and disciplined study.",
  },
  {
    title: "Class 12",
    place: "Vivekanand International Senior Secondary School",
    note: "Focused on higher-secondary foundations for engineering.",
  },
  {
    title: "B.Tech Computer Science",
    place: "Bennett University",
    note: "2023 - 2027. Current GPA: 8.08.",
  },
];

const skills = [
  { group: "Interface Systems", icon: Monitor, level: "92", items: ["Next.js", "React", "Tailwind", "Responsive UI"] },
  { group: "Realtime Backend", icon: Network, level: "88", items: ["Node.js", "Express", "Socket.IO", "APIs"] },
  { group: "Data Layer", icon: Database, level: "82", items: ["MongoDB", "PostgreSQL", "Redis", "RabbitMQ"] },
  { group: "AI Product Logic", icon: Brain, level: "78", items: ["OpenAI API", "Speech API", "Prompt flows", "Quizzes"] },
  { group: "Delivery Stack", icon: Cpu, level: "86", items: ["Git", "Docker", "Vercel", "Railway"] },
  { group: "Languages", icon: Terminal, level: "84", items: ["JavaScript", "TypeScript", "Python", "C++"] },
];

const posts = [
  {
    title: "Built from a real roommate mismatch",
    note: "Recent activity",
    source: "A practical build note from the roommate matching project.",
  },
  {
    title: "BroCooked, first full-stack Next.js project",
    note: "Recent activity",
    source: "An AI-powered recipe platform built while learning Next.js.",
  },
  {
    title: "Find it.BU and portfolio work",
    note: "Profile project activity",
    source: "Lost-and-found project work connected to the profile.",
  },
  {
    title: "Learning in public as a CSE builder",
    note: "Recent activity",
    source: "Bennett University, product thinking, and full-stack progress.",
  },
];

function CircuitLine({ className, delay = 0 }) {
  const pathRef = useRef(null);
  const circleRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    if (!pathRef.current) return undefined;
    const length = pathRef.current.getTotalLength();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 90%",
      },
    });

    tl.fromTo(
      pathRef.current,
      { strokeDasharray: length, strokeDashoffset: length },
      { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut", delay },
    ).fromTo(
      circleRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" },
      "-=0.3",
    );

    return () => tl.kill();
  }, [delay]);

  return (
    <svg ref={svgRef} viewBox="0 0 100 100" className={className} fill="none">
      <path ref={pathRef} d="M0 50 L40 50 L60 20 L100 20" stroke="currentColor" strokeWidth="0.5" />
      <circle ref={circleRef} cx="100" cy="20" r="2" fill="currentColor" />
    </svg>
  );
}

function CodeSnippet() {
  const lines = [
    ["const", "status", "=", '"active_deployment";'],
    ["await", "ship", "(", "{ realtime: true }", ");"],
    ["sync", ".", "target", "(", '"sub-100ms"', ");"],
    ["return", '"AI + realtime systems"', ";"],
  ];

  return (
    <div className="code-snippet">
      <div className="code-topbar">
        <span />
        <span />
        <span />
        <strong>portfolio.runtime.ts</strong>
      </div>
      <pre aria-label="Portfolio runtime code snippet">
        {lines.map((line, index) => (
          <code key={line.join("-")}>
            <span className="line-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="token-key">{line[0]}</span> {line[1]} <span className="token-op">{line[2]}</span>{" "}
            <span className="token-value">{line[3]}</span>
          </code>
        ))}
      </pre>
      <div className="code-pulse">
        <span />
        ACTIVE DEPLOYMENT
      </div>
    </div>
  );
}

function HorizontalProjectCard({ project, index }) {
  return (
    <article className="horizontal-card tech-card bg-white">
      <div className="horizontal-image">
        <img src={project.image} alt={`${project.title} project visual`} />
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="horizontal-body">
        <p>{project.type}</p>
        <h3>{project.title}</h3>
        <span className="metric-chip">{project.metric}</span>
        <p className="project-copy">{project.copy}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="micro-chip">{item}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-5 pt-4">
          <a href={project.href} target="_blank" rel="noreferrer" className="micro-link">
            Source <ArrowSquareOut size={15} weight="bold" />
          </a>
          {project.live ? (
            <a href={project.live} target="_blank" rel="noreferrer" className="micro-link">
              Live <ArrowSquareOut size={15} weight="bold" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function PortfolioExperience() {
  const rootRef = useRef(null);
  const projectTrackRef = useRef(null);
  const postTrackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let removeCursorListener = () => {};

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 48,
          rotateX: 5,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.4,
        },
      });

      gsap.to(".circuit-layer", {
        yPercent: -18,
        rotate: 5,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      gsap.to(".diagnostic-orb", {
        y: -24,
        rotate: 360,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".ambient-cursor", {
        scale: 1.18,
        opacity: 0.7,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const cursorX = gsap.quickTo(".ambient-cursor", "x", { duration: 0.35, ease: "power3.out" });
      const cursorY = gsap.quickTo(".ambient-cursor", "y", { duration: 0.35, ease: "power3.out" });
      const moveCursor = (event) => {
        cursorX(event.clientX - 18);
        cursorY(event.clientY - 18);
      };
      window.addEventListener("pointermove", moveCursor);
      removeCursorListener = () => window.removeEventListener("pointermove", moveCursor);

      gsap.utils.toArray(".roadmap-item").forEach((item, index) => {
        gsap.from(item, {
          x: index % 2 === 0 ? -42 : 42,
          opacity: 0,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray(".skill-bar").forEach((bar) => {
        const level = bar.getAttribute("data-level") || 100;
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          {
            scaleX: level / 100,
            duration: 1.35,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 92%",
            },
          },
        );
      });

      const horizontalSections = [
        { section: ".projects-horizontal", track: projectTrackRef.current },
        { section: ".posts-horizontal", track: postTrackRef.current },
      ];

      horizontalSections.forEach(({ section, track }) => {
        if (!track) return;
        if (!window.matchMedia("(min-width: 900px)").matches) return;
        const distance = () => {
          const sectionNode = document.querySelector(section);
          const startPad = Number.parseFloat(window.getComputedStyle(track).paddingLeft) || 0;
          const visibleWidth = sectionNode?.getBoundingClientRect().width || window.innerWidth;
          return Math.max(0, track.scrollWidth - visibleWidth + startPad + 180);
        };
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            start: "top top",
            end: () => `+=${distance() + window.innerHeight * 0.8}`,
          },
        });
      });
    }, rootRef);

    return () => {
      removeCursorListener();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen blueprint-grid relative overflow-x-hidden font-sans">
      <div className="ambient-cursor" aria-hidden="true" />
      <div className="scroll-progress" />
      <div className="page-shell mx-auto px-4 md:px-8 lg:px-10">
        <SiteNav />

        <div className="circuit-layer fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-10">
          <CircuitLine className="absolute top-20 left-10 w-64 h-64 rotate-45" delay={0.5} />
          <CircuitLine className="absolute bottom-40 right-20 w-80 h-80 -rotate-12" delay={1} />
          <div className="diagnostic-orb absolute top-[18%] right-[8%] h-40 w-40 rounded-full border-4 border-accent-orange/30" />
        </div>

        <main className="space-y-6">
          <section id="intro" className="section-container intro-section">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 xl:gap-14 items-center justify-center">
              <div className="space-y-10 reveal">
                <div className="space-y-4">
                  <span className="text-[12px] font-black tracking-[0.4em] text-accent-orange uppercase bg-accent-orange/5 px-3 py-1 inline-block border-l-4 border-accent-orange">
                    System Architect Protocol
                  </span>
                  <h1 className="hero-title text-6xl md:text-8xl font-black leading-[0.85] uppercase tracking-tighter">
                    Kunal Rai <br />
                    Builds Playful <br />
                    Tech That <span className="text-accent-orange">Works.</span>
                  </h1>
                </div>
                <p className="text-xl text-slate-500 max-w-lg font-medium leading-relaxed balance-copy">
                  Real-time applications, AI-driven learning tools, and resilient system architectures designed for efficiency.
                </p>
                <div className="flex flex-wrap gap-6 pt-4">
                  <ButtonLink href="/Kunal_Rai_Resume.pdf" download className="scale-110">
                    Download Resume
                  </ButtonLink>
                  <ButtonLink href="#projects" tone="ghost" className="scale-110">
                    See Projects
                  </ButtonLink>
                </div>
              </div>

              <div className="tech-card bg-white p-5 lg:p-7 relative reveal hero-diagnostic">
                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20 uppercase font-black">
                  Core_Diagnostics
                </div>
                <CodeSnippet />
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {["400+ DSA", "3 Builds", "8.08 GPA"].map((item) => (
                    <div key={item} className="mini-stat">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="education" className="section-container">
            <SectionHeading title="Education Roadmap" subtitle="Academic path in scroll order" />
            <div className="roadmap reveal">
              {education.map((item, index) => (
                <article key={`${item.title}-${item.place}`} className="roadmap-item tech-card bg-white">
                  <div className="roadmap-index">0{index + 1}</div>
                  <div className="bg-blueprint-line text-white p-4 roadmap-icon">
                    <GraduationCap size={36} weight="bold" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">{item.title}</h3>
                    <p className="text-lg text-slate-500 font-bold mt-2">{item.place}</p>
                    <p className="text-sm text-slate-400 leading-relaxed max-w-lg mt-4">{item.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="projects-horizontal horizontal-section">
            <div className="horizontal-heading reveal">
              <SectionHeading title="Project Showcase" subtitle="Pinned horizontal system scan" />
            </div>
            <div ref={projectTrackRef} className="horizontal-track">
              {projects.map((project, index) => (
                <HorizontalProjectCard key={`${project.title}-${index}`} project={project} index={index} />
              ))}
            </div>
          </section>

          <section id="skills" className="section-container">
            <SectionHeading title="Technical Arsenal" subtitle="Systems, motion, data, and delivery" />
            <div className="arsenal-grid reveal">
              {skills.map((skillGroup) => {
                const Icon = skillGroup.icon;
                return (
                  <article key={skillGroup.group} className="tech-card bg-white arsenal-card group">
                    <div className="flex items-center justify-between gap-4 border-b-2 border-blueprint-line/10 pb-6">
                      <div className="p-3 bg-slate-50 group-hover:bg-accent-orange group-hover:text-white transition-colors">
                        <Icon size={32} weight="bold" />
                      </div>
                      <span className="font-mono text-[11px] font-black opacity-40">{skillGroup.level}%</span>
                    </div>
                    <h3 className="mt-8 text-2xl font-black uppercase tracking-tight">{skillGroup.group}</h3>
                    <div className="skill-meter">
                      <span className="skill-bar" data-level={skillGroup.level} />
                    </div>
                    <div className="flex flex-wrap gap-3 mt-6">
                      {skillGroup.items.map((item) => (
                        <span key={item} className="micro-chip">{item}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="posts" className="posts-horizontal horizontal-section">
            <div className="horizontal-heading reveal">
              <SectionHeading title="LinkedIn Signals" subtitle="Real public activity from the profile" />
            </div>
            <div ref={postTrackRef} className="horizontal-track post-track">
              {posts.map((post, index) => (
                <article key={post.title} className="horizontal-card post-panel tech-card bg-white">
                  <div className="flex items-center justify-between gap-4">
                    <LinkedinLogo size={34} weight="bold" className="linkedin-visible" />
                  <span className="font-mono text-[10px] font-black uppercase opacity-40">POST 0{index + 1}</span>
                </div>
                <h3 className="mt-12 text-4xl font-black uppercase tracking-tight leading-none">{post.title}</h3>
                <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-slate-400">{post.note}</p>
                <p className="mt-8 text-lg font-bold text-slate-500">"{post.source}"</p>
                <a
                    href="https://www.linkedin.com/in/kunal-rai-104347259/recent-activity/all/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-10 inline-flex items-center gap-2 text-[11px] font-black uppercase hover:text-accent-orange transition-all hover:gap-3"
                  >
                    Open activity <ArrowSquareOut size={16} weight="bold" />
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="section-container contact-section">
            <div className="tech-card bg-accent-orange p-10 md:p-16 text-white overflow-hidden relative reveal">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
                    Ready to <br />
                    Build the <br />
                    <span className="text-blueprint-line">Next System?</span>
                  </h2>
                  <p className="text-xl font-bold opacity-90 max-w-md">
                    Open for full-stack collaborations, product builds, and engineering roles.
                  </p>
                </div>
                <div className="flex flex-col gap-6 items-start lg:items-end">
                  <a
                    href="https://github.com/VampKunal"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-cta bg-blueprint-line text-white"
                  >
                    <GithubLogo size={28} weight="bold" /> Access GitHub
                  </a>
                  <a
                    href="https://in.linkedin.com/in/kunal-rai-104347259"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-cta bg-white text-blueprint-line"
                  >
                    <LinkedinLogo size={28} weight="bold" /> LinkedIn Profile
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kunal-rai-104347259/recent-activity/all/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-cta bg-white/10 text-white"
                  >
                    <ArrowSquareOut size={28} weight="bold" /> Recent Activity
                  </a>
                </div>
              </div>
              <Globe size={360} weight="thin" className="absolute -bottom-20 -right-20 opacity-10 pointer-events-none" />
              <Sparkle size={92} weight="fill" className="absolute top-12 right-12 opacity-20 pointer-events-none" />
            </div>
          </section>
        </main>

        <div className="fixed bottom-6 left-6 font-mono text-[9px] opacity-40 pointer-events-none hidden xl:block uppercase font-black tracking-widest">
          SYSTEM_DIAGNOSTIC: [OK] | V8_ISOLATE_LOAD: 14% | NETWORK_PROTOCOL: QUIC/HTTP3
        </div>
        <div className="fixed top-6 right-6 font-mono text-[9px] opacity-40 pointer-events-none text-right hidden xl:block uppercase font-black tracking-widest">
          PORTFOLIO_VERSION: 4.2.1-STABLE | BUILD_HASH: 0x9FA2BD
        </div>
      </div>
    </div>
  );
}
