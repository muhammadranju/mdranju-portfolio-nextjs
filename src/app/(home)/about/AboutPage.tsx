"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import BoxReveal from "@/components/ui/box-reveal";
import { LightRays } from "@/components/ui/light-rays";
import ShinyButton from "@/components/ui/shiny-button";
import Image from "next/image";
import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion"; // Ensure this import is after 'use client'
import image from "../../../../public/mdranju.jpg";

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

function About() {
  return (
    <div className="relative overflow-hidden min-h-screen pt-10">
      <BackgroundBeams className="z-0" />
      <div className="mx-auto max-w-7xl px-4 py-20  relative">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 rounded-2xl p-8 lg:p-12 bg-gradient-to-br from-slate-50/80 to-indigo-50/80 dark:from-[#020617]/80 dark:to-[#020617]/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
          {/* Profile Image Container - Card-like with full height display */}
          <motion.div
            className="relative w-full lg:w-1/2 h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl bg-white/50 dark:bg-slate-800/50 border-2 border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center p-4" // Added card-like border, bg, padding; fixed heights to match image (500px mobile, 700px lg); flex center for full show inside "card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <Image
              width={500}
              height={700}
              className="w-auto h-auto max-w-full max-h-full object-contain z-50 rounded-md" // w-auto h-auto to preserve original aspect; max-w-full max-h-full ensures it fits inside the card without cropping; object-contain for full visibility
              placeholder="blur"
              src={image}
              alt="Md Ranju"
            />
            {/* Creative Beam Effect on Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          </motion.div>

          {/* Bio Content with Enhanced Animations */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Animated Title */}
            <BoxReveal boxColor="#6366f1" duration={0.5}>
              <motion.h1
                className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-600/20 bg-clip-text text-transparent mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                About Me<span className="text-indigo-500 animate-pulse">.</span>
              </motion.h1>
            </BoxReveal>

            {/* Greeting and Bio Text with Staggered Animation */}
            <motion.p
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              Hi, I&apos;m{" "}
              <motion.span
                className="text-2xl font-bold text-indigo-500"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Md. Ranju
              </motion.span>
              <TextAnimate animation="fadeIn" by="character" className="inline">
                , a passionate Web Application Developer based in Rajshahi,
                Bangladesh. My journey in web development ignited in 2021—the
                same year I earned my Higher Secondary Certificate (HSC). Today,
                while pursuing my degree at Rajshahi College, I balance academic
                pursuits with relentless innovation in full-stack development.
              </TextAnimate>
              <br />
              <TextAnimate
                animation="fadeIn"
                by="character"
                className="mt-4 block"
              >
                In the years since, I&apos;ve refined my craft to build
                scalable, responsive web applications that prioritize
                performance and user experience. My expertise now centers on
                modern tools and frameworks, including JavaScript, TypeScript,
                Node.js, React.js, Next.js, Tailwind CSS, shadcn/ui, Prism,
                PostgreSQL, MongoDB, and more. I&apos;m fueled by a dedication
                to architecting robust, intuitive solutions that drive real
                impact for clients and users.
              </TextAnimate>
            </motion.p>

            {/* Interactive Skills Grid */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-5 gap-3 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {Skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="px-4 py-2 bg-white/60 dark:bg-slate-800/60 rounded-lg backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 text-center text-sm font-medium text-slate-700 dark:text-slate-300 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  // transition={{ delay: index * 0.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links with Hover Effects */}
            <motion.div
              className="flex items-center gap-4 mt-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                Connect With Me
              </p>
              <div className="flex items-center gap-x-3">
                {Links.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    aria-label={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-indigo-500"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <link.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Enhanced CTA Button */}
            <motion.div
              className="flex items-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/contact">
                <ShinyButton className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1 transition-all duration-300">
                  Let&apos;s Build Something Amazing
                </ShinyButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
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
