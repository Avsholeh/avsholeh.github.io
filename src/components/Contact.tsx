import { personalInfo, socialLinks } from "@/data";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github size={24} />;
      case "Linkedin":
        return <Linkedin size={24} />;
      case "Mail":
        return <Mail size={24} />;
      default:
        return <Mail size={24} />;
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-linear-to-t from-indigo-500/10 via-cyan-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
            Mari Bekerja Sama
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
            Saya selalu terbuka dengan peluang dan tantangan baru. Hubungi saya untuk mendiskusikan bagaimana saya
            dapat membantu membangun solusi teknologi berikutnya.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group w-full md:w-auto justify-center"
              >
                <div className="text-slate-400 group-hover:text-indigo-500 transition-colors">{getIcon(link.icon)}</div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  {link.platform === "Email" ? "Kirim Email" : link.platform}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-slate-200 dark:border-slate-800/50">
            <div className="text-sm font-medium text-slate-500 dark:text-slate-500">
              <p className="mt-2">
                © {new Date().getFullYear()} {personalInfo.name}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
