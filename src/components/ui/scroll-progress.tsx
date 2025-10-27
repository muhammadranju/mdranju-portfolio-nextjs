"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "motion/react";

interface ScrollProgressProps {
  className?: string;
}

export default function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      // ["#6366f1", "#6006f1", "#7322f1"]
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r from-[#6366f1] via-[#6006f1] to-[#7322f1]",
        className
      )}
      style={{
        scaleX,
      }}
    />
  );
}
