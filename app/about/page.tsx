"use client";

import {
  Sparkles,
  Rocket,
  Globe,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { value: "120+", label: "Projects Delivered" },
    { value: "40+", label: "AI Automations" },
    { value: "15+", label: "Countries Served" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  return (
    <main className="min-h-screen pt-[68px] overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 md:px-16 py-32 border-b border-slate-200 dark:border-white/10">

        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-indigo-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-400/20 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 text-indigo-400 text-sm tracking-[0.2em] mb-8">
            <Sparkles className="w-4 h-4" />
            ABOUT NEXUS
          </span>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-tight mb-8">
            Building The
            <span className="block bg-gradient-to-r from-indigo-500 to-emerald-400 bg-clip-text text-transparent">
              Future With Technology
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We craft modern AI systems, scalable web platforms and cloud
            infrastructures that help businesses grow faster.
          </p>

        </div>

      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-16 py-24">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {[
            {
              icon: <Rocket className="w-8 h-8" />,
              title: "Fast Execution",
              desc: "Rapid product delivery with modern development workflows.",
            },
            {
              icon: <BrainCircuit className="w-8 h-8" />,
              title: "AI First",
              desc: "Intelligent AI systems integrated into business operations.",
            },
            {
              icon: <ShieldCheck className="w-8 h-8" />,
              title: "Secure Systems",
              desc: "Enterprise-grade security and scalable architectures.",
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: "Global Reach",
              desc: "Solutions built for worldwide scalability and performance.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                group relative rounded-3xl p-8
                bg-white/70 dark:bg-white/5
                border border-slate-200 dark:border-white/10
                backdrop-blur-2xl
                transition-all duration-500
                hover:-translate-y-3
                hover:border-indigo-400/40
                hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]
              "
            >

              <div className="
                w-16 h-16 rounded-2xl
                flex items-center justify-center
                bg-indigo-500/10 text-indigo-400
                mb-6
                group-hover:scale-110
                transition
              ">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* STATS */}
      <section className="px-6 md:px-16 pb-24">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                rounded-3xl
                p-8
                text-center
                border border-slate-200 dark:border-white/10
                bg-white/70 dark:bg-white/5
                backdrop-blur-xl
              "
            >
              <h3 className="text-5xl font-black bg-gradient-to-r from-indigo-500 to-emerald-400 bg-clip-text text-transparent mb-3">
                {stat.value}
              </h3>

              <p className="text-slate-600 dark:text-slate-400">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}