import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function ButtonLink({ href, children, tone = "dark" }) {
  const dark = tone === "dark";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`group inline-flex items-center gap-3 rounded-full py-2 pl-5 pr-2 text-sm font-semibold fluid-transition active:scale-[0.98] ${
        dark
          ? "bg-[color:var(--foreground)] text-[#fffefa] shadow-[0_20px_60px_-30px_rgba(23,23,20,0.6)]"
          : "border border-[color:var(--line)] bg-white/55 text-[color:var(--foreground)]"
      }`}
    >
      <span>{children}</span>
      <span
        className={`grid size-8 place-items-center rounded-full fluid-transition group-hover:translate-x-1 group-hover:-translate-y-[1px] ${
          dark ? "bg-white/12" : "bg-black/[0.05]"
        }`}
      >
        <ArrowUpRight size={15} weight="regular" />
      </span>
    </a>
  );
}
