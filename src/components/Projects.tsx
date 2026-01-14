import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast } from "sonner";

const projects = [
  {
    title: "Little Fuego Kitchen",
    category: "Restaurant Platform",
    description: "A modern restaurant platform showcasing menu, brand, and customer experience.",
    image: "https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzY3NTk3NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Bae Movement",
    category: "Events Platform",
    description: "A community events platform centered on movement, wellness, and connection.",
    image: "https://images.unsplash.com/photo-1508361727343-ca787442dcd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzYxNjc4MHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Golden Gate Efoil",
    category: "Service Platform",
    description: "An intentionally minimal service website focused on clarity, essential details, and easy customer contact.",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3Njc2MDU3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Projects() {
  const handleProjectClick = (projectTitle: string) => {
    toast.success(`Opening ${projectTitle} case study`, {
      description: "View the full project details and live demo.",
    });
  };

  const handleViewAll = () => {
    toast.info("Portfolio Gallery", {
      description: "Explore our complete collection of 150+ projects.",
    });
  };

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
            Selected Work
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
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project.title)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden border border-gray-200">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="text-sm text-gray-500 mb-4 tracking-wider uppercase">
                    {project.category}
                  </div>
                  <h3 className="text-4xl md:text-5xl tracking-tight text-black mb-6">
                    {project.title}
                  </h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <button
                    className="group/btn inline-flex items-center gap-2 text-black border-b border-black pb-1 hover:gap-3 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.title);
                    }}
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                  </button>
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
          <button
            onClick={handleViewAll}
            className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}