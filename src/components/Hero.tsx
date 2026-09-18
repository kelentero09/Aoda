import { SITE } from "../site";
import GensetPhoto from "./GensetPhoto";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-1.5 bg-hazard" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-12 md:pt-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 border border-power-500/60 bg-power-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-power-400">
            <span className="h-1.5 w-1.5 bg-power-500" aria-hidden="true" />
            {SITE.positioning}
          </p>
          <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight md:text-5xl">
            Reliable Power.
            <br />
            <span className="text-power-400">Direct from the Supplier.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            Brand-new generator sets from 25kVA to 1000kVA for construction, commercial,
            industrial, and backup power requirements.
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-slate-400">
            {SITE.tagline}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="bg-power-500 px-7 py-3.5 text-center text-sm font-extrabold uppercase tracking-wide text-ink-900 hover:bg-power-400"
            >
              Request a Quotation
            </a>
            <a
              href="#generator-sets"
              className="border border-white/30 px-7 py-3.5 text-center text-sm font-extrabold uppercase tracking-wide text-white hover:border-power-400 hover:text-power-400"
            >
              View Generator Sets
            </a>
          </div>
          <dl className="mt-8 grid max-w-lg grid-cols-3 divide-x divide-white/10 border border-white/10 bg-white/[0.03]">
            {[
              ["25–1000", "kVA range"],
              ["Brand-new", "gensets"],
              ["ATS", "available"],
            ].map(([v, l]) => (
              <div key={l} className="px-4 py-3 text-center">
                <dt className="order-2 mt-1 block text-[11px] uppercase tracking-widest text-slate-400">{l}</dt>
                <dd className="text-lg font-extrabold text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="border border-white/10 bg-ink-900">
          <GensetPhoto
            file="genset-hero.jpg"
            alt="Yellow heavy-duty diesel generator set with canopy doors open in a warehouse — sample supplier photo"
            label="Sample photo"
            eager
          />
          <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3 text-sm">
            <p className="text-slate-300">
              <strong className="text-white">25kVA – 1000kVA</strong> · Project &amp; bulk requirements
            </p>
            <a href={SITE.phoneHref} className="shrink-0 font-bold text-power-400 hover:text-power-500">
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
