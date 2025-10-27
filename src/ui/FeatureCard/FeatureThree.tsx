"use client";
import { TextAnimate } from "@/components/ui/text-animate";
import { motion } from "framer-motion"; // Added for elegant animations
import FeatureCard from "./FeatureCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function FeatureThree() {
  return (
    <motion.div
      className="w-full py-20  relative overflow-hidden border-t border-b border-slate-300/50 dark:border-slate-600/50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 animate-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 -left-1/3 w-1/2 h-[500px] dark:bg-blue-500/10 bg-gray-500/20 rounded-full blur-3xl animate-pulse"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute top-96 -right-80 w-1/4 h-[200px] dark:bg-blue-500/10 bg-gray-500/20 rounded-full blur-3xl animate-pulse"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-10 -right-1/3 w-1/2 h-[800px] dark:bg-sky-500/5 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="mx-auto max-w-7xl  relative">
        <motion.div
          className="mx-auto max-w-xl text-center"
          variants={itemVariants as any}
        >
          <motion.h2
            className="inset-0 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-indigo-700"
            variants={itemVariants as any}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <TextAnimate animation="blurIn" by="word">
              My Skills
            </TextAnimate>
          </motion.h2>
          <motion.p
            className="mt-4 px-10 text-base leading-relaxed"
            variants={itemVariants as any}
          >
            <TextAnimate animation="slideUp" by="word">
              Here are the skills I specialize in and the services I provide to
              help bring your ideas to life.
            </TextAnimate>
          </motion.p>
        </motion.div>
        <motion.div
          className="mt-6 grid grid-cols-1 text-center sm:grid-cols-2  gap-3 lg:grid-cols-4 lg:px-0 px-10"
          variants={itemVariants as any}
        >
          <FeatureCard />
        </motion.div>
      </div>
    </motion.div>
  );
}
