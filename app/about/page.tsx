"use client";

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
  {
    icon: <Star className="w-6 h-6" />,
    title: "Uncompromising Quality",
    desc: "Every pixel and every line of code is held to the same standard — production-ready, clean, and built to last.",
    color: "indigo",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Full Transparency",
    desc: "No hidden fees. No vague timelines. You get itemized quotes, live progress updates, and complete visibility.",
    color: "violet",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Speed Without Compromise",
    desc: "We move fast — but not at the cost of quality. Modern workflows let us ship faster while keeping standards high.",
    color: "emerald",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Security by Default",
    desc: "Security isn't an add-on. We build with enterprise-grade practices from day one — for every project, every size.",
    color: "sky",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Long-Term Partnership",
    desc: "We don't disappear after launch. Every project includes post-delivery support and an upgrade path as you grow.",
    color: "rose",
  },
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
  {
    step: "01",
    title: "Discovery Call",
    desc: "We start with a free 30-minute call to understand your goals, timeline, and budget. No pitch — just honest conversation.",
    color: "indigo",
  },
  {
    step: "02",
    title: "Scoped Proposal",
    desc: "Within 24 hours you get a fully itemized quote, project roadmap, and delivery timeline. Fixed price, no surprises.",
    color: "violet",
  },
  {
    step: "03",
    title: "Build & Iterate",
    desc: "We build in milestones and share progress regularly. You review, give feedback, and we iterate fast.",
    color: "emerald",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "We handle deployment, testing, and go-live. Post-launch support is included so you're never left on your own.",
    color: "sky",
  },
];

const testimonials = [
  {
    quote:
      "Nexus delivered our entire platform in 3 weeks — ahead of schedule and exactly to spec. The AI automation they built cut our support tickets by 60%.",
    name: "Sarah Chen",
    role: "CEO, Flowly",
    country: "Singapore",
    stars: 5,
  },
  {
    quote:
      "We've worked with agencies before. Nexus is different — transparent pricing, zero fluff, and a team that actually cares about outcomes, not just deliverables.",
    name: "Marcus Weber",
    role: "Founder, Leanbase",
    country: "Germany",
    stars: 5,
  },
  {
    quote:
      "Our e-commerce conversion rate went up 34% after the redesign. The attention to performance and UX detail was exceptional.",
    name: "Priya Nair",
    role: "Director, Verdant Co.",
    country: "India",
    stars: 5,
  },
];

const timeline = [
  { year: "2019", event: "Founded Nexus with one client and a laptop" },
  { year: "2020", event: "Reached 20 projects across 5 countries" },
  { year: "2021", event: "Launched our first AI automation suite" },
  { year: "2022", event: "Crossed 50 active clients, expanded to cloud infra" },
  { year: "2024", event: "Integrated LLM-powered products for 15+ businesses" },
  { year: "2026", event: "120+ projects, 15 countries, still building" },
];

// ─── HELPERS ───────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center mb-5">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 bg-indigo-500/10 border border-indigo-400/20 px-4 py-1.5 rounded-full">
        {children}
      </span>
    </div>
  );
}

const colorMap: Record<string, { card: string; icon: string; dot: string }> = {
  indigo: {
    card: "border-indigo-400/20 from-indigo-500/10 to-transparent",
    icon: "bg-indigo-500/15 border-indigo-400/20 text-indigo-400",
    dot: "bg-indigo-500",
  },
  violet: {
    card: "border-violet-400/20 from-violet-500/10 to-transparent",
    icon: "bg-violet-500/15 border-violet-400/20 text-violet-400",
    dot: "bg-violet-500",
  },
  emerald: {
    card: "border-emerald-400/20 from-emerald-500/10 to-transparent",
    icon: "bg-emerald-500/15 border-emerald-400/20 text-emerald-400",
    dot: "bg-emerald-500",
  },
  sky: {
    card: "border-sky-400/20 from-sky-500/10 to-transparent",
    icon: "bg-sky-500/15 border-sky-400/20 text-sky-400",
    dot: "bg-sky-500",
  },
  rose: {
    card: "border-rose-400/20 from-rose-500/10 to-transparent",
    icon: "bg-rose-500/15 border-rose-400/20 text-rose-400",
    dot: "bg-rose-500",
  },
};

// ─── PAGE ──────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main
      className="min-h-screen bg-[#080B14] text-white pt-[68px] overflow-hidden"
      style={{ fontFamily: "'DM Sans', 'Sora', sans-serif" }}
    >
      {/* Ambient BG */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[110px]" />
        <div className="absolute top-2/3 left-0 w-[400px] h-[400px] bg-emerald-500/6 rounded-full blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.5) 39px,rgba(255,255,255,0.5) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.5) 39px,rgba(255,255,255,0.5) 40px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* ── 1. HERO ──────────────────────────────────────────────── */}
        <section className="pt-24 pb-20 text-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase mb-8">
            <Sparkles className="w-4 h-4" />
            About Nexus
          </span>

          <h1
            className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.93] tracking-tight mb-7"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            We Build Things
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              That Actually Work.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed mb-10">
            Nexus is a product engineering agency building modern websites, AI
            systems, and cloud solutions that help businesses grow faster and
            work smarter. We care about outcomes, not just deliverables.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            {["Founded 2019", "15+ Countries", "120+ Projects", "Fixed Pricing"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* ── 2. FOUNDER STORY ─────────────────────────────────────── */}
        <section className="mb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Photo / visual */}
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-indigo-600/20 via-violet-600/10 to-emerald-500/10 border border-white/10 overflow-hidden aspect-[4/5] flex items-end p-8">
                <div className="absolute top-6 right-6">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-400">
                    Founder & Builder
                  </span>
                </div>
                {/* Decorative abstract */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="w-72 h-72 rounded-full border-4 border-indigo-400" />
                  <div className="absolute w-48 h-48 rounded-full border-2 border-emerald-400" />
                  <div className="absolute w-24 h-24 rounded-full bg-indigo-500/30" />
                </div>
                <div className="relative z-10">
                  <p className="text-2xl font-black mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                    Aryan Mehta
                  </p>
                  <p className="text-slate-400 text-sm">Founder, Nexus Agency</p>
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-5 -right-5 bg-[#0d1020] border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-xl shadow-xl">
                <p className="text-3xl font-black text-indigo-400">120+</p>
                <p className="text-xs text-slate-400 mt-0.5">Projects shipped</p>
              </div>
            </div>

            {/* Story */}
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2
                className="text-4xl md:text-5xl font-black mb-6 leading-tight"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Started With a Problem.
                <br />
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Built the Solution.
                </span>
              </h2>

              <div className="space-y-4 text-slate-400 leading-relaxed">
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
                  established companies across 15 countries. The mission hasn't changed.
                  The tools have just gotten better.
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-10 space-y-4">
                {timeline.map((t, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="shrink-0 w-14 text-right">
                      <span className="text-xs font-black text-indigo-400">{t.year}</span>
                    </div>
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      <p className="text-sm text-slate-400">{t.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. MISSION & VALUES ───────────────────────────────────── */}
        <section className="mb-28">
          <SectionLabel>What We Stand For</SectionLabel>
          <h2
            className="text-4xl md:text-5xl font-black text-center mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Mission & Values
          </h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-14 leading-relaxed">
            Our mission is simple: build products that make businesses measurably better.
            These values shape every decision we make.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => {
              const c = colorMap[v.color];
              return (
                <div
                  key={v.title}
                  className={`rounded-2xl border bg-gradient-to-br p-7 ${c.card} hover:scale-[1.02] transition-all duration-300 group`}
                >
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 ${c.icon} group-hover:scale-110 transition-transform duration-300`}>
                    {v.icon}
                  </div>
                  <h3 className="font-black text-lg mb-2">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 4. STATS ─────────────────────────────────────────────── */}
        <section className="mb-28">
          <SectionLabel>By The Numbers</SectionLabel>
          <h2
            className="text-4xl md:text-5xl font-black text-center mb-14"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Numbers That Prove It
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/8 bg-white/[0.03] backdrop-blur-xl p-7 text-center hover:border-indigo-400/25 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/20 text-indigo-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3
                  className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent mb-2"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {stat.value}
                </h3>
                <p className="text-slate-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. WHAT WE DO ─────────────────────────────────────────── */}
        <section className="mb-28">
          <SectionLabel>Our Expertise</SectionLabel>
          <h2
            className="text-4xl md:text-5xl font-black text-center mb-14"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            What We Build
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Fast Execution",
                desc: "Rapid product delivery with modern development workflows and zero bloat.",
                color: "indigo",
              },
              {
                icon: <BrainCircuit className="w-8 h-8" />,
                title: "AI First",
                desc: "Intelligent AI systems and automations integrated into your daily operations.",
                color: "violet",
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Secure Systems",
                desc: "Enterprise-grade security and scalable architectures from day one.",
                color: "emerald",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Reach",
                desc: "Solutions built for worldwide scalability, performance, and compliance.",
                color: "sky",
              },
            ].map((item) => {
              const c = colorMap[item.color];
              return (
                <div
                  key={item.title}
                  className={`group rounded-3xl p-8 border bg-gradient-to-b ${c.card} hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all duration-500`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border mb-6 ${c.icon} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 6. TECH STACK ─────────────────────────────────────────── */}
        <section className="mb-28">
          <SectionLabel>Our Arsenal</SectionLabel>
          <h2
            className="text-4xl md:text-5xl font-black text-center mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Tech Stack
          </h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-14 leading-relaxed">
            We use the right tool for the job — modern, proven, and production-tested technologies.
          </p>

          {(["Frontend", "Backend", "Cloud", "DevOps", "AI"] as const).map((cat) => (
            <div key={cat} className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">{cat}</p>
              <div className="flex flex-wrap gap-2">
                {techStack
                  .filter((t) => t.category === cat)
                  .map((tech) => (
                    <span
                      key={tech.name}
                      className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 text-sm font-semibold hover:border-indigo-400/40 hover:text-white hover:bg-white/[0.08] transition-all duration-200 cursor-default"
                    >
                      {tech.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── 7. PROCESS ───────────────────────────────────────────── */}
        <section className="mb-28">
          <SectionLabel>How We Work</SectionLabel>
          <h2
            className="text-4xl md:text-5xl font-black text-center mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Our Process
          </h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-14 leading-relaxed">
            From first conversation to live product, here's exactly what working with Nexus looks like.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step) => {
              const c = colorMap[step.color];
              return (
                <div
                  key={step.step}
                  className={`relative rounded-2xl border bg-gradient-to-b p-8 ${c.card} group hover:-translate-y-1 transition-all duration-300`}
                >
                  <div
                    className="text-6xl font-black mb-5 leading-none"
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      WebkitTextStroke: "1px rgba(255,255,255,0.08)",
                      color: "transparent",
                    }}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-black text-xl mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 8. TESTIMONIALS ──────────────────────────────────────── */}
        <section className="mb-28">
          <SectionLabel>Client Feedback</SectionLabel>
          <h2
            className="text-4xl md:text-5xl font-black text-center mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            What Clients Say
          </h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-14">
            We let results do the talking.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/8 bg-white/[0.03] p-8 hover:border-indigo-400/25 hover:bg-white/[0.06] transition-all duration-300 flex flex-col"
              >
                <Quote className="w-8 h-8 text-indigo-400/40 mb-5 shrink-0" />
                <p className="text-slate-300 leading-relaxed text-sm flex-1 mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-white/8">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-500/20 border border-white/10 flex items-center justify-center text-xs font-black text-indigo-300">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role} · {t.country}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 9. FINAL CTA ─────────────────────────────────────────── */}
        <section className="mb-28">
          <div className="relative rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-600/15 via-violet-600/8 to-transparent overflow-hidden text-center px-8 md:px-16 py-20">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/12 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[70px] pointer-events-none" />

            <div className="relative z-10">
              <SectionLabel>Let's Build Together</SectionLabel>
              <h2
                className="text-4xl md:text-6xl font-black mb-5 leading-tight"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Ready to Start
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                  Your Project?
                </span>
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
                Tell us what you're building. We'll send a scoped proposal within 24 hours — no
                obligation, fully itemized, fixed price.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25"
                >
                  Start a Project <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-indigo-400/40 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 hover:bg-white/5"
                >
                  View Services
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-emerald-400/40 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 hover:bg-white/5"
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