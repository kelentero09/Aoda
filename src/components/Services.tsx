const SERVICES = [
  { title: "Generator Set Supply", text: "Brand-new generator sets from 25kVA to 1000kVA." },
  { title: "ATS Solutions", text: "Automatic Transfer Switch options available for appropriate requirements." },
  { title: "Installation", text: "Professional installation support is available." },
  { title: "Technical Support", text: "Technical assistance for generator set requirements." },
  { title: "Warehouse Testing", text: "Generator sets can be tested before shipment." },
  { title: "Project & Bulk Requirements", text: "Customized quotations based on project requirements." },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-ink-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-power-400">Services</p>
        <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">More Than Just Generator Supply</h2>
          <a href="#contact" className="shrink-0 bg-power-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-ink-900 hover:bg-power-400">
            Request a Quotation
          </a>
        </div>
        <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="bg-ink-900 p-6 hover:bg-ink-800">
              <span className="block h-1 w-10 bg-power-500" aria-hidden="true" />
              <h3 className="mt-4 text-base font-extrabold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
