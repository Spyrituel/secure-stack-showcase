import { forwardRef, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

const ParallaxSection = forwardRef<HTMLDivElement, ParallaxSectionProps>(
  ({ children, offset = 30, className = "" }, _ref) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: innerRef,
      offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.85]);

    return (
      <div ref={innerRef} className={`relative ${className}`}>
        <motion.div style={{ y, opacity }}>
          {children}
        </motion.div>
      </div>
    );
  }
);

ParallaxSection.displayName = "ParallaxSection";

export default ParallaxSection;
