import { GithubLogo, PhoneCall } from "@phosphor-icons/react/dist/ssr";

const links = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" },
];

export default function MobileNav() {
  return (
    <nav
      className="fixed left-1/2 top-5 z-40 max-w-3xl -translate-x-1/2 rounded-full border border-[color:var(--line)] bg-[rgba(255,254,250,0.74)] px-3 py-2 shadow-[0_22px_70px_-34px_rgba(23,23,20,0.45)] backdrop-blur-2xl"
      style={{ width: "calc(100vw - 2rem)" }}
    >
      <div className="flex items-center justify-between gap-3">
        <a
          href="#top"
          className="rounded-full px-4 py-2 text-sm font-semibold tracking-tight fluid-transition hover:bg-black/[0.04] active:scale-[0.98]"
        >
          Kunal Rai
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-[color:var(--muted)] fluid-transition hover:bg-black/[0.04] hover:text-[color:var(--foreground)] active:scale-[0.98]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-1 lg:flex">
          <a
            href="https://github.com/VampKunal"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-full text-[color:var(--muted)] fluid-transition hover:bg-black/[0.04] hover:text-[color:var(--foreground)] active:scale-[0.98]"
          >
            <GithubLogo size={19} weight="regular" />
          </a>
          <a
            href="tel:+917289907531"
            aria-label="Call Kunal"
            className="grid size-10 place-items-center rounded-full text-[color:var(--muted)] fluid-transition hover:bg-black/[0.04] hover:text-[color:var(--foreground)] active:scale-[0.98]"
          >
            <PhoneCall size={19} weight="regular" />
          </a>
        </div>
      </div>
    </nav>
  );
}
