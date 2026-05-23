"use client";

import {
  Cpu, Bot, BrainCircuit, MessageSquareText,
  Workflow, Sparkles, Mic, Database,
} from "lucide-react";

export default function AISolutionsPage() {
  const solutions = [
    { icon: <Bot className="w-7 h-7" />,             title: "AI Chatbots",          desc: "Smart AI chatbots for websites, WhatsApp and customer support automation.", accent: "#34d399", glow: "rgba(52,211,153,0.18)" },
    { icon: <BrainCircuit className="w-7 h-7" />,    title: "AI Agents",            desc: "Autonomous AI agents for workflows, execution and automation systems.",      accent: "#a78bfa", glow: "rgba(167,139,250,0.18)" },
    { icon: <MessageSquareText className="w-7 h-7"/>, title: "Customer Support AI",  desc: "24/7 intelligent customer handling with automated responses.",                accent: "#38bdf8", glow: "rgba(56,189,248,0.18)" },
    { icon: <Workflow className="w-7 h-7" />,         title: "Business Automation",  desc: "Automate repetitive workflows, CRM tasks and internal processes.",            accent: "#fb923c", glow: "rgba(251,146,60,0.18)" },
    { icon: <Mic className="w-7 h-7" />,              title: "AI Voice Bots",        desc: "Human-like AI voice assistants for calls and bookings.",                      accent: "#f472b6", glow: "rgba(244,114,182,0.18)" },
    { icon: <Sparkles className="w-7 h-7" />,         title: "AI Content Systems",   desc: "Generate marketing content, product descriptions and posts using AI.",        accent: "#fbbf24", glow: "rgba(251,191,36,0.18)" },
    { icon: <Database className="w-7 h-7" />,         title: "AI Data Intelligence", desc: "Extract insights from business data with AI-powered analytics.",              accent: "#2dd4bf", glow: "rgba(45,212,191,0.18)" },
    { icon: <Cpu className="w-7 h-7" />,              title: "Custom AI Solutions",  desc: "Tailored AI systems designed specifically for your business.",                 accent: "#818cf8", glow: "rgba(129,140,248,0.18)" },
  ];

  const stats = [
    { value: "200+", label: "AI Projects Delivered" },
    { value: "98%",  label: "Client Satisfaction"   },
    { value: "50ms", label: "Avg Response Time"     },
    { value: "24/7", label: "AI Uptime Guarantee"   },
  ];

  return (
    <main style={{ minHeight: "100vh", overflow: "hidden", backgroundColor: "var(--bg)", color: "var(--text)", transition: "background-color 0.3s, color 0.3s" }}>
  

      {/* ── HERO ── */}
      <section style={{ position: "relative", padding: "10rem 4rem 8rem", textAlign: "center", borderBottom: "1px solid var(--border)", overflow: "hidden" }}>

        {/* Glow blobs */}
        <div style={{ position: "absolute", top: -120, left: -120, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, right: -80, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Dot grid */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none", backgroundImage: "radial-gradient(circle, rgba(99,102,241,1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto" }}>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", borderRadius: 999, border: "1px solid rgba(167,139,250,0.35)", background: "rgba(167,139,250,0.1)", marginBottom: 36 }}>
            <Sparkles style={{ width: 14, height: 14, color: "#a78bfa" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", color: "#a78bfa" }}>AI SOLUTIONS</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: 28, color: "var(--text)" }}>
            Intelligent{" "}
            <span style={{ background: "linear-gradient(135deg,#a78bfa 0%,#22d3ee 50%,#34d399 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              AI Systems
            </span>
            {" "}For Business
          </h1>

          <p style={{ maxWidth: 560, margin: "0 auto 48px", fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
            Transform your business with AI automation, smart assistants and intelligent workflows built for the modern era.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            <button style={{ padding: "14px 32px", borderRadius: 16, background: "linear-gradient(135deg,#8b5cf6,#06b6d4)", color: "#fff", fontWeight: 700, fontSize: 14, letterSpacing: "0.04em", border: "none", cursor: "pointer" }}>
              Start AI Project
            </button>
            <button style={{ padding: "14px 32px", borderRadius: 16, fontWeight: 700, fontSize: 14, border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text-muted)", cursor: "pointer" }}>
              View Case Studies →
            </button>
          </div>

        </div>
      </section>

      {/* ── GRID ── */}
      <section style={{ padding: "6rem 4rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, color: "var(--text)", marginBottom: 12 }}>Our AI Services</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>Powerful AI solutions designed for automation and growth.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {solutions.map((s, i) => (
              <Card key={i} accent={s.accent} glow={s.glow}>
                {/* Icon circle */}
                <div style={{ width: 52, height: 52, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", background: `${s.accent}1a`, color: s.accent, marginBottom: 20, flexShrink: 0 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{s.desc}</p>
                {/* bottom accent */}
                <div style={{ position: "absolute", bottom: 0, left: 24, right: 24, height: 2, borderRadius: 999, background: `linear-gradient(90deg,${s.accent},transparent)`, opacity: 0 }} className="card-line" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: "4rem", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", backgroundColor: "var(--bg-subtle)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 32, textAlign: "center" }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: "2.5rem", fontWeight: 900, background: "linear-gradient(135deg,#8b5cf6,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.value}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "7rem 4rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", borderRadius: 32, border: "1px solid var(--border)", backgroundColor: "var(--bg-card)", padding: "5rem 3rem", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 400, height: 200, background: "radial-gradient(ellipse,rgba(139,92,246,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
          <Sparkles style={{ width: 32, height: 32, color: "#a78bfa", margin: "0 auto 24px" }} />
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, color: "var(--text)", lineHeight: 1.15, marginBottom: 20 }}>
            Ready to integrate{" "}
            <span style={{ background: "linear-gradient(135deg,#a78bfa,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              AI into your business?
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Build smarter workflows, automate customer support and create AI-driven experiences that scale.
          </p>
          <button style={{ padding: "16px 40px", borderRadius: 16, background: "linear-gradient(135deg,#8b5cf6,#06b6d4)", color: "#fff", fontWeight: 800, fontSize: 15, border: "none", cursor: "pointer" }}>
            Start AI Project →
          </button>
        </div>
      </section>

    </main>
  );
}

/* ── Reusable card with hover glow ── */
function Card({ children, accent, glow }: { children: React.ReactNode; accent: string; glow: string }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 20,
        border: "1px solid var(--border)",
        backgroundColor: "var(--bg-card)",
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
        el.style.borderColor = "var(--border)";
      }}
    >
      {children}
    </div>
  );
}