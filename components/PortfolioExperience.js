"use client";

import { useState, useEffect, useRef } from 'react';
import {
  Moon,
  Sun,
  ArrowRight,
  Code2,
  Download,
  ChevronRight,
  Database,
  Globe,
  Mail,
  Send,
  Terminal,
  Layers,
  Plus,
  TrendingUp,
  Activity,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import {
  GithubLogo as GithubIcon,
  LinkedinLogo as LinkedinIcon,
  ArrowSquareOut as ExternalIcon
} from "@phosphor-icons/react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView, useMotionValueEvent } from 'motion/react';

// --- Data ---

const projects = [
  {
    title: "IdeaRoom",
    category: "System Module // 01",
    desc: "Real Time whiteboard collabration for students and professionals",
    metric: "sub-1ms",
    image: "/image.png",
    href: "https://github.com/VampKunal/IdeaRoom",
    live: "idea-room-ashy.vercel.app",
    stack: ["MERN", "Socket.IO", "Redis", "Microservices", "Docker", "Mongoose,RabbitMQ"]
  },
  {
    title: "EKLAVYA",
    category: "AI Tutor // 02",
    desc: "AI Tutor for students and professionals",
    metric: "v2.0-core",
    image: "/image.png",
    href: "https://github.com/VampKunal/EKLAVYA",
    stack: ["TypeScript", "OpenAI API", "Node.js, Supabase", "shadcnUI", "Mongoose"]
  },
  {
    title: "VIBLY",
    category: "Social Media // 03",
    desc: "A next-gen social media platform designed for seamless content sharing, real-time interactions, and community building.",
    metric: "99.9% Up",
    image: "/image.png",
    href: "https://github.com/VampKunal/VIBLY",
    stack: ["StreamAPI, MERN , TailwindCSS, MongoDB , Zustand ,Socket.io"]
  },
  {
    title: "CoreSight",
    category: "Edge Node // 04",
    desc: "A web App for users to get suggestions on there Gym postures and diet recommendations",
    metric: "IoT-Optimization",
    image: "/image.png",
    href: "https://github.com/VampKunal/CoreSight",
    stack: ["python", "MERN", "openaiAPI,React Native, JWT , Mediapipe , OpenCV,Socket.io, TailwindCSS,Mongoose"]
  },
  {
    title: "WallSmart1",
    category: "Secure Core // 05",
    desc: "A web app made for walmart hackathon for there inventory management issue",
    metric: "Hackathon",
    image: "/image.png",
    href: "https://github.com/VampKunal/WallSmart1",
    stack: ["nextjs , huggingface , openaiAPI , mongoose"]
  }
];

const education = [
  {
    degree: "B.Tech Computer Science",
    institution: "Bennett University",
    description: "Focusing on full-stack engineering and real-time systems.",
    year: "2023 - 2027",
    grade: "8.08 CGPA / 10"
  },
  {
    degree: "Class 12",
    institution: "Vivekanand International Senior Secondary School",
    description: "Focused on higher-secondary foundations for engineering.",
    year: "Graduated",
    grade: "Foundation"
  },
  {
    degree: "Class 10",
    institution: "Vivekanand International Senior Secondary School",
    description: "Built the academic base: math, science, and disciplined study.",
    year: "Graduated",
    grade: "Base"
  }
];

const skills = [
  "Next.js", "React", "Node.js", "Express", "Socket.IO", "MongoDB", "PostgreSQL", "Redis", "RabbitMQ", "TypeScript", "Python", "C++", "TailwindCSS", "Docker", "Git", "OpenAI API"
];

const posts = [
  {
    title: "Rebuilding FitTrack with Microservices & AI",
    date: "Apr 2026",
    readTime: "6 min",
    slug: "fittrack-microservices-ai",
    href: "https://www.linkedin.com/posts/kunal-rai-104347259_reactnative-fastapi-nodejs-activity-7449498115059101696-0t8s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-Wp9QBBjrhlq1ErLGtN7hpgAOl-GOR7zU"
  },
  {
    title: "Why Revisiting DSA Problems Works Better Than Solving New Ones",
    date: "Apr 2026",
    readTime: "4 min",
    slug: "dsa-revision-strategy",
    href: "https://www.linkedin.com/posts/kunal-rai-104347259_leetcode-dsa-systemdesign-activity-7445744402414882816-OrUA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-Wp9QBBjrhlq1ErLGtN7hpgAOl-GOR7zU"
  },
  {
    title: "Competitive Programming: Why Improvement Isn’t Linear",
    date: "Mar 2026",
    readTime: "3 min",
    slug: "cp-improvement-not-linear",
    href: "https://www.linkedin.com/posts/kunal-rai-104347259_leetcode-competitiveprogramming-datastructures-activity-7438882209840848897-6NT9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-Wp9QBBjrhlq1ErLGtN7hpgAOl-GOR7zU"
  },
  {
    title: "From 200 to 300 DSA Problems: What Actually Changed",
    date: "Mar 2026",
    readTime: "4 min",
    slug: "dsa-300-lessons",
    href: "https://www.linkedin.com/posts/kunal-rai-104347259_leetcode-systemdesign-dsa-activity-7429788328708726784-ahy3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-Wp9QBBjrhlq1ErLGtN7hpgAOl-GOR7zU"
  },
  {
    title: "IdeaRoom: Building a Real-Time Collaboration Platform",
    date: "Feb 2026",
    readTime: "6 min",
    slug: "idearoom-realtime-platform",
    href: "https://www.linkedin.com/posts/kunal-rai-104347259_buildinpublic-webrtc-realtimeapps-activity-7423387051091464193-Eefx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-Wp9QBBjrhlq1ErLGtN7hpgAOl-GOR7zU"
  },
  {
    title: "What Deployment Taught Me About Real Systems",
    date: "Feb 2026",
    readTime: "5 min",
    slug: "deployment-real-world-lessons",
    href: "https://www.linkedin.com/posts/kunal-rai-104347259_softwareengineering-webdevelopment-devops-activity-7420818824142315521-9cFr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-Wp9QBBjrhlq1ErLGtN7hpgAOl-GOR7zU"
  }
];

const codolioStats = {
  totalSolved: 480,
  dsaSolved: 421,
  cpSolved: 59,
  breakdown: {
    easy: 150,
    medium: 230,
    hard: 41
  },
  ratings: {
    leetcode: 1643,
    codechef: 1421
  },
  streak: 96,
  activeDays: 245,
  globalRank: 8487
};

// --- Components ---

const ThemeToggle = ({ darkMode, toggle }) => (
  <button
    onClick={toggle}
    className="p-2 hover:text-primary transition-colors active:scale-90"
    aria-label="Toggle theme"
  >
    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

const Navbar = ({ darkMode, toggleDarkMode, activeSection }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Intro', href: '#intro', id: 'intro' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Codolio', href: '#codolio', id: 'codolio' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Posts', href: '#posts', id: 'posts' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - prevScroll;
    if (latest > 100) {
      if (diff > 0 && !isHidden) setIsHidden(true);
      else if (diff < 0 && isHidden) setIsHidden(false);
    } else {
      setIsHidden(false);
    }
    setPrevScroll(latest);
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 w-full z-50 border-b border-grid-line/50 glass-panel bg-background/95"
      >
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
          style={{ scaleX }}
        />
        <nav className="flex justify-between items-center px-4 md:px-12 h-16 w-full max-w-screen-2xl mx-auto">
          <div className="font-mono font-black text-primary tracking-tighter text-xl flex items-center gap-2">
            <div className="w-2 h-2 bg-primary"></div>
            KUNAL_RAI.TECH
          </div>

          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-mono text-[11px] uppercase tracking-widest transition-colors ${activeSection === link.id ? 'text-primary' : 'text-foreground/60 hover:text-primary'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle darkMode={darkMode} toggle={toggleDarkMode} />
            <button
              className="lg:hidden p-2 text-foreground/60 active:scale-90"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Terminal size={24} />
            </button>
            <a href="/kunal_rai_resume.pdf" download className="bg-primary text-white font-mono text-[11px] tracking-widest uppercase px-6 py-2.5 hover:bg-primary-dark transition-all active:scale-95 hidden sm:flex items-center gap-2">
              Resume <Download size={14} />
            </a>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/60 backdrop-blur-xl flex flex-col items-center justify-center p-6 lg:hidden"
          >
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-md space-y-12 relative z-10 glass-panel p-8 border border-grid-line shadow-2xl rounded-sm"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute -top-12 right-0 p-4 font-mono text-primary flex items-center gap-2 group"
              >
                <span className="text-[10px] uppercase tracking-widest">Terminate_Session</span>
                <Plus size={24} className="rotate-45 group-hover:rotate-135 transition-transform" />
              </button>

              <div className="space-y-4">
                <div className="font-mono text-[10px] text-primary uppercase tracking-[0.4em] mb-8">Navigation_Matrix</div>
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] text-foreground/20">0{idx}</span>
                      <span className={`text-4xl sm:text-6xl font-sans font-black uppercase tracking-tighter transition-all group-hover:text-primary ${activeSection === link.id ? 'text-primary italic' : 'text-foreground'}`}>
                        {link.name}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-8 border-t border-grid-line grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="font-mono text-[8px] text-foreground/30 uppercase">Status</div>
                  <div className="font-sans font-bold text-xs flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    OPERATIONAL
                  </div>
                </div>
                <div className="space-y-2">
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SectionHeader = ({ title, subtitle, id }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex flex-col md:flex-row md:items-end justify-between border-b border-grid-line pb-4 mb-12"
  >
    <h2 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tighter text-foreground">
      {title.replace(' ', '_')}
    </h2>
    <div className="flex items-center gap-4 mt-4 md:mt-0">
      <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">{subtitle || '/ ARCHIVE_01'}</span>
      {id && <span className="font-mono text-[10px] text-primary">#{(id).toUpperCase()}</span>}
    </div>
  </motion.div>
);

const ArchitecturalMarker = ({ className }) => (
  <div className={`relative ${className}`}>
    <div className="absolute top-[-10px] left-[-10px] w-[20px] h-px bg-primary"></div>
    <div className="absolute top-[-10px] left-[-10px] w-px h-[20px] bg-primary"></div>
  </div>
);

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [displayText, setDisplayText] = useState("");
  const fullText = "Full-stack engineer specializing in real-time systems, AI-driven tools, and precision-engineered user interfaces.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="intro"
      ref={targetRef}
      className="relative min-h-[90vh] flex items-center px-4 md:px-12 py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 md:space-y-8 z-10"
        >
          <div className="inline-flex items-center gap-3 border border-grid-line bg-background/50 px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            System Status: Operational
          </div>

          <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-8xl leading-[0.9] tracking-tight text-foreground break-words">
            <span className="text-primary ">KUNAL RAI </span>
            FULLSTACK <br />
            DEVELOPER <br />
          </h1>

          <p className="text-lg md:text-2xl font-sans font-bold text-foreground/70 max-w-2xl min-h-[3.5em] leading-relaxed">
            {displayText}<span className="animate-pulse">|</span>
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6 pt-4 md:pt-8">
            <a href="#contact" className="flex-1 sm:flex-none justify-center bg-primary text-white px-8 md:px-10 py-4 md:py-5 font-mono text-[11px] md:text-[12px] uppercase tracking-widest flex items-center gap-3 transition-all active:scale-95 hover:shadow-brutal hover:-translate-x-1 hover:-translate-y-1 text-center">
              Initiate Sequence <ArrowRight size={18} />
            </a>
            <a href="https://github.com/VampKunal" target="_blank" className="flex-1 sm:flex-none justify-center border-2 border-foreground text-foreground px-8 md:px-10 py-4 md:py-5 font-mono text-[11px] md:text-[12px] uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-foreground hover:text-background active:scale-95 text-center">
              Browse GitHub <Code2 size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative mt-10 lg:mt-0"
        >
          <ArchitecturalMarker className="z-20" />
          <div className="bg-background border-2 border-grid-line p-1 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden rounded-sm">
            <div className="bg-foreground flex items-center justify-between px-4 py-2.5">
              <div className="flex gap-2 text-primary font-mono text-xs">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <div className="w-3 h-3 rounded-full bg-foreground/30 border border-grid-line/20"></div>
                <div className="w-3 h-3 rounded-full bg-foreground/30 border border-grid-line/20"></div>
              </div>
              <div className="font-mono text-[10px] text-background/50 tracking-widest uppercase">kunal@rai: ~/sys-root</div>
            </div>
            <div className="p-6 font-mono text-xs text-green-500 bg-[#1A1B26] min-h-[320px]">
              <div className="flex justify-between mb-6">
                <span className="bg-primary text-white px-2 py-0.5 font-bold text-[10px]">BOOT_SEQUENCE</span>
                <span className="text-foreground/30 font-mono text-[10px]">VER: 1.0.0</span>
              </div>
              <div className="space-y-2 opacity-90">
                <p><span className="text-orange-400">$</span> initializing core-modules...</p>
                <p className="text-foreground/40 pl-4">[OK] Frontend_Engine</p>
                <p className="text-foreground/40 pl-4">[OK] Backend_Infrastructure</p>
                <p className="text-foreground/40 pl-4">[OK] Design_System_Tokens</p>
                <p className="mt-4"><span className="text-orange-400">$</span> systemctl status brain</p>
                <p className="text-purple-400">● brain.service - Creative Intelligence</p>
                <p className="text-foreground/40 pl-4">Active: active (running) since 1999</p>
                <div className="mt-8 pt-4 border-t border-white/10 text-[11px] italic text-foreground/40">
                  "The code is the architecture of the mind."
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-background glass-panel px-6 py-4 border-2 border-foreground z-20 hidden lg:block">
            <div className="text-[10px] font-mono text-foreground/40">LATENCY</div>
            <div className="text-2xl font-bold font-mono tracking-tighter text-primary">12ms</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalSteps = duration * 60;
      const stepValue = end / totalSteps;

      const timer = setInterval(() => {
        start += stepValue;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  const stats = [
    { value: 400, suffix: '+', label: 'Algorithms_Mastered' },
    { value: 5, suffix: '', label: 'Production_Builds' },
    { value: 8.08, suffix: '', label: 'Academic_Efficiency' },
  ];

  return (
    <section className="px-4 md:px-12 py-12 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 border border-grid-line glass-panel overflow-hidden">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`p-10 md:p-12 flex flex-col items-center justify-center group hover:bg-background transition-all cursor-crosshair ${idx < 2 ? 'md:border-r md:border-grid-line' : ''} border-b md:border-b-0 border-grid-line`}
          >
            <span className="font-sans font-black text-5xl md:text-7xl group-hover:text-primary transition-colors flex items-baseline">
              <Counter value={stat.value} />
              {stat.suffix}
            </span>
            <span className="font-mono text-[10px] tracking-widest uppercase text-foreground/40 mt-2 text-center">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="px-4 md:px-12 py-24 max-w-screen-2xl mx-auto">
      <SectionHeader title="Selected Works" id="projects" subtitle="/ SYSTEM_MODULES" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Large Feature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          layout
          className={`group relative overflow-hidden border border-grid-line shadow-xl aspect-video md:aspect-[16/10] ${showAll ? 'md:col-span-12' : 'md:col-span-8'}`}
        >
          <img
            src="/image.png"
            alt={projects[0].title}
            className="w-full h-full object-contain bg-background grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex flex-col justify-end p-6 md:p-12">
            <span className="font-mono text-xs text-primary uppercase tracking-widest mb-2">{projects[0].category}</span>
            <h3 className="font-sans font-black text-2xl md:text-4xl text-background mb-4 uppercase">{projects[0].title}</h3>
            <p className="text-background/70 max-w-lg mb-6 md:mb-8 text-sm md:text-base leading-relaxed">{projects[0].desc}</p>
            <div className="flex gap-4">
              <a href={projects[0].href} target="_blank" rel="noopener noreferrer" className="w-fit flex items-center gap-2 text-background border-b border-background/30 pb-1 font-mono text-[10px] md:text-xs uppercase tracking-widest hover:text-primary hover:border-primary transition-colors">
                View Source <ExternalIcon size={14} />
              </a>
              {projects[0].live && (
                <a href={`https://${projects[0].live}`} target="_blank" rel="noopener noreferrer" className="w-fit flex items-center gap-2 text-background border-b border-background/30 pb-1 font-mono text-[10px] md:text-xs uppercase tracking-widest hover:text-primary hover:border-primary transition-colors">
                  Live Demo <Globe size={14} />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Dynamic Card Grid */}
        <div className={`${showAll ? 'md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8' : 'md:col-span-4 flex flex-col gap-8'}`}>
          <AnimatePresence mode="popLayout">
            {visibleProjects.slice(1).map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`${!showAll && idx === 0 ? 'flex-1 bg-primary border-2 border-foreground' : 'border border-grid-line glass-panel'} p-6 md:p-8 flex flex-col justify-between group cursor-pointer transition-all hover:translate-x-1 hover:translate-y-1 relative shadow-lg min-h-[220px] md:min-h-[200px]`}
              >
                <div className={`absolute top-4 right-4 ${!showAll && idx === 0 ? 'text-background/20' : 'text-foreground/10'} font-black font-mono text-4xl`}>0{idx + 2}</div>
                <div className="flex justify-between items-start">
                  <Layers size={40} className={!showAll && idx === 0 ? "text-white" : "text-primary"} />
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    <ArrowRight className={`${!showAll && idx === 0 ? 'text-background' : 'text-primary'} -rotate-45 group-hover:rotate-0 transition-transform`} />
                  </a>
                </div>
                <div>
                  <h3 className={`font-sans font-black text-xl md:text-2xl ${!showAll && idx === 0 ? 'text-background' : 'text-foreground'} uppercase leading-none`}>{project.title}</h3>
                  <p className={`${!showAll && idx === 0 ? 'text-background/80' : 'text-foreground/50'} font-mono text-[11px] mt-4 tracking-widest`}>{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!showAll && projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-12 flex justify-center mt-4"
          >
            <button
              onClick={() => setShowAll(true)}
              className="w-full sm:w-auto border-2 border-dashed border-grid-line p-6 px-12 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-widest text-foreground/40 hover:text-primary hover:border-primary transition-colors group"
            >
              <Plus size={16} className="group-hover:rotate-90 transition-transform" /> Load More Subsystems
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const Codolio = ({ darkMode }) => {
  const profileCard = darkMode ? "/profileCard dark.png" : "/profileCard.png";
  const devCard = darkMode ? "/devCard dark.png" : "/devCard.png";

  return (
    <section id="codolio" className="px-4 md:px-12 py-24 max-w-screen-2xl mx-auto overflow-hidden">
      <SectionHeader title="Codolio Analytics" id="codolio" subtitle="/ PROFILE_AGGREGATION" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="bg-foreground text-background p-8 border-2 border-primary shadow-brutal relative">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest opacity-60">Performance_Metrics</span>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-background/10 pb-4">
                <div>
                  <div className="text-4xl font-black">{codolioStats.totalSolved}</div>
                  <div className="font-mono text-[10px] opacity-40 uppercase">Total_Problems_Solved</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">#{codolioStats.globalRank}</div>
                  <div className="font-mono text-[10px] opacity-40 uppercase">Global_Rank</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 border border-background/10 bg-background/5">
                  <div className="text-xl font-bold text-green-500">{codolioStats.breakdown.easy}</div>
                  <div className="font-mono text-[8px] opacity-40 uppercase">Easy</div>
                </div>
                <div className="p-4 border border-background/10 bg-background/5">
                  <div className="text-xl font-bold text-yellow-500">{codolioStats.breakdown.medium}</div>
                  <div className="font-mono text-[8px] opacity-40 uppercase">Medium</div>
                </div>
                <div className="p-4 border border-background/10 bg-background/5">
                  <div className="text-xl font-bold text-red-500">{codolioStats.breakdown.hard}</div>
                  <div className="font-mono text-[8px] opacity-40 uppercase">Hard</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-background/5 rounded-sm">
                  <Activity size={20} className="text-primary" />
                  <div>
                    <div className="font-bold">{codolioStats.ratings.leetcode}</div>
                    <div className="font-mono text-[8px] opacity-40 uppercase">LeetCode_Rating</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background/5 rounded-sm">
                  <TrendingUp size={20} className="text-primary" />
                  <div>
                    <div className="font-bold">{codolioStats.ratings.codechef}</div>
                    <div className="font-mono text-[8px] opacity-40 uppercase">CodeChef_Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-grid-line p-6 flex flex-col items-center justify-center text-center">
              <Calendar className="text-primary mb-2" />
              <div className="text-3xl font-black">{codolioStats.streak}</div>
              <div className="font-mono text-[10px] text-foreground/40 uppercase">Day_Max_Streak</div>
            </div>
            <div className="border border-grid-line p-6 flex flex-col items-center justify-center text-center">
              <CheckCircle2 className="text-primary mb-2" />
              <div className="text-3xl font-black">{codolioStats.activeDays}</div>
              <div className="font-mono text-[10px] text-foreground/40 uppercase">Active_Days</div>
            </div>
          </div>

          <a href="https://codolio.com/profile/VampKunal" target="_blank" className="block w-full text-center border-2 border-foreground py-4 font-mono text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-all">
            Open Full Codolio Profile <ExternalIcon className="inline ml-2" size={14} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="font-mono text-xs uppercase tracking-widest text-foreground/40 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Dev_Card
              </div>
              <div className="border border-grid-line p-1 bg-background/30 backdrop-blur-sm shadow-xl hover:border-primary/30 transition-colors">
                <img src={devCard} alt="Developer Card" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="font-mono text-xs uppercase tracking-widest text-foreground/40 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Profile_Card
              </div>
              <div className="border border-grid-line p-1 bg-background/30 backdrop-blur-sm shadow-xl hover:border-primary/30 transition-colors">
                <img src={profileCard} alt="Profile Card" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
};

const SkillsMarquee = () => {
  return (
    <section id="skills" className="py-24 overflow-hidden bg-foreground text-background">
      <div className="px-4 md:px-12 max-w-screen-2xl mx-auto mb-12">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-primary"></div>
          <h2 className="font-sans font-black text-3xl uppercase tracking-tighter italic">CORE_STK // CAPABILITIES</h2>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-content pt-4 pb-4">
          {skills.concat(skills).map((skill, idx) => (
            <div key={idx} className="flex items-center gap-4 md:gap-8 shrink-0">
              <span className="font-sans font-black text-5xl md:text-8xl opacity-20 hover:opacity-100 hover:text-primary transition-all duration-500 cursor-default uppercase">
                {skill}
              </span>
              <div className="w-4 h-4 md:w-8 md:h-8 bg-primary/20 rotate-45 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="px-6 md:px-12 py-24 max-w-screen-2xl mx-auto">
      <SectionHeader title="Academic Path" id="education" subtitle="/ EDUCATION_LOGS" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="border border-grid-line p-8 relative hover:bg-foreground/5 transition-colors group"
          >
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-foreground/20">{edu.year}</div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="font-sans font-black text-2xl uppercase text-foreground group-hover:text-primary transition-colors">{edu.degree}</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-foreground/60 mt-1">{edu.institution}</p>
                <p className="mt-4 text-foreground/70 leading-relaxed">{edu.description}</p>
                <div className="mt-6 inline-block font-mono text-[10px] bg-foreground text-background px-3 py-1 uppercase tracking-tighter">
                  Grade: {edu.grade}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Posts = () => {
  return (
    <section id="posts" className="px-4 md:px-12 py-24 max-w-screen-2xl mx-auto">
      <SectionHeader title="Field Notes" id="posts" subtitle="/ THINKING_PROCESS" />
      <div className="grid grid-cols-1 divide-y divide-grid-line border border-grid-line">
        {posts.map((post, idx) => (
          <motion.a
            key={post.slug}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="group flex flex-col md:flex-row md:items-center justify-between px-6 md:px-8 py-8 md:py-10 hover:bg-primary transition-all cursor-pointer overflow-hidden"
          >
            <div className="flex items-center gap-4 md:gap-6">
              <span className="font-mono text-foreground/20 group-hover:text-background/40 transition-colors text-xs md:text-base">0{idx + 1}</span>
              <h3 className="font-sans font-black text-xl md:text-3xl uppercase text-foreground group-hover:text-background transition-colors truncate max-w-[200px] sm:max-w-none">{post.title}</h3>
            </div>
            <div className="flex items-center gap-4 md:gap-6 mt-4 md:mt-0">
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-foreground/40 group-hover:text-background/60 transition-colors">{post.date}</span>
              <div className="w-8 md:w-12 h-px bg-grid-line group-hover:bg-background/20 hidden sm:block"></div>
              <span className="font-mono text-[10px] md:text-xs text-primary group-hover:text-background transition-colors">{post.readTime}</span>
              <ChevronRight className="text-primary group-hover:text-background transition-all group-hover:translate-x-2 w-4 h-4 md:w-6 md:h-6" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    formData.append("access_key", "3602fd87-d35e-4069-b5dd-7c5b9789b84b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 md:px-12 py-24 max-w-screen-2xl mx-auto">
      <SectionHeader title="Initiate Contact" id="contact" subtitle="/ COMMS_MODULE" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-8"
        >
          <h3 className="font-sans font-black text-4xl uppercase tracking-tighter">Ready for the <br /><span className="text-primary">next sequence?</span></h3>
          <p className="text-foreground/70 text-lg leading-relaxed">
            I'm currently available for full-stack engineering roles, technical consultation, or algorithmic research collaborations.
          </p>

          <div className="space-y-4 pt-4">
            <a href="mailto:kunalrai.work@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 border border-grid-line flex items-center justify-center group-hover:border-primary transition-colors">
                <Mail size={20} className="text-foreground/40 group-hover:text-primary" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">Email_Primary</div>
                <div className="font-sans font-bold">kunalrai72899@gmail.com</div>
              </div>
            </a>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 border border-grid-line flex items-center justify-center group-hover:border-primary transition-colors">
                <Database size={20} className="text-foreground/40 group-hover:text-primary" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">Location_Node</div>
                <div className="font-sans font-bold">Delhi, IN / Remote</div>
              </div>
            </div>
          </div>

          <div className="flex gap-6 pt-8">
            <a href="https://github.com/VampKunal" target="_blank" className="w-12 h-12 flex items-center justify-center border-2 border-foreground hover:bg-primary hover:text-background hover:border-primary transition-all">
              <GithubIcon size={20} />
            </a>
            <a href="https://in.linkedin.com/in/kunal-rai-104347259" target="_blank" className="w-12 h-12 flex items-center justify-center border-2 border-foreground hover:bg-primary hover:text-background hover:border-primary transition-all">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-background border border-grid-line p-8 md:p-12 glass-panel"
        >
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 border-b border-grid-line focus-within:border-primary transition-colors">
                <label className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">Sender_Identity</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John_Doe"
                  className="w-full bg-transparent p-2 outline-none font-sans font-bold"
                />
              </div>
              <div className="space-y-2 border-b border-grid-line focus-within:border-primary transition-colors">
                <label className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">Return_Protocol</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@domain.com"
                  className="w-full bg-transparent p-2 outline-none font-sans font-bold"
                />
              </div>
            </div>
            <div className="space-y-2 border-b border-grid-line focus-within:border-primary transition-colors">
              <label className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">Payload_Data</label>
              <textarea
                rows={4}
                name="message"
                required
                placeholder="Establishing connection request..."
                className="w-full bg-transparent p-2 outline-none font-sans font-bold resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full ${status === "success" ? "bg-green-600" : status === "error" ? "bg-red-600" : "bg-primary"} text-white py-6 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:opacity-90 transition-all active:scale-95 shadow-brutal disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {status === "sending" ? "Transmitting Signal..." : status === "success" ? "Signal Received" : status === "error" ? "Transmission Failed" : "Transmit Signal"}
              <Send size={16} className={status === "sending" ? "animate-pulse" : ""} />
            </button>
            {status === "success" && (
              <p className="font-mono text-[10px] text-green-600 uppercase tracking-widest text-center animate-bounce">
                Connection established. Check your console for confirmation.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="w-full border-t border-grid-line bg-background relative z-10">
    <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-16 w-full gap-12 max-w-screen-2xl mx-auto">
      <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
        <div className="text-foreground font-black font-sans tracking-tighter text-3xl flex items-center gap-2">
          <div className="w-4 h-4 bg-foreground"></div>
          KUNAL RAI
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/30">
          © 2026 ENCRYPTED_CORE
        </div>
      </div>

      <div className="flex gap-12 flex-wrap justify-center">
        <a href="https://github.com/VampKunal" target="_blank" className="font-mono text-[11px] uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">GitHub</a>
        <a href="https://in.linkedin.com/in/kunal-rai-104347259" target="_blank" className="font-mono text-[11px] uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default function PortfolioExperience() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'education', 'projects', 'codolio', 'skills', 'posts', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background selection-primary relative">
      <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none -z-10" />
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} activeSection={activeSection} />

      <main className="relative z-0">
        <Hero />
        <Stats />
        <Projects />
        <Codolio darkMode={darkMode} />
        <SkillsMarquee />
        <Education />
        <Posts />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
