export const SITE = {
  brand: "Sample Gensets Co.",
  positioning: "Direct Generator Set Supplier & Importer",
  tagline: "Your Power. Our Supply. Direct.",
  phoneDisplay: "0900 000 0000",
  phoneHref: "tel:+639000000000",
  viberDisplay: "0900 000 0000",
  // Viber deep link placeholder — replace with the real sales number.
  viberHref: "viber://chat?number=%2B639000000000",
  locations: ["Sample Location 1", "Sample Location 2"],
  contactPerson: "Sample Contact",
  contactRole: "Sales Executive",
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
