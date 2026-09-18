const CARDS = [
  {
    title: "25–1000 kVA",
    text: "Generator sets for different power requirements.",
    icon: "M13 2 4 14h6l-1 8 9-12h-6l1-8z",
  },
  {
    title: "Direct Supplier",
    text: "Direct generator set supplier and importer.",
    icon: "M3 7h13v10H3zM16 10h3l2 3v4h-5zM7 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
  },
  {
    title: "Competitive Pricing",
    text: "Direct supplier pricing for project and bulk requirements.",
    icon: "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
  },
  {
    title: "ATS Available",
    text: "Automatic Transfer Switch solutions available.",
    icon: "M4 4h16v6H4zM4 14h16v6H4zM8 7h3M8 17h3M15 7h1M15 17h1",
  },
  {
    title: "Warehouse Testing",
    text: "Units tested before shipment.",
    icon: "M9 12l2 2 4-4M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z",
  },
];

export default function Highlights() {
  return (
    <section aria-label="Company highlights" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CARDS.map((c) => (
            <article key={c.title} className="border border-slate-200 bg-slate-50 p-5">
              <span className="flex h-10 w-10 items-center justify-center bg-ink-900" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-power-400" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d={c.icon} strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </span>
              <h2 className="mt-3 text-base font-extrabold tracking-tight text-ink-900">{c.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
