import { education } from "@/data";
import { motion } from "framer-motion";
import { BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-12 md:px-24 lg:px-48">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-bold mb-4 dark:text-white text-slate-900">Pendidikan</h2>
          <div className="h-1 w-20 bg-indigo-500 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl border-l-4 border-l-indigo-500 hover:bg-white dark:hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <GraduationCap className="text-indigo-500" size={24} />
                    {edu.institution}
                  </h3>
                  <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mt-1">{edu.degree}</div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1 text-sm text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} /> {edu.location}
                  </span>
                </div>
              </div>

              {edu.research && (
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex gap-2">
                    <BookOpen size={18} className="text-slate-400 mt-1 shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Penelitian</span>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">{edu.research}</p>
                      {edu.researchLink && (
                        <a
                          href={edu.researchLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-sm text-indigo-500 hover:underline"
                        >
                          Lihat Publikasi
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
