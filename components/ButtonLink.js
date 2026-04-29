"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function ButtonLink({ href, children, tone = "dark" }) {
  const dark = tone === "dark";

  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`group inline-flex items-center gap-3 rounded-full py-2 pl-5 pr-2 text-sm font-bold ${
        dark
          ? "bg-[#211b16] text-[#fffaf0] shadow-[0_22px_70px_-36px_rgba(33,27,22,0.78)]"
          : "border border-[#211b16]/10 bg-white/66 text-[#211b16] shadow-[0_18px_55px_-42px_rgba(33,27,22,0.55)]"
      }`}
    >
      <span>{children}</span>
      <span className={`grid size-8 place-items-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5 ${dark ? "bg-white/12" : "bg-[#211b16]/6"}`}>
        <ArrowUpRight size={15} weight="regular" />
      </span>
    </motion.a>
  );
}
