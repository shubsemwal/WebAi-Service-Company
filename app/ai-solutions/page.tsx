"use client";

import {
  Brain, Sparkles, Globe, Layers, Zap, ShieldCheck, GitBranch,
  MessageSquare, ArrowRight, CheckCircle2, ChevronDown, Check, X,
  Sun, Moon, TrendingUp, Clock, BarChart2, Search, Bot, Cpu,
} from "lucide-react";
import { useState } from "react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Currency = { code: string; symbol: string; rate: number };
type Theme = "dark" | "light";

// ─── CURRENCIES ───────────────────────────────────────────────────────────────

const currencies: Currency[] = [
  { code: "USD", symbol: "$",  rate: 0.012  },
  { code: "EUR", symbol: "€",  rate: 0.011  },
  { code: "GBP", symbol: "£",  rate: 0.0095 },
  { code: "INR", symbol: "₹",  rate: 1      },
];

function formatPrice(inr: number, currency: Currency) {
  const converted = Math.round(inr * currency.rate);
  return `${currency.symbol}${converted.toLocaleString()}`;
}

// ─── THEME TOKENS ─────────────────────────────────────────────────────────────
// Instead of CSS variables (which need a provider), we use a plain object
// and pass the theme everywhere. This keeps it self-contained.

const T = {
  dark: {
    bg:           "#080B14",
    bgCard:       "rgba(255,255,255,0.03)",
    bgSubtle:     "rgba(255,255,255,0.01)",
    border:       "rgba(255,255,255,0.08)",
    borderHover:  "rgba(99,102,241,0.40)",
    text:         "#ffffff",
    textMuted:    "#94a3b8",    // slate-400
    textSub:      "#64748b",    // slate-500
    ambientA:     "rgba(99,102,241,0.10)",
    ambientB:     "rgba(139,92,246,0.08)",
    ambientC:     "rgba(52,211,153,0.06)",
    gridColor:    "rgba(255,255,255,0.3)",
    cardBorder:   "rgba(255,255,255,0.08)",
    toggleBg:     "rgba(255,255,255,0.05)",
    toggleBorder: "rgba(255,255,255,0.10)",
    tableHead:    "rgba(255,255,255,0.05)",
    rowAlt:       "rgba(255,255,255,0.02)",
    rowHover:     "rgba(255,255,255,0.03)",
    ctaBg:        "rgba(99,102,241,0.15)",
    ctaBorder:    "rgba(99,102,241,0.20)",
    sectionLabel: { bg: "rgba(99,102,241,0.10)", border: "rgba(99,102,241,0.20)", text: "#818cf8" },
    accent:       "#818cf8",
    metricBefore: "#f87171",
  },
  light: {
    bg:           "#f8fafc",
    bgCard:       "#ffffff",
    bgSubtle:     "#f1f5f9",
    border:       "rgba(0,0,0,0.08)",
    borderHover:  "rgba(99,102,241,0.50)",
    text:         "#0f172a",
    textMuted:    "#475569",    // slate-600
    textSub:      "#94a3b8",    // slate-400
    ambientA:     "rgba(99,102,241,0.07)",
    ambientB:     "rgba(139,92,246,0.05)",
    ambientC:     "rgba(52,211,153,0.05)",
    gridColor:    "rgba(0,0,0,0.15)",
    cardBorder:   "rgba(0,0,0,0.08)",
    toggleBg:     "rgba(0,0,0,0.04)",
    toggleBorder: "rgba(0,0,0,0.10)",
    tableHead:    "rgba(0,0,0,0.04)",
    rowAlt:       "rgba(0,0,0,0.015)",
    rowHover:     "rgba(99,102,241,0.03)",
    ctaBg:        "rgba(99,102,241,0.06)",
    ctaBorder:    "rgba(99,102,241,0.20)",
    sectionLabel: { bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.20)", text: "#6366f1" },
    accent:       "#6366f1",
    metricBefore: "#ef4444",
  },
};

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

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

function Badge({ text, variant = "indigo", theme }: { text: string; variant?: string; theme: Theme }) {
  const dark = theme === "dark";
  const styles: Record<string, string> = {
    indigo:  dark ? "bg-indigo-500/15 text-indigo-400 border-indigo-400/30"  : "bg-indigo-50 text-indigo-600 border-indigo-200",
    emerald: dark ? "bg-emerald-500/15 text-emerald-400 border-emerald-400/30" : "bg-emerald-50 text-emerald-600 border-emerald-200",
  };
  return (
    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${styles[variant] ?? styles.indigo}`}>
      {text}
    </span>
  );
}

function Card({ children, accent, glow, theme }: { children: React.ReactNode; accent: string; glow: string; theme: Theme }) {
  const tk = T[theme];
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 20,
        border: `1px solid ${tk.cardBorder}`,
        backgroundColor: tk.bgCard,
        backdropFilter: "blur(12px)",
        padding: 28,
        transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
        cursor: "default",
        boxShadow: theme === "light" ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
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
        el.style.boxShadow = theme === "light" ? "0 1px 4px rgba(0,0,0,0.06)" : "none";
        el.style.borderColor = tk.cardBorder;
      }}
    >
      {children}
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function AISolutionsPage() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [currency, setCurrency] = useState<Currency>(currencies[3]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tk = T[theme];
  const isDark = theme === "dark";

  // ── Data ──────────────────────────────────────────────────────────────────

  const services = [
    { icon: <Brain className="w-7 h-7" />,        title: "AI Chatbots & Agents",      desc: "Custom GPT-powered assistants and autonomous agents for your business.",     benefit: "24/7 customer support without hiring more staff.",                 accent: "#818cf8", glow: "rgba(129,140,248,0.18)" },
    { icon: <Sparkles className="w-7 h-7" />,      title: "Generative AI Apps",        desc: "Build products on top of OpenAI, Anthropic, and Gemini APIs.",               benefit: "Ship AI-powered features your competitors don't have yet.",        accent: "#34d399", glow: "rgba(52,211,153,0.18)"  },
    { icon: <BarChart2 className="w-7 h-7" />,     title: "AI Data Analytics",         desc: "Turn raw data into actionable insights with ML models and dashboards.",      benefit: "Make faster, smarter decisions backed by real data.",              accent: "#a78bfa", glow: "rgba(167,139,250,0.18)" },
    { icon: <MessageSquare className="w-7 h-7" />, title: "RAG & Knowledge Bases",     desc: "Retrieval-augmented generation on your documents, PDFs, and databases.",     benefit: "AI that knows your business inside out.",                         accent: "#f472b6", glow: "rgba(244,114,182,0.18)" },
    { icon: <Zap className="w-7 h-7" />,           title: "AI Workflow Automation",    desc: "Automate repetitive tasks with intelligent pipelines and n8n/Zapier.",        benefit: "Reclaim 15+ hours per week with smart automation.",               accent: "#fbbf24", glow: "rgba(251,191,36,0.18)"  },
    { icon: <ShieldCheck className="w-7 h-7" />,   title: "AI Safety & Guardrails",    desc: "Responsible AI with output filtering, moderation, and compliance.",           benefit: "Deploy AI confidently with full control and auditability.",        accent: "#f87171", glow: "rgba(248,113,113,0.18)" },
    { icon: <GitBranch className="w-7 h-7" />,     title: "MLOps & Deployment",        desc: "End-to-end ML pipelines, model hosting, and monitoring on cloud.",           benefit: "Models that stay accurate and reliable in production.",            accent: "#22d3ee", glow: "rgba(34,211,238,0.18)"  },
    { icon: <Cpu className="w-7 h-7" />,           title: "Custom Model Fine-tuning",  desc: "Fine-tune LLMs on your proprietary data for domain-specific performance.",   benefit: "AI that speaks your industry's language perfectly.",               accent: "#fb923c", glow: "rgba(251,146,60,0.18)"  },
  ];

  const pricing = [
    { service: "AI Chatbot (Basic)",         inr: 12000,  time: "3–5 Days"   },
    { service: "AI Chatbot (Advanced)",      inr: 25000,  time: "7–14 Days"  },
    { service: "RAG Knowledge Base",         inr: 20000,  time: "5–10 Days"  },
    { service: "Generative AI App",          inr: 40000,  time: "10–20 Days" },
    { service: "AI Workflow Automation",     inr: 18000,  time: "4–8 Days"   },
    { service: "Custom Fine-tuned Model",    inr: 75000,  time: "15–30 Days" },
    { service: "AI Data Dashboard",          inr: 22000,  time: "5–12 Days"  },
    { service: "MLOps Pipeline Setup",       inr: 35000,  time: "10–20 Days" },
  ];

  const packages = [
    {
      name: "Starter AI",
      inr: 12000,
      description: "Perfect for small businesses getting started with AI",
      color: isDark ? "from-slate-500/10 to-slate-400/5" : "from-slate-100 to-slate-50",
      border: isDark ? "border-white/10" : "border-slate-200",
      badge: null as string | null,
      features: [
        "AI chatbot with up to 5 intents",
        "Integration with your website",
        "Pre-trained on your FAQ/docs",
        "Basic analytics dashboard",
        "2 revision rounds",
        "5-day delivery",
        "30-day support",
      ],
      notIncluded: ["Custom model fine-tuning", "RAG pipeline", "Advanced analytics", "API access"],
    },
    {
      name: "Growth AI",
      inr: 40000,
      description: "For companies ready to scale with AI",
      color: isDark ? "from-indigo-600/20 to-violet-500/10" : "from-indigo-50 to-violet-50",
      border: isDark ? "border-indigo-400/40" : "border-indigo-300",
      badge: "Most Popular",
      features: [
        "Advanced AI agent / chatbot",
        "RAG on your documents & DBs",
        "Custom workflow automation",
        "AI analytics dashboard",
        "REST API access",
        "5 revision rounds",
        "14-day delivery",
        "60-day priority support",
      ],
      notIncluded: ["Custom model fine-tuning", "MLOps pipeline"],
    },
    {
      name: "Enterprise AI",
      inr: 75000,
      description: "Full AI transformation for ambitious teams",
      color: isDark ? "from-emerald-500/15 to-teal-400/5" : "from-emerald-50 to-teal-50",
      border: isDark ? "border-emerald-400/30" : "border-emerald-300",
      badge: "Best Value",
      features: [
        "Custom fine-tuned LLM",
        "Full RAG + knowledge graph",
        "End-to-end MLOps pipeline",
        "Advanced AI agents",
        "Dedicated model monitoring",
        "Unlimited revisions",
        "25-day delivery",
        "90-day dedicated support",
      ],
      notIncluded: [],
    },
  ];

  const comparisonFeatures = [
    { name: "AI Chatbot",           starter: "Basic",      professional: "Advanced",   enterprise: "Custom LLM"   },
    { name: "RAG Pipeline",         starter: false,        professional: true,          enterprise: true           },
    { name: "Workflow Automation",  starter: false,        professional: true,          enterprise: true           },
    { name: "Fine-tuned Model",     starter: false,        professional: false,         enterprise: true           },
    { name: "API Access",           starter: false,        professional: true,          enterprise: true           },
    { name: "Analytics Dashboard",  starter: "Basic",      professional: "Advanced",   enterprise: "Full"         },
    { name: "MLOps Pipeline",       starter: false,        professional: false,         enterprise: true           },
    { name: "Revisions",            starter: "2 rounds",   professional: "5 rounds",   enterprise: "Unlimited"    },
    { name: "Support Duration",     starter: "30 days",    professional: "60 days",    enterprise: "90 days"      },
    { name: "Priority Support",     starter: false,        professional: true,          enterprise: true           },
  ];

  const stack = ["OpenAI","Anthropic Claude","LangChain","LlamaIndex","Pinecone","Supabase","FastAPI","Next.js","Python","AWS","Docker","n8n"];

  const process = [
    { step: "01", title: "Discovery",    desc: "Understand your workflows, data sources, and AI goals."      },
    { step: "02", title: "Architecture", desc: "Design the AI pipeline, model selection, and data flow."     },
    { step: "03", title: "Build & Train", desc: "Develop, fine-tune, and test with rigorous quality checks." },
    { step: "04", title: "Deploy",        desc: "Launch with monitoring, alerting, and ongoing optimization." },
  ];

  const reasons = [
    "Production-ready AI, not just demos",
    "On-time delivery with milestone updates",
    "Post-launch support and model monitoring",
    "Transparent pricing, no hidden costs",
    "Direct communication with AI engineers",
    "Responsible AI with safety guardrails",
  ];

  const caseStudies = [
    {
      title: "AI Support Agent for SaaS",
      accent: "#818cf8",
      glow: "rgba(129,140,248,0.15)",
      tags: ["OpenAI", "RAG", "Next.js"],
      points: ["Handles 80% of support tickets automatically","Trained on 500+ docs and past conversations","Response time: 3 min → 8 seconds"],
      stat: "80% automated",
    },
    {
      title: "AI Analytics for Ecommerce",
      accent: "#34d399",
      glow: "rgba(52,211,153,0.15)",
      tags: ["Python", "GPT-4", "Supabase"],
      points: ["Natural language queries over sales data","Automated weekly insight reports","30% increase in decision speed"],
      stat: "+30% faster",
    },
    {
      title: "Document Intelligence Platform",
      accent: "#fbbf24",
      glow: "rgba(251,191,36,0.15)",
      tags: ["LlamaIndex", "Pinecone", "FastAPI"],
      points: ["RAG over 10,000+ internal documents","Semantic search with source citations","Saved 12 hours/week per employee"],
      stat: "12h/week saved",
    },
    {
      title: "Custom Fine-tuned Classifier",
      accent: "#a78bfa",
      glow: "rgba(167,139,250,0.15)",
      tags: ["Fine-tuning", "Claude", "MLOps"],
      points: ["Domain-specific model for legal documents","94% accuracy vs 67% with base model","Fully deployed with monitoring"],
      stat: "94% accuracy",
    },
  ];

  const industries = [
    { title: "Startups",         accent: "#818cf8", glow: "rgba(129,140,248,0.15)", points: ["AI-powered MVPs shipped fast","Chatbots that replace early support hires","Investor-ready AI demos and dashboards"] },
    { title: "Ecommerce",        accent: "#34d399", glow: "rgba(52,211,153,0.15)",  points: ["AI product recommendations","Automated customer support agents","Smart inventory and demand forecasting"] },
    { title: "SaaS & Tech",      accent: "#a78bfa", glow: "rgba(167,139,250,0.15)", points: ["AI features inside your product","LLM-powered search and discovery","Usage analytics and churn prediction"] },
    { title: "Legal & Finance",  accent: "#f472b6", glow: "rgba(244,114,182,0.15)", points: ["Document review and summarization","Compliance checking pipelines","Secure, auditable AI workflows"] },
    { title: "Healthcare",       accent: "#f87171", glow: "rgba(248,113,113,0.15)", points: ["Clinical note summarization","Patient triage assistants","HIPAA-compliant AI architecture"] },
  ];

  const metrics = [
    { label: "Support Tickets Handled",  before: "20%",    after: "80%",    icon: <Bot className="w-5 h-5" />          },
    { label: "Response Time",            before: "3 min",  after: "8 sec",  icon: <Zap className="w-5 h-5" />          },
    { label: "Manual Work",              before: "20h/wk", after: "3h/wk",  icon: <Clock className="w-5 h-5" />        },
    { label: "Decision Speed",           before: "2 days", after: "2 hrs",  icon: <TrendingUp className="w-5 h-5" />   },
    { label: "Search Accuracy",          before: "52%",    after: "94%",    icon: <Search className="w-5 h-5" />       },
    { label: "Cost per Query",           before: "₹45",    after: "₹4",     icon: <BarChart2 className="w-5 h-5" />    },
  ];

  const faqs = [
    { q: "Do I need technical knowledge to use your AI solutions?", a: "No — we handle everything from architecture to deployment. You just need to know your business goals." },
    { q: "Which AI models do you work with?",                       a: "We work with OpenAI (GPT-4o), Anthropic (Claude), Google Gemini, and open-source models like Llama 3 and Mistral." },
    { q: "Is my data safe with your AI solutions?",                 a: "Yes. We follow security best practices: your data never trains public models, and we can deploy fully on-premise or in your cloud." },
    { q: "How long does it take to build an AI chatbot?",           a: "Basic chatbots take 3–5 days. Advanced agents with RAG pipelines take 7–14 days. Enterprise builds take 15–30 days." },
    { q: "Can you integrate AI into my existing product?",          a: "Absolutely. We have experience integrating AI into existing React, Next.js, and mobile applications via APIs." },
    { q: "Do you offer AI consulting before building?",             a: "Yes. We offer a free AI readiness consultation to map your use case to the right solution and stack." },
  ];

  // ── Helper inline styles ───────────────────────────────────────────────────

  const dividerStyle = { borderTop: `1px solid ${tk.border}` };

  const inputStyle = {
    width: "100%",
    background: isDark ? "rgba(255,255,255,0.05)" : "#f8fafc",
    border: `1px solid ${tk.border}`,
    borderRadius: 12,
    padding: "12px 16px",
    fontSize: 14,
    color: tk.text,
    outline: "none",
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <main
      style={{ minHeight: "100vh", backgroundColor: tk.bg, color: tk.text, fontFamily: "'DM Sans', 'Sora', sans-serif", transition: "background-color 0.3s, color 0.3s" }}
    >
      {/* ── Ambient background ── */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div style={{ position: "absolute", top: 0, left: "25%", width: 600, height: 600, borderRadius: "50%", background: tk.ambientA, filter: "blur(120px)" }} />
        <div style={{ position: "absolute", bottom: "33%", right: "25%", width: 500, height: 500, borderRadius: "50%", background: tk.ambientB, filter: "blur(100px)" }} />
        <div style={{ position: "absolute", top: "50%", left: 0, width: 300, height: 300, borderRadius: "50%", background: tk.ambientC, filter: "blur(80px)" }} />
        <div style={{
          position: "absolute", inset: 0, opacity: isDark ? 0.025 : 0.04,
          backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 39px,${tk.gridColor} 39px,${tk.gridColor} 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,${tk.gridColor} 39px,${tk.gridColor} 40px)`,
        }} />
      </div>

      {/* ── Theme Toggle (fixed top-right) ── */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        style={{
          position: "fixed", top: 20, right: 20, zIndex: 999,
          display: "flex", alignItems: "center", gap: 8,
          padding: "10px 18px", borderRadius: 999,
          background: tk.toggleBg,
          border: `1px solid ${tk.toggleBorder}`,
          color: tk.textMuted, cursor: "pointer",
          fontWeight: 700, fontSize: 13,
          backdropFilter: "blur(12px)",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = tk.borderHover; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = tk.toggleBorder; }}
      >
        {isDark ? <Sun style={{ width: 16, height: 16, color: "#fbbf24" }} /> : <Moon style={{ width: 16, height: 16, color: "#818cf8" }} />}
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ══════ HERO ══════ */}
        <section style={{ position: "relative", paddingTop: 144, paddingBottom: 112, padding: "9rem 4rem 7rem", textAlign: "center", ...dividerStyle, overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, right: -80, width: 500, height: 500, borderRadius: "50%", background: tk.ambientA, filter: "blur(100px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -60, left: -60, width: 400, height: 400, borderRadius: "50%", background: tk.ambientC, filter: "blur(80px)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto" }}>
            <SectionLabel theme={theme}>AI Solutions</SectionLabel>

            <h1 style={{ fontSize: "clamp(2.8rem,8vw,5.2rem)", fontWeight: 900, lineHeight: 0.95, marginBottom: 24, letterSpacing: "-0.02em", fontFamily: "'Sora', sans-serif" }}>
              AI That Transforms
              <br />
              <span style={{ background: "linear-gradient(135deg,#818cf8 0%,#a78bfa 45%,#34d399 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Your Business
              </span>
            </h1>

            <div style={{ maxWidth: 420, margin: "0 auto 20px", textAlign: "left", display: "inline-block" }}>
              {["Automate repetitive workflows with AI","Deploy chatbots that work 24/7","Turn your data into decisions"].map((point, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <Check style={{ width: 18, color: "#34d399", flexShrink: 0 }} />
                  <span style={{ color: tk.textMuted, fontSize: "1rem" }}>{point}</span>
                </div>
              ))}
            </div>

            <p style={{ color: tk.textSub, marginBottom: 32, fontSize: "0.9rem" }}>
              From AI chatbots to custom fine-tuned models — we build AI that delivers ROI.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <button style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#6366f1", color: "#fff", fontWeight: 800, fontSize: 14, padding: "14px 28px", borderRadius: 18, border: "none", cursor: "pointer" }}>
                Start Your AI Project <ArrowRight style={{ width: 16 }} />
              </button>
              <button style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${tk.border}`, background: "transparent", color: tk.textMuted, fontWeight: 700, fontSize: 14, padding: "14px 28px", borderRadius: 18, cursor: "pointer" }}>
                Book Free AI Consultation →
              </button>
            </div>
          </div>
        </section>

        {/* ══════ SERVICES ══════ */}
        <section style={{ padding: "6rem 4rem" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionLabel theme={theme}>Services</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>What We Build</h2>
              <p style={{ color: tk.textMuted }}>End-to-end AI solutions from prototype to production.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
              {services.map((s, i) => (
                <Card key={i} accent={s.accent} glow={s.glow} theme={theme}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", background: `${s.accent}1a`, color: s.accent, marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 900, marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: tk.textMuted, lineHeight: 1.65, marginBottom: 12 }}>{s.desc}</p>
                  <p style={{ fontSize: "0.78rem", color: s.accent, fontWeight: 700, borderTop: `1px solid ${tk.border}`, paddingTop: 12 }}>✦ {s.benefit}</p>
                </Card>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <button style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#6366f1", color: "#fff", fontWeight: 800, padding: "14px 32px", borderRadius: 18, border: "none", cursor: "pointer" }}>
                Book a Free Consultation <ArrowRight style={{ width: 16 }} />
              </button>
            </div>
          </div>
        </section>

        {/* ══════ CURRENCY TOGGLE + PRICING TABLE ══════ */}
        <section style={{ padding: "6rem 4rem", ...dividerStyle, backgroundColor: tk.bgSubtle }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <SectionLabel theme={theme}>Pricing</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>AI Development Pricing</h2>
              <p style={{ color: tk.textMuted }}>Transparent starting rates — no hidden fees.</p>
            </div>

            {/* Currency Toggle */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4, background: tk.toggleBg, border: `1px solid ${tk.toggleBorder}`, borderRadius: 20, padding: "6px 8px" }}>
                <Globe style={{ width: 16, color: tk.textSub, marginLeft: 8, marginRight: 4 }} />
                {currencies.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => setCurrency(c)}
                    style={{
                      padding: "8px 16px", borderRadius: 12, fontSize: 13, fontWeight: 700, border: "none", cursor: "pointer",
                      background: currency.code === c.code ? "#6366f1" : "transparent",
                      color: currency.code === c.code ? "#fff" : tk.textMuted,
                      transition: "all 0.2s",
                    }}
                  >
                    {c.code}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div style={{ borderRadius: 24, border: `1px solid ${tk.border}`, background: tk.bgCard, overflow: "hidden", boxShadow: isDark ? "none" : "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", background: tk.tableHead, borderBottom: `1px solid ${tk.border}`, padding: "16px 28px", gap: 16 }}>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.2em", color: tk.textSub, textTransform: "uppercase" }}>Service</span>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.2em", color: tk.textSub, textTransform: "uppercase", textAlign: "center", minWidth: 120 }}>Starting Price</span>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.2em", color: tk.textSub, textTransform: "uppercase", textAlign: "right", minWidth: 100 }}>Delivery</span>
              </div>
              {pricing.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid", gridTemplateColumns: "1fr auto auto", alignItems: "center",
                    padding: "20px 28px", gap: 16,
                    borderBottom: i < pricing.length - 1 ? `1px solid ${tk.border}` : "none",
                    background: i % 2 !== 0 ? tk.rowAlt : "transparent",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = isDark ? "rgba(99,102,241,0.05)" : "rgba(99,102,241,0.04)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = i % 2 !== 0 ? tk.rowAlt : "transparent"; }}
                >
                  <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>{item.service}</span>
                  <span style={{ background: "linear-gradient(135deg,#818cf8,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 900, fontSize: "1.15rem", textAlign: "center", minWidth: 120 }}>
                    {formatPrice(item.inr, currency)}
                  </span>
                  <div style={{ textAlign: "right", minWidth: 100 }}>
                    <span style={{
                      padding: "4px 12px", borderRadius: 999, fontSize: "0.75rem", fontWeight: 700,
                      background: isDark ? "rgba(99,102,241,0.12)" : "rgba(99,102,241,0.08)",
                      border: `1px solid ${isDark ? "rgba(99,102,241,0.25)" : "rgba(99,102,241,0.20)"}`,
                      color: isDark ? "#818cf8" : "#6366f1",
                    }}>
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ textAlign: "center", color: tk.textSub, marginTop: 14, fontSize: "0.82rem" }}>
              Prices are starting rates. Complex integrations and fine-tuning may vary. Retainer plans from ₹8,000/month.
            </p>

            <div style={{ textAlign: "center", marginTop: 32 }}>
              <button style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#6366f1", color: "#fff", fontWeight: 800, padding: "14px 32px", borderRadius: 18, border: "none", cursor: "pointer" }}>
                Get a Custom Quote <ArrowRight style={{ width: 16 }} />
              </button>
            </div>
          </div>
        </section>

        {/* ══════ PACKAGES ══════ */}
        <section style={{ padding: "6rem 4rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionLabel theme={theme}>Package Plans</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>Pick Your AI Plan</h2>
              <p style={{ color: tk.textMuted }}>Bundled AI packages for every stage of growth.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24, alignItems: "start" }}>
              {packages.map((pkg, idx) => {
                const isPro = pkg.name === "Growth AI";
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
                        <Badge text={pkg.badge} variant={pkg.name === "Enterprise AI" ? "emerald" : "indigo"} theme={theme} />
                      </div>
                    )}

                    <div style={{ marginBottom: 20 }}>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: 4 }}>{pkg.name}</h3>
                      <p style={{ color: tk.textMuted, fontSize: "0.875rem" }}>{pkg.description}</p>
                    </div>

                    <div style={{ marginBottom: 28 }}>
                      <span style={{ fontSize: "2.8rem", fontWeight: 900 }}>{formatPrice(pkg.inr, currency)}</span>
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
                          <X style={{ width: 16, color: isDark ? "#475569" : "#cbd5e1", flexShrink: 0, marginTop: 2 }} />
                          <span style={{ fontSize: "0.875rem", color: isDark ? "#475569" : "#94a3b8" }}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      style={{
                        width: "100%", padding: "14px 0", borderRadius: 14, fontWeight: 800, fontSize: "0.95rem", cursor: "pointer", border: "none", transition: "all 0.2s",
                        background: isPro ? "#6366f1" : isDark ? "rgba(255,255,255,0.08)" : "#f1f5f9",
                        color: isPro ? "#fff" : tk.text,
                        ...(isPro ? { boxShadow: "0 4px 20px rgba(99,102,241,0.30)" } : { border: `1px solid ${tk.border}` }),
                      }}
                    >
                      Get Started
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════ COMPARISON TABLE ══════ */}
        <section style={{ padding: "6rem 4rem", ...dividerStyle, backgroundColor: tk.bgSubtle }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionLabel theme={theme}>Compare Plans</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>Side-by-Side</h2>
              <p style={{ color: tk.textMuted }}>Not sure which plan fits? Compare at a glance.</p>
            </div>

            <div style={{ borderRadius: 24, border: `1px solid ${tk.border}`, overflow: "hidden", boxShadow: isDark ? "none" : "0 2px 12px rgba(0,0,0,0.06)" }}>
              {/* Header */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", background: tk.tableHead, borderBottom: `1px solid ${tk.border}` }}>
                <div style={{ padding: 20, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: tk.textSub }}>Feature</div>
                {["Starter AI","Growth AI","Enterprise AI"].map((plan, i) => (
                  <div key={plan} style={{ padding: 20, textAlign: "center", background: i === 1 ? (isDark ? "rgba(99,102,241,0.10)" : "rgba(99,102,241,0.06)") : "transparent" }}>
                    <div style={{ fontWeight: 900, fontSize: "0.95rem" }}>{plan}</div>
                    <div style={{ fontSize: 11, color: tk.textSub, marginTop: 4 }}>{formatPrice(packages[i].inr, currency)}</div>
                  </div>
                ))}
              </div>

              {comparisonFeatures.map((feat, i) => (
                <div
                  key={feat.name}
                  style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    borderBottom: i < comparisonFeatures.length - 1 ? `1px solid ${tk.border}` : "none",
                    background: i % 2 !== 0 ? tk.rowAlt : "transparent",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = tk.rowHover; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = i % 2 !== 0 ? tk.rowAlt : "transparent"; }}
                >
                  <div style={{ padding: "16px 20px", fontSize: "0.875rem", fontWeight: 600 }}>{feat.name}</div>
                  {[feat.starter, feat.professional, feat.enterprise].map((val, j) => (
                    <div key={j} style={{ padding: "16px 20px", textAlign: "center", background: j === 1 ? (isDark ? "rgba(99,102,241,0.05)" : "rgba(99,102,241,0.03)") : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {val === true  ? <Check style={{ width: 18, color: "#34d399", margin: "0 auto" }} /> :
                       val === false ? <X style={{ width: 16, color: isDark ? "#475569" : "#cbd5e1", margin: "0 auto" }} /> :
                       <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>{val}</span>}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ TECH STACK ══════ */}
        <section style={{ padding: "4rem", ...dividerStyle }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.3em", color: tk.textSub, marginBottom: 24, textTransform: "uppercase" }}>AI Technologies We Use</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
              {stack.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    padding: "8px 18px", borderRadius: 12, fontSize: "0.875rem", fontWeight: 700,
                    border: `1px solid ${tk.border}`, background: tk.bgCard, color: tk.textMuted,
                    cursor: "default", transition: "all 0.2s",
                    boxShadow: isDark ? "none" : "0 1px 3px rgba(0,0,0,0.05)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ CASE STUDIES ══════ */}
        <section style={{ padding: "6rem 4rem", ...dividerStyle, backgroundColor: tk.bgSubtle }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionLabel theme={theme}>Case Studies</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>Recent AI Projects</h2>
              <p style={{ color: tk.textMuted }}>Real results delivered for real clients.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
              {caseStudies.map((c, i) => (
                <Card key={i} accent={c.accent} glow={c.glow} theme={theme}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                    <h3 style={{ fontWeight: 900, fontSize: "0.9rem", flex: 1, marginRight: 12 }}>{c.title}</h3>
                    <span style={{ background: `${c.accent}1a`, color: c.accent, fontWeight: 800, fontSize: "0.75rem", padding: "3px 10px", borderRadius: 999, whiteSpace: "nowrap" }}>{c.stat}</span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                    {c.tags.map((tag, j) => (
                      <span key={j} style={{ fontSize: "0.7rem", padding: "3px 10px", borderRadius: 999, border: `1px solid ${tk.border}`, color: tk.textMuted, fontWeight: 700 }}>{tag}</span>
                    ))}
                  </div>
                  {c.points.map((p, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                      <CheckCircle2 style={{ color: c.accent, width: 14, flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: "0.82rem", color: tk.textMuted }}>{p}</span>
                    </div>
                  ))}
                </Card>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 40 }}>
              <button style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#6366f1", color: "#fff", fontWeight: 800, padding: "14px 32px", borderRadius: 18, border: "none", cursor: "pointer" }}>
                See Our Work <ArrowRight style={{ width: 16 }} />
              </button>
            </div>
          </div>
        </section>

        {/* ══════ INDUSTRY SOLUTIONS ══════ */}
        <section style={{ padding: "6rem 4rem" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionLabel theme={theme}>Industries</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>AI Solutions by Industry</h2>
              <p style={{ color: tk.textMuted }}>Built for your industry and scale.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 20 }}>
              {industries.map((ind, i) => (
                <Card key={i} accent={ind.accent} glow={ind.glow} theme={theme}>
                  <h3 style={{ fontWeight: 900, marginBottom: 14, fontSize: "0.9rem", color: ind.accent }}>{ind.title}</h3>
                  {ind.points.map((p, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 10 }}>
                      <CheckCircle2 style={{ color: ind.accent, width: 14, flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: "0.82rem", color: tk.textMuted, lineHeight: 1.5 }}>{p}</span>
                    </div>
                  ))}
                </Card>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 40 }}>
              <button style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${tk.border}`, background: "transparent", color: tk.textMuted, fontWeight: 700, padding: "14px 28px", borderRadius: 18, cursor: "pointer" }}>
                <MessageSquare style={{ width: 16 }} /> Chat with Us Now
              </button>
            </div>
          </div>
        </section>

        {/* ══════ METRICS ══════ */}
        <section style={{ padding: "6rem 4rem", ...dividerStyle, backgroundColor: tk.bgSubtle }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionLabel theme={theme}>Real Results</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>Results We Deliver</h2>
              <p style={{ color: tk.textMuted }}>Measurable improvements across every AI project.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: 20 }}>
              {metrics.map((m, i) => (
                <div key={i} style={{ borderRadius: 20, border: `1px solid ${tk.border}`, background: tk.bgCard, padding: 28, boxShadow: isDark ? "none" : "0 1px 4px rgba(0,0,0,0.05)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, color: isDark ? "#818cf8" : "#6366f1" }}>
                    {m.icon}
                    <span style={{ fontWeight: 800, fontSize: "0.9rem" }}>{m.label}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ flex: 1, textAlign: "center" }}>
                      <div style={{ color: tk.metricBefore, fontWeight: 800, fontSize: "1rem", textDecoration: "line-through", opacity: 0.7 }}>{m.before}</div>
                      <div style={{ color: tk.textSub, fontSize: "0.75rem", marginTop: 4 }}>Before</div>
                    </div>
                    <ArrowRight style={{ color: "#34d399", width: 18, flexShrink: 0 }} />
                    <div style={{ flex: 1, textAlign: "center" }}>
                      <div style={{ background: "linear-gradient(135deg,#818cf8,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 900, fontSize: "1rem" }}>{m.after}</div>
                      <div style={{ color: tk.textSub, fontSize: "0.75rem", marginTop: 4 }}>After</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ PROCESS ══════ */}
        <section style={{ padding: "6rem 4rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionLabel theme={theme}>Process</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>How We Work</h2>
              <p style={{ color: tk.textMuted, fontSize: "1.05rem" }}>A proven process that delivers AI results, every time.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
              {process.map((p, i) => (
                <div key={i} style={{ borderRadius: 20, border: `1px solid ${tk.border}`, background: tk.bgCard, padding: 28, boxShadow: isDark ? "none" : "0 1px 4px rgba(0,0,0,0.05)" }}>
                  <div style={{ fontSize: "3rem", fontWeight: 900, lineHeight: 1, marginBottom: 16, background: "linear-gradient(135deg,#818cf8,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "'Sora', sans-serif" }}>{p.step}</div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 900, marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: tk.textMuted, lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ WHY US ══════ */}
        <section style={{ padding: "5rem 4rem", ...dividerStyle, backgroundColor: tk.bgSubtle }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 56, alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: 16, fontFamily: "'Sora', sans-serif" }}>
                Why clients choose{" "}
                <span style={{ background: "linear-gradient(135deg,#818cf8,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  our AI team
                </span>
              </h2>
              <p style={{ color: tk.textMuted, lineHeight: 1.7 }}>We don't just build AI demos — we ship production-grade AI systems that deliver real ROI.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {reasons.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Check style={{ width: 20, height: 20, color: "#34d399", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.9rem", fontWeight: 600, color: tk.textMuted }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ FAQ ══════ */}
        <section style={{ padding: "6rem 4rem" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionLabel theme={theme}>FAQ</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>Common Questions</h2>
              <p style={{ color: tk.textMuted }}>Everything you need to know about our AI development services.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
          </div>
        </section>

        {/* ══════ CTA ══════ */}
        <section style={{ padding: "7rem 4rem", ...dividerStyle, backgroundColor: tk.bgSubtle }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{
              position: "relative", borderRadius: 32,
              border: `1px solid ${tk.ctaBorder}`,
              background: isDark ? "linear-gradient(135deg,rgba(99,102,241,0.15),rgba(139,92,246,0.10),transparent)" : "linear-gradient(135deg,rgba(99,102,241,0.06),rgba(139,92,246,0.04),#fff)",
              padding: "5rem 3rem", textAlign: "center", overflow: "hidden",
              boxShadow: isDark ? "none" : "0 4px 24px rgba(0,0,0,0.07)",
            }}>
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 400, height: 200, background: "radial-gradient(ellipse,rgba(99,102,241,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <Brain style={{ width: 36, height: 36, color: isDark ? "#818cf8" : "#6366f1", margin: "0 auto 24px" }} />
                <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20, fontFamily: "'Sora', sans-serif" }}>
                  Let's build your next{" "}
                  <span style={{ background: "linear-gradient(135deg,#818cf8,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    AI solution
                  </span>
                </h2>
                <p style={{ color: tk.textMuted, maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.7 }}>
                  From a simple chatbot to a full AI platform — we deliver production-grade AI that drives measurable results.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
                  <button style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#6366f1", color: "#fff", fontWeight: 800, fontSize: 15, padding: "16px 32px", borderRadius: 18, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(99,102,241,0.30)" }}>
                    Start Your AI Project <ArrowRight style={{ width: 18 }} />
                  </button>
                  <button style={{ padding: "16px 32px", borderRadius: 18, border: `1px solid ${tk.border}`, background: "transparent", fontWeight: 700, color: tk.textMuted, cursor: "pointer" }}>
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