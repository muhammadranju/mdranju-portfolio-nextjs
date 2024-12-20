"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import getProject from "@/api/cron/route";
import { useEffect, useState } from "react";
import SkeletonUI2 from "./SkeletonUI2";

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

  const post = result?.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto py-10 mb-5 flex flex-col items-center justify-center lg:px-0 px-3">
      <div className="mx-auto w-auto container   rounded-full bg-gray-200 dark:bg-slate-100 px-4 py-1.5">
        <p className="lg:text-lg text-sm font-extrabold uppercase text-center  tracking-widest text-slate-900">
          Hare are some of my projects I have done.
        </p>
      </div>
      {loading && (
        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:px-0 px-3 rounded-2xl lg:grid-cols-4">
          <SkeletonUI2 />
          <SkeletonUI2 />
          <SkeletonUI2 />
          <SkeletonUI2 />
          <SkeletonUI2 />
          <SkeletonUI2 />
          <SkeletonUI2 />
          <SkeletonUI2 />
        </div>
      )}
      {!loading && (
        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:px-0 px-3 rounded-2xl lg:grid-cols-4">
          {post.map((post: any) => (
            <div
              key={post?.title}
              className="border  rounded-xl dark:bg-slate-900 bg-slate-100 shadow-md "
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
                <p className="mt-4 w-full text-xs font-semibold leading-tight ">
                  #{post?.category.toLocaleLowerCase()}
                </p>
                <p
                  className="mt-4 flex-1 text-base font-semibold"
                  title={post?.title}
                >
                  {post?.title.length > 40
                    ? post?.title.substring(0, 50).concat("...")
                    : post?.title}
                </p>
                <p
                  className="mt-2 w-full text-sm leading-normal "
                  title={post?.details}
                >
                  {post?.details.length > 150
                    ? post?.details.substring(0, 80).concat("...")
                    : post?.details}
                </p>
                <div className="mt-4  flex justify-center items-center space-x-10 ">
                  <div>
                    <button className="rounded-lg shadow-md px-3 py-2.5 text-sm font-semibold bg-slate-700 text-white hover:bg-indigo-600">
                      <Link href={post?.sourceCode} target="_blank">
                        View Code
                      </Link>
                    </button>
                  </div>
                  {post?.liveLink ? (
                    <div>
                      <button className="rounded-lg shadow-md px-3 py-2.5 text-sm font-semibold bg-indigo-500 text-white hover:bg-indigo-600">
                        <Link href={post?.liveLink} target="_blank">
                          Live Demo
                        </Link>
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className=" flex justify-center items-center  text-center">
        <Link href={"/projects"}>
          <button className="rounded-lg shadow-xl px-3 py-2.5 text-base font-semibold bg-indigo-500 text-white hover:bg-indigo-600 ">
            More Project
          </button>
        </Link>
      </div>
    </div>
  );
}
