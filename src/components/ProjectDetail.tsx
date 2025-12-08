import type { Project } from "@/types";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, FolderGit2 } from "lucide-react";
import { useEffect } from "react";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen pt-24 pb-20"
    >
      <div className="container mx-auto px-12 md:px-24 lg:px-48 max-w-6xl">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-500 hover:text-indigo-500 transition-colors mb-8"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Kembali ke Portofolio
        </button>

        <div className="glass-panel rounded-3xl overflow-hidden border-0 shadow-2xl bg-white/50 dark:bg-slate-900/50">
          {/* Cover Image */}
          <div className="w-full h-64 md:h-80 relative">
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10" />
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 md:left-10 z-20">
              <div className="p-3 w-fit rounded-xl bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 text-white mb-3">
                <FolderGit2 size={24} />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">{project.title}</h1>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {project.longDescription || project.description}
            </p>

            {project.features && (
              <div className="bg-slate-50 dark:bg-slate-950/50 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                  Fitur Utama
                </h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-600 dark:text-slate-400">
                      <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
