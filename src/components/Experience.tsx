import { experience } from "@/data";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Decorative background line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 transform md:-translate-x-1/2 z-0" />

      <div className="container mx-auto px-6 md:px-12 lg:px-48 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 dark:text-white text-slate-900">Pengalaman Profesional</h2>
          <div className="h-1 w-20 bg-indigo-500 rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-12">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.2)]" />
              <div className="w-full md:w-1/2">
                <div
                  className={`p-6 md:p-8 rounded-2xl glass-panel relative group hover:border-indigo-500/40 transition-all ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}
                >
                  {/* Badge */}
                  <div className="absolute top-6 right-6 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500">
                    {job.type}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{job.role}</h3>
                  <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-4 flex items-center gap-2">
                    <Briefcase size={14} />
                    {job.company}
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {job.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {job.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2" /> {/* Spacer */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

