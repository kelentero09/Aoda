import { useState } from "react";
import { NAV_LINKS, SITE } from "../site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-900/95 backdrop-blur">
      {/* Top utility bar */}
      <div className="hidden border-b border-white/10 bg-ink-950 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 text-xs text-slate-300">
          <p className="tracking-wide">
            {SITE.positioning} &nbsp;·&nbsp; <span className="text-power-400">{SITE.tagline}</span>
          </p>
          <p>
            <a href={SITE.phoneHref} className="hover:text-white">
              {SITE.phoneDisplay}
            </a>
            <span className="mx-2 text-slate-600">|</span>
            <span>{SITE.locations.join(" · ")}</span>
          </p>
        </div>
      </div>

      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2.5" aria-label="Aoda Gensets PH — home">
          <span className="flex h-9 w-9 items-center justify-center bg-power-500 font-black text-ink-900" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block text-[17px] font-extrabold tracking-tight text-white">
              Aoda Gensets PH
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-widest text-power-400">
              Direct Supplier &amp; Importer
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-semibold text-slate-200 hover:text-power-400">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-power-500 px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-ink-900 hover:bg-power-400"
          >
            Request a Quotation
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-900 lg:hidden">
          <ul className="space-y-1 px-4 py-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2.5 text-[15px] font-semibold text-slate-100 hover:bg-white/5 hover:text-power-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block bg-power-500 px-2 py-3 text-center text-sm font-extrabold uppercase tracking-wide text-ink-900"
              >
                Request a Quotation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
