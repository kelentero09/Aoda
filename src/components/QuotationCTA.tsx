import { SITE } from "../site";

export default function QuotationCTA() {
  return (
    <section aria-labelledby="quote-h" className="bg-power-500 text-ink-900">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 id="quote-h" className="text-3xl font-black tracking-tight md:text-4xl">
            Looking for the Right Generator Set?
          </h2>
          <p className="mt-2 font-medium">
            Send us your required kVA, phase, and project location for a customized quotation.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
          <a
            href="#contact"
            className="bg-ink-900 px-7 py-3.5 text-center text-sm font-extrabold uppercase tracking-wide text-power-400 hover:bg-ink-800"
          >
            Request a Quotation
          </a>
          <a
            href={SITE.phoneHref}
            className="border-2 border-ink-900 px-7 py-3 text-center text-sm font-extrabold uppercase tracking-wide hover:bg-ink-900 hover:text-power-400"
          >
            Call {SITE.contactPerson}: {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
