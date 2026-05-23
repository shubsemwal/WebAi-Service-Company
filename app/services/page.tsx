"use client";

import {
  Globe,
  Code2,
  Server,
  BrainCircuit,
  Cloud,
  Database,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      desc: "Modern UI development using React.js, Next.js, Angular and Tailwind CSS.",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      desc: "Scalable backend systems using Node.js, Express and Python.",
    },
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "AI & Automation",
      desc: "AI agents, chatbots, WhatsApp bots and automation systems.",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      desc: "AWS deployment, CI/CD pipelines and scalable cloud infrastructure.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Systems",
      desc: "MongoDB, PostgreSQL, MySQL and optimized database design.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "SEO & Web Solutions",
      desc: "SEO optimization, domains, hosting and web management.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Cyber Security",
      desc: "Secure APIs, authentication systems and server protection.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      desc: "Mobile-first responsive websites and UX-focused design.",
    },
  ];

  return (
   <main className="min-h-screen transition-colors duration-300 overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 md:px-16 py-28 text-center border-b border-[var(--border)] overflow-hidden">

        {/* background glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-sky-400/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-400/20 blur-3xl rounded-full" />

        <span className="inline-block px-5 py-2 text-sm tracking-widest rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 mb-6">
          PREMIUM SERVICES
        </span>

        <h1 className="text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
          Build Powerful Digital Experiences
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-[var(--muted)]">
          We design and develop high-performance websites, AI systems, and scalable digital solutions for modern businesses.
        </p>

      </section>

      {/* SERVICES GRID */}
      <section className="px-6 md:px-16 py-24">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 transition duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]"
            >

              {/* ICON */}
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400 mb-6 group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-[var(--muted)] leading-relaxed">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-24">

        <div className="max-w-5xl mx-auto text-center p-12 md:p-20 rounded-[40px] border border-[var(--border)] bg-gradient-to-br from-sky-400/10 to-violet-400/10 backdrop-blur-xl">

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Let’s Build Your Next
            <span className="block bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
              Big Project
            </span>
          </h2>

          <p className="mt-6 text-[var(--muted)] max-w-2xl mx-auto">
            Modern websites, AI tools, and scalable systems built with performance and design in mind.
          </p>

          

        </div>

      </section>

    </main>
  );
}