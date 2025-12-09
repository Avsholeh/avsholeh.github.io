import { useDynamicBadges } from "@/hooks/useDynamicBadges";
import type { Badge } from "@/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const colorClasses: Record<string, string> = {
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  emerald: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
  cyan: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400",
  indigo: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
  sky: "bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
};

export default function FloatingBadge() {
  const badges = useDynamicBadges();
  const [currentBadge, setCurrentBadge] = useState<Badge>(badges[0]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomBadge = badges[Math.floor(Math.random() * badges.length)];
      setCurrentBadge(randomBadge);
      setKey((prev) => prev + 1);
    }, Math.random() * 2000 + 3000); // 2–5 seconds

    return () => clearInterval(interval);
  }, []);

  // Random position around the photo (safe zone)
  const top = Math.random() * 70 + 15; // Controls vertical position (15% → 85%)
  const isLeftSide = Math.random() > 0.5; // Randomly picks left or right side
  const offset = Math.random() * 30 - 15; // Horizontal distance from the edge (-15% to +15%)

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute z-20 pointer-events-none"
      style={{
        top: `${top}%`,
        left: isLeftSide ? `${offset}%` : "auto",
        right: !isLeftSide ? `${offset}%` : "auto",
        transform: "translateY(-50%)",
      }}
    >
      <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 min-w-[150px] backdrop-blur-sm">
        <div className={`p-2.5 rounded-xl ${colorClasses[currentBadge.color]}`}>{currentBadge.icon}</div>
        <div className="text-left">
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400">{currentBadge.label}</div>
          <div className="font-bold text-slate-900 dark:text-white text-sm leading-tight">{currentBadge.value}</div>
        </div>
      </div>
    </motion.div>
  );
}
