"use client";

import {
  ArrowRight, CheckCircle2, ChevronDown, MessageCircle,
  Bot, Globe, Cloud, TrendingUp, Users, Clock, DollarSign,
  Activity, Zap, Shield, Star, ExternalLink,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const FILTERS = ["All", "AI & Automation", "Web Development", "Cloud & DevOps"];

const GLOBAL_STATS = [
  { label: "Projects Completed", value: "200+", icon: <CheckCircle2 className="w-5 h-5" /> },
  { label: "Cost Saved for Clients", value: "₹50L+", icon: <DollarSign className="w-5 h-5" /> },
  { label: "Time Saved / Month", value: "5,000+ hrs", icon: <Clock className="w-5 h-5" /> },
  { label: "Average Client ROI", value: "3–5×", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Customer Satisfaction", value: "98%", icon: <Star className="w-5 h-5" /> },
  { label: "On-Time Delivery", value: "95%", icon: <Activity className="w-5 h-5" /> },
];

const CASE_STUDIES = [
  /* ── AI ── */
  {
    id: "ai-customer-support",
    category: "AI & Automation",
    industry: "SaaS",
    accent: "#22d3ee",
    glow: "rgba(34,211,238,0.15)",
    icon: <Bot className="w-6 h-6" />,
    title: "AI Customer Support Automation",
    tagline: "70% reduction in support workload for a SaaS platform.",
    client: "SaaS Platform (5,000+ monthly users)",
    challenge: "Support team was overwhelmed with 1,000+ repeated queries/month, causing slow response times and customer churn.",
    solution: "Built an AI chatbot deployed on website + WhatsApp with 24/7 automated responses, ticket routing, and escalation logic.",
    stack: ["AI Agent", "WhatsApp API", "Node.js", "MongoDB"],
    timeline: "12 days",
    budget: "₹18,000",
    metrics: [
      { label: "Support Tickets", before: "1,000/mo", after: "300/mo" },
      { label: "Response Time", before: "2 hours", after: "<1 second" },
      { label: "Team Size Needed", before: "5 people", after: "2 people" },
      { label: "Customer Satisfaction", before: "75%", after: "98%" },
      { label: "Manual Work", before: "30h/week", after: "8h/week" },
    ],
    testimonial: {
      quote: "The AI chatbot reduced our support workload by 70% and our customers love the instant responses. Best investment we've made this year.",
      name: "Rahul Sharma",
      role: "CTO, SaaS Platform",
    },
  },
  {
    id: "whatsapp-ecommerce-bot",
    category: "AI & Automation",
    industry: "Ecommerce",
    accent: "#34d399",
    glow: "rgba(52,211,153,0.15)",
    icon: <Bot className="w-6 h-6" />,
    title: "WhatsApp AI Bot for Ecommerce",
    tagline: "Automated order tracking, returns, and product discovery on WhatsApp.",
    client: "Fashion Retail Brand (10,000+ orders/month)",
    challenge: "Customer queries about order status and returns were flooding the support inbox, with a 4-hour average response time.",
    solution: "WhatsApp AI bot integrated with the order management system, giving real-time tracking, return initiation, and product recommendations.",
    stack: ["WhatsApp Business API", "OpenAI", "Node.js", "MySQL"],
    timeline: "10 days",
    budget: "₹15,000",
    metrics: [
      { label: "Avg Response Time", before: "4 hours", after: "Instant" },
      { label: "Support Emails/day", before: "200", after: "30" },
      { label: "Return Processing", before: "3 days", after: "Same day" },
      { label: "Customer Rating", before: "3.2 / 5", after: "4.8 / 5" },
      { label: "Repeat Purchase Rate", before: "22%", after: "41%" },
    ],
    testimonial: {
      quote: "Customers now get instant order updates on WhatsApp. Support load dropped overnight and repeat sales jumped.",
      name: "Priya Mehta",
      role: "Operations Head, Fashion Brand",
    },
  },
  {
    id: "ai-voice-clinic",
    category: "AI & Automation",
    industry: "Healthcare",
    accent: "#f87171",
    glow: "rgba(248,113,113,0.15)",
    icon: <Bot className="w-6 h-6" />,
    title: "AI Voice Booking Bot for Clinic",
    tagline: "Automated appointment booking and reminders, cutting no-shows by 60%.",
    client: "Multi-specialty Clinic (300+ appointments/month)",
    challenge: "Receptionist spent 5+ hours/day on phone bookings. No-show rate was 35%, costing ₹80,000/month in lost revenue.",
    solution: "AI voice bot for appointment booking via phone + WhatsApp, automated SMS/WhatsApp reminders 24h and 1h before appointments.",
    stack: ["Twilio Voice", "OpenAI Whisper", "Node.js", "PostgreSQL"],
    timeline: "14 days",
    budget: "₹20,000",
    metrics: [
      { label: "No-Show Rate", before: "35%", after: "14%" },
      { label: "Receptionist Hours/day", before: "5 hours", after: "1 hour" },
      { label: "Booking Errors", before: "15/month", after: "0/month" },
      { label: "Revenue Lost to No-Shows", before: "₹80k/mo", after: "₹30k/mo" },
      { label: "Patient Satisfaction", before: "72%", after: "94%" },
    ],
    testimonial: {
      quote: "The bot handles 90% of our bookings now. No-shows dropped dramatically and our receptionist finally has time to focus on patients.",
      name: "Dr. Ankit Verma",
      role: "Director, Multi-specialty Clinic",
    },
  },
  /* ── WEB ── */
  {
    id: "scalable-web-platform",
    category: "Web Development",
    industry: "SaaS",
    accent: "#38bdf8",
    glow: "rgba(56,189,248,0.15)",
    icon: <Globe className="w-6 h-6" />,
    title: "Scalable Web Platform",
    tagline: "From 200K to 1M+ monthly visitors with zero downtime.",
    client: "B2B SaaS Platform (Next.js, TypeScript)",
    challenge: "Legacy React app was slow, crashing under load spikes, and had a PageSpeed score of 45. Losing users to competitors.",
    solution: "Full rebuild with Next.js App Router, server components, edge caching, and a redesigned PostgreSQL schema with indexed queries.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Vercel Edge", "Redis"],
    timeline: "21 days",
    budget: "₹45,000",
    metrics: [
      { label: "Load Time", before: "4.2s", after: "0.7s" },
      { label: "Monthly Visitors", before: "200K", after: "1M+" },
      { label: "Bounce Rate", before: "65%", after: "28%" },
      { label: "Google PageSpeed", before: "45", after: "92" },
      { label: "Conversion Rate", before: "1.2%", after: "3.8%" },
    ],
    testimonial: {
      quote: "Our platform is unrecognizable. Load times went from painful to instant, and we're handling 5× more traffic without breaking a sweat.",
      name: "Vikram Nair",
      role: "Founder, B2B SaaS Platform",
    },
  },
  {
    id: "ecommerce-fashion",
    category: "Web Development",
    industry: "Ecommerce",
    accent: "#f472b6",
    glow: "rgba(244,114,182,0.15)",
    icon: <Globe className="w-6 h-6" />,
    title: "Ecommerce Store for Fashion Brand",
    tagline: "Custom Shopify + headless CMS with 40% higher conversion.",
    client: "D2C Fashion Brand (5,000+ SKUs)",
    challenge: "Default Shopify theme was slow, not mobile-optimised, and had a clunky checkout losing 70% of mobile users at cart.",
    solution: "Headless Shopify with Next.js frontend, custom product recommendation engine, streamlined 2-step mobile checkout.",
    stack: ["Next.js", "Shopify Storefront API", "Sanity CMS", "Stripe"],
    timeline: "18 days",
    budget: "₹38,000",
    metrics: [
      { label: "Mobile Bounce Rate", before: "68%", after: "29%" },
      { label: "Checkout Completion", before: "22%", after: "61%" },
      { label: "Avg Order Value", before: "₹1,200", after: "₹1,850" },
      { label: "Page Load (Mobile)", before: "5.1s", after: "1.1s" },
      { label: "Monthly Revenue", before: "₹4.2L", after: "₹7.8L" },
    ],
    testimonial: {
      quote: "Sales nearly doubled after launch. The mobile checkout is silky smooth and customers actually complete their purchases now.",
      name: "Sneha Kapoor",
      role: "Founder, Fashion Brand",
    },
  },
  {
    id: "crm-dashboard-bpo",
    category: "Web Development",
    industry: "BPO",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.15)",
    icon: <Globe className="w-6 h-6" />,
    title: "CRM Dashboard for BPO Company",
    tagline: "Saved 15+ hours/week with a real-time React + TypeScript dashboard.",
    client: "BPO Company (200+ agents, 3 departments)",
    challenge: "Managers pulled data from 4 separate Excel sheets to compile weekly reports — 15+ hours of manual work every week.",
    solution: "Centralised React + TypeScript dashboard with live agent metrics, role-based access, and automated PDF report generation.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
    timeline: "16 days",
    budget: "₹32,000",
    metrics: [
      { label: "Manual Reporting Hours", before: "15h/week", after: "0h/week" },
      { label: "Report Generation Time", before: "3 hours", after: "1 click" },
      { label: "Data Accuracy", before: "84%", after: "100%" },
      { label: "Manager Satisfaction", before: "61%", after: "96%" },
      { label: "Escalation Response Time", before: "45 min", after: "8 min" },
    ],
    testimonial: {
      quote: "We got back 15 hours a week immediately. The dashboard is exactly what we needed — live data, clean design, and no more spreadsheet nightmares.",
      name: "Amit Desai",
      role: "Operations Manager, BPO Company",
    },
  },
  /* ── CLOUD ── */
  {
    id: "cloud-migration-enterprise",
    category: "Cloud & DevOps",
    industry: "Enterprise",
    accent: "#22d3ee",
    glow: "rgba(34,211,238,0.15)",
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Infrastructure Migration",
    tagline: "Zero-downtime migration from on-prem to AWS, cutting infra costs by 50%.",
    client: "Enterprise Client (50+ servers, 3 offices)",
    challenge: "On-prem servers required expensive maintenance, had 5+ hours downtime/month, and couldn't scale during traffic peaks.",
    solution: "Phased migration to AWS (EC2, RDS, S3, CloudFront), with Terraform IaC, auto-scaling groups, and multi-AZ setup.",
    stack: ["AWS", "Terraform", "Docker", "GitHub Actions", "Datadog"],
    timeline: "30 days",
    budget: "₹60,000",
    metrics: [
      { label: "Monthly Downtime", before: "5 hrs", after: "0 hrs" },
      { label: "Infrastructure Cost", before: "₹80k/mo", after: "₹40k/mo" },
      { label: "Deployment Time", before: "3 hours", after: "8 minutes" },
      { label: "Traffic Capacity", before: "10K users", after: "100K users" },
      { label: "Mean Recovery Time", before: "45 min", after: "Auto-heal" },
    ],
    testimonial: {
      quote: "Moving to AWS with their help was seamless. Zero downtime and our costs dropped by 50%. We wish we'd done it sooner.",
      name: "Priya Mehta",
      role: "Operations Lead, Enterprise Client",
    },
  },
  {
    id: "cicd-pipeline-startup",
    category: "Cloud & DevOps",
    industry: "Startup",
    accent: "#34d399",
    glow: "rgba(52,211,153,0.15)",
    icon: <Cloud className="w-6 h-6" />,
    title: "CI/CD Pipeline Setup for Startup",
    tagline: "Deployments went from 2 hours of manual work to 8 minutes, fully automated.",
    client: "Early-stage SaaS Startup (8-person team)",
    challenge: "Deployments were manual, error-prone, and took the CTO 2+ hours. Production bugs from untested code were costing clients.",
    solution: "Full CI/CD pipeline with GitHub Actions: automated testing, Docker builds, staging environment, and one-click production deploys.",
    stack: ["GitHub Actions", "Docker", "AWS ECS", "Jest", "Slack Alerts"],
    timeline: "7 days",
    budget: "₹15,000",
    metrics: [
      { label: "Deployment Time", before: "2 hours", after: "8 minutes" },
      { label: "Manual Steps", before: "22 steps", after: "0 steps" },
      { label: "Production Bugs/month", before: "12", after: "2" },
      { label: "CTO Time on Deploys", before: "10h/week", after: "0h/week" },
      { label: "Deploy Frequency", before: "1×/week", after: "5×/week" },
    ],
    testimonial: {
      quote: "I went from dreading every deployment to not even thinking about it. The pipeline just works, and our bug rate dropped instantly.",
      name: "Karthik Rao",
      role: "CTO, SaaS Startup",
    },
  },
  {
    id: "kubernetes-high-traffic",
    category: "Cloud & DevOps",
    industry: "Ecommerce",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.15)",
    icon: <Cloud className="w-6 h-6" />,
    title: "Kubernetes for High-Traffic App",
    tagline: "Auto-scaling setup that handled a 10× traffic spike without intervention.",
    client: "Flash-sale Ecommerce Platform (500K daily users at peak)",
    challenge: "Manual server scaling during sales events caused crashes. A major flash sale resulted in 3 hours of downtime and ₹12L lost revenue.",
    solution: "Kubernetes cluster on AWS EKS with HPA (Horizontal Pod Autoscaler), custom metrics scaling, and PodDisruptionBudgets for zero-downtime.",
    stack: ["Kubernetes", "AWS EKS", "Helm", "Prometheus", "Grafana"],
    timeline: "20 days",
    budget: "₹50,000",
    metrics: [
      { label: "Peak Traffic Handled", before: "50K users", after: "500K users" },
      { label: "Scale-up Time", before: "25 min manual", after: "90 sec auto" },
      { label: "Last Flash Sale Downtime", before: "3 hours", after: "0 minutes" },
      { label: "Infra Cost During Sale", before: "₹40k", after: "₹18k" },
      { label: "Ops Team Intervention", before: "Required", after: "Not needed" },
    ],
    testimonial: {
      quote: "Our last sale had 10× our normal traffic and the system just scaled up automatically. Zero downtime, zero stress. Incredible.",
      name: "Rohan Gupta",
      role: "Head of Engineering, Ecommerce Platform",
    },
  },
];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = activeFilter === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.category === activeFilter);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg)", color: "var(--text)", transition: "background-color 0.3s, color 0.3s", overflow: "hidden" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", padding: "10rem 4rem 8rem", textAlign: "center", borderBottom: "1px solid var(--border)", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -120, right: -120, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle,rgba(34,211,238,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -120, left: -120, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,rgba(52,211,153,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none", backgroundImage: "radial-gradient(circle,rgba(34,211,238,1) 1px,transparent 1px)", backgroundSize: "42px 42px" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", borderRadius: 999, border: "1px solid rgba(34,211,238,0.35)", background: "rgba(34,211,238,0.1)", marginBottom: 36 }}>
            <TrendingUp style={{ width: 14, height: 14, color: "#22d3ee" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", color: "#22d3ee" }}>CASE STUDIES</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.4rem,7vw,4.8rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: 24 }}>
            Real Results for{" "}
            <span style={{ background: "linear-gradient(135deg,#22d3ee 0%,#38bdf8 50%,#34d399 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Real Businesses
            </span>
          </h1>

          <div style={{ maxWidth: 580, margin: "0 auto 24px", textAlign: "left", display: "inline-block" }}>
            {[
              "Cut support costs by 70% with AI chatbots",
              "Handle 1M+ monthly visitors with fast web platforms",
              "Migrate to cloud with 99.99% uptime and zero downtime",
            ].map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <CheckCircle2 style={{ color: "#34d399", width: 18, flexShrink: 0 }} />
                <span style={{ color: "var(--text-muted)", fontSize: "1rem" }}>{p}</span>
              </div>
            ))}
          </div>

          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: 36 }}>Verified results from real projects.</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            <button style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 16, background: "linear-gradient(135deg,#22d3ee,#34d399)", color: "#0f172a", fontWeight: 800, border: "none", cursor: "pointer", fontSize: "0.9rem" }}>
              Start Your Project <ArrowRight className="w-4 h-4" />
            </button>
            <button style={{ padding: "14px 28px", borderRadius: 16, fontWeight: 700, border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text-muted)", cursor: "pointer", fontSize: "0.9rem" }}>
              See All Case Studies ↓
            </button>
          </div>
        </div>
      </section>

      {/* ── GLOBAL STATS ── */}
      <section style={{ padding: "4rem", borderBottom: "1px solid var(--border)", background: "var(--bg-subtle)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 20 }}>
          {GLOBAL_STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "20px 12px", borderRadius: 16, border: "1px solid var(--border)", background: "var(--bg-card)" }}>
              <div style={{ color: "#22d3ee", display: "flex", justifyContent: "center", marginBottom: 10 }}>{s.icon}</div>
              <div style={{ fontSize: "1.6rem", fontWeight: 900, background: "linear-gradient(135deg,#22d3ee,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 600, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section style={{ padding: "3rem 4rem 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: "10px 22px",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: "0.85rem",
                border: "1px solid",
                cursor: "pointer",
                transition: "all 0.2s",
                borderColor: activeFilter === f ? "#22d3ee" : "var(--border)",
                background: activeFilter === f ? "rgba(34,211,238,0.12)" : "var(--bg-card)",
                color: activeFilter === f ? "#22d3ee" : "var(--text-muted)",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* ── CASE STUDY CARDS ── */}
      <section style={{ padding: "3rem 4rem 6rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
          {filtered.map((cs) => (
            <div key={cs.id}>
              <CaseStudyCard cs={cs} expanded={expandedId === cs.id} onToggle={() => setExpandedId(expandedId === cs.id ? null : cs.id)} />

              {/* ── INLINE CTA after each card ── */}
              {expandedId === cs.id && (
                <div style={{ marginTop: 16, borderRadius: 20, border: "1px solid var(--border)", background: "var(--bg-subtle)", padding: "28px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: "1rem", marginBottom: 4 }}>Want similar results for your business?</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>We can build the same solutions tailored to your needs.</p>
                  </div>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <button style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 14, background: `linear-gradient(135deg,${cs.accent},#34d399)`, color: "#0f172a", fontWeight: 800, border: "none", cursor: "pointer", fontSize: "0.85rem" }}>
                      Start Your Project <ArrowRight className="w-4 h-4" />
                    </button>
                    <button style={{ padding: "12px 24px", borderRadius: 14, border: "1px solid var(--border)", background: "transparent", fontWeight: 700, color: "var(--text-muted)", cursor: "pointer", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: 8 }}>
                      <MessageCircle className="w-4 h-4" /> Chat with Us
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "7rem 4rem", borderTop: "1px solid var(--border)", background: "var(--bg-subtle)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", borderRadius: 32, border: "1px solid var(--border)", background: "var(--bg-card)", padding: "5rem 3rem" }}>
          <TrendingUp style={{ width: 32, height: 32, margin: "0 auto 24px", color: "#22d3ee" }} />
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900, marginBottom: 16 }}>
            Ready to be our next{" "}
            <span style={{ background: "linear-gradient(135deg,#22d3ee,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              success story?
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.7 }}>
            From AI automation to web platforms and cloud infrastructure — we deliver results that matter to your business.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <button style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", borderRadius: 16, background: "linear-gradient(135deg,#22d3ee,#34d399)", border: "none", fontWeight: 800, color: "#0f172a", cursor: "pointer" }}>
              Start Your Project <ArrowRight className="w-4 h-4" />
            </button>
            <button style={{ padding: "16px 32px", borderRadius: 16, border: "1px solid var(--border)", background: "transparent", fontWeight: 700, color: "var(--text-muted)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <MessageCircle className="w-4 h-4" /> Get a Free Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── CASE STUDY CARD ── */
function CaseStudyCard({ cs, expanded, onToggle }: { cs: typeof CASE_STUDIES[0]; expanded: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderRadius: 24, border: `1px solid ${expanded ? cs.accent + "55" : "var(--border)"}`, background: "var(--bg-card)", overflow: "hidden", transition: "border-color 0.3s, box-shadow 0.3s", boxShadow: expanded ? `0 0 48px ${cs.glow}` : "none" }}>

      {/* Card Header (always visible) */}
      <div style={{ padding: "28px 32px", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "flex-start", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flex: 1, minWidth: 260 }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: `${cs.accent}1a`, color: cs.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{cs.icon}</div>
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
              <span style={{ fontSize: "0.72rem", padding: "3px 10px", borderRadius: 999, background: `${cs.accent}18`, color: cs.accent, fontWeight: 700 }}>{cs.category}</span>
              <span style={{ fontSize: "0.72rem", padding: "3px 10px", borderRadius: 999, border: "1px solid var(--border)", color: "var(--text-muted)", fontWeight: 600 }}>{cs.industry}</span>
            </div>
            <h3 style={{ fontWeight: 900, fontSize: "1.15rem", color: "var(--text)", marginBottom: 6 }}>{cs.title}</h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{cs.tagline}</p>
          </div>
        </div>

        {/* Quick stats row */}
        <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 600 }}>Timeline</div>
            <div style={{ fontWeight: 800, color: cs.accent, fontSize: "0.9rem" }}>{cs.timeline}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 600 }}>Budget</div>
            <div style={{ fontWeight: 800, color: cs.accent, fontSize: "0.9rem" }}>{cs.budget}</div>
          </div>
          <button
            onClick={onToggle}
            style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", borderRadius: 12, border: `1px solid ${cs.accent}55`, background: `${cs.accent}10`, color: cs.accent, fontWeight: 700, fontSize: "0.82rem", cursor: "pointer" }}
          >
            {expanded ? "Hide Details" : "View Full Case Study"}
            <ChevronDown style={{ width: 15, transform: expanded ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }} />
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div style={{ borderTop: "1px solid var(--border)", padding: "32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 28, marginBottom: 32 }}>

            {/* Challenge + Solution */}
            <div>
              <h4 style={{ fontWeight: 800, color: "#f87171", marginBottom: 10, fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Challenge</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 24 }}>{cs.challenge}</p>

              <h4 style={{ fontWeight: 800, color: cs.accent, marginBottom: 10, fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Solution</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 24 }}>{cs.solution}</p>

              <h4 style={{ fontWeight: 800, color: "var(--text-muted)", marginBottom: 10, fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Tech Stack</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cs.stack.map((t, i) => (
                  <span key={i} style={{ fontSize: "0.78rem", padding: "4px 12px", borderRadius: 999, border: "1px solid var(--border)", color: "var(--text-muted)", fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h4 style={{ fontWeight: 800, color: "#34d399", marginBottom: 14, fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Before → After Results</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {cs.metrics.map((m, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderRadius: 12, background: "var(--bg-subtle)", border: "1px solid var(--border)", gap: 12, flexWrap: "wrap" }}>
                    <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text)" }}>{m.label}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: "0.82rem", color: "#f87171", textDecoration: "line-through", opacity: 0.8 }}>{m.before}</span>
                      <ArrowRight style={{ width: 14, color: "#34d399" }} />
                      <span style={{ fontSize: "0.85rem", fontWeight: 800, background: "linear-gradient(135deg,#22d3ee,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{m.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div style={{ borderRadius: 16, border: `1px solid ${cs.accent}33`, background: `${cs.accent}08`, padding: "24px 28px" }}>
            <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
              {[...Array(5)].map((_, i) => <Star key={i} style={{ width: 16, color: "#fbbf24", fill: "#fbbf24" }} />)}
            </div>
            <p style={{ color: "var(--text-muted)", fontStyle: "italic", lineHeight: 1.7, marginBottom: 16, fontSize: "0.92rem" }}>
              "{cs.testimonial.quote}"
            </p>
            <div>
              <div style={{ fontWeight: 800, fontSize: "0.875rem", color: "var(--text)" }}>{cs.testimonial.name}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{cs.testimonial.role}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}