export const SITE = {
  brand: "Aoda Gensets PH",
  positioning: "Direct Generator Set Supplier & Importer",
  tagline: "Your Power. Our Supply. Direct.",
  phoneDisplay: "0955 829 8901",
  phoneHref: "tel:+639558298901",
  viberDisplay: "0967 451 2712",
  // Viber deep link: opens chat with PH number (63 + number without leading 0)
  viberHref: "viber://chat?number=%2B639674512712",
  locations: ["Kawit, Cavite", "Mexico, Pampanga"],
  contactPerson: "Ms. Keyl",
  contactRole: "Senior Sales Executive",
  range: "25kVA to 1000kVA",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Generator Sets", href: "#generator-sets" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
