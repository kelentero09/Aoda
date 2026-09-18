// Generic, clearly representative genset illustration.
// Replace with real photos in /public/images/ when available.
// Usage: <img src="/images/genset-100kva.jpg" ... /> can swap this out later.
export default function GensetVisual({ label = "Representative image" }: { label?: string }) {
  return (
    <div
      role="img"
      aria-label={`${label} — generic generator set illustration, not an actual Aoda installation`}
      className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-ink-800"
    >
      <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />
      {/* Stylised canopy genset */}
      <svg viewBox="0 0 320 190" className="relative h-3/4 w-4/5" aria-hidden="true">
        <rect x="40" y="60" width="240" height="80" rx="4" fill="#232B33" stroke="#FFB800" strokeWidth="2" />
        <rect x="40" y="60" width="240" height="22" rx="4" fill="#2A323B" />
        <rect x="58" y="90" width="70" height="8" rx="2" fill="#FFB800" />
        <rect x="58" y="102" width="110" height="6" rx="2" fill="#5B6672" />
        <rect x="58" y="112" width="90" height="6" rx="2" fill="#454F59" />
        <rect x="200" y="90" width="62" height="34" rx="2" fill="none" stroke="#5B6672" strokeWidth="2" />
        <line x1="200" y1="101" x2="262" y2="101" stroke="#5B6672" strokeWidth="2" />
        <line x1="200" y1="112" x2="262" y2="112" stroke="#5B6672" strokeWidth="2" />
        <circle cx="90" cy="152" r="12" fill="#0C0E11" stroke="#5B6672" strokeWidth="3" />
        <circle cx="230" cy="152" r="12" fill="#0C0E11" stroke="#5B6672" strokeWidth="3" />
        <rect x="40" y="140" width="240" height="8" fill="#FFB800" />
        {/* power bolt */}
        <path d="M152 30 L138 58 L150 58 L144 78 L162 50 L150 50 Z" fill="#FFB800" />
      </svg>
      <span className="absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-white">
        {label}
      </span>
    </div>
  );
}
