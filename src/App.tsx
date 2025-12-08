import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import ProjectDetail from "@/components/ProjectDetail";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ThemeToggle from "@/components/ThemeToggle";
import type { Project } from "@/types";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
  };

  const handleBackToHome = () => {
    setActiveProject(null);
  };

  return (
    <div className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 selection:bg-indigo-500/30">
      <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-500 to-cyan-400 z-50 origin-left"
          style={{ scaleX }}
        />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="container mx-auto px-6 md:px-12 lg:px-48 h-16 flex items-center justify-between">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleBackToHome();
              }}
              className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              MS<span className="text-indigo-500">.</span>
            </a>

            <div className="flex items-center gap-6">
              {!activeProject && (
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
                  <a href="#about" className="hover:text-indigo-500 transition-colors">
                    Tentang
                  </a>
                  <a href="#skills" className="hover:text-indigo-500 transition-colors">
                    Keahlian
                  </a>
                  <a href="#projects" className="hover:text-indigo-500 transition-colors">
                    Proyek
                  </a>
                  <a href="#experience" className="hover:text-indigo-500 transition-colors">
                    Pengalaman
                  </a>
                  <a href="#education" className="hover:text-indigo-500 transition-colors">
                    Pendidikan
                  </a>
                  <a href="#certificates" className="hover:text-indigo-500 transition-colors">
                    Sertifikasi
                  </a>
                </div>
              )}
              <ThemeToggle isDark={isDark} toggle={toggleTheme} />
            </div>
          </div>
        </nav>

        <main className="relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
          <AnimatePresence mode="wait">
            {activeProject ? (
              <ProjectDetail key="project-detail" project={activeProject} onBack={handleBackToHome} />
            ) : (
              <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Hero />
                <Skills />
                <Projects onProjectClick={handleProjectClick} />
                <Experience />
                <Education />
                <Certificates />
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
