import { useState } from "react";
import GensetVisual from "./GensetVisual";

type Props = {
  file: string;
  alt: string;
  label?: string;
  eager?: boolean;
  className?: string;
};

/**
 * Sample/client photo from /public/images/.
 * Uses BASE_URL so it works on GitHub Pages project sites.
 * Falls back to the SVG placeholder if the file is missing.
 */
export default function GensetPhoto({ file, alt, label = "Sample photo", eager = false, className = "" }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) return <GensetVisual label={label} />;

  return (
    <figure className={`relative aspect-[16/10] w-full overflow-hidden bg-ink-800 ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}images/${file}`}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
      />
      <figcaption className="absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-white">
        {label}
      </figcaption>
    </figure>
  );
}
