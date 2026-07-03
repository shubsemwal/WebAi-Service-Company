"use client";

import { useEffect, useState } from "react";
import {
  Sparkles,
  Rocket,
  Globe,
  ShieldCheck,
  BrainCircuit,
  ArrowRight,
  Quote,
  CheckCircle2,
  Zap,
  Heart,
  Eye,
  Users,
  Clock,
  Star,
} from "lucide-react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Theme = "dark" | "light";

// ─── THEME TOKENS (identical to Navbar / PricingPage / web-dev page) ──────────

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
    gridColor:    "rgba(255,255,255,0.5)",
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
    sectionLabel: { bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.20)", text: "#6366f1" },
    accent:       "#6366f1",
  },
};

// ─── DATA ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: "120+", label: "Projects Delivered", icon: <Rocket className="w-5 h-5" /> },
  { value: "40+", label: "AI Automations Built", icon: <BrainCircuit className="w-5 h-5" /> },
  { value: "15+", label: "Countries Served", icon: <Globe className="w-5 h-5" /> },
  { value: "99%", label: "Client Satisfaction", icon: <Star className="w-5 h-5" /> },
  { value: "5+", label: "Years of Experience", icon: <Clock className="w-5 h-5" /> },
  { value: "30+", label: "Technologies Mastered", icon: <Zap className="w-5 h-5" /> },
  { value: "< 4h", label: "Avg. Support Response", icon: <Users className="w-5 h-5" /> },
  { value: "100%", label: "Fixed-Price Guarantee", icon: <ShieldCheck className="w-5 h-5" /> },
];

const values = [
  { icon: <Star className="w-6 h-6" />, title: "Uncompromising Quality", desc: "Every pixel and every line of code is held to the same standard — production-ready, clean, and built to last.", accent: "#818cf8" },
  { icon: <Eye className="w-6 h-6" />, title: "Full Transparency", desc: "No hidden fees. No vague timelines. You get itemized quotes, live progress updates, and complete visibility.", accent: "#a78bfa" },
  { icon: <Rocket className="w-6 h-6" />, title: "Speed Without Compromise", desc: "We move fast — but not at the cost of quality. Modern workflows let us ship faster while keeping standards high.", accent: "#34d399" },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Security by Default", desc: "Security isn't an add-on. We build with enterprise-grade practices from day one — for every project, every size.", accent: "#38bdf8" },
  { icon: <Heart className="w-6 h-6" />, title: "Long-Term Partnership", desc: "We don't disappear after launch. Every project includes post-delivery support and an upgrade path as you grow.", accent: "#fb7185" },
];

const techStack = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Prisma", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "OpenAI API", category: "AI" },
  { name: "LangChain", category: "AI" },
  { name: "n8n", category: "AI" },
  { name: "Pinecone", category: "AI" },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We start with a free 30-minute call to understand your goals, timeline, and budget. No pitch — just honest conversation.", accent: "#818cf8" },
  { step: "02", title: "Scoped Proposal", desc: "Within 24 hours you get a fully itemized quote, project roadmap, and delivery timeline. Fixed price, no surprises.", accent: "#a78bfa" },
  { step: "03", title: "Build & Iterate", desc: "We build in milestones and share progress regularly. You review, give feedback, and we iterate fast.", accent: "#34d399" },
  { step: "04", title: "Launch & Support", desc: "We handle deployment, testing, and go-live. Post-launch support is included so you're never left on your own.", accent: "#38bdf8" },
];

const testimonials = [
  { quote: "Nexus delivered our entire platform in 3 weeks — ahead of schedule and exactly to spec. The AI automation they built cut our support tickets by 60%.", name: "Sarah Chen", role: "CEO, Flowly", country: "Singapore", stars: 5 },
  { quote: "We've worked with agencies before. Nexus is different — transparent pricing, zero fluff, and a team that actually cares about outcomes, not just deliverables.", name: "Marcus Weber", role: "Founder, Leanbase", country: "Germany", stars: 5 },
  { quote: "Our e-commerce conversion rate went up 34% after the redesign. The attention to performance and UX detail was exceptional.", name: "Priya Nair", role: "Director, Verdant Co.", country: "India", stars: 5 },
];

const timeline = [
  { year: "2019", event: "Founded Nexus with one client and a laptop" },
  { year: "2020", event: "Reached 20 projects across 5 countries" },
  { year: "2021", event: "Launched our first AI automation suite" },
  { year: "2022", event: "Crossed 50 active clients, expanded to cloud infra" },
  { year: "2024", event: "Integrated LLM-powered products for 15+ businesses" },
  { year: "2026", event: "120+ projects, 15 countries, still building" },
];

const whatWeBuild = [
  { icon: <Rocket className="w-8 h-8" />, title: "Fast Execution", desc: "Rapid product delivery with modern development workflows and zero bloat.", accent: "#818cf8" },
  { icon: <BrainCircuit className="w-8 h-8" />, title: "AI First", desc: "Intelligent AI systems and automations integrated into your daily operations.", accent: "#a78bfa" },
  { icon: <ShieldCheck className="w-8 h-8" />, title: "Secure Systems", desc: "Enterprise-grade security and scalable architectures from day one.", accent: "#34d399" },
  { icon: <Globe className="w-8 h-8" />, title: "Global Reach", desc: "Solutions built for worldwide scalability, performance, and compliance.", accent: "#38bdf8" },
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

function AccentCard({
  children, accent, theme, hoverLift = true,
}: { children: React.ReactNode; accent: string; theme: Theme; hoverLift?: boolean }) {
  const tk = T[theme];
  const glow = hexToRgba(accent, 0.16);
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 20,
        border: `1px solid ${tk.border}`,
        background: `linear-gradient(160deg, ${hexToRgba(accent, theme === "dark" ? 0.10 : 0.06)}, transparent)`,
        backgroundColor: tk.bgCard,
        padding: 28,
        transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
        boxShadow: theme === "light" ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        if (hoverLift) el.style.transform = "translateY(-4px)";
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

export default function AboutPage() {
  // Lazy-init from the real DOM state so the very first paint is already
  // correct, then stay in sync with whatever the navbar toggle sets.
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
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const tk = T[theme];
  const isDark = theme === "dark";

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: tk.bg,
        color: tk.text,
        paddingTop: 68,
        overflow: "hidden",
        fontFamily: "'Space Grotesk', ui-sans-serif",
        transition: "background-color 0.2s ease, color 0.2s ease",
      }}
    >
      {/* Ambient BG */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div style={{ position: "absolute", top: 0, left: "25%", width: 600, height: 600, borderRadius: "50%", background: tk.ambientA, filter: "blur(130px)" }} />
        <div style={{ position: "absolute", bottom: "33%", right: 0, width: 500, height: 500, borderRadius: "50%", background: tk.ambientB, filter: "blur(110px)" }} />
        <div style={{ position: "absolute", top: "66%", left: 0, width: 400, height: 400, borderRadius: "50%", background: tk.ambientC, filter: "blur(90px)" }} />
        <div
          style={{
            position: "absolute", inset: 0, opacity: isDark ? 0.02 : 0.035,
            backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 39px,${tk.gridColor} 39px,${tk.gridColor} 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,${tk.gridColor} 39px,${tk.gridColor} 40px)`,
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>

        {/* ── 1. HERO ──────────────────────────────────────────────── */}
        <section style={{ paddingTop: 96, paddingBottom: 80, textAlign: "center" }}>
          <span
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "8px 20px", borderRadius: 999, marginBottom: 32,
              border: `1px solid ${tk.sectionLabel.border}`, background: tk.sectionLabel.bg,
              color: tk.sectionLabel.text, fontSize: 12, fontWeight: 800,
              letterSpacing: "0.2em", textTransform: "uppercase",
            }}
          >
            <Sparkles style={{ width: 16 }} />
            About Nexus
          </span>

          <h1 style={{ fontSize: "clamp(2.8rem,8vw,5.6rem)", fontWeight: 900, lineHeight: 0.93, letterSpacing: "-0.02em", marginBottom: 28 }}>
            We Build Things
            <br />
            <span style={{ background: "linear-gradient(135deg,#818cf8,#a78bfa,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              That Actually Work.
            </span>
          </h1>

          <p style={{ maxWidth: 640, margin: "0 auto 40px", fontSize: "1.1rem", color: tk.textMuted, lineHeight: 1.7 }}>
            Nexus is a product engineering agency building modern websites, AI
            systems, and cloud solutions that help businesses grow faster and
            work smarter. We care about outcomes, not just deliverables.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, fontSize: "0.875rem", color: tk.textSub }}>
            {["Founded 2019", "15+ Countries", "120+ Projects", "Fixed Pricing"].map((t) => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <CheckCircle2 style={{ width: 16, color: "#34d399" }} />
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* ── 2. FOUNDER STORY ─────────────────────────────────────── */}
        <section style={{ marginBottom: 112 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 48, alignItems: "center" }}>

            {/* Photo / visual */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "relative", borderRadius: 24, overflow: "hidden", aspectRatio: "4 / 5",
                border: `1px solid ${tk.border}`, display: "flex", alignItems: "flex-end", padding: 32,
                background: isDark
                  ? "linear-gradient(160deg, rgba(99,102,241,0.20), rgba(139,92,246,0.10), rgba(52,211,153,0.10))"
                  : "linear-gradient(160deg, #eef2ff, #f5f3ff, #ecfdf5)",
              }}>
                <div style={{ position: "absolute", top: 24, right: 24 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em",
                    padding: "6px 14px", borderRadius: 999,
                    background: isDark ? "rgba(52,211,153,0.15)" : "rgba(16,185,129,0.10)",
                    border: `1px solid ${isDark ? "rgba(52,211,153,0.30)" : "rgba(16,185,129,0.25)"}`,
                    color: isDark ? "#34d399" : "#059669",
                  }}>
                    Founder & Builder
                  </span>
                </div>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: isDark ? 0.10 : 0.15 }}>
                  <div style={{ width: 288, height: 288, borderRadius: "50%", border: `4px solid ${tk.accent}` }} />
                  <div style={{ position: "absolute", width: 192, height: 192, borderRadius: "50%", border: "2px solid #34d399" }} />
                  <div style={{ position: "absolute", width: 96, height: 96, borderRadius: "50%", background: hexToRgba(tk.accent, 0.3) }} />
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <p style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 4 }}>Aryan Mehta</p>
                  <p style={{ color: tk.textMuted, fontSize: "0.875rem" }}>Founder, Nexus Agency</p>
                </div>
              </div>
              {/* Floating card */}
              <div style={{
                position: "absolute", bottom: -20, right: -20, borderRadius: 16, padding: "16px 24px",
                background: tk.bgCard, border: `1px solid ${tk.border}`, backdropFilter: "blur(16px)",
                boxShadow: isDark ? "0 8px 30px rgba(0,0,0,0.4)" : "0 8px 30px rgba(0,0,0,0.10)",
              }}>
                <p style={{ fontSize: "1.8rem", fontWeight: 900, color: tk.accent }}>120+</p>
                <p style={{ fontSize: "0.75rem", color: tk.textMuted, marginTop: 2 }}>Projects shipped</p>
              </div>
            </div>

            {/* Story */}
            <div>
              <SectionLabel theme={theme}>Our Story</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: 24 }}>
                Started With a Problem.
                <br />
                <span style={{ background: "linear-gradient(135deg,#818cf8,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Built the Solution.
                </span>
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 16, color: tk.textMuted, lineHeight: 1.7 }}>
                <p>
                  In 2019, I kept seeing the same pattern — businesses with real potential
                  stuck with slow websites, clunky systems, and zero automation. Agencies
                  were expensive, slow, and built things that broke six months later.
                </p>
                <p>
                  So I started Nexus with one goal: build digital products that actually
                  work — clean design, scalable code, and practical AI automation that solves
                  real business problems, not hypothetical ones.
                </p>
                <p>
                  Seven years and 120 projects later, we work with founders, startups, and
                  established companies across 15 countries. The mission hasn&apos;t changed.
                  The tools have just gotten better.
                </p>
              </div>

              {/* Timeline */}
              <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 16 }}>
                {timeline.map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ flexShrink: 0, width: 56, textAlign: "right" }}>
                      <span style={{ fontSize: 12, fontWeight: 900, color: tk.accent }}>{t.year}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 12, flex: 1 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: tk.accent, marginTop: 6, flexShrink: 0 }} />
                      <p style={{ fontSize: "0.875rem", color: tk.textMuted }}>{t.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. MISSION & VALUES ───────────────────────────────────── */}
        <section style={{ marginBottom: 112 }}>
          <SectionLabel theme={theme}>What We Stand For</SectionLabel>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, textAlign: "center", marginBottom: 12 }}>Mission & Values</h2>
          <p style={{ color: tk.textMuted, textAlign: "center", marginBottom: 56, maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            Our mission is simple: build products that make businesses measurably better.
            These values shape every decision we make.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {values.map((v) => (
              <AccentCard key={v.title} accent={v.accent} theme={theme}>
                <div style={{
                  width: 48, height: 48, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center",
                  background: hexToRgba(v.accent, 0.15), border: `1px solid ${hexToRgba(v.accent, 0.25)}`, color: v.accent, marginBottom: 20,
                }}>
                  {v.icon}
                </div>
                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontSize: "0.875rem", color: tk.textMuted, lineHeight: 1.65 }}>{v.desc}</p>
              </AccentCard>
            ))}
          </div>
        </section>

        {/* ── 4. STATS ─────────────────────────────────────────────── */}
        <section style={{ marginBottom: 112 }}>
          <SectionLabel theme={theme}>By The Numbers</SectionLabel>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, textAlign: "center", marginBottom: 56 }}>Numbers That Prove It</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 20 }}>
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 24, border: `1px solid ${tk.border}`, background: tk.bgCard, backdropFilter: "blur(12px)",
                  padding: 28, textAlign: "center", transition: "border-color 0.3s, background 0.3s",
                  boxShadow: isDark ? "none" : "0 1px 4px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = hexToRgba(tk.accent, 0.35); }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = tk.border; }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 12, margin: "0 auto 16px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: hexToRgba(tk.accent, 0.12), border: `1px solid ${hexToRgba(tk.accent, 0.25)}`, color: tk.accent,
                }}>
                  {stat.icon}
                </div>
                <h3 style={{
                  fontSize: "2.2rem", fontWeight: 900, marginBottom: 8,
                  background: "linear-gradient(135deg,#818cf8,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  {stat.value}
                </h3>
                <p style={{ fontSize: "0.875rem", color: tk.textSub }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. WHAT WE DO ─────────────────────────────────────────── */}
        <section style={{ marginBottom: 112 }}>
          <SectionLabel theme={theme}>Our Expertise</SectionLabel>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, textAlign: "center", marginBottom: 56 }}>What We Build</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24 }}>
            {whatWeBuild.map((item) => (
              <AccentCard key={item.title} accent={item.accent} theme={theme}>
                <div style={{
                  width: 64, height: 64, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center",
                  background: hexToRgba(item.accent, 0.15), border: `1px solid ${hexToRgba(item.accent, 0.25)}`, color: item.accent, marginBottom: 24,
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: tk.textMuted, lineHeight: 1.65, fontSize: "0.9rem" }}>{item.desc}</p>
              </AccentCard>
            ))}
          </div>
        </section>

        {/* ── 6. TECH STACK ─────────────────────────────────────────── */}
        <section style={{ marginBottom: 112 }}>
          <SectionLabel theme={theme}>Our Arsenal</SectionLabel>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, textAlign: "center", marginBottom: 12 }}>Tech Stack</h2>
          <p style={{ color: tk.textMuted, textAlign: "center", marginBottom: 56, maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            We use the right tool for the job — modern, proven, and production-tested technologies.
          </p>

          {(["Frontend", "Backend", "Cloud", "DevOps", "AI"] as const).map((cat) => (
            <div key={cat} style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: tk.textSub, marginBottom: 12 }}>{cat}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {techStack.filter((t) => t.category === cat).map((tech) => (
                  <span
                    key={tech.name}
                    style={{
                      padding: "8px 16px", borderRadius: 12, fontSize: "0.875rem", fontWeight: 600,
                      border: `1px solid ${tk.border}`, background: tk.bgCard, color: tk.textMuted,
                      transition: "border-color 0.2s, color 0.2s",
                      boxShadow: isDark ? "none" : "0 1px 3px rgba(0,0,0,0.04)",
                    }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── 7. PROCESS ───────────────────────────────────────────── */}
        <section style={{ marginBottom: 112 }}>
          <SectionLabel theme={theme}>How We Work</SectionLabel>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, textAlign: "center", marginBottom: 12 }}>Our Process</h2>
          <p style={{ color: tk.textMuted, textAlign: "center", marginBottom: 56, maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            From first conversation to live product, here&apos;s exactly what working with Nexus looks like.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {process.map((step) => (
              <AccentCard key={step.step} accent={step.accent} theme={theme}>
                <div style={{
                  fontSize: "3.4rem", fontWeight: 900, lineHeight: 1, marginBottom: 20,
                  color: "transparent", WebkitTextStroke: `1px ${hexToRgba(tk.text === "#ffffff" ? "#ffffff" : "#0f172a", 0.15)}`,
                }}>
                  {step.step}
                </div>
                <h3 style={{ fontWeight: 900, fontSize: "1.15rem", marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: "0.875rem", color: tk.textMuted, lineHeight: 1.65 }}>{step.desc}</p>
              </AccentCard>
            ))}
          </div>
        </section>

        {/* ── 8. TESTIMONIALS ──────────────────────────────────────── */}
        <section style={{ marginBottom: 112 }}>
          <SectionLabel theme={theme}>Client Feedback</SectionLabel>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, textAlign: "center", marginBottom: 12 }}>What Clients Say</h2>
          <p style={{ color: tk.textMuted, textAlign: "center", marginBottom: 56 }}>We let results do the talking.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 24, border: `1px solid ${tk.border}`, background: tk.bgCard, padding: 32,
                  display: "flex", flexDirection: "column", transition: "border-color 0.3s, background 0.3s",
                  boxShadow: isDark ? "none" : "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                <Quote style={{ width: 32, height: 32, color: hexToRgba(tk.accent, 0.4), marginBottom: 20, flexShrink: 0 }} />
                <p style={{ color: tk.textMuted, lineHeight: 1.7, fontSize: "0.9rem", flex: 1, marginBottom: 24 }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 20, borderTop: `1px solid ${tk.border}` }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                    background: `linear-gradient(135deg, ${hexToRgba(tk.accent, 0.3)}, ${hexToRgba("#a78bfa", 0.2)})`,
                    border: `1px solid ${tk.border}`, fontSize: 12, fontWeight: 900, color: tk.accent,
                  }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: "0.875rem" }}>{t.name}</p>
                    <p style={{ fontSize: "0.75rem", color: tk.textSub }}>{t.role} · {t.country}</p>
                  </div>
                  <div style={{ marginLeft: "auto", display: "flex", gap: 2 }}>
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} style={{ width: 14, height: 14, color: "#fbbf24", fill: "#fbbf24" }} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 9. FINAL CTA ─────────────────────────────────────────── */}
        <section style={{ marginBottom: 112 }}>
          <div style={{
            position: "relative", borderRadius: 32, overflow: "hidden", textAlign: "center",
            padding: "5rem 2rem",
            border: `1px solid rgba(99,102,241,0.20)`,
            background: isDark
              ? "linear-gradient(135deg,rgba(99,102,241,0.15),rgba(139,92,246,0.08),transparent)"
              : "linear-gradient(135deg,rgba(99,102,241,0.06),rgba(139,92,246,0.04),#fff)",
            boxShadow: isDark ? "none" : "0 4px 24px rgba(0,0,0,0.07)",
          }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: 320, height: 320, background: "radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, width: 256, height: 256, background: "radial-gradient(circle,rgba(139,92,246,0.10) 0%,transparent 70%)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <SectionLabel theme={theme}>Let&apos;s Build Together</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,6vw,3.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
                Ready to Start
                <br />
                <span style={{ background: "linear-gradient(135deg,#818cf8,#a78bfa,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Your Project?
                </span>
              </h2>
              <p style={{ color: tk.textMuted, maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}>
                Tell us what you&apos;re building. We&apos;ll send a scoped proposal within 24 hours — no
                obligation, fully itemized, fixed price.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
                <a
                  href="#"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#6366f1", color: "#fff", fontWeight: 800, padding: "16px 32px", borderRadius: 18, textDecoration: "none", boxShadow: "0 4px 20px rgba(99,102,241,0.30)" }}
                >
                  Start a Project <ArrowRight style={{ width: 16 }} />
                </a>
                <a
                  href="#"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${tk.border}`, color: tk.textMuted, fontWeight: 700, padding: "16px 32px", borderRadius: 18, textDecoration: "none" }}
                >
                  View Services
                </a>
                <a
                  href="#"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${tk.border}`, color: tk.textMuted, fontWeight: 700, padding: "16px 32px", borderRadius: 18, textDecoration: "none" }}
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}