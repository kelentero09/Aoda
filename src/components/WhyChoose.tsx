const POINTS = [
  "Direct Supplier / Importer",
  "Competitive Pricing",
  "Brand-New Generator Sets",
  "Project & Bulk Availability",
  "ATS Available",
  "Warehouse Testing",
  "Installation Support",
  "Technical Support",
];

export default function WhyChoose() {
  return (
    <section aria-labelledby="why-h" className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-power-400">Why Choose Us</p>
          <h2 id="why-h" className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
            Why Choose Aoda Gensets PH
          </h2>
          <p className="mt-3 text-slate-300">
            Direct supply. Straightforward pricing. Units matched to your actual load and site requirements.
          </p>
          <a href="#contact" className="mt-6 inline-block bg-power-500 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-ink-900 hover:bg-power-400">
            Request a Quotation
          </a>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {POINTS.map((p) => (
            <li key={p} className="flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm font-bold">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-power-500 text-ink-900" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
