const APPS = [
  { title: "Construction", text: "Reliable backup and temporary power for construction projects." },
  { title: "Commercial", text: "Generator solutions for commercial establishments and facilities." },
  { title: "Industrial", text: "Power solutions for industrial operations and facilities." },
  { title: "Hospitals & Clinics", text: "Backup power support for critical facilities." },
  { title: "Residential", text: "Backup power solutions for homes and private properties." },
];

export default function Applications() {
  return (
    <section aria-labelledby="apps-h" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">Applications</p>
        <h2 id="apps-h" className="mt-2 text-3xl font-black tracking-tight text-ink-900 md:text-4xl">
          Power Solutions for Different Applications
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {APPS.map((a, i) => (
            <article
              key={a.title}
              className={`border border-slate-200 p-6 ${i === 0 ? "bg-ink-900 text-white" : "bg-white"}`}
            >
              <span className={`text-xs font-extrabold tracking-widest ${i === 0 ? "text-power-400" : "text-amber-600"}`} aria-hidden="true">
                0{i + 1}
              </span>
              <h3 className={`mt-2 text-lg font-extrabold ${i === 0 ? "text-white" : "text-ink-900"}`}>{a.title}</h3>
              <p className={`mt-1.5 text-sm leading-relaxed ${i === 0 ? "text-slate-300" : "text-slate-600"}`}>{a.text}</p>
            </article>
          ))}
          <a
            href="#contact"
            className="flex flex-col justify-center bg-power-500 p-6 text-ink-900 hover:bg-power-400"
          >
            <span className="text-lg font-extrabold leading-snug">Not sure what size you need?</span>
            <span className="mt-2 text-sm font-bold uppercase tracking-widest underline underline-offset-4">
              Request a Quotation →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
