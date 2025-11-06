"use client";
import getProject from "@/api/cron/route";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TextAnimate } from "@/components/ui/text-animate";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";
import { TfiReceipt } from "react-icons/tfi";
import HomeSkeletonCard from "../Skeletons/HomeSkeletonCard";
import ShinyButton from "@/components/ui/shiny-button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export function Projects() {
  const { data, isLoading, isError, error, isFetched } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      return await getProject();
    },
    staleTime: 60000,
  });

  if (isError) {
    return <div>{String(error)}</div>;
  }

  const post = data?.project?.slice(0, 6);
  return (
    <motion.div
      className=""
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className=" mx-auto pt-20 pb-5 flex flex-col items-center justify-center mb-2 border-b  border-slate-200/50 dark:border-slate-700/50">
        {/* Title Section */}
        <motion.h4
          className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-indigo-700"
          variants={itemVariants as any}
        >
          <motion.p
            className="text-3xl font-bold md:text-5xl md:leading-10 leading-tight sm:text-4xl lg:text-5xl text-indigo-700 lg:z-50"
            variants={itemVariants as any}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <TextAnimate animation="blurIn" by="word">
              Projects & Portfolio
            </TextAnimate>
          </motion.p>
        </motion.h4>

        <motion.p
          className="mt-4 text-base leading-relaxed lg:w-1/3 w-[90%] w mx-auto text-center"
          variants={itemVariants as any}
        >
          <TextAnimate animation="slideUp" by="word">
            Showcasing some of my completed projects — along with many others
            I’ve had the pleasure of working on.
          </TextAnimate>
        </motion.p>

        {/* Project Cards */}
        <motion.div
          className="grid gap-3 py-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto lg:px-0 px-3"
          variants={itemVariants as any}
        >
          {isLoading && <HomeSkeletonCard />}

          {!isLoading &&
            post?.map((post: any, index: number) => (
              <motion.div
                key={post?.title}
                className="group relative rounded-xl shadow-md duration-200 border dark:border-white/15 border-black/10"
                variants={cardVariants as any}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.02,
                  rotate: 0.5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <Image
                  src={post?.image}
                  className="aspect-video w-full rounded-t-xl border-b border-dashed border-slate-800/30 dark:border-slate-500/50"
                  width={700}
                  height={500}
                  blurDataURL="blur"
                  placeholder="blur"
                  alt={post?.title}
                />
                <div className="min-h-min p-3">
                  <p className="mt-4 w-full text-xs font-semibold leading-tight">
                    #{post?.category.toLocaleLowerCase()}
                  </p>
                  <p
                    className="mt-4 flex-1 text-base font-semibold"
                    title={post?.title}
                  >
                    {post?.title.length > 40
                      ? post?.title.substring(0, 30).concat("...")
                      : post?.title}
                  </p>
                  <p
                    className="mt-2 w-full text-sm leading-normal"
                    title={post?.details}
                  >
                    {post?.details.length > 150
                      ? post?.details.substring(0, 80).concat("...")
                      : post?.details}
                  </p>
                </div>
                {/* Button Container */}
                <motion.div
                  className="absolute inset-x-0 bottom-3 flex justify-center items-center space-x-2 transition-all duration-300 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div>
                    <Link
                      href={post?.sourceCode}
                      target="_blank"
                      className="flex gap-x-1 items-center"
                    >
                      <HoverBorderGradient
                        containerClassName="rounded-lg"
                        as="button"
                        className="dark:bg-slate-900 bg-slate-100 text-slate-700 dark:text-slate-100 flex items-center space-x-2"
                      >
                        <FaGithub className="font-extrabold text-lg mr-1" />{" "}
                        GitHub
                      </HoverBorderGradient>
                    </Link>
                  </div>
                  {post?.liveLink && (
                    <div>
                      <Link href={post?.liveLink} target="_blank">
                        <HoverBorderGradient
                          containerClassName="rounded-lg"
                          as="button"
                          className="bg-indigo-600   text-slate-100 flex items-center space-x-2"
                        >
                          <MdOpenInNew className="font-extrabold text-lg mr-1" />{" "}
                          Live
                        </HoverBorderGradient>
                      </Link>
                    </div>
                  )}
                  <div>
                    <Link
                      href={`/project/${post?.slug}`}
                      className="flex gap-x-1 items-center"
                    >
                      <HoverBorderGradient
                        containerClassName="rounded-lg"
                        as="button"
                        className="dark:bg-slate-900 bg-slate-100 text-slate-700 dark:text-slate-100 flex items-center space-x-2"
                      >
                        <TfiReceipt className="font-extrabold text-lg mr-1" />{" "}
                        Details
                      </HoverBorderGradient>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
        </motion.div>

        {/* Footer Section */}
        <motion.div
          className="flex justify-center items-center text-center"
          variants={itemVariants as any}
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href={"/projects"}>
            <ShinyButton className="rounded-full py-4 px-10">
              More Projects
            </ShinyButton>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
