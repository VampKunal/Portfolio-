/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { 
  Moon, 
  Sun, 
  ArrowRight, 
  Code2, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Twitter, 
  Download, 
  ChevronRight,
  Database,
  Cpu,
  Globe,
  Mail,
  Send,
  Terminal,
  Layers,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView, useMotionValueEvent } from 'motion/react';

// --- Components ---

const ThemeToggle = ({ darkMode, toggle }: { darkMode: boolean; toggle: () => void }) => (
  <button 
    onClick={toggle}
    className="p-2 hover:text-primary transition-colors active:scale-90"
    aria-label="Toggle theme"
  >
    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

const Navbar = ({ darkMode, toggleDarkMode, activeSection }: { darkMode: boolean; toggleDarkMode: () => void; activeSection: string }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Intro', href: '#intro', id: 'intro' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Posts', href: '#posts', id: 'posts' },
    { name: 'Coldlio', href: '#coldlio', id: 'coldlio' },
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
        className="fixed top-0 w-full z-50 border-b border-grid-line/50 glass-panel bg-background/80"
      >
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
          style={{ scaleX }}
        />
        <nav className="flex justify-between items-center px-4 md:px-12 h-16 w-full max-w-screen-2xl mx-auto">
          <div className="font-mono font-black text-primary tracking-tighter text-xl flex items-center gap-2">
            <div className="w-2 h-2 bg-primary"></div>
            KUNAL_RAI.SYS
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
            <button className="bg-primary text-white font-mono text-[11px] tracking-widest uppercase px-6 py-2.5 hover:bg-primary-dark transition-all active:scale-95 hidden sm:flex items-center gap-2">
              Download CV <Download size={14} />
            </button>
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
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center p-6 lg:hidden"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-md space-y-12 relative"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute -top-20 right-0 p-4 font-mono text-primary flex items-center gap-2 group"
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
                  <div className="font-mono text-[8px] text-foreground/30 uppercase">Uptime</div>
                  <div className="font-sans font-bold text-xs text-primary">8.08_GPA</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SectionHeader = ({ title, subtitle, id }: { title: string; subtitle?: string; id?: string }) => (
  <div id={id} className="flex flex-col md:flex-row md:items-end justify-between border-b border-grid-line pb-4 mb-12">
    <h2 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tighter text-foreground">
      {title.replace(' ', '_')}
    </h2>
    <div className="flex items-center gap-4 mt-4 md:mt-0">
      <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">{subtitle || '/ ARCHIVE_01'}</span>
      {id && <span className="font-mono text-[10px] text-primary">#{(id).toUpperCase()}</span>}
    </div>
  </div>
);

const ArchitecturalMarker = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="absolute top-[-10px] left-[-10px] w-[20px] h-px bg-primary"></div>
    <div className="absolute top-[-10px] left-[-10px] w-px h-[20px] bg-primary"></div>
  </div>
);

// --- Sections ---

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [displayText, setDisplayText] = useState("");
  const fullText = "Full-stack engineer specializing in scalable systems and precision-engineered user interfaces.";

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
      {/* Parallax Grid Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-grid opacity-20 pointer-events-none"
      />

      {/* Annotation Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-32 left-10 font-mono text-[10px] text-primary rotate-90 hidden lg:block">REF_LAYER_01 // GRID_ALIGN</div>
      </div>

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
            System Status: Operational // v8.0.8
          </div>
          
          <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-8xl leading-[0.9] tracking-tight text-foreground break-words">
            ARCHITECTING <br/>
            PLAYFUL TECH <br/>
            THAT <span className="text-primary underline decoration-4 underline-offset-8">WORKS.</span>
          </h1>
          
          <p className="text-lg md:text-2xl font-sans font-bold text-foreground/70 max-w-2xl min-h-[3.5em] leading-relaxed">
            {displayText}<span className="animate-pulse">|</span>
          </p>
          
          <div className="flex flex-wrap gap-4 md:gap-6 pt-4 md:pt-8">
            <button className="flex-1 sm:flex-none justify-center bg-primary text-white px-8 md:px-10 py-4 md:py-5 font-mono text-[11px] md:text-[12px] uppercase tracking-widest flex items-center gap-3 transition-all active:scale-95 hover:shadow-brutal hover:-translate-x-1 hover:-translate-y-1 text-center">
              Initiate Sequence <ArrowRight size={18} />
            </button>
            <button className="flex-1 sm:flex-none justify-center border-2 border-foreground text-foreground px-8 md:px-10 py-4 md:py-5 font-mono text-[11px] md:text-[12px] uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-foreground hover:text-background active:scale-95 text-center">
              Browse Files <Code2 size={18} />
            </button>
          </div>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-foreground/50">
            <motion.div 
              animate={{ y: [0, 48], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-full h-4 bg-primary"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
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
              <span className="text-foreground/30 font-mono text-[10px]">VER: 8.0.8_LIT</span>
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

        {/* Floating Data Point */}
        <div className="absolute -bottom-6 -left-6 bg-background glass-panel px-6 py-4 border-2 border-foreground z-20 hidden lg:block">
          <div className="text-[10px] font-mono text-foreground/40">LATENCY</div>
          <div className="text-2xl font-bold font-mono tracking-tighter text-primary">12ms</div>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
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
    { value: 3, suffix: '', label: 'Major_Deployments' },
    { value: 8.08, suffix: '', label: 'Academic_Efficiency', decimal: true },
  ];

  return (
    <section className="px-4 md:px-12 py-12 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 border border-grid-line glass-panel overflow-hidden">
        {stats.map((stat, idx) => (
          <div 
            key={idx}
            className={`p-10 md:p-12 flex flex-col items-center justify-center group hover:bg-background transition-all cursor-crosshair ${idx < 2 ? 'md:border-r md:border-grid-line' : ''} border-b md:border-b-0 border-grid-line`}
          >
            <span className="font-sans font-black text-5xl md:text-7xl group-hover:text-primary transition-colors flex items-baseline">
              {stat.decimal ? (
                <Counter value={stat.value} />
              ) : (
                <Counter value={stat.value} />
              )}
              {stat.suffix}
            </span>
            <span className="font-mono text-[10px] tracking-widest uppercase text-foreground/40 mt-2 text-center">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      title: "System Dashboard v2.0",
      category: "Case Study // 01",
      desc: "Infrastructure monitoring with sub-millisecond precision. Built with Next.js and optimized for massive data streams.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      large: true
    },
    {
      title: "Design_System",
      category: "Module // 02",
      desc: "Atomic components for high-velocity engineering.",
      icon: <Layers size={40} className="text-white" />,
      color: "bg-primary"
    },
    {
      title: "Motion_Logics",
      category: "Experiment // 04",
      desc: "Exploring physics-based UI transitions.",
      icon: <Cpu size={24} className="text-foreground/40 group-hover:text-primary" />
    },
    {
      title: "Neural_Net_Viz",
      category: "Module // 05",
      desc: "Real-time 3D visualization of neural activation paths.",
      icon: <Database size={24} className="text-foreground/40 group-hover:text-primary" />
    },
    {
      title: "Edge_Gateway",
      category: "Module // 06",
      desc: "Micro-latency edge computing nodes for IoT clusters.",
      icon: <Globe size={24} className="text-foreground/40 group-hover:text-primary" />
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="px-4 md:px-12 py-24 max-w-screen-2xl mx-auto">
      <SectionHeader title="Selected Works" id="projects" />
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Large Feature */}
        <motion.div 
          layout
          className={`group relative overflow-hidden border border-grid-line shadow-xl aspect-video md:aspect-[16/10] ${showAll ? 'md:col-span-12' : 'md:col-span-8'}`}
        >
          <img 
            src={projects[0].image} 
            alt={projects[0].title}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex flex-col justify-end p-6 md:p-12">
            <span className="font-mono text-xs text-primary uppercase tracking-widest mb-2">{projects[0].category}</span>
            <h3 className="font-sans font-black text-2xl md:text-4xl text-background mb-4 uppercase">{projects[0].title}</h3>
            <p className="text-background/70 max-w-lg mb-6 md:mb-8 text-sm md:text-base leading-relaxed">{projects[0].desc}</p>
            <button className="w-fit flex items-center gap-2 text-background border-b border-background/30 pb-1 font-mono text-[10px] md:text-xs uppercase tracking-widest hover:text-primary hover:border-primary transition-colors">
              View Specification <ExternalLink size={14} />
            </button>
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
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`${!showAll && idx === 0 ? 'flex-1 bg-primary border-2 border-foreground' : 'border border-grid-line glass-panel'} p-6 md:p-8 flex flex-col justify-between group cursor-pointer transition-all hover:translate-x-1 hover:translate-y-1 relative shadow-lg min-h-[220px] md:min-h-[200px]`}
              >
                <div className={`absolute top-4 right-4 ${!showAll && idx === 0 ? 'text-background/20' : 'text-foreground/10'} font-black font-mono text-4xl`}>0{idx + 2}</div>
                <div className="flex justify-between items-start">
                  {project.icon || <Layers size={40} className="text-white" />}
                  <ArrowRight className={`${!showAll && idx === 0 ? 'text-background' : 'text-primary'} -rotate-45 group-hover:rotate-0 transition-transform`} />
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
          <div className="md:col-span-12 flex justify-center mt-4">
            <button 
              onClick={() => setShowAll(true)}
              className="w-full sm:w-auto border-2 border-dashed border-grid-line p-6 px-12 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-widest text-foreground/40 hover:text-primary hover:border-primary transition-colors group"
            >
              <Plus size={16} className="group-hover:rotate-90 transition-transform" /> Load More Subsystems
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    "TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Vite", "TailwindCSS", "Framer Motion", "Git", "CI/CD", "Testing Library", "Jest"
  ];

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
  const education = [
    {
      degree: "Computer Science Engineering",
      institution: "Technical University of Mumbai",
      description: "Specialized in distributed systems and compiler design.",
      year: "2018 - 2022",
      grade: "8.08 CGPA / 10"
    },
    {
      degree: "Information Security Foundation",
      institution: "MIT (OpenCourseWare)",
      description: "Focused on cryptography, network security, and secure coding practices.",
      year: "2021",
      grade: "A+"
    }
  ];

  return (
    <section id="education" className="px-6 md:px-12 py-24 max-w-screen-2xl mx-auto">
      <SectionHeader title="Academic Path" id="education" subtitle="/ EDUCATION_LOGS" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, idx) => (
          <div key={idx} className="border border-grid-line p-8 relative hover:bg-foreground/5 transition-colors group">
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
          </div>
        ))}
      </div>
    </section>
  );
};

const Posts = () => {
  const [showAll, setShowAll] = useState(false);
  const posts = [
    { title: "The rise of brutalist web design", date: "Oct 12, 2024", readTime: "5 min", slug: "brutalist-design" },
    { title: "Optimizing Vite for massive monorepos", date: "Sep 28, 2024", readTime: "12 min", slug: "vite-optimization" },
    { title: "Why I moved away from state management libraries", date: "Aug 15, 2024", readTime: "8 min", slug: "state-management" },
    { title: "React 19: The Compiler is coming", date: "Jul 22, 2024", readTime: "6 min", slug: "react-19" },
    { title: "Securing Express APIs in production", date: "Jun 05, 2024", readTime: "15 min", slug: "express-security" },
    { title: "Micro-frontends with Module Federation", date: "May 18, 2024", readTime: "10 min", slug: "micro-frontends" },
  ];

  const visiblePosts = showAll ? posts : posts.slice(0, 4);

  return (
    <section id="posts" className="px-4 md:px-12 py-24 max-w-screen-2xl mx-auto">
      <SectionHeader title="Field Notes" id="posts" subtitle="/ THINKING_PROCESS" />
      <div className="grid grid-cols-1 divide-y divide-grid-line border border-grid-line">
        <AnimatePresence mode="popLayout">
          {visiblePosts.map((post, idx) => (
            <motion.a 
              key={post.slug} 
              href={`#${post.slug}`} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
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
        </AnimatePresence>
      </div>

      {!showAll && posts.length > 4 && (
        <div className="mt-8 flex justify-center">
          <button 
            onClick={() => setShowAll(true)}
            className="flex items-center gap-3 px-8 py-4 border-2 border-foreground font-mono text-[11px] uppercase tracking-widest hover:bg-foreground hover:text-background transition-all group"
          >
            Access All Archives <ChevronRight size={16} className="group-hover:rotate-90 transition-transform" />
          </button>
        </div>
      )}
    </section>
  );
};

const Coldlio = () => (
  <section id="coldlio" className="px-6 md:px-12 py-24 max-w-screen-2xl mx-auto relative overflow-hidden">
    <div className="absolute top-0 right-0 opacity-5 -scale-y-100 pointer-events-none">
       <Terminal size={400} className="text-primary" />
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary"></div>
          <span className="font-sans font-black text-3xl tracking-tighter uppercase italic">COLDLIO_LABS</span>
        </div>
        <h2 className="font-sans font-black text-5xl md:text-7xl uppercase leading-none tracking-tighter">
          ADVANCED <br/>
          AUTOMATION <br/>
          FOR <span className="text-primary">GROWTH.</span>
        </h2>
        <p className="text-xl text-foreground/70 leading-relaxed max-w-md">
          Coldlio is my specialized research lab for cold-outreach automation and sales-tech infrastructure.
        </p>
        <div className="flex gap-4">
          <button className="bg-foreground text-background px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-primary transition-colors flex items-center gap-2">
            Visit Project <ExternalLink size={14} />
          </button>
          <button className="border border-grid-line px-8 py-4 font-mono text-xs uppercase tracking-widest hover:border-foreground transition-colors">
            Read Whitepaper
          </button>
        </div>
      </motion.div>
      
      <div className="relative">
        <div className="bg-foreground p-8 rounded-sm shadow-2xl relative z-10">
          <div className="flex gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-primary/40"></div>
          </div>
          <div className="space-y-6">
            <div className="h-4 bg-primary/20 rounded w-3/4"></div>
            <div className="h-4 bg-primary/10 rounded w-1/2"></div>
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="h-20 border border-primary/20 rounded flex flex-col items-center justify-center">
                <span className="text-primary font-mono text-lg">98%</span>
                <span className="text-[10px] text-background/40 font-mono">ACCURACY</span>
              </div>
              <div className="h-20 border border-primary/20 rounded flex flex-col items-center justify-center">
                <span className="text-primary font-mono text-lg">12K</span>
                <span className="text-[10px] text-background/40 font-mono">REQUESTS</span>
              </div>
              <div className="h-20 border border-primary/20 rounded flex flex-col items-center justify-center">
                <span className="text-primary font-mono text-lg">0.2s</span>
                <span className="text-[10px] text-background/40 font-mono">LATENCY</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -inset-4 border border-primary/20 border-dashed translate-x-4 translate-y-4"></div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="px-6 md:px-12 py-24 max-w-screen-2xl mx-auto">
    <SectionHeader title="Initiate Contact" id="contact" subtitle="/ COMMS_MODULE" />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5 space-y-8">
        <h3 className="font-sans font-black text-4xl uppercase tracking-tighter">Ready for the <br/><span className="text-primary">next sequence?</span></h3>
        <p className="text-foreground/70 text-lg leading-relaxed">
          I'm currently available for full-stack engineering roles, technical consultation, or algorithmic research collaborations.
        </p>
        
        <div className="space-y-4 pt-4">
          <a href="mailto:contact@kunalrai.com" className="flex items-center gap-4 group">
            <div className="w-12 h-12 border border-grid-line flex items-center justify-center group-hover:border-primary transition-colors">
              <Mail size={20} className="text-foreground/40 group-hover:text-primary" />
            </div>
            <div>
              <div className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">Email_Primary</div>
              <div className="font-sans font-bold">contact@kunalrai.com</div>
            </div>
          </a>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 border border-grid-line flex items-center justify-center group-hover:border-primary transition-colors">
              <Database size={20} className="text-foreground/40 group-hover:text-primary" />
            </div>
            <div>
              <div className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">Location_Node</div>
              <div className="font-sans font-bold">Mumbai, IN / Remote</div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 pt-8">
          {[Github, Linkedin, Twitter].map((Icon, idx) => (
            <a key={idx} href="#" className="w-12 h-12 flex items-center justify-center border-2 border-foreground hover:bg-primary hover:text-background hover:border-primary transition-all">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7 bg-background border border-grid-line p-8 md:p-12 glass-panel">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2 border-b border-grid-line focus-within:border-primary transition-colors">
              <label className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">Sender_Identity</label>
              <input type="text" placeholder="John_Doe" className="w-full bg-transparent p-2 outline-none font-sans font-bold" />
            </div>
            <div className="space-y-2 border-b border-grid-line focus-within:border-primary transition-colors">
              <label className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">Return_Protocol</label>
              <input type="email" placeholder="john@domain.com" className="w-full bg-transparent p-2 outline-none font-sans font-bold" />
            </div>
          </div>
          <div className="space-y-2 border-b border-grid-line focus-within:border-primary transition-colors">
            <label className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">Payload_Data</label>
            <textarea rows={4} placeholder="Establishing connection request..." className="w-full bg-transparent p-2 outline-none font-sans font-bold resize-none"></textarea>
          </div>
          <button className="w-full bg-primary text-white py-6 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary-dark transition-all active:scale-95 shadow-brutal">
            Transmit Signal <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full border-t border-grid-line bg-background relative z-10">
    <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-16 w-full gap-12 max-w-screen-2xl mx-auto">
      <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
        <div className="text-foreground font-black font-sans tracking-tighter text-3xl flex items-center gap-2">
          <div className="w-4 h-4 bg-foreground"></div>
          KUNAL RAI
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/30">
          STABLE_BUILD: 8.08_GPA // © 2024 ENCRYPTED_CORE
        </div>
      </div>
      
      <div className="flex gap-12 flex-wrap justify-center">
        {['GitHub', 'LinkedIn', 'Twitter'].map(link => (
          <a key={link} href="#" className="font-mono text-[11px] uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4 border border-grid-line px-6 py-3 bg-foreground/5 group cursor-help">
        <div className="w-2 h-2 rounded-full bg-green-500 group-hover:animate-ping"></div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/60 transition-colors">Node: Region_Global_01</span>
      </div>
    </div>
    
    <div className="h-1.5 w-full bg-primary"></div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navItems = [
    { id: 'intro', label: '00' },
    { id: 'education', label: '01' },
    { id: 'projects', label: '02' },
    { id: 'skills', label: '03' },
    { id: 'posts', label: '04' },
    { id: 'coldlio', label: '05' },
    { id: 'contact', label: '06' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors duration-500 bg-grid selection-primary relative`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} activeSection={activeSection} />
      
      {/* Side Section Nav */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-6">
        {navItems.map((item) => (
          <a 
            key={item.id}
            href={`#${item.id}`}
            className="group flex items-center gap-4 justify-end focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className={`font-mono text-[10px] tracking-widest transition-all duration-300 ${activeSection === item.id ? 'text-primary opacity-100 translate-x-0' : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-foreground'}`}>
              {(item.id).toUpperCase()}
            </span>
            <div className={`w-3 h-3 border-2 transition-all duration-500 ${activeSection === item.id ? 'bg-primary border-primary scale-125 rotate-45' : 'border-grid-line group-hover:border-foreground'}`}></div>
          </a>
        ))}
      </div>

      <main className="w-full">
        <Hero />
        <Stats />
        <Projects />
        <Skills />
        <Education />
        <Posts />
        <Coldlio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

