"use client";

import {
  Code2, Server, Globe, Layers,
  Zap, ShieldCheck, GitBranch, MonitorSmartphone,
  ArrowRight, CheckCircle2, ChevronDown,
  Clock, TrendingUp, Smartphone, Search, MessageCircle, Check, X,
} from "lucide-react";
import { useState } from "react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Currency = { code: string; symbol: string; rate: number };

// ─── DATA ─────────────────────────────────────────────────────────────────────

const currencies: Currency[] = [
  { code: "USD", symbol: "$",  rate: 0.012 },
  { code: "EUR", symbol: "€",  rate: 0.011 },
  { code: "GBP", symbol: "£",  rate: 0.0095 },
  { code: "INR", symbol: "₹",  rate: 1 },
];

function formatPrice(inr: number, currency: Currency) {
  const converted = Math.round(inr * currency.rate);
  return `${currency.symbol}${converted.toLocaleString()}`;
}

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center mb-5">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 bg-indigo-500/10 border border-indigo-400/20 px-4 py-1.5 rounded-full">
        {children}
      </span>
    </div>
  );
}

function Badge({ text, variant = "indigo" }: { text: string; variant?: string }) {
  const styles: Record<string, string> = {
    indigo:  "bg-indigo-500/15 text-indigo-400 border-indigo-400/30",
    emerald: "bg-emerald-500/15 text-emerald-400 border-emerald-400/30",
    violet:  "bg-violet-500/15 text-violet-400 border-violet-400/30",
  };
  return (
    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${styles[variant] ?? styles.indigo}`}>
      {text}
    </span>
  );
}

function Card({ children, accent, glow }: { children: React.ReactNode; accent: string; glow: string }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 20,
        border: "1px solid rgba(255,255,255,0.08)",
        backgroundColor: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
        padding: 28,
        transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-6px)";
        el.style.boxShadow = `0 0 40px ${glow}`;
        el.style.borderColor = `${accent}55`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      {children}
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function WebDevelopmentPage() {
  const [currency, setCurrency] = useState<Currency>(currencies[3]); // INR default
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ── Data ──────────────────────────────────────────────────────────────────

  const services = [
    { icon: <Code2 className="w-7 h-7" />,            title: "Frontend Development",     desc: "React, Next.js, Vue and Tailwind CSS for stunning, fast UIs.",       benefit: "Build fast, beautiful interfaces that convert visitors into customers.", accent: "#818cf8", glow: "rgba(129,140,248,0.18)" },
    { icon: <Server className="w-7 h-7" />,            title: "Backend Development",      desc: "Node.js, Express, Python — scalable APIs and server systems.",       benefit: "Scalable APIs that handle growth without slowing down.",               accent: "#34d399", glow: "rgba(52,211,153,0.18)"  },
    { icon: <Globe className="w-7 h-7" />,             title: "Full-Stack Web Apps",      desc: "End-to-end web applications from concept to deployment.",            benefit: "End-to-end solutions from idea to live product.",                     accent: "#a78bfa", glow: "rgba(167,139,250,0.18)" },
    { icon: <MonitorSmartphone className="w-7 h-7" />, title: "Responsive Design",        desc: "Pixel-perfect, mobile-first layouts for every screen size.",         benefit: "Perfect experience on mobile, tablet, and desktop.",                  accent: "#f472b6", glow: "rgba(244,114,182,0.18)" },
    { icon: <Zap className="w-7 h-7" />,               title: "Performance Optimization", desc: "Lightning-fast load times, Core Web Vitals and SEO tuning.",         benefit: "Faster pages = better SEO, rankings, and conversions.",               accent: "#fbbf24", glow: "rgba(251,191,36,0.18)"  },
    { icon: <ShieldCheck className="w-7 h-7" />,       title: "Security & Auth",          desc: "Secure APIs, JWT auth, OAuth and enterprise-grade protection.",      benefit: "Protect user data with enterprise-grade security.",                   accent: "#f87171", glow: "rgba(248,113,113,0.18)" },
    { icon: <GitBranch className="w-7 h-7" />,         title: "CI/CD & DevOps",           desc: "GitHub Actions, Docker, AWS — automated pipelines and deploys.",     benefit: "Automated deployments reducing manual work and errors.",              accent: "#22d3ee", glow: "rgba(34,211,238,0.18)"  },
    { icon: <Layers className="w-7 h-7" />,            title: "CMS & E-Commerce",         desc: "Headless CMS, Shopify and custom e-commerce storefronts.",           benefit: "Easy-to-manage content and checkout experiences that drive sales.",   accent: "#fb923c", glow: "rgba(251,146,60,0.18)"  },
  ];

  const pricing = [
    { service: "Landing Page",          inr: 8000,  time: "1–3 Days"  },
    { service: "Frontend Development",  inr: 15000, time: "3–7 Days"  },
    { service: "Backend Development",   inr: 18000, time: "4–12 Days" },
    { service: "Fullstack Application", inr: 35000, time: "7–20 Days" },
    { service: "Ecommerce Website",     inr: 30000, time: "7–15 Days" },
    { service: "SaaS Platform",         inr: 60000, time: "15–45 Days"},
    { service: "Website Optimization",  inr: 8000,  time: "1–4 Days"  },
    { service: "CMS Setup",             inr: 10000, time: "3–7 Days"  },
  ];

  const packages = [
    {
      name: "Starter",
      inr: 8000,
      description: "Perfect for small businesses & MVPs",
      color: "from-slate-500/10 to-slate-400/5",
      border: "border-white/10",
      badge: null as string | null,
      features: [
        "Landing page (up to 3 sections)",
        "Mobile responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "2 revision rounds",
        "3-day delivery",
        "30-day support",
      ],
      notIncluded: ["Custom animations", "CMS integration", "E-commerce", "API development"],
    },
    {
      name: "Professional",
      inr: 35000,
      description: "For growing companies ready to scale",
      color: "from-indigo-600/20 to-violet-500/10",
      border: "border-indigo-400/40",
      badge: "Most Popular",
      features: [
        "Full website (up to 8 pages)",
        "Custom animations & interactions",
        "CMS integration",
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
      inr: 60000,
      description: "Full-stack solutions for ambitious teams",
      color: "from-emerald-500/15 to-teal-400/5",
      border: "border-emerald-400/30",
      badge: "Best Value",
      features: [
        "Custom web application",
        "E-commerce & payment gateway",
        "Custom API development",
        "Admin dashboard",
        "Unlimited revisions",
        "20-day delivery",
        "90-day dedicated support",
        "Post-launch monitoring",
      ],
      notIncluded: [],
    },
  ];

  const comparisonFeatures = [
    { name: "Pages / Screens",    starter: "Up to 3",   professional: "Up to 8",    enterprise: "Unlimited" },
    { name: "Custom Design",      starter: true,         professional: true,          enterprise: true        },
    { name: "Mobile Responsive",  starter: true,         professional: true,          enterprise: true        },
    { name: "SEO Setup",          starter: "Basic",      professional: "Advanced",   enterprise: "Full"      },
    { name: "CMS Integration",    starter: false,        professional: true,          enterprise: true        },
    { name: "E-Commerce",         starter: false,        professional: false,         enterprise: true        },
    { name: "API Development",    starter: false,        professional: false,         enterprise: true        },
    { name: "Revisions",          starter: "2 rounds",  professional: "5 rounds",   enterprise: "Unlimited" },
    { name: "Support Duration",   starter: "30 days",   professional: "60 days",    enterprise: "90 days"   },
    { name: "Priority Support",   starter: false,        professional: true,          enterprise: true        },
  ];

  const stack = ["Next.js","React","TypeScript","Node.js","Tailwind CSS","PostgreSQL","MongoDB","Docker","AWS","Vercel","Prisma","GraphQL"];

  const process = [
    { step: "01", title: "Discovery",   desc: "We understand your goals, audience and technical requirements." },
    { step: "02", title: "Design",      desc: "UI/UX wireframes, design systems and interactive prototypes."   },
    { step: "03", title: "Development", desc: "Clean, scalable code with continuous reviews and testing."      },
    { step: "04", title: "Launch",      desc: "Deployment, performance checks and post-launch support."        },
  ];

  const reasons = [
    "Clean, documented and maintainable code",
    "On-time delivery with milestone updates",
    "Post-launch support and maintenance",
    "Transparent pricing, no hidden costs",
    "Direct communication with developers",
    "Performance-first approach on every project",
  ];

  const caseStudies = [
    {
      title: "SaaS Platform for Startup",
      accent: "#818cf8",
      glow: "rgba(129,140,248,0.15)",
      tags: ["React", "Node.js", "PostgreSQL"],
      points: [
        "Full-stack React + Node.js application",
        "User authentication, billing, and dashboard",
        "Launched in 6 weeks, 1,000+ active users",
      ],
      stat: "1,000+ users",
    },
    {
      title: "Ecommerce for Fashion Brand",
      accent: "#34d399",
      glow: "rgba(52,211,153,0.15)",
      tags: ["Shopify", "Headless CMS", "Next.js"],
      points: [
        "Custom Shopify + headless CMS setup",
        "Product recommendations and smooth checkout",
        "40% increase in conversion rate",
      ],
      stat: "+40% conversions",
    },
    {
      title: "Performance Optimization",
      accent: "#fbbf24",
      glow: "rgba(251,191,36,0.15)",
      tags: ["Core Web Vitals", "SEO", "Caching"],
      points: [
        "Improved Core Web Vitals from poor to excellent",
        "Load time reduced from 4.2s to 0.8s",
        "35% increase in organic traffic",
      ],
      stat: "4.2s → 0.8s",
    },
    {
      title: "CRM Dashboard for BPO",
      accent: "#a78bfa",
      glow: "rgba(167,139,250,0.15)",
      tags: ["React", "TypeScript", "REST API"],
      points: [
        "React + TypeScript dashboard with real-time data",
        "Custom API integrations and role-based access",
        "Saved 15+ hours/week on manual reporting",
      ],
      stat: "15h/week saved",
    },
  ];

  const industries = [
    { title: "Startups",               accent: "#818cf8", glow: "rgba(129,140,248,0.15)", points: ["MVPs and landing pages to validate ideas fast","Scalable architecture from day one","Investor-ready dashboards and user onboarding"] },
    { title: "Ecommerce & Retail",     accent: "#34d399", glow: "rgba(52,211,153,0.15)",  points: ["Custom online stores with smooth checkout","Product catalogs and inventory management","Mobile-first design and payment integrations"] },
    { title: "SaaS & Tech",            accent: "#a78bfa", glow: "rgba(167,139,250,0.15)", points: ["Web applications with complex features","User authentication, billing, and analytics","API-first architecture for future growth"] },
    { title: "Agencies & Freelancers", accent: "#f472b6", glow: "rgba(244,114,182,0.15)", points: ["White-label development for your clients","Pixel-perfect, responsive designs","Fast turnaround and transparent pricing"] },
    { title: "Healthcare & Clinics",   accent: "#f87171", glow: "rgba(248,113,113,0.15)", points: ["Booking systems and patient portals","Secure, HIPAA-friendly architecture","Mobile-friendly interfaces for patients"] },
  ];

  const techStrengths = [
    { title: "Performance-First", accent: "#fbbf24", points: ["Optimized for Core Web Vitals and Google PageSpeed","Average load time under 1 second","Better SEO rankings and user experience"] },
    { title: "Clean Code",        accent: "#34d399", points: ["Well-structured, documented, and modular code","Easy to extend and hand over to other developers","Follows industry best practices"] },
    { title: "Scalable Arch",     accent: "#818cf8", points: ["Built to handle growth from day one","Database optimization and caching strategies","Ready for thousands of users"] },
    { title: "Security First",    accent: "#f87171", points: ["JWT, OAuth, and secure password handling","Protection against XSS, CSRF, and SQL injection","Regular security audits and updates"] },
  ];

  const metrics = [
    { label: "Load Time",          before: "4.5s",     after: "0.7s",    icon: <Zap className="w-5 h-5" />           },
    { label: "Conversion Rate",    before: "1.2%",     after: "3.8%",    icon: <TrendingUp className="w-5 h-5" />    },
    { label: "Mobile Bounce Rate", before: "65%",      after: "28%",     icon: <Smartphone className="w-5 h-5" />   },
    { label: "Google PageSpeed",   before: "45",       after: "92",      icon: <Search className="w-5 h-5" />       },
    { label: "Support Tickets",    before: "30/mo",    after: "8/mo",    icon: <MessageCircle className="w-5 h-5" />},
    { label: "Manual Work",        before: "20h/wk",   after: "3h/wk",   icon: <Clock className="w-5 h-5" />        },
  ];

  const faqs = [
    { q: "How much does a website cost?",             a: "Landing pages start from ₹8,000, frontend development from ₹15,000, fullstack applications from ₹35,000. Use the currency toggle to see prices in USD, EUR or GBP." },
    { q: "How long does it take to build a website?", a: "1–3 days for landing pages, 3–7 days for frontend, 7–20 days for fullstack projects." },
    { q: "Do you provide maintenance after launch?",  a: "Yes, we offer ongoing support and maintenance starting from ₹5,000/month." },
    { q: "Can you work with our existing codebase?",  a: "Yes, we can extend, optimize, or refactor existing projects." },
    { q: "What if we don't have a design yet?",       a: "We can handle design, development, or both — depending on your needs." },
    { q: "Do you offer SEO optimization?",            a: "Yes, all projects include SEO-friendly structure and performance tuning." },
  ];

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <main
      className="min-h-screen bg-[#080B14] text-white"
      style={{ fontFamily: "'DM Sans', 'Sora', sans-serif" }}
    >
      {/* ── Ambient background ── */}
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

      <div className="relative z-10">

        {/* ══════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════ */}
        <section className="relative pt-36 pb-28 px-6 md:px-16 text-center overflow-hidden border-b border-white/8">
          <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[400px] rounded-full bg-emerald-500/8 blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <SectionLabel>Web Development</SectionLabel>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95] tracking-tight"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Web Dev That Drives
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                Real Results
              </span>
            </h1>

            <div className="max-w-md mx-auto mb-6 text-left inline-block">
              {["Convert visitors into customers","Load in under 1 second","Scale from 100 to 100,000 users"].map((point, i) => (
                <div key={i} className="flex items-center gap-3 mb-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-slate-400 text-base">{point}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-500 mb-8 text-sm">From landing pages to full SaaS platforms — we handle it all.</p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 border border-white/15 hover:border-indigo-400/50 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 backdrop-blur-sm hover:bg-white/5">
                Get a Free Quote →
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SERVICES GRID
        ══════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>Services</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>What We Build</h2>
              <p className="text-slate-400">Full-spectrum web development services for modern businesses.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s, i) => (
                <Card key={i} accent={s.accent} glow={s.glow}>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${s.accent}1a`, color: s.accent }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="text-base font-black text-white mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <p className="text-xs font-semibold pt-3 border-t border-white/8" style={{ color: s.accent }}>
                    ✦ {s.benefit}
                  </p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CURRENCY TOGGLE + PRICING TABLE
        ══════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 md:px-16 border-t border-white/8 bg-white/[0.01]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <SectionLabel>Pricing</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Web Development Pricing</h2>
              <p className="text-slate-400">Transparent starting rates — no hidden fees.</p>
            </div>

            {/* Currency Toggle */}
            <div className="flex justify-center mb-10">
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

            {/* Pricing rows */}
            <div className="rounded-3xl border border-white/10 overflow-hidden backdrop-blur-xl bg-white/3">
              <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                <span>Service</span>
                <span className="text-center">Starting Price</span>
                <span className="text-right">Delivery</span>
              </div>
              {pricing.map((item, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 items-center px-6 py-5 hover:bg-white/5 transition-all duration-200 ${i !== pricing.length - 1 ? "border-b border-white/5" : ""}`}
                >
                  <span className="font-semibold text-white text-sm">{item.service}</span>
                  <span className="text-center text-2xl font-black text-indigo-400">
                    {formatPrice(item.inr, currency)}
                  </span>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-500 mt-4 text-xs">
              All prices are starting rates. Advanced features and custom integrations may cost extra. Maintenance & support from ₹5,000/month.
            </p>

            <div className="text-center mt-8">
              <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
                Get a Custom Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            PACKAGES
        ══════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>Package Plans</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Pick Your Plan</h2>
              <p className="text-slate-400">Bundled packages designed to deliver maximum value at each stage of growth.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-start">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative rounded-3xl border bg-gradient-to-b ${pkg.color} ${pkg.border} p-8 transition-all duration-300 hover:-translate-y-1`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <Badge
                        text={pkg.badge}
                        variant={pkg.name === "Enterprise" ? "emerald" : "indigo"}
                      />
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-black mb-1">{pkg.name}</h3>
                    <p className="text-slate-400 text-sm">{pkg.description}</p>
                  </div>

                  <div className="mb-8">
                    <span className="text-5xl font-black">{formatPrice(pkg.inr, currency)}</span>
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

                  <button
                    className={`w-full text-center font-bold py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] ${
                      pkg.name === "Professional"
                        ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                        : "bg-white/8 hover:bg-white/12 border border-white/10 text-white"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            COMPARISON TABLE
        ══════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 md:px-16 border-t border-white/8 bg-white/[0.01]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>Compare Plans</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Side-by-Side</h2>
              <p className="text-slate-400">Not sure which plan fits? This table makes the differences crystal clear.</p>
            </div>

            <div className="rounded-3xl border border-white/10 overflow-hidden backdrop-blur-xl">
              <div className="grid grid-cols-4 bg-white/5 border-b border-white/10">
                <div className="p-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Feature</div>
                {["Starter","Professional","Enterprise"].map((plan, i) => (
                  <div key={plan} className={`p-5 text-center ${i === 1 ? "bg-indigo-600/10" : ""}`}>
                    <div className="font-black text-base">{plan}</div>
                    <div className="text-xs text-slate-400 mt-1">{formatPrice(packages[i].inr, currency)}</div>
                  </div>
                ))}
              </div>

              {comparisonFeatures.map((feat, i) => (
                <div
                  key={feat.name}
                  className={`grid grid-cols-4 border-b border-white/5 hover:bg-white/3 transition-colors ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}
                >
                  <div className="px-5 py-4 text-sm text-slate-300 font-medium">{feat.name}</div>
                  {[feat.starter, feat.professional, feat.enterprise].map((val, j) => (
                    <div key={j} className={`px-5 py-4 text-center ${j === 1 ? "bg-indigo-600/5" : ""}`}>
                      {val === true  ? <Check className="w-5 h-5 text-emerald-400 mx-auto" /> :
                       val === false ? <X className="w-4 h-4 text-slate-600 mx-auto" /> :
                       <span className="text-sm text-slate-300 font-medium">{val}</span>}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            TECH STACK
        ══════════════════════════════════════════════════════ */}
        <section className="py-16 px-6 md:px-16 border-t border-white/8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-6">Technologies We Use</p>
            <div className="flex flex-wrap justify-center gap-3">
              {stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-xl text-sm font-semibold border border-white/10 bg-white/5 text-slate-400 hover:border-indigo-400/30 hover:text-slate-200 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CASE STUDIES
        ══════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 md:px-16 border-t border-white/8 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>Case Studies</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Recent Projects</h2>
              <p className="text-slate-400">Real results delivered for real clients.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {caseStudies.map((c, i) => (
                <Card key={i} accent={c.accent} glow={c.glow}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-black text-sm text-white flex-1 mr-3">{c.title}</h3>
                    <span
                      className="text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap"
                      style={{ background: `${c.accent}1a`, color: c.accent }}
                    >
                      {c.stat}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.tags.map((tag, j) => (
                      <span key={j} className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-slate-400 font-semibold">{tag}</span>
                    ))}
                  </div>
                  {c.points.map((p, j) => (
                    <div key={j} className="flex gap-2 items-start mb-2">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: c.accent }} />
                      <span className="text-xs text-slate-400 leading-relaxed">{p}</span>
                    </div>
                  ))}
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
                See Our Work <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            INDUSTRY SOLUTIONS
        ══════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 md:px-16 border-t border-white/8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>Industries</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Web Solutions by Industry</h2>
              <p className="text-slate-400">Built for your industry and scale.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {industries.map((ind, i) => (
                <Card key={i} accent={ind.accent} glow={ind.glow}>
                  <h3 className="font-black mb-4 text-sm" style={{ color: ind.accent }}>{ind.title}</h3>
                  {ind.points.map((p, j) => (
                    <div key={j} className="flex gap-2 items-start mb-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: ind.accent }} />
                      <span className="text-xs text-slate-400 leading-relaxed">{p}</span>
                    </div>
                  ))}
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <button className="inline-flex items-center gap-2 border border-white/15 hover:border-indigo-400/50 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 hover:bg-white/5">
                <MessageCircle className="w-4 h-4" /> Chat with Us Now
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            RESULTS / METRICS
        ══════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 md:px-16 border-t border-white/8 bg-white/[0.01]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>Real Results</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Results We Deliver</h2>
              <p className="text-slate-400">Measurable improvements across every project.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {metrics.map((m, i) => (
                <div key={i} className="rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-7 hover:border-indigo-400/25 hover:bg-white/5 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5 text-indigo-400">
                    {m.icon}
                    <span className="font-bold text-sm">{m.label}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 text-center">
                      <div className="font-bold text-base line-through opacity-60" style={{ color: "#f87171" }}>{m.before}</div>
                      <div className="text-slate-500 text-xs mt-1">Before</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div className="flex-1 text-center">
                      <div className="font-black text-base bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">{m.after}</div>
                      <div className="text-slate-500 text-xs mt-1">After</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            TECHNICAL STRENGTHS
        ══════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 md:px-16 border-t border-white/8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>Tech Strengths</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Technical Strengths</h2>
              <p className="text-slate-400">Production-grade practices baked into every project.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {techStrengths.map((t, i) => (
                <Card key={i} accent={t.accent} glow={`${t.accent}22`}>
                  <h3 className="font-black mb-4 text-sm" style={{ color: t.accent }}>{t.title}</h3>
                  {t.points.map((p, j) => (
                    <div key={j} className="flex gap-2 items-start mb-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: t.accent }} />
                      <span className="text-xs text-slate-400 leading-relaxed">{p}</span>
                    </div>
                  ))}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            PROCESS
        ══════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 md:px-16 border-t border-white/8 bg-white/[0.01]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>Process</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>How We Work</h2>
              <p className="text-slate-400 text-lg">A proven process that delivers results, every time.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {process.map((p, i) => (
                <div key={i} className="rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-7 hover:border-indigo-400/25 hover:bg-white/5 transition-all duration-300">
                  <div
                    className="text-5xl font-black leading-none mb-5 bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {p.step}
                  </div>
                  <h3 className="text-base font-black text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            WHY US
        ══════════════════════════════════════════════════════ */}
        <section className="py-20 px-6 md:px-16 border-t border-white/8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black leading-tight mb-5" style={{ fontFamily: "'Sora', sans-serif" }}>
                  Why clients choose{" "}
                  <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                    us over others
                  </span>
                </h2>
                <p className="text-slate-400 leading-relaxed">We don't just write code — we build products that solve real problems and grow with your business.</p>
              </div>
              <div className="flex flex-col gap-3.5">
                {reasons.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm font-semibold text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 md:px-16 border-t border-white/8 bg-white/[0.01]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Common Questions</h2>
              <p className="text-slate-400">Everything you need to know about our web development services.</p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 overflow-hidden bg-white/3 hover:border-indigo-400/25 transition-all duration-200"
                >
                  <button
                    className="w-full flex items-center justify-between px-7 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-white pr-4 text-sm">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-indigo-400" : "text-slate-400"}`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="px-7 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CTA
        ══════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 md:px-16 border-t border-white/8">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent overflow-hidden p-14 md:p-20 text-center">
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                <Globe className="w-8 h-8 text-indigo-400 mx-auto mb-6" />
                <h2
                  className="text-4xl md:text-6xl font-black mb-6 leading-tight"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Let's build your next{" "}
                  <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                    digital product
                  </span>
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
                  From a simple landing page to a complex SaaS platform — we deliver quality web development that drives results.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25 text-base">
                    Start Your Project <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="inline-flex items-center gap-2 border border-white/15 hover:border-indigo-400/50 text-slate-300 hover:text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-200 hover:bg-white/5 text-base">
                    Get a Free Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}