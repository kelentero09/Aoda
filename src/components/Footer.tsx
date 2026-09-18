import { NAV_LINKS, SITE } from "../site";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold text-white">Aoda Gensets PH</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-widest text-power-400">
            {SITE.positioning}
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            Brand-new generator sets from 25kVA to 1000kVA for construction, commercial,
            industrial, and backup power requirements.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs font-extrabold uppercase tracking-widest text-white">Sections</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-power-400">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-white">Contact</p>
          <p className="mt-3 text-sm">
            {SITE.contactPerson} · {SITE.contactRole}
          </p>
          <p className="mt-1 text-sm">
            Phone: <a href={SITE.phoneHref} className="font-bold text-power-400">{SITE.phoneDisplay}</a>
          </p>
          <p className="mt-1 text-sm">
            Viber: <a href={SITE.viberHref} className="font-bold text-white">{SITE.viberDisplay}</a>
          </p>
          <p className="mt-1 text-sm">{SITE.locations.join(" · ")}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Aoda Gensets PH. All rights reserved.</p>
          <p>{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
