import { useEffect } from "react";
import { motion } from "motion/react";

const philosophyCards = [
  {
    title: "Understanding the Problem",
    description:
      "Every project begins with understanding the business challenge before designing a technical solution.",
  },
  {
    title: "Thoughtful System Design",
    description:
      "Applications are structured for maintainability, scalability, and long-term growth.",
  },
  {
    title: "Modern Technology",
    description:
      "Projects use modern frameworks and proven technologies designed for performance and reliability.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "Systems are designed to evolve with your business instead of needing constant rebuilds.",
  },
];

const technologyGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Node.js"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "API integrations", "data modeling"],
  },
  {
    title: "Infrastructure",
    items: ["cloud hosting", "performance optimization", "scalable system architecture"],
  },
];

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white pt-32">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
        
            >
              <div>
                <h1 className="text-5xl md:text-6xl tracking-tight text-black mb-6">About RDN Labs</h1>
                <div className="w-16 h-px bg-black" />
              </div>

              <p className="text-2xl text-gray-700 leading-relaxed max-w-2xl">
                Building modern web platforms with thoughtful design and scalable engineering.
              </p>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  RDN Labs is a development studio focused on building modern web applications,
                  scalable backend systems, and high-performance digital platforms for startups,
                  investment firms, and growing businesses.
                </p>
                <p>
                  Every project is designed with long-term reliability, maintainability, and
                  performance in mind.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full"
            >
              <div className="border border-gray-200 bg-gray-50 p-4">
                <img
                  src="/headshot.png"
                  alt="Ivan Rendon - RDN Labs"
                  className="about-headshot w-full aspect-[4/5] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h2 className="text-5xl md:text-6xl tracking-tight text-black mb-8">Who You&apos;ll Work With</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                RDN Labs is led by Ivan Rendon, a full-stack developer with a background in
                operations, logistics, and systems design.
              </p>
              <p>
                Before transitioning into software development, Ivan spent over a decade working in
                operational environments where efficiency, reliability, and structured systems were
                essential to daily operations.
              </p>
              <p>
                This experience now informs how software is built at RDN Labs - focusing not only on
                writing code, but on creating digital systems that improve how businesses operate.
              </p>
              <p>
                Clients work directly with the developer building their platform, creating clearer
                communication, faster feedback loops, and more efficient project execution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl tracking-tight text-black mb-6">How Projects Are Built</h2>
            <div className="w-16 h-px bg-black mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
            {philosophyCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white p-12"
              >
                <h3 className="text-2xl tracking-tight text-black mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl tracking-tight text-black mb-6">Technology</h2>
            <div className="w-16 h-px bg-black mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {technologyGroups.map((group, index) => (
              <motion.section
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white p-10"
                aria-label={group.title}
              >
                <h3 className="text-2xl tracking-tight text-black mb-5">{group.title}</h3>
                <ul className="space-y-3 text-gray-600">
                  {group.items.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h2 className="text-5xl md:text-6xl tracking-tight text-black mb-8">Working Together</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              RDN Labs operates as a focused development studio, which means clients work directly
              with the person building their platform.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              This allows for faster communication, clearer technical decisions, and a more
              collaborative development process.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Projects range from custom websites and startup MVPs to internal dashboards and fully
              featured web platforms.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-gray-200 bg-white p-12 md:p-16 text-center"
          >
            <h2 className="text-5xl md:text-6xl tracking-tight text-black mb-6">Start a Project</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
              If you&apos;re building a new platform or improving an existing one, RDN Labs can help
              design and develop a scalable solution.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
