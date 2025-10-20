"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { LightRays } from "@/components/ui/light-rays";
import ShinyButton from "@/components/ui/shiny-button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import image from "../../../../public/mdranju.jpg";
import { TextAnimate } from "@/components/ui/text-animate";

const Links = [
  {
    name: "GitHub",
    href: "https://github.com/muhammadranju",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammadranju",
    icon: FaLinkedin,
  },
  {
    name: "X",
    href: "https://x.com/muhammad_ranju",
    icon: BsTwitterX,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/aminhossainranju",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aminhossainranju",
    icon: FaInstagram,
  },
];

const Skills = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React.js",
  "Next.js",
  "Tailwind",
  "shadcn/ui",
  "Prism",
  "PostgreSQL",
  "MongoDB",
];

// Optimized animation variants - reduced complexity
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

function About() {
  return (
    <div className="relative overflow-hidden min-h-screen pt-10 bg-slate-100 dark:bg-[#020617]">
      <BackgroundBeams className="z-0" />

      <div className="mx-auto max-w-7xl px-4 py-20 relative">
        <motion.div
          className="relative flex flex-col lg:flex-row items-center justify-between gap-12 rounded-2xl p-8 lg:p-12 bg-gradient-to-br from-slate-50/80 to-indigo-50/80 dark:from-[#020617]/80 dark:to-[#020617]/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Profile Image Container - Simplified animations */}
          <motion.div
            className="relative w-full lg:w-1/2 h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl bg-white/50 dark:bg-slate-800/50 border-2 border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center p-4"
            variants={fadeIn as any}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <Image
              width={500}
              height={700}
              className="w-auto h-auto max-w-full max-h-full object-contain z-50 rounded-md"
              placeholder="blur"
              src={image}
              alt="Md Ranju"
              priority
            />
            {/* Simplified overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
          </motion.div>

          {/* Bio Content - Optimized animations */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            variants={fadeInUp as any}
          >
            {/* Title - Removed complex BoxReveal for performance */}
            <motion.h1
              className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400/30 bg-clip-text text-transparent mb-4"
              variants={fadeInUp as any}
            >
              <motion.h2
                className="inset-0 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-indigo-700"
                variants={fadeInUp as any}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                About Me<span className="text-indigo-500">.</span>
              </motion.h2>
            </motion.h1>

            {/* Bio Text - Simplified animation */}
            <motion.div
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed space-y-4"
              variants={fadeInUp as any}
            >
              <p>
                Hi, I&apos;m{" "}
                <span className="text-2xl font-bold text-indigo-500">
                  Md. Ranju
                </span>
                , a passionate Web Application Developer based in Rajshahi,
                Bangladesh. My journey in web development ignited in 2021—the
                same year I earned my Higher Secondary Certificate (HSC). Today,
                while pursuing my degree at Rajshahi College, I balance academic
                pursuits with relentless innovation in full-stack development.
              </p>

              <p>
                In the years since, I&apos;ve refined my craft to build
                scalable, responsive web applications that prioritize
                performance and user experience. My expertise now centers on
                modern tools and frameworks, including JavaScript, TypeScript,
                Node.js, React.js, Next.js, Tailwind CSS, shadcn/ui, Prism,
                PostgreSQL, MongoDB, and more. I&apos;m fueled by a dedication
                to architecting robust, intuitive solutions that drive real
                impact for clients and users.
              </p>
            </motion.div>

            {/* Skills Grid - Optimized stagger */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-5 gap-3 mt-6"
              variants={staggerContainer}
            >
              {Skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="px-4 py-2 bg-white/60 dark:bg-slate-800/60 rounded-lg backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 text-center text-sm font-medium text-slate-700 dark:text-slate-300 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default"
                  variants={fadeIn as any}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links - Simplified hover effects */}
            <motion.div
              className="flex items-center gap-4 mt-6"
              variants={fadeInUp as any}
            >
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                Connect With Me
              </p>
              <motion.div
                className="flex items-center gap-x-3"
                variants={staggerContainer}
              >
                {Links.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    aria-label={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-indigo-500"
                    variants={fadeIn as any}
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* CTA Button - Simplified */}
            <motion.div
              className="flex items-center mt-8"
              variants={fadeInUp as any}
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShinyButton className="px-8 py-4 rounded-full  text-white font-semibold shadow-lg  transition-all duration-300">
                    Let&apos;s Build Something Amazing
                  </ShinyButton>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <LightRays
        color="#6366f120"
        length="70vh"
        speed={10}
        count={7}
        className="z-0"
      />
    </div>
  );
}

export default About;
