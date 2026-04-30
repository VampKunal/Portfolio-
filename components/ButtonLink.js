"use client";

import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react";

export default function ButtonLink({
  href,
  children,
  tone = "primary",
  download = false,
  className = "",
}) {
  const Icon = download ? DownloadSimple : ArrowUpRight;
  const external = href.startsWith("http");
  
  const baseClass = tone === "ghost" ? "tech-button-outline" : "tech-button";

  return (
    <a
      href={href}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${baseClass} inline-flex items-center gap-2 ${className}`}
    >
      {children}
      <Icon size={16} weight="bold" />
    </a>
  );
}
