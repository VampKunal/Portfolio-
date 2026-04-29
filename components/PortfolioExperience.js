"use client";

import {
  ArrowBendDownRight,
  BracketsCurly,
  Database,
  GitBranch,
  GraduationCap,
  Lightning,
  MonitorPlay,
  Network,
  PhoneCall,
  RocketLaunch,
  Sparkle,
  Stack,
  Student,
} from "@phosphor-icons/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import ButtonLink from "@/components/ButtonLink";
import SiteNav from "@/components/SiteNav";

const projects = [
  {
    title: "IdeaRoom",
    type: "Real-time collaborative whiteboard",
    stack: ["Next.js", "Node.js", "Socket.IO", "Redis", "RabbitMQ", "Docker"],
    metric: "sub-100ms",
    metricLabel: "canvas sync target",
    href: "https://github.com/VampKunal/IdeaRoom",
    live: "https://idea-room-ashy.vercel.app",
    copy: "A collaborative drawing product built around live canvas synchronization, resilient backend services, and production deployment paths. The work shows comfort with real-time UX, service boundaries, queues, caching, and shipping beyond a local demo.",
    proof: ["4-service backend architecture", "Redis-backed retrieval path", "RabbitMQ snapshot workflow"],
  },
  {
    title: "EKLAVYA",
    type: "AI voice tutor",
    stack: ["Next.js", "TypeScript", "OpenAI API", "Web Speech API"],
    metric: "voice-first",
    metricLabel: "learning interface",
    href: "https://github.com/VampKunal/EKLAVYA",
    live: "",
    copy: "An AI learning assistant designed for hands-free tutoring: students can speak, listen, answer quizzes, and receive generated practice material. The product is framed around adaptive learning rather than static content delivery.",
    proof: ["Speech recognition flow", "Text-to-speech lessons", "Adaptive quiz difficulty"],
  },
  {
    title: "VIBLY",
    type: "Chat and video platform",
    stack: ["React", "Node.js", "MongoDB", "Stream APIs", "Zustand"],
    metric: "HD",
    metricLabel: "social communication",
    href: "https://github.com/VampKunal/VIBLY",
    live: "",
    copy: "A social communication app combining real-time messaging, video calling, friend workflows, presence indicators, and theme customization. The project focuses on product polish while delegating complex video infrastructure to reliable APIs.",
    proof: ["Friend request flows", "Presence indicators", "Cached client state"],
  },
];

const skills = [
  { group: "Frontend", icon: MonitorPlay, items: ["Next.js", "React", "Tailwind CSS", "Responsive UI", "App Router"] },
  { group: "Backend", icon: Network, items: ["Node.js", "Express.js", "Socket.IO", "API Design", "Microservices"] },
  { group: "Data", icon: Database, items: ["MongoDB", "PostgreSQL", "Redis", "RabbitMQ", "Caching"] },
  { group: "Languages", icon: BracketsCurly, items: ["JavaScript", "TypeScript", "Python", "C++"] },
  { group: "Delivery", icon: GitBranch, items: ["Git", "GitHub", "Docker", "Vercel", "Railway"] },
];

const coursework = ["Data Structures", "Algorithms", "DBMS", "Artificial Intelligence", "System Design", "Computer Networks", "Software Engineering"];

const fadeUp = {
  hidden: { y: 48 },
  show: { y: 0, transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } },
};

function Eyebrow({ children }) {
  return <span className="inline-flex rounded-full border border-[#211b16]/10 bg-white/52 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#806c55]">{children}</span>;
}

function Bento({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={`rounded-[2.2rem] bg-white/38 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_28px_110px_-70px_rgba(70,45,18,0.65)] ring-1 ring-white/60 ${className}`}
    >
      <div className="h-full overflow-hidden rounded-[calc(2.2rem-0.375rem)] border border-white/50 bg-[rgba(255,252,244,0.72)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.92)]">
        {children}
      </div>
    </motion.div>
  );
}

function ParallaxBlock({ children, amount = 90, className = "" }) {
  const { scrollYProgress } = useScroll();
  const [isDesktop, setIsDesktop] = useState(false);
  const depth = isDesktop ? amount : 0;
  const y = useTransform(scrollYProgress, [0, 1], [depth, -depth]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

function BackgroundField() {
  const { scrollYProgress } = useScroll();
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -520]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 28]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div style={{ y: ySlow }} className="absolute left-[-12rem] top-[8rem] h-[36rem] w-[36rem] rounded-full bg-[#c47e52]/26 blur-3xl" />
      <motion.div style={{ y: yFast }} className="absolute right-[-10rem] top-[24rem] h-[34rem] w-[34rem] rounded-full bg-[#5e8f79]/24 blur-3xl" />
      <motion.div style={{ rotate }} className="absolute left-1/2 top-24 h-[54rem] w-[54rem] -translate-x-1/2 rounded-full border border-[#211b16]/8" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,250,239,0.94)_0%,rgba(244,233,213,0.86)_44%,rgba(226,236,224,0.82)_100%)]" />
      <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(33,27,22,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(33,27,22,0.8)_1px,transparent_1px)] [background-size:4px_4px]" />
    </div>
  );
}

export default function PortfolioExperience() {
  return (
    <main id="intro" className="relative overflow-hidden text-[#211b16]">
      <BackgroundField />
      <SiteNav />

      <section className="mx-auto grid min-h-[100dvh] max-w-[1440px] grid-cols-1 gap-10 px-4 pb-24 pt-32 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-36">
        <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
          <motion.div variants={fadeUp}>
            <Eyebrow>Full-stack developer in New Delhi</Eyebrow>
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-7 max-w-[11ch] text-5xl font-extrabold leading-[0.92] tracking-tight text-[#17110d] md:text-7xl xl:text-8xl">
            I build fast, useful software with real-time depth.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-[21rem] text-lg leading-8 text-[#6b5f51] sm:max-w-2xl">
            I am Kunal Rai, a computer science undergraduate focused on full-stack web products, real-time collaboration, and AI-powered user experiences. I like systems that feel simple on the surface but are engineered thoughtfully underneath.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
            <ButtonLink href="#projects">Explore projects</ButtonLink>
            <ButtonLink href="#contact" tone="light">Contact me</ButtonLink>
          </motion.div>
        </motion.div>

        <ParallaxBlock amount={140} className="min-w-0">
          <Bento className="mx-auto w-full max-w-[22rem] sm:max-w-xl lg:rotate-[1.2deg]">
            <div className="relative min-h-[570px] p-6 md:p-8">
              <div className="absolute right-8 top-8 h-44 w-44 rounded-full border border-[#211b16]/10" />
              <motion.div animate={{ scale: [1, 1.18, 1], opacity: [0.65, 1, 0.65] }} transition={{ duration: 3, repeat: Infinity, ease: [0.32, 0.72, 0, 1] }} className="absolute right-24 top-24 size-4 rounded-full bg-[#2f7058]" />
              <div className="relative flex min-h-[510px] flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#8b7d6c]">developer profile</span>
                    <span className="hidden rounded-full bg-[#2f7058]/12 px-3 py-1 font-mono text-xs text-[#245844] sm:inline-flex">open to build</span>
                  </div>
                  <div className="mt-20">
                    <p className="font-mono text-sm text-[#8b7d6c]">Current focus</p>
                    <p className="mt-3 text-4xl font-extrabold tracking-tight">Real-time + AI apps</p>
                    <p className="mt-4 max-w-[18rem] text-sm leading-6 text-[#6b5f51] sm:max-w-sm">
                      Collaborative interfaces, voice-first learning, communication products, and backend paths that can scale past the prototype stage.
                    </p>
                  </div>
                </div>
                <div className="grid gap-3">
                  {[
                    ["400+", "DSA problems solved"],
                    ["Top 11%", "programming contest rank"],
                    ["8.08", "current GPA"],
                  ].map(([value, label], index) => (
                    <motion.div
                      key={label}
                      animate={{ x: index === 1 ? [0, 10, 0] : [0, -6, 0] }}
                      transition={{ duration: 7 + index, repeat: Infinity, ease: [0.32, 0.72, 0, 1] }}
                      className="flex items-center justify-between gap-4 rounded-3xl border border-[#211b16]/8 bg-white/58 px-4 py-3"
                    >
                      <span className="text-sm text-[#776a5a]">{label}</span>
                      <span className="font-mono text-lg font-bold">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Bento>
        </ParallaxBlock>
      </section>

      <section className="border-y border-[#211b16]/8 bg-white/32 py-4">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="marquee-track inline-flex gap-8 pr-8 font-mono text-xs uppercase tracking-[0.22em] text-[#806c55]">
            {Array.from({ length: 2 }).flatMap((_, repeat) =>
              ["Next.js", "Socket.IO", "AI apps", "Redis", "RabbitMQ", "MongoDB", "Docker", "System Design"].map((item) => (
                <span key={`${repeat}-${item}`} className="inline-flex items-center gap-8">
                  {item}
                  <span className="h-px w-12 bg-[#211b16]/16" />
                </span>
              )),
            )}
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-[1440px] px-4 py-24 md:px-8 md:py-32">
        <div className="mb-10 max-w-3xl">
          <Eyebrow>Education</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-none tracking-tight md:text-6xl">Computer science foundations, applied through shipping.</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <ParallaxBlock amount={70}>
            <Bento>
              <div className="grid gap-10 p-7 md:grid-cols-[1fr_0.34fr] md:p-10">
                <div>
                  <GraduationCap size={36} weight="regular" className="text-[#2f7058]" />
                  <h3 className="mt-8 text-4xl font-extrabold tracking-tight">B.Tech in Computer Science</h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-[#6b5f51]">
                    Studying at Bennett University from September 2023 to September 2027, with coursework that supports the way I build: algorithms for speed, databases for durability, networks for real-time systems, and software engineering for maintainable delivery.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {coursework.map((item) => (
                      <span key={item} className="rounded-full border border-[#211b16]/10 bg-white/54 px-3 py-1.5 text-sm font-medium text-[#6b5f51]">{item}</span>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.7rem] bg-[#211b16] p-6 text-[#fffaf0]">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/50">current GPA</p>
                  <p className="mt-5 font-mono text-5xl font-bold">8.08</p>
                  <p className="mt-4 text-sm leading-6 text-white/62">Bennett University, Greater Noida</p>
                </div>
              </div>
            </Bento>
          </ParallaxBlock>
          <ParallaxBlock amount={-85}>
            <Bento>
              <div className="flex h-full min-h-[360px] flex-col justify-between p-7 md:p-10">
                <Student size={34} weight="regular" className="text-[#c27048]" />
                <div>
                  <p className="font-mono text-4xl font-bold">4509 / 40k</p>
                  <p className="mt-4 text-base leading-7 text-[#6b5f51]">Top 11% placement in a global programming contest, alongside 400+ LeetCode problems across dynamic programming, graphs, greedy methods, and binary search.</p>
                </div>
              </div>
            </Bento>
          </ParallaxBlock>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-[1440px] px-4 pb-24 md:px-8 md:pb-32">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <Eyebrow>Projects</Eyebrow>
            <h2 className="mt-5 max-w-4xl text-4xl font-extrabold leading-none tracking-tight md:text-6xl">Product-minded builds with real engineering pressure.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#6b5f51]">Each project is framed around a real product problem: collaboration latency, AI tutoring interaction, or communication reliability.</p>
        </div>
        <div className="grid gap-5">
          {projects.map((project, index) => (
            <ParallaxBlock key={project.title} amount={index % 2 === 0 ? 55 : -55}>
              <Bento>
                <article className="grid gap-6 p-5 md:grid-cols-[0.82fr_1.18fr] md:p-7">
                  <div className={`flex min-h-72 flex-col justify-between rounded-[1.7rem] p-6 text-[#fffaf0] ${index === 0 ? "bg-[#203b32]" : index === 1 ? "bg-[#4d3428]" : "bg-[#22242b]"}`}>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/55">{project.type}</p>
                      <h3 className="mt-5 text-5xl font-extrabold tracking-tight">{project.title}</h3>
                    </div>
                    <div>
                      <p className="font-mono text-3xl font-bold">{project.metric}</p>
                      <p className="mt-1 text-sm text-white/58">{project.metricLabel}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-8 py-2">
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span key={item} className="rounded-full bg-[#211b16]/6 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#806c55]">{item}</span>
                        ))}
                      </div>
                      <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5f5549]">{project.copy}</p>
                      <div className="mt-7 grid gap-3 md:grid-cols-3">
                        {project.proof.map((item) => (
                          <div key={item} className="rounded-3xl border border-[#211b16]/8 bg-white/48 p-4 text-sm font-semibold text-[#5f5549]">
                            <ArrowBendDownRight size={17} weight="regular" className="mb-4 text-[#2f7058]" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <ButtonLink href={project.href} tone="light">Repository</ButtonLink>
                      {project.live ? <ButtonLink href={project.live}>Live preview</ButtonLink> : null}
                    </div>
                  </div>
                </article>
              </Bento>
            </ParallaxBlock>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-[1440px] px-4 pb-24 md:px-8 md:pb-32">
        <div className="mb-10 max-w-4xl">
          <Eyebrow>Skills</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-none tracking-tight md:text-6xl">A stack for building interactive systems end to end.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <ParallaxBlock key={skill.group} amount={index % 2 ? -45 : 45} className={index === 0 || index === 2 ? "md:col-span-3" : "md:col-span-2"}>
                <Bento>
                  <div className="min-h-64 p-7">
                    <Icon size={30} weight="regular" className="text-[#2f7058]" />
                    <h3 className="mt-9 text-3xl font-extrabold tracking-tight">{skill.group}</h3>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span key={item} className="rounded-full border border-[#211b16]/10 bg-white/56 px-3 py-1.5 text-sm font-medium text-[#6b5f51]">{item}</span>
                      ))}
                    </div>
                  </div>
                </Bento>
              </ParallaxBlock>
            );
          })}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1440px] px-4 pb-12 md:px-8">
        <ParallaxBlock amount={70}>
          <Bento>
            <div className="grid gap-10 p-7 md:grid-cols-[1fr_0.62fr] md:p-10">
              <div>
                <Eyebrow>Contact</Eyebrow>
                <h2 className="mt-6 max-w-4xl text-4xl font-extrabold leading-none tracking-tight md:text-6xl">Have an idea that needs a real product shape?</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6b5f51]">I am currently adding more work and case-study detail to this portfolio. For now, the fastest way to reach me is by phone or GitHub.</p>
              </div>
              <div className="flex flex-col justify-end gap-4">
                <a href="tel:+917289907531" className="flex items-center gap-3 rounded-3xl border border-[#211b16]/10 bg-white/52 p-5 text-sm font-bold text-[#5f5549]">
                  <PhoneCall size={18} weight="regular" />
                  +91 7289907531
                </a>
                <ButtonLink href="https://github.com/VampKunal">Open GitHub</ButtonLink>
              </div>
            </div>
          </Bento>
        </ParallaxBlock>
      </section>
    </main>
  );
}
