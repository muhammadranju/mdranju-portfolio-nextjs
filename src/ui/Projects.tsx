"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import getProject from "@/api/cron/route";
import { useEffect, useState } from "react";
import SkeletonUI2 from "./SkeletonUI2";
import { RainbowButton } from "@/components/ui/rainbow-button";
import RippleButton from "@/components/ui/ripple-button";
import { FaGithub } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { HiViewGridAdd } from "react-icons/hi";

export function Projects() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProject();
      setResult(data.project);
      setLoading(false);
    };
    fetchData();
  }, []);

  const post = result?.slice(0, 6);

  return (
    <div className="bg-slate-100 dark:bg-[#020617] ">
      <div className="max-w-7xl  mx-auto py-20 flex flex-col items-center justify-center px-4 lg:px-6">
        {/* Title Section */}
        <div className="w-full max-w-3xl mx-auto rounded-full bg-gray-200 dark:bg-slate-100 px-4 py-2">
          <p className="lg:text-lg text-sm font-extrabold uppercase text-center tracking-widest text-slate-900">
            Here are some of my projects I have done.
          </p>
        </div>

        {/* Skeleton UI */}
        {loading && (
          <div className="grid gap-6 py-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto">
            <SkeletonUI2 />
            <SkeletonUI2 />
            <SkeletonUI2 />
            <SkeletonUI2 />
            <SkeletonUI2 />
            <SkeletonUI2 />
          </div>
        )}

        {/* Project Cards */}
        {!loading && (
          <div className="grid gap-6 py-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto">
            {post.map((post: any) => (
              <div
                key={post?.title}
                className="group relative border rounded-xl dark:bg-slate-900 bg-slate-100 shadow-md"
              >
                <Image
                  src={post?.image}
                  className="aspect-video w-full rounded-t-xl"
                  width={500}
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
                <div className="absolute inset-x-0 bottom-3 flex justify-center items-center space-x-2 transition-all duration-300 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0">
                  <div>
                    <Link
                      href={post?.sourceCode}
                      target="_blank"
                      className="flex gap-x-1 items-center"
                    >
                      {/* <button className="flex gap-x-1 items-center rounded-lg shadow-md px-3 py-2.5 text-sm font-semibold bg-slate-800 text-white hover:bg-slate-700"> */}
                      <HoverBorderGradient
                        containerClassName="rounded-lg"
                        as="button"
                        className="dark:bg-slate-800 bg-slate-100 text-slate-700 dark:text-slate-100 flex items-center space-x-2"
                      >
                        <FaGithub className="font-extrabold text-lg mr-1" />{" "}
                        GitHub
                      </HoverBorderGradient>
                      {/* </button> */}
                    </Link>
                  </div>
                  {post?.liveLink && (
                    <div>
                      <Link href={post?.liveLink} target="_blank">
                        {/* <button className="rounded-lg flex gap-x-1 items-center shadow-md px-3 py-2.5 text-sm font-semibold bg-indigo-500 text-white hover:bg-indigo-600"> */}
                        <HoverBorderGradient
                          containerClassName="rounded-lg"
                          as="button"
                          className="dark:bg-indigo-500 bg-slate-100 text-slate-700 dark:text-slate-100 flex items-center space-x-2"
                        >
                          <MdOpenInNew className="font-extrabold text-lg mr-1" />{" "}
                          Live
                        </HoverBorderGradient>
                        {/* </button> */}
                      </Link>
                    </div>
                  )}
                  <div>
                    <Link
                      href={`/project/${post?._id}`}
                      className="flex gap-x-1 items-center"
                    >
                      {/* <button className="flex gap-x-1 items-center rounded-lg shadow-md px-3 py-2.5 text-sm font-semibold bg-slate-800 text-white hover:bg-slate-700"> */}
                      <HoverBorderGradient
                        containerClassName="rounded-lg"
                        as="button"
                        className="dark:bg-slate-800 bg-slate-100 text-slate-700 dark:text-slate-100 flex items-center space-x-2"
                      >
                        <HiViewGridAdd className="font-extrabold text-lg mr-1" />{" "}
                        Details
                      </HoverBorderGradient>
                      {/* </button> */}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Section */}
        <div className="flex justify-center items-center text-center">
          <Link href={"/projects"}>
            <RainbowButton>More Projects</RainbowButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
