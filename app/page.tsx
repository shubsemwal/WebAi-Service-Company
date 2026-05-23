"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

// ── CSS variable shortcuts ──
const V = {
  bg:          "var(--bg)",
  bgCard:      "var(--bg-card)",
  bgSection:   "var(--bg-section)",
  bgHover:     "var(--bg-hover)",
  textHigh:    "var(--text-high)",
  textMid:     "var(--text-mid)",
  textLow:     "var(--text-low)",
  indigo:      "var(--indigo)",
  emerald:     "var(--emerald)",
  amber:       "var(--amber)",
  border:      "var(--border)",
  shadow:      "var(--shadow)",
  shadowLg:    "var(--shadow-lg)",
  glowIndigo:  "var(--glow-indigo)",
  glowEmerald: "var(--glow-emerald)",
};

// ============================================================
//  DATA
// ============================================================
const SERVICES = [
  {
    icon: "🤖",
    title: "AI Solutions",
    desc: "Custom LLM integrations, AI agents, computer vision, and intelligent automation pipelines built for your business.",
    accentRaw: "--indigo",
    href: "/ai-solutions",
  },
  {
    icon: "⚡",
    title: "Web Development",
    desc: "Blazing-fast Next.js apps with pixel-perfect design, SSR/SSG, and enterprise-grade architecture.",
    accentRaw: "--emerald",
    href: "/web-development",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "AWS, GCP, Azure infrastructure, CI/CD pipelines, Kubernetes orchestration, and zero-downtime deployments.",
    accentRaw: "--amber",
    href: "/cloud-devops",
  },
  {
    icon: "📊",
    title: "Data Engineering",
    desc: "End-to-end data pipelines, real-time analytics, ML training infrastructure, and BI dashboards.",
    accentRaw: "--indigo",
    href: "/services",
  },
  {
    icon: "🎨",
    title: "UI / UX Design",
    desc: "Research-driven design, motion systems, design tokens, and interactive prototypes that delight users.",
    accentRaw: "--emerald",
    href: "/services",
  },
  {
    icon: "🔐",
    title: "Security & Compliance",
    desc: "App security audits, pen testing, GDPR compliance, and architecture reviews for critical systems.",
    accentRaw: "--amber",
    href: "/services",
  },
];

const STEPS = [
  { num: "01", title: "Discovery",         desc: "Deep-dive into your goals, users, and technical landscape to align on vision." },
  { num: "02", title: "Strategy & Design", desc: "Architecture, UI wireframes, and AI model selection. Every decision is intentional." },
  { num: "03", title: "Build & Iterate",   desc: "Agile sprints with weekly demos. You see progress from day one, not day ninety." },
  { num: "04", title: "Launch & Scale",    desc: "Zero-downtime deploys, monitoring, and ongoing optimization as you grow." },
];

const STATS = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 98,  suffix: "%", label: "Client Satisfaction" },
  { value: 80,  suffix: "+", label: "AI Models Deployed" },
  { value: 32,  suffix: "+", label: "Countries Served" },
];

const MARQUEE_ITEMS = [
  "AI Solutions", "Web Development", "Cloud & DevOps",
  "Machine Learning", "UI/UX Design", "LLM Integration",
  "Next.js Apps", "AI Agents", "Data Pipelines", "Kubernetes",
];

const TRUSTED_BY = ["Acme Corp", "PixelLabs", "NovaTech", "Quantum AI", "CloudBase", "DataForge"];

// ============================================================
//  ANIMATION VARIANTS
// ============================================================
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ============================================================
//  SUB-COMPONENTS
// ============================================================

// ── Animated count-up number ──
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const duration = 1800;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setCount(Math.round((1 - Math.pow(1 - p, 3)) * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Service card ──
function ServiceCard({ icon, title, desc, accentRaw, href }: typeof SERVICES[0]) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:   V.bgCard,
        border:       `1px solid ${hovered ? `var(${accentRaw})` : V.border}`,
        borderRadius: "20px",
        padding:      "36px 32px",
        position:     "relative",
        overflow:     "hidden",
        cursor:       "pointer",
        transition:   "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
        transform:    hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow:    hovered ? V.shadowLg : V.shadow,
      }}
    >
      {/* Corner glow */}
      <div style={{
        position: "absolute", top: "-50px", left: "-50px",
        width: "180px", height: "180px", borderRadius: "50%",
        background: `radial-gradient(circle, var(${accentRaw})25, transparent 70%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s",
        pointerEvents: "none",
      }} />

      {/* Icon */}
      <div style={{
        width: "54px", height: "54px", borderRadius: "14px",
        background: `var(${accentRaw})18`,
        border: `1px solid var(${accentRaw})35`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "24px", marginBottom: "24px",
        transition: "transform 0.3s",
        transform: hovered ? "scale(1.12) rotate(-5deg)" : "scale(1)",
      }}>
        {icon}
      </div>

      <h3 style={{
        fontFamily: "'Space Grotesk', ui-sans-serif",
        fontSize: "19px", fontWeight: "700",
        color: V.textHigh, marginBottom: "10px", letterSpacing: "-0.2px",
      }}>
        {title}
      </h3>

      <p style={{ color: V.textMid, fontSize: "14px", lineHeight: "1.75", margin: 0 }}>
        {desc}
      </p>

      {/* Hover arrow */}
      <div style={{
        display: "flex", alignItems: "center", gap: "6px",
        marginTop: "20px", fontSize: "13px", fontWeight: "600",
        color: `var(${accentRaw})`,
        opacity: hovered ? 1 : 0,
        transform: hovered ? "translateX(0)" : "translateX(-10px)",
        transition: "opacity 0.3s, transform 0.3s",
      }}>
        Explore service →
      </div>
    </motion.div>
  );
}

// ── Process step card ──
function StepCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      style={{
        padding: "32px 28px",
        border: `1px solid ${V.border}`,
        borderRadius: "18px",
        background: V.bgCard,
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = V.indigo;
        (e.currentTarget as HTMLElement).style.boxShadow = V.shadowLg;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = V.border;
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div style={{
        fontFamily: "'Space Grotesk', ui-sans-serif",
        fontSize: "68px", fontWeight: "800",
        color: V.indigo, opacity: 0.1,
        lineHeight: "1", marginBottom: "16px", userSelect: "none",
      }}>
        {num}
      </div>
      <h3 style={{
        fontFamily: "'Space Grotesk', ui-sans-serif",
        fontSize: "18px", fontWeight: "700",
        color: V.textHigh, marginBottom: "10px",
      }}>
        {title}
      </h3>
      <p style={{ color: V.textMid, fontSize: "14px", lineHeight: "1.75", margin: 0 }}>
        {desc}
      </p>
    </motion.div>
  );
}

// ============================================================
//  HOME PAGE  (no <Navbar /> here — it lives in layout.tsx)
// ============================================================
export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  return (
    <>
      {/* ─────────────────────────────────────────────────────
          GLOBAL CSS VARIABLES — paste into globals.css
          (only needs to live here once; remove if already in globals)
      ───────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@700;800&display=swap');

        /* ── DARK THEME (default) ── */
        [data-theme="dark"] {
          --bg:           #0b0f1a;
          --bg-card:      #111827;
          --bg-section:   #0f1626;
          --bg-hover:     #1a2438;
          --text-high:    #f1f5f9;
          --text-mid:     #94a3b8;
          --text-low:     #64748b;
          --indigo:       #6366f1;
          --indigo-light: #818cf8;
          --emerald:      #10b981;
          --amber:        #f59e0b;
          --border:       rgba(255,255,255,0.08);
          --border-focus: rgba(99,102,241,0.5);
          --shadow:       0 1px 3px rgba(0,0,0,0.4);
          --shadow-lg:    0 20px 60px rgba(0,0,0,0.45);
          --glow-indigo:  rgba(99,102,241,0.35);
          --glow-emerald: rgba(16,185,129,0.25);
          --glow-amber:   rgba(245,158,11,0.25);
          --orb1:         rgba(99,102,241,0.18);
          --orb2:         rgba(16,185,129,0.12);
          --orb3:         rgba(245,158,11,0.10);
          --grid-color:   rgba(255,255,255,0.035);
        }

        /* ── LIGHT THEME ── */
        [data-theme="light"] {
          --bg:           #f8fafc;
          --bg-card:      #ffffff;
          --bg-section:   #f1f5f9;
          --bg-hover:     #e8edf5;
          --text-high:    #0f172a;
          --text-mid:     #475569;
          --text-low:     #94a3b8;
          --indigo:       #4f46e5;
          --indigo-light: #6366f1;
          --emerald:      #059669;
          --amber:        #d97706;
          --border:       rgba(0,0,0,0.09);
          --border-focus: rgba(79,70,229,0.4);
          --shadow:       0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04);
          --shadow-lg:    0 12px 40px rgba(0,0,0,0.12);
          --glow-indigo:  rgba(79,70,229,0.15);
          --glow-emerald: rgba(5,150,105,0.12);
          --glow-amber:   rgba(217,119,6,0.12);
          --orb1:         rgba(79,70,229,0.10);
          --orb2:         rgba(5,150,105,0.08);
          --orb3:         rgba(217,119,6,0.07);
          --grid-color:   rgba(0,0,0,0.04);
        }

        /* ── BASE RESETS ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Plus Jakarta Sans', ui-sans-serif;
          background: var(--bg);
          color: var(--text-high);
          overflow-x: hidden;
          transition: background 0.35s, color 0.35s;
        }

        /* ── KEYFRAMES ── */
        @keyframes shimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1;   transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.7); }
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-line {
          0%, 100% { opacity: 0.3; transform: scaleY(0.7); }
          50%       { opacity: 1;   transform: scaleY(1); }
        }
        @keyframes float-orb {
          0%, 100% { transform: translate(0, 0); }
          33%       { transform: translate(20px, -20px); }
          66%       { transform: translate(-15px, 15px); }
        }

        /* ── SCROLLBAR ── */
        ::-webkit-scrollbar       { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--border-focus); border-radius: 3px; }
      `}</style>

      <main style={{
        background: V.bg,
        minHeight: "100vh",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        color: V.textHigh,
        overflowX: "hidden",
        // push content below fixed navbar (68px)
        paddingTop: "68px",
      }}>

        {/* ═══════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════ */}
        <section ref={heroRef} style={{
          position: "relative",
          minHeight: "calc(100vh - 68px)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px 80px",
        }}>

          {/* Background orbs */}
          <motion.div style={{ y: orbY, position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
            <div style={{ position: "absolute", top: "-5%", left: "-8%", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle, var(--orb1), transparent 70%)", filter: "blur(70px)", animation: "float-orb 12s ease-in-out infinite" }} />
            <div style={{ position: "absolute", bottom: "-5%", right: "-8%", width: "550px", height: "550px", borderRadius: "50%", background: "radial-gradient(circle, var(--orb2), transparent 70%)", filter: "blur(80px)", animation: "float-orb 15s ease-in-out infinite reverse" }} />
            <div style={{ position: "absolute", top: "35%", left: "38%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, var(--orb3), transparent 70%)", filter: "blur(90px)", animation: "float-orb 18s ease-in-out infinite 3s" }} />
          </motion.div>

          {/* Subtle grid overlay */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 0,
            backgroundImage: `linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, black, transparent)",
          }} />

          {/* Hero content */}
          <div style={{ position: "relative", zIndex: 2, maxWidth: "860px", width: "100%" }}>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "7px 18px", borderRadius: "100px",
                border: `1px solid ${V.border}`, background: V.bgCard,
                fontSize: "12px", fontWeight: "600", color: V.indigo,
                letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "28px",
                boxShadow: V.shadow,
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: V.emerald, display: "inline-block", animation: "pulse-dot 1.8s ease infinite" }} />
              AI-Powered Digital Transformation
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              style={{
                fontFamily: "'Space Grotesk', ui-sans-serif",
                fontSize: "clamp(44px, 8vw, 90px)",
                fontWeight: "800",
                lineHeight: "1.02",
                letterSpacing: "-2.5px",
                marginBottom: "24px",
              }}
            >
              <span style={{ display: "block", color: V.textHigh }}>We Build the</span>
              <span style={{
                display: "block",
                background: `linear-gradient(110deg, ${V.indigo}, ${V.emerald}, ${V.amber}, ${V.indigo})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                backgroundSize: "250% 100%",
                animation: "shimmer 5s linear infinite",
              }}>
                Future of Web
              </span>
              <span style={{ display: "block", color: V.textHigh }}>& AI</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontSize: "18px", fontWeight: "400", color: V.textMid,
                maxWidth: "540px", margin: "0 auto 44px", lineHeight: "1.8",
              }}
            >
              Premium AI solutions and cutting-edge web development that transform businesses into digital powerhouses.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}
            >
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    padding: "15px 38px", background: V.indigo,
                    border: "none", borderRadius: "12px",
                    color: "#fff", fontSize: "15px", fontWeight: "600",
                    cursor: "pointer", transition: "transform 0.25s, box-shadow 0.25s",
                    letterSpacing: "0.2px",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                    e.currentTarget.style.boxShadow = `0 16px 50px ${V.glowIndigo}`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Start Your Project →
                </button>
              </Link>

              <Link href="/case-studies" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    padding: "15px 38px",
                    background: V.bgCard,
                    border: `1.5px solid ${V.border}`,
                    borderRadius: "12px",
                    color: V.textHigh, fontSize: "15px", fontWeight: "500",
                    cursor: "pointer", transition: "all 0.25s",
                    boxShadow: V.shadow,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = V.indigo;
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = V.shadowLg;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = V.border;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = V.shadow;
                  }}
                >
                  View Our Work
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{ display: "flex", gap: "48px", justifyContent: "center", marginTop: "72px", flexWrap: "wrap" }}
            >
              {STATS.map(stat => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "'Space Grotesk', ui-sans-serif",
                    fontSize: "36px", fontWeight: "800",
                    background: `linear-gradient(135deg, ${V.indigo}, ${V.emerald})`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontSize: "13px", color: V.textLow, marginTop: "4px", fontWeight: "500" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
            style={{
              position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)",
              display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
            }}
          >
            <span style={{ fontSize: "9px", letterSpacing: "3px", color: V.textLow, textTransform: "uppercase", writingMode: "vertical-lr" }}>Scroll</span>
            <div style={{ width: "1px", height: "56px", background: `linear-gradient(to bottom, ${V.indigo}, transparent)`, animation: "scroll-line 2s ease infinite" }} />
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════
            MARQUEE TICKER
        ═══════════════════════════════════════════════ */}
        <div style={{
          overflow: "hidden", padding: "18px 0",
          borderTop: `1px solid ${V.border}`, borderBottom: `1px solid ${V.border}`,
          background: V.bgSection,
        }}>
          <div style={{ display: "flex", gap: "56px", animation: "marquee 28s linear infinite", width: "max-content" }}>
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} style={{
                display: "flex", alignItems: "center", gap: "16px",
                whiteSpace: "nowrap",
                fontFamily: "'Space Grotesk', ui-sans-serif",
                fontSize: "15px", fontWeight: "700",
                color: i % 3 === 0 ? V.indigo : i % 3 === 1 ? V.emerald : V.amber,
              }}>
                {item}
                <span style={{ color: V.textLow, opacity: 0.5, fontSize: "12px" }}>✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            SERVICES SECTION
        ═══════════════════════════════════════════════ */}
        <section style={{ padding: "100px 48px" }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "flex-end",
            flexWrap: "wrap", gap: "24px", marginBottom: "56px",
          }}>
            <div>
              <p style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: V.indigo, fontWeight: "700", marginBottom: "10px" }}>
                What We Do
              </p>
              <h2 style={{
                fontFamily: "'Space Grotesk', ui-sans-serif",
                fontSize: "clamp(30px, 5vw, 50px)", fontWeight: "800",
                letterSpacing: "-1.5px", lineHeight: "1.1", color: V.textHigh,
              }}>
                Services Built<br />for Scale
              </h2>
            </div>
            <p style={{ color: V.textMid, fontSize: "16px", lineHeight: "1.8", maxWidth: "420px" }}>
              From AI agents to enterprise web apps — we deliver solutions that move the needle for ambitious companies.
            </p>
          </div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "18px" }}
          >
            {SERVICES.map(service => <ServiceCard key={service.title} {...service} />)}
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════
            PROCESS SECTION
        ═══════════════════════════════════════════════ */}
        <section style={{ padding: "100px 48px", background: V.bgSection }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: V.emerald, fontWeight: "700", marginBottom: "10px" }}>
              How We Work
            </p>
            <h2 style={{
              fontFamily: "'Space Grotesk', ui-sans-serif",
              fontSize: "clamp(30px, 5vw, 50px)", fontWeight: "800",
              letterSpacing: "-1.5px", lineHeight: "1.1", color: V.textHigh, marginBottom: "56px",
            }}>
              From Idea to<br />Launch in 4 Steps
            </h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px" }}
          >
            {STEPS.map(step => <StepCard key={step.num} {...step} />)}
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════
            TRUST BAND
        ═══════════════════════════════════════════════ */}
        <section style={{ padding: "80px 48px", textAlign: "center" }}>
          <p style={{ fontSize: "13px", color: V.textLow, letterSpacing: "2px", textTransform: "uppercase", fontWeight: "600", marginBottom: "40px" }}>
            Trusted by teams at
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "48px", flexWrap: "wrap" }}>
            {TRUSTED_BY.map(name => (
              <span
                key={name}
                style={{
                  fontFamily: "'Space Grotesk', ui-sans-serif",
                  fontSize: "16px", fontWeight: "800",
                  color: V.textLow, letterSpacing: "-0.3px",
                  transition: "color 0.3s", cursor: "default",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = V.textHigh)}
                onMouseLeave={e => (e.currentTarget.style.color = V.textLow)}
              >
                {name}
              </span>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            CTA SECTION
        ═══════════════════════════════════════════════ */}
        <section style={{ padding: "80px 48px 120px" }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            style={{
              background: V.bgCard,
              border: `1px solid ${V.border}`,
              borderRadius: "28px", padding: "80px 48px",
              textAlign: "center", position: "relative", overflow: "hidden",
              boxShadow: V.shadowLg,
            }}
          >
            {/* Corner glows */}
            <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "220px", height: "220px", borderRadius: "50%", background: "radial-gradient(circle, var(--glow-indigo), transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "220px", height: "220px", borderRadius: "50%", background: "radial-gradient(circle, var(--glow-emerald), transparent 70%)", pointerEvents: "none" }} />

            <p style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: V.indigo, fontWeight: "700", marginBottom: "18px" }}>
              Ready to Build?
            </p>

            <h2 style={{
              fontFamily: "'Space Grotesk', ui-sans-serif",
              fontSize: "clamp(34px, 6vw, 62px)", fontWeight: "800",
              letterSpacing: "-2px", lineHeight: "1.1",
              color: V.textHigh, marginBottom: "18px",
            }}>
              Let's Create Something{" "}
              <span style={{
                background: `linear-gradient(135deg, ${V.indigo}, ${V.emerald})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Extraordinary
              </span>
            </h2>

            <p style={{ color: V.textMid, fontSize: "17px", marginBottom: "40px", lineHeight: "1.7", maxWidth: "480px", margin: "0 auto 40px" }}>
              Join 200+ companies who chose Nexus to power their digital transformation.
            </p>

            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    padding: "16px 44px", background: V.indigo,
                    border: "none", borderRadius: "12px",
                    color: "#fff", fontSize: "15px", fontWeight: "600",
                    cursor: "pointer", transition: "transform 0.25s, box-shadow 0.25s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = `0 16px 50px ${V.glowIndigo}`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Book a Free Strategy Call →
                </button>
              </Link>

              <Link href="/case-studies" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    padding: "16px 44px", background: "transparent",
                    border: `1.5px solid ${V.border}`,
                    borderRadius: "12px",
                    color: V.textHigh, fontSize: "15px", fontWeight: "500",
                    cursor: "pointer", transition: "all 0.25s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = V.emerald;
                    e.currentTarget.style.background = V.bgHover;
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = V.border;
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  View Case Studies
                </button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════
            FOOTER
        ═══════════════════════════════════════════════ */}
        <footer style={{
          padding: "36px 48px",
          borderTop: `1px solid ${V.border}`,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "16px",
          background: V.bgSection,
        }}>
          <span style={{
            fontFamily: "'Space Grotesk', ui-sans-serif",
            fontSize: "20px", fontWeight: "800",
            background: `linear-gradient(135deg, ${V.indigo}, ${V.emerald})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            NEXUS
          </span>

          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {["Privacy", "Terms", "Careers", "Contact"].map(label => (
              <Link
                key={label}
                href={`/${label.toLowerCase()}`}
                style={{
                  padding: "6px 12px", fontSize: "13px", color: V.textMid,
                  textDecoration: "none", borderRadius: "8px",
                  transition: "color 0.25s, background 0.25s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = V.textHigh;
                  e.currentTarget.style.background = V.bgHover;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = V.textMid;
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          <p style={{ fontSize: "13px", color: V.textLow, margin: 0 }}>
            © 2025 Nexus AI Agency. All rights reserved.
          </p>
        </footer>

      </main>
    </>
  );
}