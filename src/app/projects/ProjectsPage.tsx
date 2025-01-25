"use client";
import getProject from "@/api/cron/route";
import ShineBorder from "@/components/ui/shine-border";
import SkeletonUI from "@/ui/SkeletonUI";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { HiViewGridAdd } from "react-icons/hi";
import { MdOpenInNew } from "react-icons/md";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Meteors from "@/components/ui/meteors";
import ScrollProgress from "@/components/ui/scroll-progress";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { NumberTicker } from "@/components/ui/number-ticker";

function Project() {
  const { data, isLoading, isError, error, isFetched } = useQuery({
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
          <div className="flex flex-col  pb-10 pt-12 md:pt-24">
            <p className="text-3xl font-bold  md:text-5xl md:leading-10 mb-8 leading-tight sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 from-10% via-cyan-500 via-30% to-sky-500 to-90% lg:z-50">
              Projects & Products
            </p>
            <hr />
            <p className="lg:max-w-4xl text-base  md:text-xl mt-8 mb-2">
              Here is some kind of{" "}
              <NumberTicker
                value={data?.project?.length || 0}
                className="whitespace-pre-wrap text-base md:text-xl font-medium tracking-tighter text-black dark:text-white"
              />{" "}
              {/* {data?.project?.length} */}
              project&apos;s i have finished.
            </p>
          </div>

          {isLoading && (
            <div
              className={`grid gap-6 gap-y-10 py-6 md:grid-cols-2  rounded lg:grid-cols-3 `}
            >
              <SkeletonUI />
              <SkeletonUI />
              <SkeletonUI />
              <SkeletonUI />
              <SkeletonUI />
              <SkeletonUI />
            </div>
          )}
          {!isLoading && (
            <div
              className={`grid gap-6   gap-y-6 py-6 md:grid-cols-2  rounded-xl lg:grid-cols-3 `}
            >
              {data?.project?.map((post: any) => (
                <ShineBorder
                  key={post?._id}
                  className="relative flex lg:h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-background md:shadow-xl"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                  <div className="border h-full group  rounded-xl shadow-xl dark:bg-slate-900 bg-slate-100 ">
                    <Image
                      src={post?.image}
                      className="aspect-video w-full  rounded-t-xl"
                      width={500}
                      height={500}
                      blurDataURL="blur"
                      placeholder="blur"
                      alt={post?.title}
                    />
                    <div className="min-h-min p-3">
                      <p className="mt-4 w-full text-xs font-semibold leading-tight ">
                        #{post?.category.toLocaleLowerCase()}
                      </p>
                      <div></div>
                      <p
                        className="mt-4 flex-1 text-base font-semibold"
                        title={post?.title}
                      >
                        {post?.title.length > 40
                          ? post?.title.substring(0, 38).concat("...")
                          : post?.title}
                      </p>
                      <p
                        className="mt-2 w-full text-sm leading-normal "
                        title={post?.details}
                      >
                        {post?.details.length > 150
                          ? post?.details.substring(0, 150).concat("...")
                          : post?.details}
                      </p>
                      {/* {post?.tags.length > 0 ? (
                        <div className="flex flex-row justify-center lowercase items-center mt-4 space-x-2">
                          <p className=" font-semibold capitalize">Tags:</p>
                          {post?.tags.map((tag: any) => (
                            <span className="text-sm ">{tag}</span>
                          ))}
                        </div>
                      ) : (
                        ""
                      )} */}

                      <div className="mt-4 flex lg:space-x-3 space-x-2 ">
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
                            {/* <button className="inset-x-0 flex gap-x-1 items-center rounded-lg shadow-md px-3 py-2.5 text-sm font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 bg-slate-800 text-white hover:bg-slate-700/90">
                              <FaGithub className="font-extrabold text-lg" />{" "}
                              Code
                            </button> */}
                            <HoverBorderGradient
                              containerClassName="rounded-lg"
                              as="button"
                              className="dark:bg-slate-800 bg-slate-200 text-slate-900 dark:text-slate-100 flex items-center space-x-2"
                            >
                              <FaGithub className="font-extrabold text-lg " />{" "}
                              {/* Code */}
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
                                {/* <button className="inset-x-0 flex gap-x-1 items-center rounded-lg shadow-md px-3 py-2.5 text-sm font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 bg-indigo-500 text-white hover:bg-indigo-600">
                                  <MdOpenInNew className="font-extrabold text-lg" />{" "}
                                  Live
                                </button> */}
                                <HoverBorderGradient
                                  containerClassName="rounded-lg"
                                  as="button"
                                  className="dark:bg-indigo-500 bg-indigo-500 text-slate-100 dark:text-slate-100 flex items-center space-x-2"
                                >
                                  <MdOpenInNew className="font-extrabold text-lg " />{" "}
                                  {/* Live */}
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
                            {/* <button className="inset-x-0 flex gap-x-1 items-center rounded-lg shadow-md px-3 py-2.5 text-sm font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 bg-slate-800 text-white hover:bg-slate-700/90">
                              <FaGithub className="font-extrabold text-lg" />{" "}
                              Code
                            </button> */}
                            <HoverBorderGradient
                              containerClassName="rounded-lg"
                              as="button"
                              className="dark:bg-slate-800 bg-slate-200 text-slate-900 dark:text-slate-100 flex items-center space-x-2"
                            >
                              <HiViewGridAdd className="font-extrabold text-lg " />{" "}
                              {/* Code */}
                            </HoverBorderGradient>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </ShineBorder>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Project;
