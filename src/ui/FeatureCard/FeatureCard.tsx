"use client";
import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion"; // Added for elegant animations
import { FeatureCardJSON } from "./FeatureCardJSON";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const FeatureCard = () => {
  const { theme, resolvedTheme } = useTheme();
  const effectiveTheme = theme === "system" ? resolvedTheme : theme;
  return FeatureCardJSON.map((item, index) => {
    return (
      <motion.div
        key={index}
        variants={cardVariants as any}
        initial="hidden"
        animate="visible"
        custom={index}
        whileHover={{
          scale: 1.05,
          rotate: 1,
          boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <MagicCard
          gradientColor={effectiveTheme === "dark" ? "#334155" : "#e0e7ff"}
          className="hover:shadow-lg duration-200 hover:scale-[1.02] border dark:border-white/15 border-black/10"
        >
          <motion.div
            className="rounded-lg px-2 py-5 w-full"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              className="mx-auto flex h-20 w-20 pt-4 items-center justify-center rounded-full"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <Image
                width={500}
                height={500}
                src={item.imageLink}
                alt={item.title}
                className={`bg-transparent transition-transform duration-300 ${
                  item.isDark && effectiveTheme === "dark"
                    ? "filter invert"
                    : ""
                }`}
              />
            </motion.div>
            <motion.h3
              className="mt-4 text-xl font-semibold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ color: "#6366f1" }}
            >
              {item.title}
            </motion.h3>
            <motion.p
              className="mt-4 text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {item.description}
            </motion.p>
          </motion.div>
          <BorderBeam
            className="rounded-xl"
            size={120}
            duration={12}
            delay={9}
          />
        </MagicCard>
      </motion.div>
    );
  });
};

export default FeatureCard;
