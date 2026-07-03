"use client";

import { useState } from "react";
import { ArrowRight, Check, X, ChevronDown, Zap, Shield, Clock, Globe } from "lucide-react";

// ─── DATA ──────────────────────────────────────────────────────────────────────

const currencies = [
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
    color: "from-slate-500/20 to-slate-400/10",
    border: "border-slate-200 dark:border-white/10",
    badge: null,
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
    color: "from-indigo-600/30 to-violet-500/20",
    border: "border-indigo-400/50",
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
    color: "from-emerald-500/20 to-teal-400/10",
    border: "border-emerald-400/40",
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
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Complexity & Features",
    desc: "Custom animations, third-party integrations, and advanced functionality increase development time and cost.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Timeline & Urgency",
    desc: "Rush projects with tight deadlines may include an expedite fee. Standard timelines keep costs predictable.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Design Customization",
    desc: "Fully bespoke UI from scratch costs more than template-based builds. We'll discuss your vision upfront.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Scale & Infrastructure",
    desc: "High-traffic apps, multi-region deployments, and enterprise-grade security add infrastructure costs.",
  },
];

const faqs = [
  {
    q: "Do you offer payment plans or installments?",
    a: "Yes! For projects over $1,000, we offer a 50/50 split — 50% upfront and 50% on delivery. Enterprise clients can arrange custom milestone-based payments.",
  },
  {
    q: "Are there any hidden fees?",
    a: "Never. All quotes are fully itemized. Third-party service costs (hosting, domain, paid APIs) are listed separately and always disclosed before work begins.",
  },
  {
    q: "What if I need changes after delivery?",
    a: "Each package includes post-delivery support. Changes outside scope are billed at $85/hour, or you can upgrade to a monthly retainer for ongoing work.",
  },
  {
    q: "Can I start with a smaller package and upgrade later?",
    a: "Absolutely. Many clients start with Starter and upgrade as they grow. We apply a credit toward the upgrade cost.",
  },
  {
    q: "Do prices include hosting and domain?",
    a: "No — hosting and domain registration are separate ongoing costs. We help you choose the right providers and handle the setup as part of the project.",
  },
  {
    q: "How accurate is the pricing table?",
    a: "The table shows base prices. Your actual quote may vary based on specific requirements. Use the 'Get Exact Quote' form for a precise estimate.",
  },
];

// ─── HELPERS ───────────────────────────────────────────────────────────────────

function formatPrice(usd: number, currency: typeof currencies[number]) {
  const converted = Math.round(usd * currency.rate);
  return `${currency.symbol}${converted.toLocaleString()}`;
}

// ─── SUB-COMPONENTS ────────────────────────────────────────────────────────────

function Badge({ text, variant = "indigo" }: { text: string; variant?: string }) {
  const styles: Record<string, string> = {
    indigo: "bg-indigo-500/15 text-indigo-400 border-indigo-400/30",
    emerald: "bg-emerald-500/15 text-emerald-400 border-emerald-400/30",
  };
  return (
    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${styles[variant] ?? styles.indigo}`}>
      {text}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center mb-5">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 bg-indigo-500/10 border border-indigo-400/20 px-4 py-1.5 rounded-full">
        {children}
      </span>
    </div>
  );
}

function CellValue({ val }: { val: string | boolean }) {
  if (val === true) return <Check className="w-5 h-5 text-emerald-400 mx-auto" />;
  if (val === false) return <X className="w-4 h-4 text-slate-500 mx-auto" />;
  return <span className="text-sm text-slate-300 font-medium">{val}</span>;
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(services.map((s) => s.category)))];
  const filteredServices =
    activeCategory === "All" ? services : services.filter((s) => s.category === activeCategory);

  return (
    <main
      className="min-h-screen bg-[#080B14] text-white"
      style={{ fontFamily: "'Space Grotesk', ui-sans-serif" }}
    >
      {/* ── Ambient background ─────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-emerald-500/6 rounded-full blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.3) 39px,rgba(255,255,255,0.3) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.3) 39px,rgba(255,255,255,0.3) 40px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* ── 1. HERO ──────────────────────────────────────────────── */}
        <section className="pt-32 pb-24 text-center">
          <SectionLabel>Transparent Pricing</SectionLabel>

          <h1
            className="text-5xl md:text-7xl lg:text-8x font-black mb-6 leading-[0.95] tracking-tight"
            style={{ fontFamily: "'Space Grotesk', ui-sans-serif" }}
          >
            Honest Prices.
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              Zero Surprises.
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Every quote is fully itemized. No hidden fees, no bait-and-switch. What you see is
            exactly what you pay — and we'll always tell you why.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
            {["No setup fees", "No hidden costs", "Itemized invoices", "Flexible payment plans"].map((t) => (
              <span key={t} className="flex items-center gap-2 text-slate-400">
                <Check className="w-4 h-4 text-emerald-400" />
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#packages"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              View Packages <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-indigo-400/50 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 backdrop-blur-sm hover:bg-white/5"
            >
              Get Exact Quote
            </a>
          </div>
        </section>

        {/* ── Currency Toggle ───────────────────────────────────────── */}
        <div className="flex justify-center mb-20">
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-2xl p-1.5">
            <Globe className="w-4 h-4 text-slate-400 ml-2 mr-1" />
            {currencies.map((c) => (
              <button
                key={c.code}
                onClick={() => setCurrency(c)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                  currency.code === c.code
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {c.code}
              </button>
            ))}
          </div>
        </div>

        {/* ── 2. SERVICE PRICING TABLE ─────────────────────────────── */}
        <section className="mb-32">
          <SectionLabel>Individual Services</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: "'Space Grotesk', ui-sans-serif" }}>
            Service Pricing
          </h2>
          <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">
            Pick exactly what you need. Each service is scoped, priced, and delivered independently.
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-indigo-600 border-indigo-500 text-white"
                    : "border-white/10 text-slate-400 hover:border-indigo-400/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 overflow-hidden backdrop-blur-xl bg-white/3">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              <span>Service</span>
              <span className="text-center">Starting Price</span>
              <span className="text-right">Delivery</span>
            </div>
            {filteredServices.map((svc, i) => (
              <div
                key={svc.name}
                className={`grid grid-cols-3 items-center px-6 py-5 transition-all duration-200 hover:bg-white/5 ${
                  i !== filteredServices.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <div>
                  <div className="font-semibold text-white">{svc.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{svc.category}</div>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-black text-indigo-400">
                    {formatPrice(svc.price, currency)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    {svc.delivery}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 text-center mt-4">
            * Prices shown are base estimates. Final cost depends on project scope.
          </p>
        </section>

        {/* ── 3. WHAT'S INCLUDED ───────────────────────────────────── */}
        <section className="mb-32">
          <SectionLabel>Deliverables</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: "'Space Grotesk', ui-sans-serif" }}>
            What's Included
          </h2>
          <p className="text-slate-400 text-center mb-14 max-w-xl mx-auto">
            No ambiguity. Here's a precise breakdown of what every engagement covers.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Design",
                color: "indigo",
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
                color: "violet",
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
                color: "emerald",
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
                color: "amber",
                items: [
                  "Content structure & IA planning",
                  "Copywriting guidance (on request)",
                  "Placeholder content with live copy swap",
                  "Multi-language-ready structure",
                ],
              },
              {
                title: "Handoff",
                color: "rose",
                items: [
                  "Full source code via private Git repo",
                  "Deployment to Vercel / Netlify",
                  "Environment variables documentation",
                  "Recorded walkthrough video",
                ],
              },
              {
                title: "Support",
                color: "sky",
                items: [
                  "Bug fixes within support window",
                  "Priority Slack/email channel",
                  "Upgrade path planning",
                  "Monthly retainer option available",
                ],
              },
            ].map((cat) => {
              const colorMap: Record<string, string> = {
                indigo: "from-indigo-500/15 to-indigo-500/0 border-indigo-400/20 text-indigo-400",
                violet: "from-violet-500/15 to-violet-500/0 border-violet-400/20 text-violet-400",
                emerald: "from-emerald-500/15 to-emerald-500/0 border-emerald-400/20 text-emerald-400",
                amber: "from-amber-500/15 to-amber-500/0 border-amber-400/20 text-amber-400",
                rose: "from-rose-500/15 to-rose-500/0 border-rose-400/20 text-rose-400",
                sky: "from-sky-500/15 to-sky-500/0 border-sky-400/20 text-sky-400",
              };
              const cls = colorMap[cat.color];
              return (
                <div
                  key={cat.title}
                  className={`rounded-2xl border bg-gradient-to-b p-6 ${cls}`}
                >
                  <h3 className="font-black text-lg mb-4">{cat.title}</h3>
                  <ul className="space-y-2.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 4. PACKAGES ──────────────────────────────────────────── */}
        <section id="packages" className="mb-32">
          <SectionLabel>Package Plans</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: "'Space Grotesk', ui-sans-serif" }}>
            Pick Your Plan
          </h2>
          <p className="text-slate-400 text-center mb-14 max-w-xl mx-auto">
            Bundled packages designed to deliver maximum value at each stage of growth.
          </p>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-3xl border bg-gradient-to-b ${pkg.color} ${pkg.border} p-8 transition-all duration-300 hover:-translate-y-1`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge text={pkg.badge} variant={pkg.name === "Enterprise" ? "emerald" : "indigo"} />
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-black mb-1">{pkg.name}</h3>
                  <p className="text-slate-400 text-sm">{pkg.description}</p>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-black">{formatPrice(pkg.price, currency)}</span>
                  <span className="text-slate-500 text-sm ml-2">one-time</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                  {pkg.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <X className="w-4 h-4 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#quote"
                  className={`block w-full text-center font-bold py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] ${
                    pkg.name === "Professional"
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                      : "bg-white/8 hover:bg-white/12 border border-white/10 text-white"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. COMPARISON TABLE ──────────────────────────────────── */}
        <section className="mb-32">
          <SectionLabel>Compare Plans</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: "'Space Grotesk', ui-sans-serif" }}>
            Side-by-Side Comparison
          </h2>
          <p className="text-slate-400 text-center mb-14 max-w-xl mx-auto">
            Not sure which plan fits? This table makes the differences crystal clear.
          </p>

          <div className="rounded-3xl border border-white/10 overflow-hidden backdrop-blur-xl">
            {/* header */}
            <div className="grid grid-cols-4 bg-white/5 border-b border-white/10">
              <div className="p-5 text-sm font-bold text-slate-500 uppercase tracking-widest">Feature</div>
              {["Starter", "Professional", "Enterprise"].map((plan, i) => (
                <div key={plan} className={`p-5 text-center ${i === 1 ? "bg-indigo-600/10" : ""}`}>
                  <div className="font-black text-base">{plan}</div>
                  <div className="text-xs text-slate-400 mt-1">
                    {formatPrice(packages[i].price, currency)}
                  </div>
                </div>
              ))}
            </div>

            {comparisonFeatures.map((feat, i) => (
              <div
                key={feat.name}
                className={`grid grid-cols-4 border-b border-white/5 transition-colors hover:bg-white/3 ${
                  i % 2 === 0 ? "" : "bg-white/[0.02]"
                }`}
              >
                <div className="px-5 py-4 text-sm text-slate-300 font-medium">{feat.name}</div>
                <div className="px-5 py-4 text-center">
                  <CellValue val={feat.starter} />
                </div>
                <div className="px-5 py-4 text-center bg-indigo-600/5">
                  <CellValue val={feat.professional} />
                </div>
                <div className="px-5 py-4 text-center">
                  <CellValue val={feat.enterprise} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. WHAT AFFECTS PRICE ────────────────────────────────── */}
        <section className="mb-32">
          <SectionLabel>Pricing Explained</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: "'Space Grotesk', ui-sans-serif" }}>
            What Affects Your Price
          </h2>
          <p className="text-slate-400 text-center mb-14 max-w-xl mx-auto">
            We believe in full transparency. Here's exactly what drives cost up or down.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {priceFactors.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/3 p-7 hover:border-indigo-400/30 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-400/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <h3 className="font-black text-base mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. FAQ ───────────────────────────────────────────────── */}
        <section className="mb-32">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: "'Space Grotesk', ui-sans-serif" }}>
            Pricing Questions
          </h2>
          <p className="text-slate-400 text-center mb-14 max-w-xl mx-auto">
            Everything you need to know before making a decision.
          </p>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 overflow-hidden bg-white/3 hover:border-indigo-400/25 transition-all duration-200"
              >
                <button
                  className="w-full flex items-center justify-between px-7 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-white pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180 text-indigo-400" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-7 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 8. GET EXACT QUOTE ───────────────────────────────────── */}
        <section id="quote" className="mb-32">
          <div className="relative rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 md:p-14">
              {/* Left */}
              <div>
                <SectionLabel>Free Estimate</SectionLabel>
                <h2
                  className="text-4xl md:text-5xl font-black mb-5 leading-tight"
                  style={{ fontFamily: "'Space Grotesk', ui-sans-serif" }}
                >
                  Get Your
                  <br />
                  <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                    Exact Quote
                  </span>
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Tell us about your project and we'll send a fully itemized, no-obligation quote
                  within 24 hours. No calls required unless you want one.
                </p>
                <ul className="space-y-3">
                  {[
                    "Response within 24 hours",
                    "Fully itemized breakdown",
                    "No commitment required",
                    "Fixed-price guarantee",
                  ].map((i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — form */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-widest">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-400/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-400/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-widest">
                    Service Needed
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-400/60 transition-colors appearance-none">
                    <option value="" className="bg-[#0f1220]">Select a service…</option>
                    {services.map((s) => (
                      <option key={s.name} value={s.name} className="bg-[#0f1220]">
                        {s.name}
                      </option>
                    ))}
                    <option value="package" className="bg-[#0f1220]">Full Package</option>
                    <option value="other" className="bg-[#0f1220]">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-widest">
                    Budget Range
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-400/60 transition-colors appearance-none">
                    <option className="bg-[#0f1220]">Under $500</option>
                    <option className="bg-[#0f1220]">$500 – $2,000</option>
                    <option className="bg-[#0f1220]">$2,000 – $5,000</option>
                    <option className="bg-[#0f1220]">$5,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-widest">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project, goals, timeline, or anything that helps us understand your needs…"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-400/60 transition-colors resize-none"
                  />
                </div>

                <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/25 flex items-center justify-center gap-2">
                  Send My Request
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}