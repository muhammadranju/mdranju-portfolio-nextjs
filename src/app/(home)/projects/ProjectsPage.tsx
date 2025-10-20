"use client";
import getProject from "@/api/cron/route";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Meteors from "@/components/ui/meteors";
import { NumberTicker } from "@/components/ui/number-ticker";
import ScrollProgress from "@/components/ui/scroll-progress";
import ShineBorder from "@/components/ui/shine-border";
import { TextAnimate } from "@/components/ui/text-animate";
import CardSkeleton from "@/ui/Skeletons/CardSkeleton";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";
import { TfiReceipt } from "react-icons/tfi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
} as const;

function Project() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return await getProject();
    },
    staleTime: 60000,
  });

  return (
    <motion.div
      className="relative overflow-hidden bg-slate-100 dark:bg-[#020617] py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <ScrollProgress className="top-[0px]" />
      <Meteors number={30} />
      <div className="mx-auto max-w-7xl px-2">
        <motion.div
          className="flex flex-col py-10 md:pt-24 space-y-3"
          variants={itemVariants}
        >
          <motion.p
            className="text-3xl font-bold md:text-5xl md:leading-10 leading-tight sm:text-4xl lg:text-5xl text-indigo-700 lg:z-50"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <TextAnimate animation="blurInUp" by="word">
              Projects & Portfolio
            </TextAnimate>
          </motion.p>

          <motion.p
            className="lg:max-w-4xl text-base mb-2"
            variants={itemVariants}
          >
            Showcasing a selection of the{" "}
            <NumberTicker
              value={data?.project?.length || 0}
              className="whitespace-pre-wrap text-base font-medium tracking-tighter text-black dark:text-white"
            />{" "}
            projects I’ve developed with passion and dedication.
          </motion.p>
          <motion.hr
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
        </motion.div>

        <motion.div
          className="grid gap-3 md:grid-cols-2 rounded-xl lg:grid-cols-3"
          variants={itemVariants}
        >
          {isLoading && <CardSkeleton />}

          {!isLoading &&
            data?.project?.map((post: any, index: number) => (
              <motion.div
                key={post?._id}
                className="group" // Added group class here for full card hover
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
                <ShineBorder
                  className="relative flex lg:h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-background shadow-xl hover:shadow-xl duration-200 border dark:border-white/15 border-black/10"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                  <motion.div
                    className="border h-full rounded-xl shadow-xl bg-slate-100 dark:bg-[#020617]" // Removed group from here
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Image
                      src={post?.image}
                      className="aspect-video w-full rounded-t-xl border-b border-dashed border-slate-100/30 dark:border-slate-500/50"
                      width={500}
                      height={500}
                      blurDataURL="blur"
                      placeholder="blur"
                      alt={post?.title}
                    />
                    <div className="min-h-min px-3 py-2 space-y-3">
                      <p className="w-fit px-2 py-1 text-xs mt-4 font-semibold leading-tight border rounded-full">
                        #{post?.category.toLocaleLowerCase()}
                      </p>

                      <p
                        className="flex-1 text-base font-semibold"
                        title={post?.title}
                      >
                        {post?.title.length > 40
                          ? post?.title.substring(0, 38).concat("...")
                          : post?.title}
                      </p>
                      <p
                        className="w-full text-sm leading-normal"
                        title={post?.details}
                      >
                        {post?.details.length > 150
                          ? post?.details.substring(0, 150).concat("...")
                          : post?.details}
                      </p>

                      <div className="flex lg:space-x-3 space-x-2">
                        <Image
                          className="h-full lg:w-10 w-8 rounded-lg"
                          src={post?.avatar}
                          width={500}
                          height={500}
                          blurDataURL="blur"
                          placeholder="blur"
                          alt={post?.author}
                        />
                        <div>
                          <p className="text-xs font-semibold leading-tight">
                            {post?.author}
                          </p>
                          <span className="text-xs leading-tight">
                            Added:{" "}
                            {format(new Date(post?.createdAt), "dd/MM/yyyy")}
                          </span>
                        </div>

                        <div>
                          <motion.div
                            className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, rotate: 360 }}
                          >
                            <Link href={post?.sourceCode} target="_blank">
                              <HoverBorderGradient
                                containerClassName="rounded-lg"
                                as="button"
                                className="dark:bg-slate-800 bg-slate-200 text-slate-900 dark:text-slate-100 flex items-center space-x-2"
                              >
                                <FaGithub className="font-extrabold text-lg" />{" "}
                              </HoverBorderGradient>
                            </Link>
                          </motion.div>
                        </div>
                        {post?.liveLink ? (
                          <div>
                            <motion.div
                              className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              whileHover={{ scale: 1.1, rotate: -360 }}
                            >
                              <Link href={post?.liveLink} target="_blank">
                                <HoverBorderGradient
                                  containerClassName="rounded-lg"
                                  as="button"
                                  className="dark:bg-indigo-500 bg-indigo-500 text-slate-100 dark:text-slate-100 flex items-center space-x-2"
                                >
                                  <MdOpenInNew className="font-extrabold text-lg" />{" "}
                                </HoverBorderGradient>
                              </Link>
                            </motion.div>
                          </div>
                        ) : (
                          ""
                        )}
                        <div>
                          <motion.div
                            className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, rotate: 360 }}
                          >
                            <Link href={`/project/${post?._id}`}>
                              <HoverBorderGradient
                                containerClassName="rounded-lg"
                                as="button"
                                className="dark:bg-slate-800 bg-slate-200 text-slate-900 dark:text-slate-100 flex items-center space-x-2"
                              >
                                <TfiReceipt className="font-extrabold text-lg" />{" "}
                              </HoverBorderGradient>
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ShineBorder>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Project;
