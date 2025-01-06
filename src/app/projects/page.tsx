/* eslint-disable react/jsx-key */
"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import getProject from "@/api/cron/route";
import { useEffect, useState } from "react";
import SkeletonUI from "@/ui/SkeletonUI";
import ShineBorder from "@/components/ui/shine-border";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { HiViewGridAdd } from "react-icons/hi";

import { format } from "date-fns";
import Meteors from "@/components/ui/meteors";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

function Works() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProject();
      setPosts(data.project);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <title>Project's - MDR</title>

      <div className="relative overflow-hidden bg-slate-100 dark:bg-[#020617]  py-20">
        <Meteors number={30} />
        <div className="mx-auto max-w-7xl px-2">
          <div className="flex flex-col  pb-10 pt-12 md:pt-24">
            <p className="text-3xl font-bold  md:text-5xl md:leading-10 mb-8 leading-tightsm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 from-10% via-cyan-500 via-30% to-sky-500 to-90% z-50">
              Projects & Products
            </p>
            <hr />
            <p className="lg:max-w-4xl text-base  md:text-xl mt-8 mb-2">
              Here is some kind of {posts.length} project's i have finished.
            </p>
          </div>
          {loading && (
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
          {!loading && (
            <div
              className={`grid gap-6   gap-y-6 py-6 md:grid-cols-2  rounded-xl lg:grid-cols-3 `}
            >
              {posts.map((post: any) => (
                <ShineBorder
                  className="relative flex lg:h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-background md:shadow-xl"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                  <div
                    key={post?._id}
                    className="border h-full group  rounded-xl shadow-xl dark:bg-slate-900 bg-slate-100 "
                  >
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
                      <div>
                        {/* <Link href={`/project/${post?._id}`} target="_blank">
                          <button className="rounded-lg shadow-md px-3 py-2.5 text-sm font-semibold bg-indigo-500 text-white hover:bg-indigo-600">
                            View Project
                          </button>
                        </Link> */}
                      </div>
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

export default Works;
