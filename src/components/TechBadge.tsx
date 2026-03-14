import { motion } from "framer-motion";
import TechIcon from "@/components/TechIcon";

interface TechBadgeProps {
  name: string;
  className?: string;
}

const TechBadge = ({ name, className = "" }: TechBadgeProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center gap-1.5 rounded-full border border-border/50 px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors duration-200 ${className}`}
    >
      <TechIcon name={name} size={12} className="text-primary/60" />
      {name}
    </motion.div>
  );
};

export default TechBadge;
