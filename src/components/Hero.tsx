import { personalInfo } from "@/data";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden relative">
      {/* Background Decor - Animated */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-12 md:px-24 lg:px-48 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Side: Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Tersedia untuk peluang baru
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-bold tracking-tight space-y-2 mb-6 bg-clip-text text-transparent bg-linear-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-slate-500 leading-tight"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-cyan-400">
                Muhammad Sholeh
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl ">Fullstack Developer</div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold transition-all hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
              >
                Lihat Proyek
                <ArrowRight size={18} />
              </a>

              <a
                href="#experience"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-white dark:hover:bg-slate-800 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Code2 size={18} />
                Riwayat Kerja
              </a>
            </motion.div>
          </div>

          {/* Right Side: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex justify-center md:justify-end relative"
          >
            {/* Decorative Circle behind image */}
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 to-cyan-400/20 rounded-full blur-3xl transform scale-110 md:scale-125 -z-10" />

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-white/10 relative">
                  <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10" />
                  <img src={personalInfo.photo} alt={personalInfo.name} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Floating Badge 1 */}
              {/* <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 -left-4 md:-left-10 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-400">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Experience</div>
                  <div className="font-bold text-slate-900 dark:text-white">3+ Years</div>
                </div>
              </motion.div> */}

              {/* Floating Badge 2 */}
              {/* <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-10 -right-4 md:-right-4 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
              >
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg text-emerald-600 dark:text-emerald-400">
                  <Download size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Projects</div>
                  <div className="font-bold text-slate-900 dark:text-white">Completed</div>
                </div>
              </motion.div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
