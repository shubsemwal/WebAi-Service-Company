"use client";

import { useState } from "react";
import {
  Globe,
  Code2,
  Server,
  BrainCircuit,
  Cloud,
  Database,
  ShieldCheck,
  Smartphone,
  Check,
  Clock,
  ChevronDown,
  MessageCircle,
  Mail,
  Rocket,
  Phone,
  ArrowRight,
  User,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: <Code2 style={{ width: 28, height: 28 }} />,
    title: "Frontend Development",
    desc: "Modern UI using React.js, Next.js, Angular and Tailwind CSS.",
    benefit: "Converts visitors into customers",
    accent: "#38bdf8",
    glow: "rgba(56,189,248,0.18)",
  },
  {
    icon: <Server style={{ width: 28, height: 28 }} />,
    title: "Backend Development",
    desc: "Scalable backend systems using Node.js, Express and Python.",
    benefit: "Handles thousands of users reliably",
    accent: "#636be6",
    glow: "rgba(52,211,153,0.18)",
  },
  {
    icon: <BrainCircuit style={{ width: 28, height: 28 }} />,
    title: "AI & Automation",
    desc: "AI agents, chatbots, WhatsApp bots and automation systems.",
    benefit: "Saves 10+ hours of work per week",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.18)",
  },
  {
    icon: <Cloud style={{ width: 28, height: 28 }} />,
    title: "Cloud & DevOps",
    desc: "AWS deployment, CI/CD pipelines and cloud infrastructure.",
    benefit: "99.9% uptime, zero downtime deploys",
    accent: "#fbbf24",
    glow: "rgba(251,191,36,0.18)",
  },
  {
    icon: <Database style={{ width: 28, height: 28 }} />,
    title: "Database Systems",
    desc: "MongoDB, PostgreSQL, MySQL and optimised database design.",
    benefit: "Fast queries at any scale",
    accent: "#f472b6",
    glow: "rgba(244,114,182,0.18)",
  },
  {
    icon: <Globe style={{ width: 28, height: 28 }} />,
    title: "SEO & Web Solutions",
    desc: "SEO optimisation, domains, hosting and web management.",
    benefit: "More organic traffic, higher rankings",
    accent: "#7951e5",
    glow: "rgba(34,211,238,0.18)",
  },
  {
    icon: <ShieldCheck style={{ width: 28, height: 28 }} />,
    title: "Cyber Security",
    desc: "Secure APIs, authentication systems and server protection.",
    benefit: "Your data stays fully protected",
    accent: "#f87171",
    glow: "rgba(248,113,113,0.18)",
  },
  {
    icon: <Smartphone style={{ width: 28, height: 28 }} />,
    title: "Responsive Design",
    desc: "Mobile-first responsive websites and UX-focused design.",
    benefit: "Great experience on every device",
    accent: "#fb923c",
    glow: "rgba(251,146,60,0.18)",
  },
];

const pricing = [
  { name: "Landing Page", price: 8000, delivery: "1–3 Days", perMonth: false },
  { name: "Frontend Development", price: 15000, delivery: "3–7 Days", perMonth: false },
  { name: "Fullstack Application", price: 35000, delivery: "7–20 Days", perMonth: false },
  { name: "AI Agent", price: 20000, delivery: "5–15 Days", perMonth: false },
  { name: "WhatsApp AI Bot", price: 18000, delivery: "4–10 Days", perMonth: false },
  { name: "Ecommerce Website", price: 30000, delivery: "7–15 Days", perMonth: false },
  { name: "SaaS Platform", price: 60000, delivery: "15–45 Days", perMonth: false },
  { name: "Maintenance Support", price: 5000, delivery: "Ongoing", perMonth: true },
];

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We understand your goals, requirements, and budget. Free, no commitment, 30 minutes.",
  },
  {
    num: "02",
    title: "Build & Test",
    desc: "We develop your solution, keep you updated, and test everything thoroughly before delivery.",
  },
  {
    num: "03",
    title: "Launch & Support",
    desc: "We deploy your project live and provide ongoing support so nothing breaks after launch.",
  },
];

const stats = [
  { value: "10+", label: "Projects delivered" },
  { value: "100%", label: "On-time delivery" },
  { value: "5★", label: "Client rating" },
  { value: "Free", label: "Initial consultation" },
];

const testimonials = [
  {
    initials: "SK",
    name: "Shiv K.",
    project: "Portfolio Website",
    projectLink: null as string | null,
    accent: "#38bdf8",
    glow: "rgba(56,189,248,0.15)",
    quote: "Delivered exactly what I wanted, fast and professional. The design looked better than I imagined.",
  },
  {
    initials: "MK",
    name: "Mr. Karan",
    project: "AI for Computer Centre",
    projectLink: null as string | null,
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.15)",
    quote: "The AI handles all our inquiries automatically now. Saves us hours every day. Highly recommended.",
  },
  {
    initials: "ME",
    name: "MACHMA Expo Team",
    project: "Exhibition Website",
    projectLink: "https://machmaexpo.com",
    accent: "#818cf8",
    glow: "rgba(129,140,248,0.15)",
    quote: "Full website built and deployed in days. Clean, fast, and works perfectly on all devices.",
  },
];

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Starting from ₹8,000 for a landing page, ₹15,000 for frontend development, and ₹35,000 for fullstack applications. Advanced features are scoped and quoted transparently.",
  },
  {
    q: "How long does it take to build?",
    a: "1–3 days for landing pages, 3–7 days for frontend projects, and 7–20 days for fullstack applications. We always give you a clear timeline before starting.",
  },
  {
    q: "Do you provide maintenance after delivery?",
    a: "Yes, we offer ongoing maintenance and support starting from ₹5,000/month. This covers bug fixes, updates, monitoring, and technical support.",
  },
  {
    q: "Can you build AI agents for my business?",
    a: "Yes. We build custom AI agents, WhatsApp bots, and website chatbots for customer support, lead generation, and business automation. Starting from ₹18,000.",
  },
  {
    q: "Is the initial consultation really free?",
    a: "100% free. No commitment required. We discuss your project, suggest the best solution, and give you a clear quote — all in a 30-minute call.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we work with clients globally. We accept UPI, bank transfer, PayPal, Wise, and international payment methods.",
  },
];

const serviceOptions = [
  "Frontend Development",
  "Backend Development",
  "AI & Automation",
  "Cloud & DevOps",
  "Database Systems",
  "SEO & Web Solutions",
  "Cyber Security",
  "Responsive Design",
  "Not sure yet",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
      <span
        style={{
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          padding: "6px 16px",
          borderRadius: 999,
          border: "1px solid var(--section-border)",
          background: "var(--section-bg)",
          color: "var(--section-text)",
        }}
      >
        {children}
      </span>
    </div>
  );
}

function ServiceCard({ s }: { s: (typeof services)[0] }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 20,
        border: "1px solid var(--border)",
        backgroundColor: "var(--bg-card)",
        backdropFilter: "blur(12px)",
        padding: 28,
        transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-6px)";
        el.style.boxShadow = `0 0 40px ${s.glow}`;
        el.style.borderColor = `${s.accent}55`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.borderColor = "var(--border)";
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `${s.accent}1a`,
          color: s.accent,
          marginBottom: 20,
        }}
      >
        {s.icon}
      </div>
      <h3 style={{ fontSize: "1rem", fontWeight: 900, marginBottom: 8, color: "var(--text-high)" }}>{s.title}</h3>
      <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.65, marginBottom: 12 }}>{s.desc}</p>
      <p
        style={{
          fontSize: "0.78rem",
          color: s.accent,
          fontWeight: 700,
          borderTop: "1px solid var(--border)",
          paddingTop: 12,
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <Check style={{ width: 14, height: 14 }} />
        {s.benefit}
      </p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderRadius: 16, border: "1px solid var(--border)", background: "var(--bg-card)", overflow: "hidden" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--text-high)",
          fontWeight: 700,
          fontSize: "0.9rem",
          textAlign: "left",
          gap: 12,
          fontFamily: "'Space Grotesk', ui-sans-serif",
        }}
      >
        {q}
        <ChevronDown
          style={{
            width: 18,
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
            color: "var(--accent)",
          }}
        />
      </button>
      {open && (
        <div
          style={{
            padding: "0 24px 20px",
            color: "var(--text-mid)",
            fontSize: "0.875rem",
            lineHeight: 1.7,
            borderTop: "1px solid var(--border)",
            paddingTop: 16,
          }}
        >
          {a}
        </div>
      )}
    </div>
  );
}

function ConsultationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    color: "var(--text-low)",
    marginBottom: 8,
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg-subtle)",
    border: "1px solid var(--border)",
    borderRadius: 12,
    padding: "12px 16px",
    fontSize: "0.875rem",
    color: "var(--text-high)",
    outline: "none",
    fontFamily: "'Space Grotesk', ui-sans-serif",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone) {
      return;
    }

    const message = [
      `Hi, I'd like a free consultation.`,
      `Name: ${name}`,
      email ? `Email: ${email}` : null,
      `Phone: ${phone}`,
      `Interested in: ${service}`,
      budget ? `Budget: ${budget}` : null,
      details ? `Details: ${details}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/9877873188?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noreferrer");
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        borderRadius: 24,
        border: "1px solid var(--border)",
        background: "var(--bg-card)",
        padding: "2.5rem",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
        <div>
          <label style={labelStyle}>Your Name</label>
          <div style={{ position: "relative" }}>
            <User style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", width: 15, height: 15, color: "var(--text-low)" }} />
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              style={{ ...inputStyle, paddingLeft: 38 }}
            />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Phone / WhatsApp</label>
          <div style={{ position: "relative" }}>
            <Phone style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", width: 15, height: 15, color: "var(--text-low)" }} />
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98778 73188"
              style={{ ...inputStyle, paddingLeft: 38 }}
            />
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
        <div>
          <label style={labelStyle}>Email (optional)</label>
          <div style={{ position: "relative" }}>
            <Mail style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", width: 15, height: 15, color: "var(--text-low)" }} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@company.com"
              style={{ ...inputStyle, paddingLeft: 38 }}
            />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Service Interested In</label>
          <div style={{ position: "relative" }}>
            <Briefcase style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", width: 15, height: 15, color: "var(--text-low)", pointerEvents: "none" }} />
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={{ ...inputStyle, paddingLeft: 38, appearance: "none", cursor: "pointer" }}
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", width: 15, height: 15, color: "var(--text-low)", pointerEvents: "none" }} />
          </div>
        </div>
      </div>

      <div>
        <label style={labelStyle}>Estimated Budget (optional)</label>
        <input
          type="text"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="e.g. ₹15,000 – ₹30,000"
          style={inputStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Project Details</label>
        <textarea
          rows={5}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Describe your business, current workflow, challenges, and the solution you're looking for."
          style={{ ...inputStyle, resize: "none" }}
        />
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          background: "linear-gradient(135deg,#38bdf8,#a78bfa)",
          color: "#fff",
          fontWeight: 800,
          padding: "16px 0",
          borderRadius: 14,
          border: "none",
          cursor: "pointer",
          fontFamily: "'Space Grotesk', ui-sans-serif",
          boxShadow: "0 4px 20px rgba(56,189,248,0.30)",
        }}
      >
        Get My Free Consultation
        <ArrowRight style={{ width: 16, height: 16 }} />
      </button>

      {submitted && (
        <p style={{ textAlign: "center", fontSize: "0.8rem", color: "var(--accent)" }}>
          Opening WhatsApp with your details — we usually reply within a few hours.
        </p>
      )}
    </form>
  );
}

export default function ServicesPage() {
  const dividerStyle = { borderTop: "1px solid var(--border)" };

  const ctaButtonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "linear-gradient(135deg,#38bdf8,#a78bfa)",
    color: "#fff",
    fontWeight: 800,
    padding: "14px 32px",
    borderRadius: 18,
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    fontFamily: "'Space Grotesk', ui-sans-serif",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg)",
        color: "var(--text-high)",
        fontFamily: "'Space Grotesk', ui-sans-serif",
        transition: "background-color 0.3s, color 0.3s",
        scrollBehavior: "smooth",
      }}
    >
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div style={{ position: "absolute", top: 0, left: "25%", width: 600, height: 600, borderRadius: "50%", background: "var(--ambient-a)", filter: "blur(120px)" }} />
        <div style={{ position: "absolute", bottom: "33%", right: "25%", width: 500, height: 500, borderRadius: "50%", background: "var(--ambient-b)", filter: "blur(100px)" }} />
        <div style={{ position: "absolute", top: "50%", left: 0, width: 300, height: 300, borderRadius: "50%", background: "var(--ambient-c)", filter: "blur(80px)" }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,var(--grid-color) 39px,var(--grid-color) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,var(--grid-color) 39px,var(--grid-color) 40px)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <section
          style={{
            position: "relative",
            padding: "9rem 4rem 7rem",
            textAlign: "center",
            borderBottom: "1px solid var(--border)",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: -80, right: -80, width: 500, height: 500, borderRadius: "50%", background: "var(--ambient-a)", filter: "blur(100px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -60, left: -60, width: 400, height: 400, borderRadius: "50%", background: "var(--ambient-c)", filter: "blur(80px)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto" }}>
            <SectionLabel>Premium Services</SectionLabel>

            <h1
              style={{
                fontSize: "clamp(2.8rem,8vw,5.2rem)",
                fontWeight: 900,
                lineHeight: 0.95,
                marginBottom: 24,
                letterSpacing: "-0.02em",
              }}
            >
              We build{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#38bdf8 0%,#67e8f9 45%,#a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                websites & AI systems
              </span>
              <br />
              that grow your business
            </h1>

            <div style={{ maxWidth: 420, margin: "0 auto 20px", textAlign: "left", display: "inline-block" }}>
              {["Fast delivery, honest pricing", "From landing pages to fullstack SaaS", "Real support after launch"].map((point, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <Check style={{ width: 18, color: "var(--accent)", flexShrink: 0 }} />
                  <span style={{ color: "var(--text-mid)", fontSize: "1rem" }}>{point}</span>
                </div>
              ))}
            </div>

            <p style={{ color: "var(--text-low)", marginBottom: 32, fontSize: "0.9rem" }}>
              Free consultation. Transparent pricing. No surprises.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <a
                href="https://wa.me/9877873188"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "linear-gradient(135deg,#38bdf8,#a78bfa)",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 14,
                  padding: "14px 28px",
                  borderRadius: 18,
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(56,189,248,0.25)",
                }}
              >
                <MessageCircle style={{ width: 16, height: 16 }} />
                Chat on WhatsApp
              </a>
              <a
                href="#consultation"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  border: "1px solid var(--border)",
                  background: "transparent",
                  color: "var(--text-mid)",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "14px 28px",
                  borderRadius: 18,
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <Phone style={{ width: 16, height: 16 }} />
                Book a Free Call
              </a>
              <a
                href="mailto:shubsem34@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  border: "1px solid var(--border)",
                  background: "transparent",
                  color: "var(--text-mid)",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "14px 28px",
                  borderRadius: 18,
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <Mail style={{ width: 16, height: 16 }} />
                Send an Email
              </a>
            </div>
          </div>
        </section>

        <section style={{ padding: "6rem 4rem" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionLabel>What We Build</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: 12 }}>
                Services built{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg,#38bdf8,#a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  for results
                </span>
              </h2>
              <p style={{ color: "var(--text-mid)" }}>Every service is focused on one thing — growing your business faster.</p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
                gap: 20,
              }}
            >
              {services.map((s, i) => (
                <ServiceCard key={i} s={s} />
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a href="#consultation" style={ctaButtonStyle}>
                Book a Free Consultation <ArrowRight style={{ width: 16 }} />
              </a>
            </div>
          </div>
        </section>

        <section style={{ padding: "6rem 4rem", ...dividerStyle, backgroundColor: "var(--bg-subtle)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <SectionLabel>Transparent Pricing</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: 12 }}>
                Starting prices,{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg,#38bdf8,#a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  no surprises
                </span>
              </h2>
              <p style={{ color: "var(--text-mid)" }}>
                All prices are starting rates. Advanced features are scoped and quoted honestly before we begin.
              </p>
            </div>

            <div
              style={{
                borderRadius: 24,
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto auto",
                  background: "var(--table-head)",
                  borderBottom: "1px solid var(--border)",
                  padding: "16px 28px",
                  gap: 16,
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.2em", color: "var(--text-low)", textTransform: "uppercase" }}>Service</span>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.2em", color: "var(--text-low)", textTransform: "uppercase", textAlign: "center", minWidth: 120 }}>Starting Price</span>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.2em", color: "var(--text-low)", textTransform: "uppercase", textAlign: "right", minWidth: 100 }}>Delivery</span>
              </div>

              {pricing.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto auto",
                    alignItems: "center",
                    padding: "20px 28px",
                    gap: 16,
                    borderBottom: i < pricing.length - 1 ? "1px solid var(--border)" : "none",
                    background: i % 2 !== 0 ? "var(--row-alt)" : "transparent",
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>{item.name}</span>
                  <div style={{ textAlign: "center", minWidth: 120 }}>
                    <span
                      style={{
                        background: "linear-gradient(135deg,#38bdf8,#a78bfa)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: 900,
                        fontSize: "1.15rem",
                      }}
                    >
                      ₹{item.price.toLocaleString()}
                    </span>
                    <span style={{ color: "var(--text-low)", fontSize: "0.75rem", marginLeft: 4 }}>
                      {item.perMonth ? "/mo" : ""}
                    </span>
                  </div>
                  <div style={{ textAlign: "right", minWidth: 100 }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        padding: "4px 12px",
                        borderRadius: 999,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        background: "rgba(56,189,248,0.10)",
                        border: "1px solid rgba(56,189,248,0.20)",
                        color: "var(--accent)",
                      }}
                    >
                      <Clock style={{ width: 11, height: 11 }} />
                      {item.delivery}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ textAlign: "center", color: "var(--text-low)", marginTop: 14, fontSize: "0.82rem" }}>
              Advanced features and custom projects are scoped and quoted transparently before we begin.
            </p>

            <div style={{ textAlign: "center", marginTop: 32 }}>
              <a href="#consultation" style={ctaButtonStyle}>
                Get a Custom Quote <ArrowRight style={{ width: 16 }} />
              </a>
            </div>
          </div>
        </section>

        <section id="consultation" style={{ padding: "6rem 4rem", ...dividerStyle, scrollMarginTop: "2rem" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <SectionLabel>Free Consultation</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: 12 }}>
                Tell us about{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg,#38bdf8,#a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  your project
                </span>
              </h2>
              <p style={{ color: "var(--text-mid)" }}>
                Fill this out and we'll reach you on WhatsApp with a plan and a clear quote — usually within a few hours.
              </p>
            </div>

            <ConsultationForm />
          </div>
        </section>

        <section style={{ padding: "6rem 4rem", ...dividerStyle }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionLabel>How It Works</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: 12 }}>
                From idea to launch{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg,#38bdf8,#a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  in 3 steps
                </span>
              </h2>
              <p style={{ color: "var(--text-mid)" }}>Simple, transparent process so you always know exactly what happens next.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
              {steps.map((s, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: 20,
                    border: "1px solid var(--border)",
                    background: "var(--bg-card)",
                    padding: 28,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: -10,
                      right: -5,
                      fontSize: "7rem",
                      fontWeight: 900,
                      lineHeight: 1,
                      background: "linear-gradient(135deg,#38bdf8,#a78bfa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      opacity: 0.07,
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  >
                    {s.num}
                  </span>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(56,189,248,0.10)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "0.9rem", marginBottom: 20 }}>
                    {s.num}
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 900, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "6rem 4rem", ...dividerStyle, backgroundColor: "var(--bg-subtle)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionLabel>Proof & Stats</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: 12 }}>
                Real projects,{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg,#38bdf8,#a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  real results
                </span>
              </h2>
              <p style={{ color: "var(--text-mid)" }}>Numbers and words from clients we've worked with.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16, marginBottom: 32 }}>
              {stats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: 20,
                    border: "1px solid var(--border)",
                    background: "var(--bg-card)",
                    padding: "28px 20px",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "2rem", fontWeight: 900, background: "linear-gradient(135deg,#38bdf8,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 4 }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-low)" }}>{s.label}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: 20,
                    border: "1px solid var(--border)",
                    background: "var(--bg-card)",
                    padding: 28,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.8rem",
                        fontWeight: 900,
                        background: `${t.accent}1a`,
                        color: t.accent,
                        flexShrink: 0,
                      }}
                    >
                      {t.initials}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: "0.9rem", fontWeight: 700 }}>{t.name}</p>
                      <p style={{ fontSize: "0.75rem", color: "var(--text-low)" }}>{t.project}</p>
                      {t.projectLink ? (
                        <a href={t.projectLink} target="_blank" rel="noreferrer" style={{ color: t.accent, textDecoration: "none" }}>
                          Visit project
                        </a>
                      ) : null}
                    </div>
                  </div>
                  <div style={{ color: "#fbbf24", fontSize: "0.85rem" }}>★★★★★</div>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.7 }}>{t.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "6rem 4rem" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionLabel>FAQ</SectionLabel>
              <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: 12 }}>
                Common questions{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg,#38bdf8,#a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  answered
                </span>
              </h2>
              <p style={{ color: "var(--text-mid)" }}>Still have questions? Just message us — we reply fast.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {faqs.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "7rem 4rem", ...dividerStyle, backgroundColor: "var(--bg-subtle)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div
              style={{
                position: "relative",
                borderRadius: 32,
                border: "1px solid rgba(56,189,248,0.20)",
                background: "linear-gradient(135deg,rgba(56,189,248,0.06),rgba(167,139,250,0.04),var(--bg-card))",
                padding: "5rem 3rem",
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 400, height: 200, background: "radial-gradient(ellipse,rgba(56,189,248,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <Rocket style={{ width: 36, height: 36, color: "var(--accent)", margin: "0 auto 24px", display: "block" }} />
                <SectionLabel>Start Today</SectionLabel>
                <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20, marginTop: 8 }}>
                  Let's build your next{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg,#38bdf8,#a78bfa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    big project together
                  </span>
                </h2>
                <p style={{ color: "var(--text-mid)", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 }}>
                  Free consultation. Honest pricing. Fast delivery. No surprises.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
                  <a href="#consultation" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#38bdf8,#a78bfa)", color: "#fff", fontWeight: 800, fontSize: 15, padding: "16px 32px", borderRadius: 18, border: "none", cursor: "pointer", textDecoration: "none", boxShadow: "0 4px 20px rgba(56,189,248,0.30)" }}>
                    <MessageCircle style={{ width: 18, height: 18 }} />
                    Get Free Consultation
                  </a>
                  <a href="mailto:shubsem34@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", borderRadius: 18, border: "1px solid var(--border)", background: "transparent", fontWeight: 700, color: "var(--text-mid)", cursor: "pointer", textDecoration: "none" }}>
                    <Mail style={{ width: 18, height: 18 }} />
                    Send an Email
                  </a>
                  <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", borderRadius: 18, border: "1px solid var(--border)", background: "transparent", fontWeight: 700, color: "var(--text-mid)", cursor: "pointer", textDecoration: "none" }}>
                    <Rocket style={{ width: 18, height: 18 }} />
                    Start Your Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}