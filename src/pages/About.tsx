import { useEffect } from "react";
import { motion } from "motion/react";

const approachPillars = [
  {
    title: "Clarity First",
    description:
      "Every project starts by understanding the business need before jumping into design or development.",
  },
  {
    title: "Built to Last",
    description:
      "The goal is to create systems that are clean, reliable, and able to grow with the business over time.",
  },
  {
    title: "Direct Collaboration",
    description:
      "Clients work directly with the builder, which keeps communication simple and decision-making efficient.",
  },
];

export function About() {
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <h1 className="text-5xl md:text-6xl tracking-tight text-white mb-6">About RDN Labs</h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mb-6">
                RDN Labs builds thoughtful digital products with a focus on clarity, performance,
                and long-term usability.
              </p>
              <p className="text-gray-300 leading-relaxed max-w-3xl">
                The studio combines design-minded execution with systems thinking, helping
                businesses build digital products that are not only polished, but practical and
                built to grow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-white/15 via-transparent to-blue-300/20 blur-2xl" />
                <img
                  src="/headshot.png"
                  alt="Ivan Rendon - RDN Labs"
                  className="relative about-headshot w-full max-w-md mx-auto aspect-[4/5] object-cover rounded-2xl shadow-[0_35px_90px_-40px_rgba(0,0,0,0.95)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl tracking-tight text-white mb-8">Who You&apos;ll Work With</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                RDN Labs is led by Ivan Rendon, a full-stack developer with a background in
                operations, logistics, and systems thinking.
              </p>
              <p>
                Before moving into software, Ivan spent years working in environments where
                reliability, efficiency, and structure mattered every day. That experience now shapes
                how projects are built - with clear thinking, practical decision-making, and a strong
                focus on how the final product will actually be used.
              </p>
              <p>
                Clients work directly with the person designing and building the product, which leads
                to clearer communication, faster feedback, and a more thoughtful process from start
                to finish.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl tracking-tight text-white mb-6">How We Approach Projects</h2>
            <div className="w-16 h-px bg-white/70 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/15">
            {approachPillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white/[0.05] p-8 md:p-10 backdrop-blur-sm"
              >
                <h3 className="text-2xl tracking-tight text-white mb-4">{pillar.title}</h3>
                <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
              </motion.article>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-gray-400 leading-relaxed mt-8 text-center"
          >
            Projects are built using modern tools across design, frontend, backend, and infrastructure.
          </motion.p>
        </div>
      </section>

      <section className="relative pb-32 pt-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-white/20 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-12 md:p-16 text-center"
          >
            <h2 className="text-5xl md:text-6xl tracking-tight text-white mb-6">Start a Project</h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              If you&apos;re building something new or refining an existing platform, RDN Labs can help
              bring structure, clarity, and strong execution to the process.
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
