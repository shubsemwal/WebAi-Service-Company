"use client";

import {
  ArrowRight,
  BrainCircuit,
  Globe,
  Cloud,
  Sparkles,
} from "lucide-react";

const studies = [
  {
    icon: <BrainCircuit className="w-8 h-8" />,
    title: "AI Customer Support Automation",
    category: "AI SOLUTIONS",
    desc: "Built an AI-powered chatbot system reducing support workload by 70% for a SaaS company.",
    result: "70% Faster Support",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Scalable Web Platform",
    category: "WEB DEVELOPMENT",
    desc: "Developed a modern Next.js platform handling 1M+ monthly visitors with blazing speed.",
    result: "1M+ Monthly Users",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Infrastructure Migration",
    category: "CLOUD & DEVOPS",
    desc: "Migrated enterprise systems to AWS with CI/CD automation and zero downtime deployment.",
    result: "99.99% Uptime",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-[68px] overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 md:px-16 py-32 border-b border-slate-200 dark:border-white/10">

        {/* background glow */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-indigo-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-400/20 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto text-center">

          <span className="
            inline-flex items-center gap-2
            px-5 py-2
            rounded-full
            border border-indigo-400/30
            bg-indigo-400/10
            text-indigo-400
            text-sm tracking-[0.2em]
            mb-8
          ">
            <Sparkles className="w-4 h-4" />
            CASE STUDIES
          </span>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-tight mb-8">
            Real Results
            <span className="
              block
              bg-gradient-to-r
              from-indigo-500
              to-emerald-400
              bg-clip-text
              text-transparent
            ">
              Through Innovation
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Explore how we transformed businesses using AI systems,
            modern web platforms and cloud infrastructure.
          </p>

        </div>

      </section>

      {/* CASE STUDIES GRID */}
      <section className="px-6 md:px-16 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {studies.map((study, index) => (
              <div
                key={index}
                className="
                  group relative
                  rounded-[32px]
                  overflow-hidden
                  border border-slate-200 dark:border-white/10
                  bg-white/70 dark:bg-white/5
                  backdrop-blur-2xl
                  p-8
                  transition-all duration-500

                  hover:-translate-y-3
                  hover:border-indigo-400/40
                  hover:shadow-[0_0_50px_rgba(99,102,241,0.2)]
                "
              >

                {/* glow bg */}
                <div className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br
                  from-indigo-500/10
                  via-transparent
                  to-emerald-400/10
                " />

                {/* top icon */}
                <div className="
                  relative z-10
                  w-16 h-16
                  rounded-2xl
                  flex items-center justify-center
                  bg-indigo-500/10
                  text-indigo-400
                  mb-6

                  group-hover:scale-110
                  group-hover:rotate-3
                  transition-transform duration-300
                ">
                  {study.icon}
                </div>

                {/* category */}
                <span className="
                  relative z-10
                  inline-block
                  text-xs
                  tracking-[0.25em]
                  text-indigo-400
                  mb-4
                ">
                  {study.category}
                </span>

                {/* title */}
                <h2 className="
                  relative z-10
                  text-3xl
                  font-black
                  leading-tight
                  mb-4
                ">
                  {study.title}
                </h2>

                {/* desc */}
                <p className="
                  relative z-10
                  text-slate-600 dark:text-slate-400
                  leading-relaxed
                  mb-8
                ">
                  {study.desc}
                </p>

                {/* result badge */}
                <div className="
                  relative z-10
                  inline-flex
                  px-4 py-2
                  rounded-full
                  bg-emerald-400/10
                  text-emerald-400
                  text-sm font-semibold
                  mb-8
                ">
                  {study.result}
                </div>

                {/* button */}
                <button className="
                  relative z-10
                  flex items-center gap-2
                  text-indigo-400
                  font-semibold
                  group-hover:gap-4
                  transition-all duration-300
                ">
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* animated bottom line */}
                <div className="
                  absolute bottom-0 left-0
                  h-[2px] w-0
                  bg-gradient-to-r
                  from-indigo-500
                  to-emerald-400
                  group-hover:w-full
                  transition-all duration-500
                " />

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 pb-24">

        <div className="
          max-w-5xl mx-auto
          rounded-[40px]
          border border-slate-200 dark:border-white/10
          bg-gradient-to-br from-indigo-500/10 to-emerald-400/10
          backdrop-blur-2xl
          p-12 md:p-20
          text-center
        ">

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            Want Similar Results
            <span className="
              block
              bg-gradient-to-r
              from-indigo-500
              to-emerald-400
              bg-clip-text
              text-transparent
            ">
              For Your Business?
            </span>
          </h2>

          <p className="
            max-w-2xl mx-auto
            text-lg
            text-slate-600 dark:text-slate-400
            leading-relaxed
            mb-10
          ">
            Let’s build scalable AI systems, cloud platforms and
            modern digital products together.
          </p>

          <button className="
            px-10 py-5
            rounded-full
            bg-gradient-to-r
            from-indigo-500
            to-emerald-400
            text-white
            font-black
            text-lg
            hover:scale-105
            transition-all duration-300
            shadow-[0_0_40px_rgba(99,102,241,0.3)]
          ">
            Start Your Project
          </button>

        </div>

      </section>

    </main>
  );
}