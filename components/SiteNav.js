"use client";

import { DownloadSimple, Moon, Sun } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const links = [
  { label: "Intro", href: "#intro" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Posts", href: "#posts" },
  { label: "Contact", href: "#contact" },
];

export default function SiteNav() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const nextTheme = saved || preferred;
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <header className="site-header mx-auto flex flex-wrap md:flex-nowrap justify-between items-center border-2 border-blueprint-line bg-white p-4 mb-8 sticky top-4 z-50 tech-card shadow-[4px_4px_0px_0px_rgba(20,20,20,1)]">
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <div className="w-10 h-10 border-2 border-blueprint-line flex items-center justify-center font-bold text-xl bg-blueprint-line text-white">
          KR
        </div>
        <h1 className="font-black text-xl tracking-tighter uppercase whitespace-nowrap">
          Kunal Rai <span className="font-normal opacity-50 px-2">|</span> Portfolio
        </h1>
      </div>
      
      <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        {links.map((link) => (
          <a 
            key={link.label} 
            href={link.href} 
            className="text-[10px] font-black uppercase tracking-widest hover:text-accent-orange transition-colors"
          >
            {link.label}
          </a>
        ))}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="theme-toggle"
        >
          {theme === "dark" ? <Sun size={16} weight="bold" /> : <Moon size={16} weight="bold" />}
          <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
        <a 
          href="/Kunal_Rai_Resume.pdf" 
          download 
          className="tech-button flex items-center gap-2"
        >
          Download CV <DownloadSimple size={14} weight="bold" />
        </a>
      </nav>
    </header>
  );
}
