import GensetVisual from "./GensetVisual";

export default function FeaturedProject() {
  return (
    <section id="projects" className="scroll-mt-24 border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-2 lg:items-center">
        <div className="border border-slate-200">
          <GensetVisual label="Representative genset photo — not an actual installation" />
        </div>
        <div>
          <p className="inline-block bg-emerald-600 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-white">
            ✓ Successfully Installed
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-ink-900">
            100kVA Generator Set with ATS
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            Another power solution successfully completed. Our 100kVA Generator Set with
            Automatic Transfer Switch (ATS) was professionally installed according to our
            client&apos;s requirements, providing a reliable backup power solution when it
            is needed most.
          </p>
          <ul className="mt-5 space-y-2 text-sm font-semibold text-ink-900">
            <li className="flex gap-2"><span className="text-amber-600" aria-hidden="true">▸</span> 100kVA capacity</li>
            <li className="flex gap-2"><span className="text-amber-600" aria-hidden="true">▸</span> Automatic Transfer Switch (ATS)</li>
            <li className="flex gap-2"><span className="text-amber-600" aria-hidden="true">▸</span> Professional installation</li>
          </ul>
          <a
            href="#contact"
            className="mt-6 inline-block bg-ink-900 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-power-400 hover:bg-ink-800"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
