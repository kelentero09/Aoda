import GensetVisual from "./GensetVisual";

const RANGES = [
  {
    range: "25–100 kVA",
    text: "For small commercial spaces, clinics, offices, and residential backup power.",
  },
  {
    range: "100–300 kVA",
    text: "For mid-size commercial buildings, construction sites, and facilities.",
  },
  {
    range: "300–500 kVA",
    text: "For larger commercial and industrial loads and continuous project use.",
  },
  {
    range: "500–1000 kVA",
    text: "For industrial plants, large facilities, and bulk project requirements.",
  },
];

export default function GeneratorSets() {
  return (
    <section id="generator-sets" className="scroll-mt-24 bg-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">
          Generator Sets
        </p>
        <h2 className="mt-2 max-w-2xl text-3xl font-black tracking-tight text-ink-900 md:text-4xl">
          Generator Sets for Every Power Requirement
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          From 25kVA to 1000kVA, we provide generator set solutions for different project
          and facility requirements.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {RANGES.map((r) => (
            <article key={r.range} className="border border-slate-200 bg-white">
              <GensetVisual label={`${r.range} — representative`} />
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-8 bg-power-500" aria-hidden="true" />
                  <h3 className="text-xl font-extrabold tracking-tight text-ink-900">{r.range}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.text}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-block border border-ink-900 px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-ink-900 hover:bg-ink-900 hover:text-power-400"
                >
                  Inquire Now
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Images are generic representations of capacity ranges only — not specific brands, models, or specifications.
        </p>
      </div>
    </section>
  );
}
