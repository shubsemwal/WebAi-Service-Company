"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight, Check, ChevronDown, Bot, Brain, CircuitBoard, Cloud,
  MessageSquare, Mic, Shield, Sparkles, Workflow,
} from "lucide-react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Theme = "light" | "dark";

type ServiceItem = {
  title: string;
  desc: string;
  icon: React.ComponentType<{ style?: React.CSSProperties; className?: string }>;
  accent: string;
};

type PackageItem = {
  name: string;
  price: string;
  description: string;
  features: string[];
  badge: string | null;
};

type FaqItem = { q: string; a: string };

// ─── THEME TOKENS (matches the pricing page — default is dark) ────────────────

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

const services: ServiceItem[] = [
  { title: "AI Chatbots", desc: "Conversational assistants for websites, support desks, and lead capture.", icon: MessageSquare, accent: "#818cf8" },
  { title: "AI Voice Agents", desc: "Voice-based automation for calling, routing, FAQs, and appointment handling.", icon: Mic, accent: "#636be6" },
  { title: "Workflow Automation", desc: "Automate repetitive business operations across tools and internal systems.", icon: Workflow, accent: "#34d399" },
  { title: "Custom AI Integrations", desc: "Connect AI with your CRM, WhatsApp, email, and third-party APIs.", icon: CircuitBoard, accent: "#fbbf24" },
  { title: "AI Assistants", desc: "Task-focused assistants that help your team work faster with better accuracy.", icon: Brain, accent: "#f472b6" },
  { title: "Scalable Deployment", desc: "Production-ready setups built for performance, security, and growth.", icon: Cloud, accent: "#38bdf8" },
];

const packages: PackageItem[] = [
  {
    name: "Starter",
    price: "Best for small businesses",
    description: "A simple AI solution to get your business started with automation.",
    badge: null,
    features: [
      "Single AI chatbot or assistant",
      "Basic website integration",
      "Simple lead capture flow",
      "Responsive UI setup",
      "Initial testing and deployment",
    ],
  },
  {
    name: "Professional",
    price: "Best for growing businesses",
    description: "A stronger AI system for support, operations, and customer engagement.",
    badge: "Most Popular",
    features: [
      "Multi-step AI workflows",
      "CRM and WhatsApp integration",
      "Lead qualification automation",
      "Analytics and monitoring",
      "Priority support setup",
    ],
  },
  {
    name: "Enterprise",
    price: "Best for large organizations",
    description: "A complete AI ecosystem with advanced logic and scalable architecture.",
    badge: "Best Value",
    features: [
      "Custom AI agents",
      "Advanced automation pipelines",
      "Secure production deployment",
      "Role-based access control",
      "Long-term support and updates",
    ],
  },
];

const highlights = ["AI-Powered Automation", "Custom AI Agents", "Secure & Scalable", "Fast Deployment"];

const stats = [
  { label: "Automations Delivered", value: "50+" },
  { label: "Faster Response Time", value: "Up to 90%" },
  { label: "Workflow Accuracy", value: "High" },
  { label: "Deployment Style", value: "Modular" },
];

const faqs: FaqItem[] = [
  { q: "What kind of AI solutions do you build?", a: "I build AI chatbots, voice agents, workflow automation, and custom AI integrations tailored to your business needs." },
  { q: "Can you integrate AI into my existing website?", a: "Yes, I can integrate AI into your current Next.js website or build a dedicated AI-focused feature from scratch." },
  { q: "Is this only for customer support?", a: "No, AI can help with support, sales, lead generation, internal tasks, content workflows, and data handling." },
  { q: "What stack do you use?", a: "This page is built with Next.js, TypeScript, and Tailwind CSS, with AI solutions implemented in a clean, modular way." },
];

// ─── HELPERS ───────────────────────────────────────────────────────────────────

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
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
      <span
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em",
          padding: "6px 16px", borderRadius: 999, background: t.bg, border: `1px solid ${t.border}`, color: t.text,
        }}
      >
        <Sparkles style={{ width: 14, height: 14 }} />
        {children}
      </span>
    </div>
  );
}

function Badge({ text, variant, theme }: { text: string; variant: "indigo" | "emerald"; theme: Theme }) {
  const isDark = theme === "light";
  const style =
    variant === "emerald"
      ? { background: isDark ? "rgba(52,211,153,0.15)" : "#ecfdf5", color: isDark ? "#34d399" : "#059669", border: `1px solid ${isDark ? "rgba(52,211,153,0.30)" : "#a7f3d0"}` }
      : { background: isDark ? "rgba(99,102,241,0.15)" : "#eef2ff", color: isDark ? "#818cf8" : "#4f46e5", border: `1px solid ${isDark ? "rgba(99,102,241,0.30)" : "#c7d2fe"}` };
  return (
    <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", padding: "6px 14px", borderRadius: 999, ...style }}>
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

// ─── PAGE ──────────────────────────────────────────────────────────────────────

export default function AISolutionsPage() {
  // Lazy-init from the real DOM state so the very first paint is already
  // correct. Default theme is dark when no data-theme attribute is set.
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

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [service, setService] = useState("AI Chatbot");

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
        <section style={{ paddingTop: 128, paddingBottom: 80 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48, alignItems: "center" }}>
              <div>
                <div style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, border: `1px solid ${tk.border}`, background: tk.bgCard, padding: "8px 16px", fontSize: 13, color: tk.textMuted }}>
                  <Shield style={{ width: 16, height: 16, color: "#34d399" }} />
                  Dedicated AI Solutions
                </div>

                <h1 style={{ fontSize: "clamp(2.6rem,6vw,4.6rem)", fontWeight: 900, marginBottom: 24, lineHeight: 1.02, letterSpacing: "-0.02em" }}>
                  AI Solutions That
                  <br />
                  <span style={{ background: "linear-gradient(135deg,#818cf8 0%,#a78bfa 45%,#34d399 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Automate Your Business.
                  </span>
                </h1>

                <p style={{ color: tk.textMuted, fontSize: "1.1rem", maxWidth: 520, marginBottom: 28, lineHeight: 1.7 }}>
                  Build custom AI systems that reduce manual work, improve customer experience,
                  and help your business scale with smarter automation.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
                  {highlights.map((item) => (
                    <span key={item} style={{ borderRadius: 999, border: `1px solid ${tk.border}`, background: tk.bgCard, padding: "8px 16px", fontSize: 13, color: tk.textMuted }}>
                      {item}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                  <a
                    href="#services"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#6366f1", color: "#fff", fontWeight: 800, padding: "16px 28px", borderRadius: 18, textDecoration: "none", boxShadow: "0 4px 20px rgba(99,102,241,0.30)" }}
                  >
                    Explore AI Services <ArrowRight style={{ width: 16, height: 16 }} />
                  </a>
                  <a
                    href="#contact"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${tk.border}`, color: tk.text, fontWeight: 700, padding: "16px 28px", borderRadius: 18, textDecoration: "none", background: tk.bgCard }}
                  >
                    Get Free Consultation
                  </a>
                </div>
              </div>

              <div style={{ position: "relative" }}>
                <div
                  style={{
                    borderRadius: 28, border: `1px solid ${tk.border}`, background: tk.bgCard,
                    backdropFilter: "blur(12px)", padding: 24,
                    boxShadow: isDark ? "none" : "0 4px 24px rgba(0,0,0,0.07)",
                  }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 16 }}>
                    {stats.map((stat) => (
                      <div key={stat.label} style={{ borderRadius: 16, border: `1px solid ${tk.border}`, background: tk.bgSubtle, padding: 20 }}>
                        <div style={{ fontSize: "1.7rem", fontWeight: 900 }}>{stat.value}</div>
                        <div style={{ marginTop: 6, fontSize: 13, color: tk.textMuted }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: 20, borderRadius: 16, border: `1px solid ${tk.border}`, padding: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ borderRadius: 14, background: "rgba(99,102,241,0.15)", padding: 12, color: "#818cf8", display: "flex" }}>
                        <Bot style={{ width: 22, height: 22 }} />
                      </div>
                      <div>
                        <p style={{ fontWeight: 800, margin: 0 }}>AI Project Snapshot</p>
                        <p style={{ margin: "2px 0 0", fontSize: 13, color: tk.textMuted }}>
                          Smart assistant + workflow automation + secure deployment
                        </p>
                      </div>
                    </div>
                    <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                      {["Next.js + TypeScript + Tailwind", "Modular reusable sections", "Ready for scaling"].map((item) => (
                        <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: tk.textMuted }}>
                          <Check style={{ width: 16, height: 16, color: "#34d399", flexShrink: 0 }} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. SERVICES ──────────────────────────────────────────── */}
        <section id="services" style={{ marginBottom: 128 }}>
          <SectionLabel theme={theme}>AI Services</SectionLabel>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, textAlign: "center", marginBottom: 12 }}>
            Choose the right AI solution for your workflow.
          </h2>
          <p style={{ color: tk.textMuted, textAlign: "center", marginBottom: 56, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
            Every service is designed to improve efficiency, reduce repetitive work, and deliver long-term business value.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <Card key={svc.title} accent={svc.accent} theme={theme}>
                  <div style={{ width: 52, height: 52, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", background: hexToRgba(svc.accent, 0.15), color: svc.accent, marginBottom: 20 }}>
                    <Icon style={{ width: 26, height: 26 }} />
                  </div>
                  <h3 style={{ fontWeight: 900, fontSize: "1.1rem", marginBottom: 10 }}>{svc.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: tk.textMuted, lineHeight: 1.65 }}>{svc.desc}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ── 3. PACKAGES ──────────────────────────────────────────── */}
        <section style={{ marginBottom: 128 }}>
          <SectionLabel theme={theme}>AI Packages</SectionLabel>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, textAlign: "center", marginBottom: 12 }}>
            Choose your AI package.
          </h2>
          <p style={{ color: tk.textMuted, textAlign: "center", marginBottom: 56, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
            Whether you need a simple automation or a complete AI ecosystem, there is a package that fits your business stage.
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
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 6 }}>{pkg.name}</h3>
                    <p style={{ color: tk.textMuted, fontSize: "0.85rem" }}>{pkg.price}</p>
                  </div>

                  <p style={{ color: tk.textMuted, fontSize: "0.9rem", lineHeight: 1.65, marginBottom: 24 }}>{pkg.description}</p>

                  <ul style={{ marginBottom: 28, listStyle: "none", padding: 0 }}>
                    {pkg.features.map((f) => (
                      <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                        <Check style={{ width: 16, height: 16, color: "#34d399", flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: "0.875rem", color: tk.textMuted }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
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

        {/* ── 4. FAQ ───────────────────────────────────────────────── */}
        <section style={{ marginBottom: 128 }}>
          <SectionLabel theme={theme}>FAQ</SectionLabel>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, textAlign: "center", marginBottom: 12 }}>
            Frequently asked questions.
          </h2>
          <p style={{ color: tk.textMuted, textAlign: "center", marginBottom: 56, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
            Here are the most common questions about the AI solutions page, project scope, and implementation.
          </p>

          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderRadius: 16, border: `1px solid ${tk.border}`, background: tk.bgCard, overflow: "hidden", boxShadow: isDark ? "none" : "0 1px 3px rgba(0,0,0,0.04)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", color: tk.text, fontWeight: 700, fontSize: "0.9rem", textAlign: "left", gap: 12 }}
                >
                  {faq.q}
                  <ChevronDown style={{ width: 18, height: 18, flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", color: isDark ? "#818cf8" : "#6366f1" }} />
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

        {/* ── 5. CONTACT ───────────────────────────────────────────── */}
        <section id="contact" style={{ marginBottom: 128 }}>
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
                <SectionLabel theme={theme}>Let's Build Your AI Solution</SectionLabel>
                <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: 20, lineHeight: 1.15 }}>
                  Share your goals
                  <br />
                  <span style={{ background: "linear-gradient(135deg,#818cf8,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    and automation needs.
                  </span>
                </h2>
                <p style={{ color: tk.textMuted, lineHeight: 1.7, marginBottom: 32 }}>
                  Tell us about your business, challenges, and the AI solution you need.
                  We will prepare a tailored implementation plan with a clear estimate.
                </p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Free AI consultation", "Custom implementation roadmap", "Transparent pricing", "Delivered within agreed timeline"].map((i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "0.9rem", color: tk.textMuted }}>
                      <Check style={{ width: 16, height: 16, color: "#34d399", flexShrink: 0 }} />
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
                      placeholder="Enter your name"
                      style={{ width: "100%", background: tk.inputBg, border: `1px solid ${tk.border}`, borderRadius: 12, padding: "12px 16px", fontSize: "0.875rem", color: tk.text, outline: "none" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: tk.textSub, marginBottom: 8 }}>Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      style={{ width: "100%", background: tk.inputBg, border: `1px solid ${tk.border}`, borderRadius: 12, padding: "12px 16px", fontSize: "0.875rem", color: tk.text, outline: "none" }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: tk.textSub, marginBottom: 8 }}>Service Needed</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    style={{ width: "100%", background: tk.inputBg, border: `1px solid ${tk.border}`, borderRadius: 12, padding: "12px 16px", fontSize: "0.875rem", color: tk.text, outline: "none" }}
                  >
                    <option>AI Chatbot</option>
                    <option>AI Voice Agent</option>
                    <option>AI Customer Support</option>
                    <option>AI Workflow Automation</option>
                    <option>WhatsApp AI Bot</option>
                    <option>AI Sales Assistant</option>
                    <option>AI Content Automation</option>
                    <option>AI Data Processing</option>
                    <option>Custom AI Solution</option>
                    <option>Not Sure Yet</option>
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
                    rows={5}
                    placeholder="Describe your business, current workflow, challenges, and the AI solution you're looking for."
                    style={{ width: "100%", background: tk.inputBg, border: `1px solid ${tk.border}`, borderRadius: 12, padding: "12px 16px", fontSize: "0.875rem", color: tk.text, outline: "none", resize: "none" }}
                  />
                </div>

                <button style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#6366f1", color: "#fff", fontWeight: 800, padding: "16px 0", borderRadius: 14, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(99,102,241,0.30)" }}>
                  Get My AI Solution
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}