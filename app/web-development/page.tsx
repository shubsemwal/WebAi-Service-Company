"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight, Check, X, ChevronDown, Zap, Shield, Clock, Globe,
} from "lucide-react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Theme = "dark" | "light";
type Currency = { code: string; symbol: string; rate: number };

// ─── THEME TOKENS (matches the web-development page) ──────────────────────────

const T = {
  dark: {
    bg:           "#080B14",
    bgCard:       "rgba(255,255,255,0.03)",
    bgSubtle:     "rgba(255,255,255,0.01)",
    border:       "rgba(255,255,255,0.08)",
    borderHover:  "rgba(99,102,241,0.40)",
    text:         "#ffffff",
    textMuted:    "#94a3b8",
    textSub:      "#64748b",
    textFaint:    "#475569",
    ambientA:     "rgba(99,102,241,0.10)",
    ambientB:     "rgba(139,92,246,0.08)",
    ambientC:     "rgba(52,211,153,0.06)",
    gridColor:    "rgba(255,255,255,0.3)",
    inputBg:      "rgba(255,255,255,0.05)",
    sectionLabel: { bg: "rgba(99,102,241,0.10)", border: "rgba(99,102,241,0.20)", text: "#818cf8" },
    accent:       "#818cf8",
  },
  light: {
    bg:           "#f8fafc",
    bgCard:       "#ffffff",
    bgSubtle:     "#f1f5f9",
    border:       "rgba(0,0,0,0.08)",
    borderHover:  "rgba(99,102,241,0.50)",
    text:         "#0f172a",
    textMuted:    "#475569",
    textSub:      "#94a3b8",
    textFaint:    "#cbd5e1",
    ambientA:     "rgba(99,102,241,0.07)",
    ambientB:     "rgba(139,92,246,0.05)",
    ambientC:     "rgba(52,211,153,0.05)",
    gridColor:    "rgba(0,0,0,0.15)",
    inputBg:      "#f8fafc",
    sectionLabel: { bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.20)", text: "#6366f1" },
    accent:       "#6366f1",
  },
};

// ─── DATA ──────────────────────────────────────────────────────────────────────

const currencies: Currency[] = [
  { code: "USD", symbol: "$", rate: 1 },
  { code: "EUR", symbol: "€", rate: 0.92 },
  { code: "GBP", symbol: "£", rate: 0.79 },
  { code: "INR", symbol: "₹", rate: 83.5 },
];

const services = [
  { name: "Landing Page Design", price: 499, delivery: "3–5 days", category: "Design" },
  { name: "Full Website (5 pages)", price: 1299, delivery: "7–10 days", category: "Design" },
  { name: "E-Commerce Store", price: 2499, delivery: "14–21 days", category: "Development" },
  { name: "Custom Web App", price: 3999, delivery: "21–30 days", category: "Development" },
  { name: "AI Integration", price: 1799, delivery: "10–14 days", category: "AI" },
  { name: "API Development", price: 999, delivery: "7–10 days", category: "Development" },
  { name: "SEO Optimization", price: 599, delivery: "5–7 days", category: "Marketing" },
  { name: "UI/UX Audit", price: 349, delivery: "2–3 days", category: "Design" },
];

const packages = [
  {
    name: "Starter",
    price: 799,
    description: "Perfect for small businesses and MVPs",
    badge: null as string | null,
    features: [
      "Landing page (up to 3 sections)",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "2 revision rounds",
      "5-day delivery",
      "30-day support",
    ],
    notIncluded: ["Custom animations", "CMS integration", "E-commerce", "API development"],
  },
  {
    name: "Professional",
    price: 2199,
    description: "For growing companies ready to scale",
    badge: "Most Popular",
    features: [
      "Full website (up to 8 pages)",
      "Custom animations & interactions",
      "CMS integration (Sanity/Contentful)",
      "Advanced SEO + sitemap",
      "Performance optimization",
      "5 revision rounds",
      "14-day delivery",
      "60-day priority support",
    ],
    notIncluded: ["E-commerce checkout", "Custom AI features"],
  },
  {
    name: "Enterprise",
    price: 5499,
    description: "Full-stack solutions for ambitious teams",
    badge: "Best Value",
    features: [
      "Custom web application",
      "AI/ML integration",
      "E-commerce & payment gateway",
      "Custom API development",
      "Admin dashboard",
      "Unlimited revisions",
      "21-day delivery",
      "90-day dedicated support",
      "Post-launch monitoring",
    ],
    notIncluded: [],
  },
];

const comparisonFeatures = [
  { name: "Pages / Screens", starter: "Up to 3", professional: "Up to 8", enterprise: "Unlimited" },
  { name: "Custom Design", starter: true, professional: true, enterprise: true },
  { name: "Mobile Responsive", starter: true, professional: true, enterprise: true },
  { name: "SEO Setup", starter: "Basic", professional: "Advanced", enterprise: "Full" },
  { name: "CMS Integration", starter: false, professional: true, enterprise: true },
  { name: "AI Features", starter: false, professional: false, enterprise: true },
  { name: "E-Commerce", starter: false, professional: false, enterprise: true },
  { name: "API Development", starter: false, professional: false, enterprise: true },
  { name: "Revisions", starter: "2 rounds", professional: "5 rounds", enterprise: "Unlimited" },
  { name: "Support Duration", starter: "30 days", professional: "60 days", enterprise: "90 days" },
  { name: "Priority Support", starter: false, professional: true, enterprise: true },
];

const priceFactors = [
  { icon: <Zap className="w-6 h-6" />, title: "Complexity & Features", desc: "Custom animations, third-party integrations, and advanced functionality increase development time and cost.", accent: "#fbbf24" },
  { icon: <Clock className="w-6 h-6" />, title: "Timeline & Urgency", desc: "Rush projects with tight deadlines may include an expedite fee. Standard timelines keep costs predictable.", accent: "#636be6" },
  { icon: <Shield className="w-6 h-6" />, title: "Design Customization", desc: "Fully bespoke UI from scratch costs more than template-based builds. We'll discuss your vision upfront.", accent: "#818cf8" },
  { icon: <Globe className="w-6 h-6" />, title: "Scale & Infrastructure", desc: "High-traffic apps, multi-region deployments, and enterprise-grade security add infrastructure costs.", accent: "#f87171" },
];

const includedGroups = [
  {
    title: "Design",
    accent: "#818cf8",
    items: [
      "Custom Figma mockups (desktop + mobile)",
      "Brand-aligned color system & typography",
      "Icon set & illustration direction",
      "Hover states & micro-interaction specs",
      "Exported design tokens",
    ],
  },
  {
    title: "Development",
    accent: "#636be6",
    items: [
      "Clean, production-ready codebase",
      "Next.js / React component architecture",
      "Full mobile responsiveness",
      "Cross-browser compatibility testing",
      "Lighthouse score ≥ 90",
    ],
  },
  {
    title: "SEO & Performance",
    accent: "#34d399",
    items: [
      "Meta tags, OG images, sitemap.xml",
      "Structured data (schema.org)",
      "Image optimization & lazy loading",
      "Core Web Vitals optimization",
      "Google Search Console setup",
    ],
  },
  {
    title: "Content & Copy",
    accent: "#fbbf24",
    items: [
      "Content structure & IA planning",
      "Copywriting guidance (on request)",
      "Placeholder content with live copy swap",
      "Multi-language-ready structure",
    ],
  },
  {
    title: "Handoff",
    accent: "#f472b6",
    items: [
      "Full source code via private Git repo",
      "Deployment to Vercel / Netlify",
      "Environment variables documentation",
      "Recorded walkthrough video",
    ],
  },
  {
    title: "Support",
    accent: "#38bdf8",
    items: [
      "Bug fixes within support window",
      "Priority Slack/email channel",
      "Upgrade path planning",
      "Monthly retainer option available",
    ],
  },
];

const faqs = [
  { q: "Do you offer payment plans or installments?", a: "Yes! For projects over $1,000, we offer a 50/50 split — 50% upfront and 50% on delivery. Enterprise clients can arrange custom milestone-based payments." },
  { q: "Are there any hidden fees?", a: "Never. All quotes are fully itemized. Third-party service costs (hosting, domain, paid APIs) are listed separately and always disclosed before work begins." },
  { q: "What if I need changes after delivery?", a: "Each package includes post-delivery support. Changes outside scope are billed at $85/hour, or you can upgrade to a monthly retainer for ongoing work." },
  { q: "Can I start with a smaller package and upgrade later?", a: "Absolutely. Many clients start with Starter and upgrade as they grow. We apply a credit toward the upgrade cost." },
  { q: "Do prices include hosting and domain?", a: "No — hosting and domain registration are separate ongoing costs. We help you choose the right providers and handle the setup as part of the project." },
  { q: "How accurate is the pricing table?", a: "The table shows base prices. Your actual quote may vary based on specific requirements. Use the 'Get Exact Quote' form for a precise estimate." },
];

// ─── HELPERS ───────────────────────────────────────────────────────────────────

function formatPrice(usd: number, currency: Currency) {
  const converted = Math.round(usd * currency.rate);
  return `${currency.symbol}${converted.toLocaleString()}`;
}

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// ─── SUB-COMPONENTS ────────────────────────────────────────────────────────────

function SectionLabel({ children, theme }: { children: React.ReactNode; theme: Theme }) {
  const t = T[theme].sectionLabel;
  return (
    <div className="flex items-center justify-center mb-5">
      <span
        className="text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border"
        style={{ background: t.bg, borderColor: t.border, color: t.text }}
      >
        {children}
      </span>
    </div>
  );
}

function Badge({ text, variant, theme }: { text: string; variant: "indigo" | "emerald"; theme: Theme }) {
  const dark = theme === "dark";
  const styles =
    variant === "emerald"
      ? dark ? "bg-emerald-500/15 text-emerald-400 border-emerald-400/30" : "bg-emerald-50 text-emerald-600 border-emerald-200"
      : dark ? "bg-indigo-500/15 text-indigo-400 border-indigo-400/30" : "bg-indigo-50 text-indigo-600 border-indigo-200";
  return (
    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${styles}`}>
      {text}
    </span>
  );
}

function Card({ children, accent, theme }: { children: React.ReactNode; accent: string; theme: Theme }) {
  const tk = T[theme];
  const glow = hexToRgba(accent, 0.18);
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 20,
        border: `1px solid ${tk.border}`,
        backgroundColor: tk.bgCard,
        backdropFilter: "blur(12px)",
        padding: 28,
        transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
        boxShadow: theme === "light" ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = `0 0 40px ${glow}`;
        el.style.borderColor = hexToRgba(accent, 0.35);
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = theme === "light" ? "0 1px 4px rgba(0,0,0,0.06)" : "none";
        el.style.borderColor = tk.border;
      }}
    >
      {children}
    </div>
  );
}

function CellValue({ val, theme }: { val: string | boolean; theme: Theme }) {
  if (val === true) return <Check style={{ width: 18, color: "#34d399", margin: "0 auto" }} />;
  if (val === false) return <X style={{ width: 16, color: T[theme].textFaint, margin: "0 auto" }} />;
  return <span style={{ fontSize: "0.875rem", fontWeight: 600, color: T[theme].textMuted }}>{val}</span>;
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  // Lazy-init from the real DOM state so the very first paint is already
  // correct — this is what kills the "flash" you were seeing on toggle/load.
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document !== "undefined") {
      const attr = document.documentElement.getAttribute("data-theme");
      if (attr === "light" || attr === "dark") return attr;
    }
    return "dark";
  });

  useEffect(() => {
    const syncTheme = () => {
      const attr = document.documentElement.getAttribute("data-theme") as Theme | null;
      if (attr === "light" || attr === "dark") {
        // Only update state when the value actually changed — this avoids
        // redundant re-renders (and the resulting flicker) if the observer
        // fires more than once for the same attribute value.
        setTheme((prev) => (prev === attr ? prev : attr));
      }
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const tk = T[theme];
  const isDark = theme === "dark";

  const [currency, setCurrency] = useState<Currency>(currencies[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(services.map((s) => s.category)))];
  const filteredServices =
    activeCategory === "All" ? services : services.filter((s) => s.category === activeCategory);

  const dividerStyle = { borderTop: `1px solid ${tk.border}` };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: tk.bg,
        color: tk.text,
        fontFamily: "'Space Grotesk', ui-sans-serif",
        transition: "background-color 0.2s ease, color 0.2s ease",
      }}
    >
      {/* ── Ambient background ─────────────────────────────────────── */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div style={{ position: "absolute", top: 0, left: "25%", width: 600, height: 600, borderRadius: "50%", background: tk.ambientA, filter: "blur(120px)" }} />
        <div style={{ position: "absolute", bottom: "33%", right: "25%", width: 500, height: 500, borderRadius: "50%", background: tk.ambientB, filter: "blur(100px)" }} />
        <div style={{ position: "absolute", top: "50%", left: 0, width: 300, height: 300, borderRadius: "50%", background: tk.ambientC, filter: "blur(80px)" }} />
        <div
          style={{
            position: "absolute", inset: 0, opacity: isDark ? 0.025 : 0.04,
            backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 39px,${tk.gridColor} 39px,${tk.gridColor} 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,${tk.gridColor} 39px,${tk.gridColor} 40px)`,
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>

        {/* ── 1. HERO ──────────────────────────────────────────────── */}
        <section style={{ paddingTop: 128, paddingBottom: 96, textAlign: "center" }}>
          <SectionLabel theme={theme}>Transparent Pricing</SectionLabel>

          <h1 style={{ fontSize: "clamp(2.8rem,8vw,5.6rem)", fontWeight: 900, marginBottom: 24, lineHeight: 0.95, letterSpacing: "-0.02em" }}>
            Honest Prices.
            <br />
            <span style={{ background: "linear-gradient(135deg,#818cf8 0%,#a78bfa 45%,#34d399 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Zero Surprises.
            </span>
          </h1>

          <p style={{ color: tk.textMuted, fontSize: "1.1rem", maxWidth: 640, margin: "0 auto 16px", lineHeight: 1.7 }}>
            Every quote is fully itemized. No hidden fees, no bait-and-switch. What you see is
            exactly what you pay — and we&apos;ll always tell you why.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 48, fontSize: "0.9rem" }}>
            {["No setup fees", "No hidden costs", "Itemized invoices", "Flexible payment plans"].map((t) => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: 8, color: tk.textMuted }}>
                <Check style={{ width: 16, color: "#34d399" }} />
                {t}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            <a
              href="#packages"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#6366f1", color: "#fff", fontWeight: 800, padding: "16px 32px", borderRadius: 18, textDecoration: "none", boxShadow: "0 4px 20px rgba(99,102,241,0.30)" }}
            >
              View Packages <ArrowRight style={{ width: 16 }} />
            </a>
            <a
              href="#quote"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${tk.border}`, color: tk.textMuted, fontWeight: 700, padding: "16px 32px", borderRadius: 18, textDecoration: "none" }}
            >
              Get Exact Quote
            </a>
          </div>
        </section>

        {/* ── Currency Toggle ───────────────────────────────────────── */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 80 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4, background: tk.bgCard, border: `1px solid ${tk.border}`, borderRadius: 20, padding: "6px 8px" }}>
            <Globe style={{ width: 16, color: tk.textSub, marginLeft: 8, marginRight: 4 }} />
            {currencies.map((c) => (
              <button
                key={c.code}
                onClick={() => setCurrency(c)}
                style={{
                  padding: "8px 16px", borderRadius: 12, fontSize: 13, fontWeight: 700, border: "none", cursor: "pointer",
                  background: currency.code === c.code ? "#6366f1" : "transparent",
                  color: currency.code === c.code ? "#fff" : tk.textMuted,
                  transition: "background 0.2s, color 0.2s",
                }}
              >
                {c.code}
              </button>
            ))}
          </div>
        </div>

        {/* ── 2. SERVICE PRICING TABLE ─────────────────────────────── */}
        <section style={{ marginBottom: 128 }}>
          <SectionLabel theme={theme}>Individual Services</SectionLabel>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, textAlign: "center", marginBottom: 12 }}>Service Pricing</h2>
          <p style={{ color: tk.textMuted, textAlign: "center", marginBottom: 40, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            Pick exactly what you need. Each service is scoped, priced, and delivered independently.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 32 }}>
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "8px 16px", borderRadius: 999, fontSize: "0.85rem", fontWeight: 700, cursor: "pointer",
                    border: `1px solid ${active ? "#6366f1" : tk.border}`,
                    background: active ? "#6366f1" : "transparent",
                    color: active ? "#fff" : tk.textMuted,
                    transition: "background 0.2s, border-color 0.2s, color 0.2s",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div style={{ borderRadius: 24, border: `1px solid ${tk.border}`, overflow: "hidden", backdropFilter: "blur(12px)", boxShadow: isDark ? "none" : "0 2px 12px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", background: tk.bgSubtle, borderBottom: `1px solid ${tk.border}`, padding: "16px 28px", gap: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.2em", color: tk.textSub, textTransform: "uppercase" }}>Service</span>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.2em", color: tk.textSub, textTransform: "uppercase", textAlign: "center", minWidth: 120 }}>Starting Price</span>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.2em", color: tk.textSub, textTransform: "uppercase", textAlign: "right", minWidth: 100 }}>Delivery</span>
            </div>
            {filteredServices.map((svc, i) => (
              <div
                key={svc.name}
                style={{
                  display: "grid", gridTemplateColumns: "1fr auto auto", alignItems: "center",
                  padding: "20px 28px", gap: 16,
                  borderBottom: i !== filteredServices.length - 1 ? `1px solid ${tk.border}` : "none",
                  background: i % 2 !== 0 ? tk.bgSubtle : "transparent",
                  transition: "background 0.15s",
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{svc.name}</div>
                  <div style={{ fontSize: "0.75rem", color: tk.textSub, marginTop: 2 }}>{svc.category}</div>
                </div>
                <div style={{ textAlign: "center", minWidth: 120 }}>
                  <span style={{ background: "linear-gradient(135deg,#818cf8,#636be6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 900, fontSize: "1.4rem" }}>
                    {formatPrice(svc.price, currency)}
                  </span>
                </div>
                <div style={{ textAlign: "right", minWidth: 100 }}>
                  <span style={{
                    fontSize: "0.75rem", fontWeight: 700, padding: "4px 12px", borderRadius: 999,
                    background: isDark ? "rgba(99,102,241,0.12)" : "rgba(99,102,241,0.08)",
                    border: `1px solid ${isDark ? "rgba(99,102,241,0.25)" : "rgba(99,102,241,0.20)"}`,
                    color: isDark ? "#818cf8" : "#6366f1",
                  }}>
                    {svc.delivery}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.75rem", color: tk.textSub, textAlign: "center", marginTop: 16 }}>
            * Prices shown are base estimates. Final cost depends on project scope.
          </p>
        </section>

        {/* ── 3. WHAT'S INCLUDED ───────────────────────────────────── */}
        <section style={{ marginBottom: 128 }}>
          <SectionLabel theme={theme}>Deliverables</SectionLabel>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, textAlign: "center", marginBottom: 12 }}>What&apos;s Included</h2>
          <p style={{ color: tk.textMuted, textAlign: "center", marginBottom: 56, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            No ambiguity. Here&apos;s a precise breakdown of what every engagement covers.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {includedGroups.map((cat) => (
              <Card key={cat.title} accent={cat.accent} theme={theme}>
                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", marginBottom: 16, color: cat.accent }}>{cat.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {cat.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                      <Check style={{ width: 16, color: "#34d399", flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: "0.875rem", color: tk.textMuted, lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* ── 4. PACKAGES ──────────────────────────────────────────── */}
        <section id="packages" style={{ marginBottom: 128 }}>
          <SectionLabel theme={theme}>Package Plans</SectionLabel>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, textAlign: "center", marginBottom: 12 }}>Pick Your Plan</h2>
          <p style={{ color: tk.textMuted, textAlign: "center", marginBottom: 56, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            Bundled packages designed to deliver maximum value at each stage of growth.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24, alignItems: "start" }}>
            {packages.map((pkg, idx) => {
              const isPro = pkg.name === "Professional";
              return (
                <div
                  key={pkg.name}
                  style={{
                    position: "relative",
                    borderRadius: 28,
                    border: `1px solid ${isPro ? (isDark ? "rgba(99,102,241,0.40)" : "rgba(99,102,241,0.35)") : tk.border}`,
                    background: isDark
                      ? (idx === 1 ? "linear-gradient(160deg,rgba(99,102,241,0.18),rgba(139,92,246,0.08))" : idx === 2 ? "linear-gradient(160deg,rgba(52,211,153,0.12),rgba(20,184,166,0.04))" : "rgba(255,255,255,0.03)")
                      : (idx === 1 ? "linear-gradient(160deg,#eef2ff,#f5f3ff)" : idx === 2 ? "linear-gradient(160deg,#ecfdf5,#f0fdfa)" : "#fff"),
                    padding: 32,
                    transition: "transform 0.3s",
                    boxShadow: isDark ? "none" : "0 2px 16px rgba(0,0,0,0.06)",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
                >
                  {pkg.badge && (
                    <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)" }}>
                      <Badge text={pkg.badge} variant={pkg.name === "Enterprise" ? "emerald" : "indigo"} theme={theme} />
                    </div>
                  )}

                  <div style={{ marginBottom: 20 }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: 4 }}>{pkg.name}</h3>
                    <p style={{ color: tk.textMuted, fontSize: "0.875rem" }}>{pkg.description}</p>
                  </div>

                  <div style={{ marginBottom: 28 }}>
                    <span style={{ fontSize: "2.8rem", fontWeight: 900 }}>{formatPrice(pkg.price, currency)}</span>
                    <span style={{ color: tk.textSub, fontSize: "0.875rem", marginLeft: 8 }}>one-time</span>
                  </div>

                  <ul style={{ marginBottom: 28, listStyle: "none", padding: 0 }}>
                    {pkg.features.map((f) => (
                      <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                        <Check style={{ width: 16, color: "#34d399", flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: "0.875rem", color: tk.textMuted }}>{f}</span>
                      </li>
                    ))}
                    {pkg.notIncluded.map((f) => (
                      <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                        <X style={{ width: 16, color: tk.textFaint, flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: "0.875rem", color: tk.textFaint }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#quote"
                    style={{
                      display: "block", width: "100%", textAlign: "center", padding: "14px 0", borderRadius: 14,
                      fontWeight: 800, fontSize: "0.95rem", cursor: "pointer", textDecoration: "none",
                      background: isPro ? "#6366f1" : isDark ? "rgba(255,255,255,0.08)" : "#f1f5f9",
                      color: isPro ? "#fff" : tk.text,
                      border: isPro ? "none" : `1px solid ${tk.border}`,
                      boxShadow: isPro ? "0 4px 20px rgba(99,102,241,0.30)" : "none",
                    }}
                  >
                    Get Started
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 5. COMPARISON TABLE ──────────────────────────────────── */}
        <section style={{ marginBottom: 128 }}>
          <SectionLabel theme={theme}>Compare Plans</SectionLabel>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, textAlign: "center", marginBottom: 12 }}>Side-by-Side Comparison</h2>
          <p style={{ color: tk.textMuted, textAlign: "center", marginBottom: 56, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            Not sure which plan fits? This table makes the differences crystal clear.
          </p>

          <div style={{ borderRadius: 24, border: `1px solid ${tk.border}`, overflow: "hidden", boxShadow: isDark ? "none" : "0 2px 12px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", background: tk.bgSubtle, borderBottom: `1px solid ${tk.border}` }}>
              <div style={{ padding: 20, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: tk.textSub }}>Feature</div>
              {["Starter", "Professional", "Enterprise"].map((plan, i) => (
                <div key={plan} style={{ padding: 20, textAlign: "center", background: i === 1 ? (isDark ? "rgba(99,102,241,0.10)" : "rgba(99,102,241,0.06)") : "transparent" }}>
                  <div style={{ fontWeight: 900, fontSize: "0.95rem" }}>{plan}</div>
                  <div style={{ fontSize: 11, color: tk.textSub, marginTop: 4 }}>{formatPrice(packages[i].price, currency)}</div>
                </div>
              ))}
            </div>

            {comparisonFeatures.map((feat, i) => (
              <div
                key={feat.name}
                style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  borderBottom: i < comparisonFeatures.length - 1 ? `1px solid ${tk.border}` : "none",
                  background: i % 2 !== 0 ? tk.bgSubtle : "transparent",
                }}
              >
                <div style={{ padding: "16px 20px", fontSize: "0.875rem", fontWeight: 600 }}>{feat.name}</div>
                {[feat.starter, feat.professional, feat.enterprise].map((val, j) => (
                  <div key={j} style={{ padding: "16px 20px", textAlign: "center", background: j === 1 ? (isDark ? "rgba(99,102,241,0.05)" : "rgba(99,102,241,0.03)") : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CellValue val={val} theme={theme} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. WHAT AFFECTS PRICE ────────────────────────────────── */}
        <section style={{ marginBottom: 128 }}>
          <SectionLabel theme={theme}>Pricing Explained</SectionLabel>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, textAlign: "center", marginBottom: 12 }}>What Affects Your Price</h2>
          <p style={{ color: tk.textMuted, textAlign: "center", marginBottom: 56, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            We believe in full transparency. Here&apos;s exactly what drives cost up or down.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {priceFactors.map((f) => (
              <Card key={f.title} accent={f.accent} theme={theme}>
                <div style={{ width: 48, height: 48, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", background: hexToRgba(f.accent, 0.15), color: f.accent, marginBottom: 20 }}>
                  {f.icon}
                </div>
                <h3 style={{ fontWeight: 900, fontSize: "1rem", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: "0.875rem", color: tk.textMuted, lineHeight: 1.65 }}>{f.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ── 7. FAQ ───────────────────────────────────────────────── */}
        <section style={{ marginBottom: 128 }}>
          <SectionLabel theme={theme}>FAQ</SectionLabel>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, textAlign: "center", marginBottom: 12 }}>Pricing Questions</h2>
          <p style={{ color: tk.textMuted, textAlign: "center", marginBottom: 56, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            Everything you need to know before making a decision.
          </p>

          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderRadius: 16, border: `1px solid ${tk.border}`, background: tk.bgCard, overflow: "hidden", boxShadow: isDark ? "none" : "0 1px 3px rgba(0,0,0,0.04)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", color: tk.text, fontWeight: 700, fontSize: "0.9rem", textAlign: "left", gap: 12 }}
                >
                  {faq.q}
                  <ChevronDown style={{ width: 18, flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", color: isDark ? "#818cf8" : "#6366f1" }} />
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", color: tk.textMuted, fontSize: "0.875rem", lineHeight: 1.7, borderTop: `1px solid ${tk.border}`, paddingTop: 16 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 8. GET EXACT QUOTE ───────────────────────────────────── */}
        <section id="quote" style={{ marginBottom: 128 }}>
          <div style={{
            position: "relative", borderRadius: 32, overflow: "hidden",
            border: `1px solid rgba(99,102,241,0.20)`,
            background: isDark
              ? "linear-gradient(135deg,rgba(99,102,241,0.15),rgba(139,92,246,0.10),transparent)"
              : "linear-gradient(135deg,rgba(99,102,241,0.06),rgba(139,92,246,0.04),#fff)",
            boxShadow: isDark ? "none" : "0 4px 24px rgba(0,0,0,0.07)",
          }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: 320, height: 320, background: "radial-gradient(circle,rgba(99,102,241,0.15) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, width: 256, height: 256, background: "radial-gradient(circle,rgba(139,92,246,0.10) 0%,transparent 70%)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 48, padding: "3.5rem" }}>
              <div>
                <SectionLabel theme={theme}>Free Estimate</SectionLabel>
                <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: 20, lineHeight: 1.15 }}>
                  Get Your
                  <br />
                  <span style={{ background: "linear-gradient(135deg,#818cf8,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Exact Quote
                  </span>
                </h2>
                <p style={{ color: tk.textMuted, lineHeight: 1.7, marginBottom: 32 }}>
                  Tell us about your project and we&apos;ll send a fully itemized, no-obligation quote
                  within 24 hours. No calls required unless you want one.
                </p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Response within 24 hours", "Fully itemized breakdown", "No commitment required", "Fixed-price guarantee"].map((i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "0.9rem", color: tk.textMuted }}>
                      <Check style={{ width: 16, color: "#34d399", flexShrink: 0 }} />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: tk.textSub, marginBottom: 8 }}>Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      style={{ width: "100%", background: tk.inputBg, border: `1px solid ${tk.border}`, borderRadius: 12, padding: "12px 16px", fontSize: "0.875rem", color: tk.text, outline: "none" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: tk.textSub, marginBottom: 8 }}>Email</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      style={{ width: "100%", background: tk.inputBg, border: `1px solid ${tk.border}`, borderRadius: 12, padding: "12px 16px", fontSize: "0.875rem", color: tk.text, outline: "none" }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: tk.textSub, marginBottom: 8 }}>Service Needed</label>
                  <select style={{ width: "100%", background: tk.inputBg, border: `1px solid ${tk.border}`, borderRadius: 12, padding: "12px 16px", fontSize: "0.875rem", color: tk.text, outline: "none" }}>
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s.name} value={s.name}>{s.name}</option>
                    ))}
                    <option value="package">Full Package</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: tk.textSub, marginBottom: 8 }}>Budget Range</label>
                  <select style={{ width: "100%", background: tk.inputBg, border: `1px solid ${tk.border}`, borderRadius: 12, padding: "12px 16px", fontSize: "0.875rem", color: tk.text, outline: "none" }}>
                    <option>Under $500</option>
                    <option>$500 – $2,000</option>
                    <option>$2,000 – $5,000</option>
                    <option>$5,000+</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: tk.textSub, marginBottom: 8 }}>Project Details</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project, goals, timeline, or anything that helps us understand your needs…"
                    style={{ width: "100%", background: tk.inputBg, border: `1px solid ${tk.border}`, borderRadius: 12, padding: "12px 16px", fontSize: "0.875rem", color: tk.text, outline: "none", resize: "none" }}
                  />
                </div>

                <button style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#6366f1", color: "#fff", fontWeight: 800, padding: "16px 0", borderRadius: 14, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(99,102,241,0.30)" }}>
                  Send My Request
                  <ArrowRight style={{ width: 16 }} />
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}