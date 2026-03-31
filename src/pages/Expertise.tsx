import { useEffect } from "react";
import { motion } from "motion/react";
import { Check, Code2, Globe, Layers, Palette, Rocket, Zap } from "lucide-react";

type ExpertiseItem = {
  title: string;
  intro: string;
  description: string;
  icon: typeof Code2;
  services: string[];
  technologies: string;
};

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Development",
    intro: "Build products that actually scale with your business.",
    icon: Code2,
    description:
      "We design and build web applications that are fast, reliable, and built to grow with you — not break.",
    services: [
      "Custom web applications tailored to your business",
      "Internal tools and dashboards to streamline operations",
      "Secure backend systems and user authentication",
      "Data architecture designed for long-term growth",
    ],
    technologies: "React, Next.js, Node.js, Python, FastAPI, PostgreSQL",
  },
  {
    title: "Design",
    intro: "Make your product feel as good as it functions.",
    icon: Palette,
    description:
      "We create clean, intuitive interfaces that make your product easy to understand and genuinely enjoyable to use.",
    services: [
      "UI/UX design focused on clarity and usability",
      "User flows that guide people to take action",
      "Responsive design across desktop and mobile",
      "Design systems for consistency and scalability",
    ],
    technologies: "Figma, component libraries, responsive design systems",
  },
  {
    title: "Optimization",
    intro: "Turn your website into a high-performing asset.",
    icon: Rocket,
    description:
      "We improve speed, stability, and performance so your product not only works, but converts, ranks, and retains users.",
    services: [
      "Speed and performance improvements",
      "Core Web Vitals optimization",
      "Backend and database performance tuning",
      "Asset optimization and caching strategies",
    ],
    technologies: "Lighthouse, performance profiling tools, caching layers, cloud optimization",
  },
  {
    title: "Strategy",
    intro: "Build with direction, not guesswork.",
    icon: Globe,
    description:
      "We help you define what to build, why it matters, and how to execute it in a way that supports real business growth.",
    services: [
      "Product and feature planning",
      "Technical decision-making and architecture guidance",
      "Roadmapping for scalable development",
      "Aligning product decisions with business goals",
    ],
    technologies: "Product planning, architecture strategy, roadmap development",
  },
  {
    title: "Integration",
    intro: "Connect everything your business relies on.",
    icon: Zap,
    description:
      "We integrate the tools and systems you already use so your workflows are seamless and your data works together.",
    services: [
      "API integrations (payments, CRMs, third-party tools)",
      "Automation between systems",
      "Data syncing and backend connections",
      "Custom workflows across platforms",
    ],
    technologies: "APIs, payment systems, CRM platforms, automation workflows",
  },
  {
    title: "Architecture",
    intro: "Build a foundation that won’t slow you down later.",
    icon: Layers,
    description:
      "We design systems that are clean, scalable, and easy to maintain, so you don’t have to rebuild everything in 6 months.",
    services: [
      "Scalable system architecture",
      "Clean backend structure and organization",
      "Performance-first infrastructure planning",
      "Security and reliability considerations",
    ],
    technologies: "Backend architecture, databases, APIs, cloud infrastructure",
  },
];

export function Expertise() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black pt-32 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="hero-grid absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] animate-grain" />
      </div>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h1 className="text-5xl md:text-6xl tracking-tight text-white mb-6">Our Expertise</h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed mb-8">
              We translate complex technical work into clear, effective digital solutions that help
              businesses grow.
            </p>
            <div className="w-16 h-px bg-white/70 mx-auto" />
          </motion.div>

          <div className="space-y-12 md:space-y-14">
            {expertiseItems.map((item, index) => {
              const Icon = item.icon;
              const isReversed = index % 2 === 1;
              const technologies = item.technologies.split(",").map((tech) => tech.trim());

              return (
                <motion.section
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className={`relative overflow-hidden p-8 md:p-10 lg:p-12 bg-gradient-to-b backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_32px_90px_-50px_rgba(0,0,0,0.95)] ${
                    isReversed ? "from-blue-400/[0.08] via-white/[0.04] to-white/[0.015]" : "from-violet-400/[0.06] via-white/[0.035] to-white/[0.015]"
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(255,255,255,0.08),transparent_55%)]" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                    <div className={`lg:col-span-5 ${isReversed ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-4 mb-7">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 shadow-[0_0_30px_-12px_rgba(255,255,255,0.45)]">
                          <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                        </div>
                        <h2 className="text-4xl md:text-5xl tracking-tight font-medium text-white">{item.title}</h2>
                      </div>

                      <p className="text-white/95 leading-8 max-w-xl mb-4">{item.intro}</p>
                      <p className="text-gray-300/95 leading-8 max-w-xl">{item.description}</p>
                    </div>

                    <div className={`lg:col-span-7 ${isReversed ? "lg:order-1" : ""}`}>
                      <div className="pb-7 border-b border-white/15">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400/90 mb-5">What this includes</p>
                        <ul className="space-y-4 text-gray-200">
                          {item.services.map((service) => (
                            <li key={service} className="flex items-start gap-3 leading-relaxed">
                              <Check className="mt-1 h-4 w-4 shrink-0 text-white/80" strokeWidth={1.8} />
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400/90 mb-4">Technologies</p>
                        <div className="flex flex-wrap gap-2.5">
                          {technologies.map((technology) => (
                            <span
                              key={technology}
                              className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.05] px-3 py-1 text-sm text-gray-200"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-white/20 bg-white/[0.03] p-12 md:p-16 text-center"
          >
            <h2 className="text-5xl md:text-6xl tracking-tight text-white mb-6">Ready to start your project?</h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Share your goals and we&apos;ll recommend the right technical approach, timeline, and
              build scope.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/40 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
