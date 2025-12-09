import { skills } from "@/data";
import type { Badge } from "@/types";
import { Code2Icon, LayoutDashboardIcon, ServerIcon, WrenchIcon } from "lucide-react";
import { useMemo } from "react";

const setIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "languages":
      return <Code2Icon />;
    case "frontend":
      return <LayoutDashboardIcon />;
    case "backend":
      return <ServerIcon />;
    case "infrastructure & tools":
      return <WrenchIcon />;
    default:
      return <span className="text-xl">{category.slice(0, 2).toUpperCase()}</span>;
  }
};

const useDynamicBadges = (): Badge[] => {
  return useMemo(() => {
    const badges: Badge[] = skills
      .map((skill) => {
        return skill.skills.map((s) => {
          return {
            icon: setIcon(skill.category),
            label: skill.category,
            value: s,
            color: ["blue", "emerald", "cyan", "indigo", "sky", "purple"][
              Math.floor(Math.random() * 6)
            ] as Badge["color"],
          };
        });
      })
      .flat();

    return badges;
  }, []);
};

export { useDynamicBadges };
