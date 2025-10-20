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
import { FaGithub } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";
import { TfiReceipt } from "react-icons/tfi";

function Project() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return await getProject();
    },
    staleTime: 60000,
  });

  return (
    <>
      <div className="relative overflow-hidden bg-slate-100 dark:bg-[#020617]  py-20">
        <ScrollProgress className="top-[0px]" />
        <Meteors number={30} />
        <div className="mx-auto max-w-7xl px-2">
          <div className="flex flex-col  py-10 md:pt-24 space-y-3">
            <p className="text-3xl font-bold  md:text-5xl md:leading-10 leading-tight sm:text-4xl lg:text-5xl text-indigo-700  lg:z-50">
              <TextAnimate animation="blurInUp" by="word">
                Projects & Portfolio
              </TextAnimate>
            </p>

            <p className="lg:max-w-4xl text-base mb-2">
              Showcasing a selection of the{" "}
              <NumberTicker
                value={data?.project?.length || 0}
                className="whitespace-pre-wrap text-base font-medium tracking-tighter text-black dark:text-white"
              />{" "}
              projects I’ve developed with passion and dedication.
            </p>
            <hr />
          </div>

          <div
            className={`grid gap-3 md:grid-cols-2  rounded-xl lg:grid-cols-3 `}
          >
            {isLoading && <CardSkeleton />}

            {!isLoading &&
              data?.project?.map((post: any) => (
                <ShineBorder
                  key={post?._id}
                  className="relative flex lg:h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-xl  bg-background shadow-md hover:shadow-lg duration-200 hover:scale-[1.02] border dark:border-white/15 border-black/10"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                  <div className="border h-full group rounded-xl shadow-xl bg-slate-100 dark:bg-[#020617] ">
                    <Image
                      src={post?.image}
                      className="aspect-video w-full  rounded-t-xl border-b border-dashed border-slate-100/30 dark:border-slate-500/50 "
                      width={500}
                      height={500}
                      blurDataURL="blur"
                      placeholder="blur"
                      alt={post?.title}
                    />
                    <div className="min-h-min px-3 py-2  space-y-3">
                      <p className="w-fit px-2 py-1 text-xs  mt-4 font-semibold leading-tight border  rounded-full ">
                        #{post?.category.toLocaleLowerCase()}
                      </p>

                      <p
                        className=" flex-1 text-base font-semibold"
                        title={post?.title}
                      >
                        {post?.title.length > 40
                          ? post?.title.substring(0, 38).concat("...")
                          : post?.title}
                      </p>
                      <p
                        className="w-full text-sm leading-normal  "
                        title={post?.details}
                      >
                        {post?.details.length > 150
                          ? post?.details.substring(0, 150).concat("...")
                          : post?.details}
                      </p>

                      <div className=" flex lg:space-x-3 space-x-2 ">
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
                          <span className="text-xs leading-tight ">
                            Added:{" "}
                            {format(new Date(post?.createdAt), "dd/MM/yyyy")}
                          </span>
                        </div>

                        <div>
                          <Link
                            href={post?.sourceCode}
                            target="_blank"
                            className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                          >
                            <HoverBorderGradient
                              containerClassName="rounded-lg"
                              as="button"
                              className="dark:bg-slate-800 bg-slate-200 text-slate-900 dark:text-slate-100 flex items-center space-x-2"
                            >
                              <FaGithub className="font-extrabold text-lg " />{" "}
                            </HoverBorderGradient>
                          </Link>
                        </div>
                        {post?.liveLink ? (
                          <>
                            <div>
                              <Link
                                href={post?.liveLink}
                                target="_blank"
                                className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                              >
                                <HoverBorderGradient
                                  containerClassName="rounded-lg"
                                  as="button"
                                  className="dark:bg-indigo-500 bg-indigo-500 text-slate-100 dark:text-slate-100 flex items-center space-x-2"
                                >
                                  <MdOpenInNew className="font-extrabold text-lg " />{" "}
                                </HoverBorderGradient>
                              </Link>
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                        <div>
                          <Link
                            href={`/project/${post?._id}`}
                            className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                          >
                            <HoverBorderGradient
                              containerClassName="rounded-lg"
                              as="button"
                              className="dark:bg-slate-800 bg-slate-200 text-slate-900 dark:text-slate-100 flex items-center space-x-2"
                            >
                              <TfiReceipt className="font-extrabold text-lg " />{" "}
                            </HoverBorderGradient>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </ShineBorder>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
