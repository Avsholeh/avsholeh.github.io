import { certificates } from "@/data";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-48">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-bold mb-4 dark:text-white text-slate-900">Sertifikasi</h2>
          <div className="h-1 w-20 bg-cyan-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl flex flex-col h-full hover:border-cyan-500/30 transition-colors"
            >
              <div className="mb-4 p-3 w-fit rounded-lg bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400">
                <Award size={24} />
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">{cert.name}</h3>

              <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">{cert.issuer}</div>

              {cert.description && (
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-1">{cert.description}</p>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                  <Calendar size={12} /> {cert.date}
                </span>
                {cert.links && (
                  <div className="flex space-x-3">
                    {cert.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                        aria-label={`Verify ${cert.name}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
