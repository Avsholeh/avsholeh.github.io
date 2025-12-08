import { projects } from "@/data";
import type { Project } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BarChart2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

export default function Projects({ onProjectClick }:ProjectsProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-12 md:px-24 lg:px-48">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4 dark:text-white text-slate-900">Proyek</h2>
            <div className="h-1 w-20 bg-cyan-500 rounded-full" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                onClick={() => onProjectClick(project)}
                className="group relative rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="w-full h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.stats && (
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 text-xs font-semibold text-emerald-100 bg-emerald-900/80 backdrop-blur-sm px-2 py-1 rounded border border-emerald-500/30 shadow-lg">
                      <BarChart2 size={12} />
                      {project.stats}
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-sm font-medium text-indigo-500 gap-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                      Lihat Detail <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-6">
          {projects.length > 3 && (
            <motion.button
              layout
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg text-slate-700 dark:text-slate-200 font-medium transition-colors hover:border-indigo-500/50 hover:text-indigo-500"
            >
              {showAll ? (
                <>
                  Lihat Lebih Sedikit <ChevronUp size={18} />
                </>
              ) : (
                <>
                  Lihat Proyek Lainnya <ChevronDown size={18} />
                </>
              )}
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
};
