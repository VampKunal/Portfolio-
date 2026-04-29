"use client";

import { GithubLogo, PhoneCall } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const links = [
  { label: "Intro", href: "#intro" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function SiteNav() {
  return (
    <motion.nav
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.32, 0.72, 0, 1] }}
      className="fixed left-1/2 top-5 z-40 w-[calc(100vw-1.5rem)] max-w-4xl -translate-x-1/2 rounded-full border border-white/60 bg-white/68 px-3 py-2 shadow-[0_24px_90px_-48px_rgba(42,28,13,0.5)] backdrop-blur-2xl"
    >
      <div className="flex items-center justify-between gap-3">
        <a href="#intro" className="rounded-full px-4 py-2 text-sm font-bold tracking-tight text-[#211b16] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
          Kunal Rai
        </a>
        <div className="site-nav-links items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#766f63] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#211b16]/5 hover:text-[#211b16] active:scale-[0.98]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="site-nav-actions items-center gap-1">
          <a
            href="https://github.com/VampKunal"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-full text-[#766f63] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#211b16]/5 hover:text-[#211b16] active:scale-[0.98]"
          >
            <GithubLogo size={19} weight="regular" />
          </a>
          <a
            href="tel:+917289907531"
            aria-label="Call Kunal"
            className="grid size-10 place-items-center rounded-full bg-[#211b16] text-[#fffaf0] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
          >
            <PhoneCall size={18} weight="regular" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
