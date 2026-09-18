import { useState } from "react";
import type { FormEvent } from "react";
import { SITE } from "../site";

const inputCls =
  "w-full border border-slate-300 bg-white px-3.5 py-2.5 text-[15px] text-ink-900 placeholder:text-slate-400 focus:border-ink-900 focus:outline-none";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Static demo — no backend. Show guidance to contact directly.
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">Contact</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-ink-900 md:text-4xl">
          Let&apos;s Discuss Your Power Requirements
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          {/* Direct contact card */}
          <div className="h-fit bg-ink-900 p-6 text-white md:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-power-400">{SITE.contactRole}</p>
            <p className="mt-1 text-2xl font-black">{SITE.contactPerson}</p>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-widest text-slate-400">Phone</dt>
                <dd className="mt-1">
                  <a href={SITE.phoneHref} className="text-lg font-extrabold text-power-400 hover:text-power-500">
                    {SITE.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-slate-400">Viber</dt>
                <dd className="mt-1">
                  <a href={SITE.viberHref} className="text-lg font-extrabold text-white hover:text-power-400">
                    {SITE.viberDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-slate-400">Locations</dt>
                <dd className="mt-1 font-semibold">
                  {SITE.locations.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a href={SITE.phoneHref} className="bg-power-500 px-4 py-3 text-center text-xs font-extrabold uppercase tracking-widest text-ink-900 hover:bg-power-400">
                Call Now
              </a>
              <a href={SITE.viberHref} className="border border-white/30 px-4 py-3 text-center text-xs font-extrabold uppercase tracking-widest text-white hover:border-power-400 hover:text-power-400">
                Viber
              </a>
            </div>
          </div>

          {/* Demo form */}
          <form onSubmit={onSubmit} className="border border-slate-200 bg-slate-50 p-6 md:p-8" aria-label="Quotation request form (demo)">
            <h3 className="text-lg font-extrabold text-ink-900">Request a Quotation</h3>
            <p className="mt-1 text-sm text-slate-600">
              Fill in your requirement — we&apos;ll prepare a customized quotation.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-600">Name *</span>
                <input required name="name" autoComplete="name" placeholder="Your name" className={inputCls} />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-600">Company</span>
                <input name="company" autoComplete="organization" placeholder="Company (optional)" className={inputCls} />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-600">Contact Number *</span>
                <input required name="contact" autoComplete="tel" inputMode="tel" placeholder="09xx xxx xxxx" className={inputCls} />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-600">Required kVA *</span>
                <input required name="kva" placeholder="e.g. 100kVA" className={inputCls} />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-600">Phase</span>
                <select name="phase" className={inputCls} defaultValue="">
                  <option value="" disabled>Select phase</option>
                  <option>Single-phase</option>
                  <option>Three-phase</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-600">Project Location *</span>
                <input required name="location" placeholder="e.g. City, Province" className={inputCls} />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-600">Message</span>
                <textarea name="message" rows={4} placeholder="Tell us about your power requirement..." className={inputCls} />
              </label>
            </div>
            <button
              type="submit"
              className="mt-5 w-full bg-ink-900 px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-power-400 hover:bg-ink-800 sm:w-auto"
            >
              Submit Inquiry
            </button>
            {sent && (
              <p role="status" className="mt-4 border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                <strong>Demo form</strong> — no message was sent. Please contact us directly:{" "}
                <a href={SITE.phoneHref} className="font-bold underline">Call {SITE.phoneDisplay}</a>{" "}
                or <a href={SITE.viberHref} className="font-bold underline">Viber {SITE.viberDisplay}</a>.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
