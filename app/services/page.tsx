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
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Frontend Development",
    desc: "Modern UI using React.js, Next.js, Angular and Tailwind CSS.",
    benefit: "Converts visitors into customers",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Backend Development",
    desc: "Scalable backend systems using Node.js, Express and Python.",
    benefit: "Handles thousands of users reliably",
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "AI & Automation",
    desc: "AI agents, chatbots, WhatsApp bots and automation systems.",
    benefit: "Saves 10+ hours of work per week",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud & DevOps",
    desc: "AWS deployment, CI/CD pipelines and cloud infrastructure.",
    benefit: "99.9% uptime, zero downtime deploys",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Database Systems",
    desc: "MongoDB, PostgreSQL, MySQL and optimised database design.",
    benefit: "Fast queries at any scale",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "SEO & Web Solutions",
    desc: "SEO optimisation, domains, hosting and web management.",
    benefit: "More organic traffic, higher rankings",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Cyber Security",
    desc: "Secure APIs, authentication systems and server protection.",
    benefit: "Your data stays fully protected",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Responsive Design",
    desc: "Mobile-first responsive websites and UX-focused design.",
    benefit: "Great experience on every device",
  },
];

const pricing = [
  { name: "Landing Page",         price: "₹8,000",  delivery: "1–3 Days" },
  { name: "Frontend Development", price: "₹15,000", delivery: "3–7 Days" },
  { name: "Fullstack Application",price: "₹35,000", delivery: "7–20 Days" },
  { name: "AI Agent",             price: "₹20,000", delivery: "5–15 Days" },
  { name: "WhatsApp AI Bot",      price: "₹18,000", delivery: "4–10 Days" },
  { name: "Ecommerce Website",    price: "₹30,000", delivery: "7–15 Days" },
  { name: "SaaS Platform",        price: "₹60,000", delivery: "15–45 Days" },
  { name: "Maintenance Support",  price: "₹5,000",  delivery: "Ongoing", perMonth: true },
];

const steps = [
  {
    num: "1",
    title: "Discovery Call",
    desc: "We understand your goals, requirements, and budget. Free, no commitment, 30 minutes.",
  },
  {
    num: "2",
    title: "Build & Test",
    desc: "We develop your solution, keep you updated, and test everything thoroughly before delivery.",
  },
  {
    num: "3",
    title: "Launch & Support",
    desc: "We deploy your project live and provide ongoing support so nothing breaks after launch.",
  },
];

const stats = [
  { value: "10+",   label: "Projects delivered" },
  { value: "100%",  label: "On-time delivery" },
  { value: "5★",    label: "Client rating" },
  { value: "Free",  label: "Initial consultation" },
];

const testimonials = [
  {
    initials: "SK",
    name: "Shiv K.",
    project: "Portfolio Website",
    color: "sky",
    quote:
      "Delivered exactly what I wanted, fast and professional. The design looked better than I imagined.",
  },
  {
    initials: "MK",
    name: "Mr. Karan",
    project: "AI for Computer Centre",
    color: "violet",
    quote:
      "The AI handles all our inquiries automatically now. Saves us hours every day. Highly recommended.",
  },
  {
    initials: "ME",
    name: "MACHMA Expo Team",
    project: "Exhibition Website",
    projectLink: "https://machmaexpo.com",
    color: "indigo",
    quote:
      "Full website built and deployed in days. Clean, fast, and works perfectly on all devices. Exactly what our expo needed.",
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

// ─── COLOUR HELPERS ───────────────────────────────────────────────────────────

const avatarColor: Record<string, string> = {
  sky:    "bg-sky-400/10 text-sky-400",
  violet: "bg-violet-400/10 text-violet-400",
  indigo: "bg-indigo-400/10 text-indigo-400",
};

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-4 py-1.5 text-xs tracking-widest rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 mb-4">
      {children}
    </span>
  );
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function CTAButton({
  href,
  variant = "primary",
  icon,
  children,
}: {
  href: string;
  variant?: "primary" | "outline";
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-95";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-sky-400 to-violet-500 text-white hover:opacity-90 shadow-lg shadow-sky-400/20"
      : "border border-sky-400/40 text-sky-400 hover:bg-sky-400/10";

  return (
    <a href={href} className={`${base} ${styles}`} target="_blank" rel="noreferrer">
      {icon}
      {children}
    </a>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--border)] py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left gap-4 group"
      >
        <span className="text-base font-medium group-hover:text-sky-400 transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[var(--muted)] shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed pr-8">
          {a}
        </p>
      )}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main className="min-h-screen transition-colors duration-300 overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative px-6 md:px-16 py-28 text-center border-b border-[var(--border)] overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-sky-400/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-400/20 blur-3xl rounded-full pointer-events-none" />

        <SectionBadge>PREMIUM SERVICES</SectionBadge>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          We build{" "}
          <GradientText>websites, AI systems</GradientText>
          <br />
          that grow your business
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--muted)]">
          From landing pages to fullstack SaaS — fast delivery, honest pricing,
          and real support after launch.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <CTAButton
            href="https://wa.me/919876543210"
            variant="primary"
            icon={<MessageCircle className="w-4 h-4" />}
          >
            Chat on WhatsApp
          </CTAButton>
          <CTAButton
            href="tel:+919876543210"
            variant="outline"
            icon={<Phone className="w-4 h-4" />}
          >
            Book a Free Call
          </CTAButton>
          <CTAButton
            href="mailto:hello@yourdomain.com"
            variant="outline"
            icon={<Mail className="w-4 h-4" />}
          >
            Send an Email
          </CTAButton>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <SectionBadge>WHAT WE BUILD</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Services built <GradientText>for results</GradientText>
          </h2>
          <p className="text-[var(--muted)] mb-14 max-w-xl">
            Every service is focused on one thing — growing your business faster.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-[0_0_40px_rgba(56,189,248,0.12)]"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400 mb-5 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                  {s.desc}
                </p>
                <p className="text-sky-400 text-xs flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  {s.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="px-6 md:px-16 py-24 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <SectionBadge>TRANSPARENT PRICING</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Starting prices,{" "}
            <GradientText>no surprises</GradientText>
          </h2>
          <p className="text-[var(--muted)] mb-14 max-w-xl">
            All prices are starting rates. Advanced features are scoped and
            quoted honestly before we begin.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pricing.map((p, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-sky-400/40 transition-colors"
              >
                <div>
                  <p className="text-base font-semibold mb-1">{p.name}</p>
                  <p className="flex items-center gap-1.5 text-xs text-[var(--muted)] mb-4">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    {p.delivery}
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-black bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                    {p.price}
                  </p>
                  <p className="text-xs text-[var(--muted)]">
                    {p.perMonth ? "/month" : "starting from"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-6 md:px-16 py-24 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <SectionBadge>HOW IT WORKS</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            From idea to launch{" "}
            <GradientText>in 3 steps</GradientText>
          </h2>
          <p className="text-[var(--muted)] mb-14 max-w-xl">
            Simple, transparent process — you always know exactly what happens
            next.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div
                key={i}
                className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 relative overflow-hidden group hover:border-sky-400/40 transition-colors"
              >
                {/* large background number */}
                <span className="absolute -top-4 -right-2 text-[120px] font-black text-sky-400/5 select-none pointer-events-none group-hover:text-sky-400/10 transition-colors">
                  {s.num}
                </span>
                <div className="w-10 h-10 rounded-full bg-sky-400/10 text-sky-400 flex items-center justify-center text-sm font-bold mb-5">
                  {s.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF ── */}
      <section className="px-6 md:px-16 py-24 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <SectionBadge>PROOF</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Real projects,{" "}
            <GradientText>real results</GradientText>
          </h2>
          <p className="text-[var(--muted)] mb-14 max-w-xl">
            Numbers and words from clients we've worked with.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 text-center"
              >
                <p className="text-3xl font-black bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent mb-1">
                  {s.value}
                </p>
                <p className="text-xs text-[var(--muted)]">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 flex flex-col gap-4 hover:border-sky-400/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${avatarColor[t.color]}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-[var(--muted)]">
                      {t.projectLink ? (
                        <a
                          href={t.projectLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sky-400 hover:underline"
                        >
                          {t.project} ↗
                        </a>
                      ) : (
                        t.project
                      )}
                    </p>
                  </div>
                  <span className="ml-auto text-amber-400 text-sm">★★★★★</span>
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 md:px-16 py-24 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto">
          <SectionBadge>FAQ</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Common questions{" "}
            <GradientText>answered</GradientText>
          </h2>
          <p className="text-[var(--muted)] mb-10">
            Still have questions? Just message us — we reply fast.
          </p>
          <div>
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-6 md:px-16 py-24">
        <div className="max-w-5xl mx-auto text-center p-14 md:p-20 rounded-[40px] border border-[var(--border)] bg-gradient-to-br from-sky-400/10 to-violet-400/10 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-400/10 blur-3xl rounded-full pointer-events-none" />

          <SectionBadge>START TODAY</SectionBadge>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mt-2 mb-6">
            Let's build your next
            <span className="block">
              <GradientText>big project together</GradientText>
            </span>
          </h2>

          <p className="text-[var(--muted)] max-w-xl mx-auto mb-10">
            Free consultation. Honest pricing. Fast delivery. No surprises.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton
              href="https://wa.me/919876543210"
              variant="primary"
              icon={<MessageCircle className="w-4 h-4" />}
            >
              Chat on WhatsApp
            </CTAButton>
            <CTAButton
              href="mailto:hello@yourdomain.com"
              variant="outline"
              icon={<Mail className="w-4 h-4" />}
            >
              Send an Email
            </CTAButton>
            <CTAButton
              href="#"
              variant="outline"
              icon={<Rocket className="w-4 h-4" />}
            >
              Start Your Project
            </CTAButton>
          </div>
        </div>
      </section>

    </main>
  );
}