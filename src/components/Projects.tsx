import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  // {
  //   title: "Little Fuego Kitchen",
  //   category: "Restaurant Platform",
  //   description: "A modern restaurant platform showcasing menu, brand, and customer experience.",
  //   image: "https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzY3NTk3NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  // },
  {
    title: "Bae Movement",
    category: "Events Platform",
    description: "A community events platform centered on movement, wellness, and connection.",
    image: "/baeCoverPage.png",
    link: "https://thebaemovement.com/"
  },
  {
    title: "Hutch Securities LLC",
    category: "INVESTMENT ADVISORY PLATFORM",
    description: "A modern financial services website designed to present investment opportunities and build credibility.",
    image: "/hutchCoverPage.png",
    link: "https://hutchsecuritiesllc.netlify.app/"
  },
];

export function Projects() {
  return (
    <section id="work" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl tracking-tight text-black mb-6">
            Work Samples
          </h2>
          <div className="w-16 h-px bg-black mx-auto" />
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-default"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden border border-gray-200 aspect-square flex items-center justify-center block cursor-pointer"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain object-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  </a>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="text-sm text-gray-500 mb-4 tracking-wider uppercase cursor-default">
                    {project.category}
                  </div>
                  <h3 className="text-4xl md:text-5xl tracking-tight text-black mb-6 cursor-default">
                    {project.title}
                  </h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed cursor-default">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 text-black border-b border-black pb-1 hover:gap-3 transition-all cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          {/* <button
            onClick={handleViewAll}
            className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            View All Projects
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}
