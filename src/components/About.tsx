import { SITE } from "../site";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-slate-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-2">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">About Us</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-ink-900 md:text-4xl">
            Your Direct Generator Set Supplier &amp; Importer
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Aoda Gensets PH provides brand-new generator sets for businesses, construction
            projects, commercial establishments, factories, facilities, and residential
            backup power requirements.
          </p>
          <p className="mt-3 leading-relaxed text-slate-600">
            With generator sets ranging from 25kVA to 1000kVA, Aoda Gensets PH provides
            direct supplier options for project and bulk requirements, with customized
            quotations based on customer needs.
          </p>
        </div>
        <div className="space-y-4">
          <div className="border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-ink-900">Locations</h3>
            <ul className="mt-3 space-y-2">
              {SITE.locations.map((loc) => (
                <li key={loc} className="flex items-center gap-2 text-slate-700">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <strong>{loc}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ink-900 p-6 text-white">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-power-400">Direct Supplier Pricing</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Reliable Generator Sets. Direct Supplier Pricing. Send your required kVA, phase,
              and project location for a customized quotation.
            </p>
            <a href="#contact" className="mt-4 inline-block bg-power-500 px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-ink-900 hover:bg-power-400">
              Request a Quotation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
