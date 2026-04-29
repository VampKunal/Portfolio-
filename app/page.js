import {
  ArrowBendDownRight,
  Brain,
  BracketsCurly,
  Database,
  GitBranch,
  GraduationCap,
  Lightning,
  MonitorPlay,
  Network,
  PhoneCall,
  RocketLaunch,
  Stack,
} from "@phosphor-icons/react/dist/ssr";
import ButtonLink from "@/components/ButtonLink";
import MobileNav from "@/components/MobileNav";

const projects = [
  {
    title: "IdeaRoom",
    label: "Real-time collaborative whiteboard",
    stack: "Next.js, Node.js, Socket.IO, MongoDB, Redis, RabbitMQ, Docker",
    metric: "sub-100ms",
    metricLabel: "canvas sync latency",
    href: "https://github.com/VampKunal/IdeaRoom",
    live: "https://idea-room-ashy.vercel.app",
    points: [
      "Built multi-user drawing and live canvas synchronization with Socket.IO.",
      "Architected a 4-service backend across gateway, auth, collaboration, and snapshots.",
      "Improved retrieval by 40% with Redis caching and RabbitMQ-backed snapshot writes.",
    ],
  },
  {
    title: "EKLAVYA",
    label: "AI-powered voice tutor",
    stack: "Next.js, TypeScript, OpenAI API, Web Speech API",
    metric: "adaptive",
    metricLabel: "quiz difficulty engine",
    href: "https://github.com/VampKunal/EKLAVYA",
    live: "",
    points: [
      "Created hands-free lessons with speech recognition and text-to-speech flows.",
      "Generated personalized study material and practice questions through AI APIs.",
      "Adjusted quiz complexity from rolling student performance metrics.",
    ],
  },
  {
    title: "VIBLY",
    label: "Real-time chat and video platform",
    stack: "React, Node.js, MongoDB, Stream APIs, Zustand, Tailwind CSS",
    metric: "HD",
    metricLabel: "chat and video calls",
    href: "https://github.com/VampKunal/VIBLY",
    live: "",
    points: [
      "Used Stream APIs for low-latency chat and video without managing WebRTC infrastructure.",
      "Implemented friend requests, presence indicators, and customizable user themes.",
      "Reduced redundant client requests with Zustand and React Query caching.",
    ],
  },
];

const skills = [
  { group: "Languages", items: ["C++", "Python", "JavaScript", "TypeScript"], icon: BracketsCurly },
  { group: "Frontend", items: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS"], icon: MonitorPlay },
  { group: "Backend", items: ["Node.js", "Express.js", "Socket.IO", "Stream APIs"], icon: Network },
  { group: "Data", items: ["MongoDB", "PostgreSQL", "Redis", "RabbitMQ"], icon: Database },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "Vercel", "Railway"], icon: GitBranch },
];

const coursework = [
  "Data Structures",
  "Analysis of Algorithms",
  "Database Management",
  "Artificial Intelligence",
  "System Design",
  "Computer Networks",
  "Software Engineering",
];

function Shell({ children, className = "", style }) {
  return (
    <div className={`min-w-0 max-w-full rounded-[2rem] bg-black/[0.035] p-1.5 ring-1 ring-black/[0.055] ${className}`} style={style}>
      <div className="h-full min-w-0 overflow-hidden rounded-[calc(2rem-0.375rem)] bg-[color:var(--panel)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.88),0_28px_85px_-48px_rgba(23,23,20,0.48)]">
        {children}
      </div>
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <span className="inline-flex rounded-full border border-[color:var(--line)] bg-white/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main id="top" className="relative overflow-hidden">
      <MobileNav />

      <section className="mx-auto grid min-h-[100dvh] w-full max-w-[1400px] grid-cols-1 gap-10 px-4 pb-16 pt-32 md:px-8 md:pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="flex min-w-0 flex-col justify-center">
          <div className="reveal" style={{ "--delay": "80ms" }}>
            <Eyebrow>Full-stack developer - New Delhi, India</Eyebrow>
          </div>
          <h1 className="reveal mt-7 max-w-[11ch] text-5xl font-semibold leading-[0.95] tracking-tight text-[color:var(--foreground)] md:text-7xl lg:text-8xl" style={{ "--delay": "160ms" }}>
            Real-time systems with an AI edge.
          </h1>
          <p className="mobile-safe reveal mt-7 text-base leading-8 text-[color:var(--muted)] md:max-w-[62ch] md:text-lg" style={{ "--delay": "250ms" }}>
            I am Kunal Rai, a B.Tech computer science student at Bennett University building collaborative canvases,
            voice-first learning tools, and social communication products with practical backend architecture.
          </p>
          <div className="reveal mt-9 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap" style={{ "--delay": "330ms" }}>
            <ButtonLink href="#work">View projects</ButtonLink>
            <ButtonLink href="tel:+917289907531" tone="light">Start a conversation</ButtonLink>
          </div>
        </div>

        <div className="reveal flex min-w-0 items-center lg:justify-end" style={{ "--delay": "260ms" }}>
          <Shell className="mobile-safe w-full lg:max-w-xl rotate-0 lg:rotate-[1.5deg]">
            <div className="relative min-h-[560px] overflow-hidden p-6 md:p-8">
              <div className="absolute right-8 top-8 h-36 w-36 rounded-full border border-[color:var(--line-strong)] orbital-ring" />
              <div className="absolute right-20 top-20 size-3 rounded-full bg-[color:var(--accent)] pulse-dot" />
              <div className="relative flex h-full min-h-[500px] flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">Candidate system</span>
                    <span className="rounded-full bg-[color:var(--accent)]/12 px-3 py-1 font-mono text-xs text-[color:var(--accent-dark)]">online</span>
                  </div>
                  <div className="mt-16">
                    <p className="font-mono text-sm text-[color:var(--muted)]">Bennett University</p>
                    <p className="mt-3 text-4xl font-semibold tracking-tight">8.08 GPA</p>
                    <p className="mt-4 max-w-[calc(100vw-5rem)] text-sm leading-6 text-[color:var(--muted)] md:max-w-sm">
                      Computer Science undergraduate focused on full-stack engineering, real-time collaboration, and AI-assisted learning.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3">
                  {[
                    ["400+", "DSA problems solved"],
                    ["Top 11%", "global programming contest"],
                    ["4-service", "IdeaRoom backend"],
                  ].map(([value, label], index) => (
                    <div
                      key={label}
                      className={`flex items-center justify-between gap-4 rounded-2xl border border-[color:var(--line)] bg-white/54 px-4 py-3 ${
                        index % 2 === 0 ? "" : "md:translate-x-[18px]"
                      }`}
                    >
                      <span className="min-w-0 text-sm text-[color:var(--muted)]">{label}</span>
                      <span className="shrink-0 pr-2 font-mono text-base font-semibold md:pr-0 md:text-lg">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Shell>
        </div>
      </section>

      <section className="border-y border-[color:var(--line)] bg-[rgba(255,254,250,0.42)] py-4">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="marquee-track inline-flex gap-8 pr-8 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
            {Array.from({ length: 2 }).flatMap((_, repeat) =>
              ["Next.js", "Socket.IO", "Redis", "RabbitMQ", "OpenAI API", "MongoDB", "Docker", "System Design"].map((item) => (
                <span key={`${repeat}-${item}`} className="inline-flex items-center gap-8">
                  {item}
                  <span className="h-px w-12 bg-[color:var(--line-strong)]" />
                </span>
              )),
            )}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div className="reveal md:sticky md:top-32 md:h-max">
            <Eyebrow>Selected builds</Eyebrow>
            <h2 className="mt-5 max-w-[10ch] text-4xl font-semibold leading-none tracking-tight md:text-6xl">
              Practical products, live constraints.
            </h2>
          </div>
          <div className="grid gap-5">
            {projects.map((project, index) => (
              <Shell key={project.title} className="reveal" style={{ "--delay": `${index * 120}ms` }}>
                <article className="grid gap-7 p-5 md:grid-cols-[0.9fr_1.1fr] md:p-7">
                  <div className="flex min-h-64 flex-col justify-between rounded-[1.4rem] bg-[color:var(--foreground)] p-5 text-[#fffefa]">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/55">{project.label}</span>
                      <h3 className="mt-5 text-4xl font-semibold tracking-tight">{project.title}</h3>
                    </div>
                    <div>
                      <p className="font-mono text-3xl font-semibold">{project.metric}</p>
                      <p className="mt-1 text-sm text-white/58">{project.metricLabel}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-7 py-1">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">{project.stack}</p>
                      <ul className="mt-6 grid gap-4">
                        {project.points.map((point) => (
                          <li key={point} className="flex gap-3 text-sm leading-6 text-[color:var(--muted)]">
                            <ArrowBendDownRight className="mt-1 shrink-0 text-[color:var(--accent)]" size={17} weight="regular" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <ButtonLink href={project.href} tone="light">GitHub</ButtonLink>
                      {project.live ? <ButtonLink href={project.live} tone="dark">Live site</ButtonLink> : null}
                    </div>
                  </div>
                </article>
              </Shell>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-[1400px] px-4 pb-24 md:px-8 md:pb-32">
        <div className="reveal mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <Eyebrow>Engineering stack</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-none tracking-tight md:text-6xl">
              Comfortable across the product surface and the backend path.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[color:var(--muted)]">
            The stack is shaped by real-time products: fast clients, event-driven services, and data layers that can keep up.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Shell key={skill.group} className={`reveal ${index === 1 || index === 2 ? "md:col-span-2" : "md:col-span-3"}`}>
                <div className="min-h-56 p-6">
                  <Icon size={26} weight="regular" className="text-[color:var(--accent)]" />
                  <h3 className="mt-8 text-2xl font-semibold tracking-tight">{skill.group}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="rounded-full border border-[color:var(--line)] bg-white/50 px-3 py-1.5 text-sm text-[color:var(--muted)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Shell>
            );
          })}
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-[1400px] px-4 pb-24 md:px-8 md:pb-32">
        <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
          <Shell className="reveal">
            <div className="p-7 md:p-10">
              <Eyebrow>Education</Eyebrow>
              <div className="mt-10 flex flex-col justify-between gap-10 md:flex-row">
                <div>
                  <GraduationCap size={34} weight="regular" className="text-[color:var(--accent)]" />
                  <h2 className="mt-7 text-4xl font-semibold tracking-tight">B.Tech in Computer Science</h2>
                  <p className="mt-4 text-[color:var(--muted)]">Bennett University, Greater Noida - Sep 2023 to Sep 2027</p>
                </div>
                <div className="rounded-[1.5rem] bg-[color:var(--foreground)] p-6 text-[#fffefa]">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/55">current GPA</p>
                  <p className="mt-4 font-mono text-5xl font-semibold">8.08</p>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-2">
                {coursework.map((item) => (
                  <span key={item} className="rounded-full border border-[color:var(--line)] bg-white/55 px-3 py-1.5 text-sm text-[color:var(--muted)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Shell>

          <Shell className="reveal">
            <div className="flex h-full flex-col justify-between p-7 md:p-10">
              <div>
                <Eyebrow>Problem solving</Eyebrow>
                <h2 className="mt-8 text-4xl font-semibold leading-none tracking-tight">Competitive programming record.</h2>
              </div>
              <div className="mt-12 grid gap-4">
                <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-white/55 p-5">
                  <Lightning size={25} weight="regular" className="text-[color:var(--accent)]" />
                  <p className="mt-7 font-mono text-4xl font-semibold">400+</p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">LeetCode problems across DP, graphs, greedy, and binary search.</p>
                </div>
                <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-white/55 p-5">
                  <RocketLaunch size={25} weight="regular" className="text-[color:var(--accent)]" />
                  <p className="mt-7 font-mono text-4xl font-semibold">4509 / 40k</p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">Top 11% in a global competitive programming contest.</p>
                </div>
              </div>
            </div>
          </Shell>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1400px] px-4 pb-10 md:px-8">
        <Shell className="reveal">
          <div className="grid gap-10 p-7 md:grid-cols-[1fr_0.75fr] md:p-10">
            <div>
              <Eyebrow>Available for the next build</Eyebrow>
              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-none tracking-tight md:text-6xl">
                Let us turn the next idea into something people can actually use.
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-4">
              <a href="tel:+917289907531" className="flex items-center gap-3 text-sm text-[color:var(--muted)] fluid-transition hover:text-[color:var(--foreground)]">
                <PhoneCall size={18} weight="regular" />
                +91 7289907531
              </a>
              <ButtonLink href="https://github.com/VampKunal">Open GitHub</ButtonLink>
            </div>
          </div>
        </Shell>
      </section>
    </main>
  );
}
