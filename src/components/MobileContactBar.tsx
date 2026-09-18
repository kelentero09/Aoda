import { SITE } from "../site";

export default function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-ink-950 text-center text-xs font-extrabold uppercase tracking-widest md:hidden">
      <a href={SITE.phoneHref} className="px-2 py-3.5 text-white hover:bg-white/5">
        Call
      </a>
      <a href={SITE.viberHref} className="border-x border-white/10 px-2 py-3.5 text-white hover:bg-white/5">
        Viber
      </a>
      <a href="#contact" className="bg-power-500 px-2 py-3.5 text-ink-900">
        Request Quote
      </a>
    </div>
  );
}
