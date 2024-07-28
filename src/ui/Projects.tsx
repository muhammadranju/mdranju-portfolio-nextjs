/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import getProject from "@/config/config";

export async function Projects() {
  const result = await getProject();
  const post = result.slice(0, 4);

  return (
    <div className=" w-full py-10 mb-5 ">
      {/* <hr className="my-6 w-full" /> */}
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-9 md:space-y-0 lg:grid-cols-4">
        {post.map((post: any) => (
          <div
            key={post.title}
            className="relative aspect-[16/9] shadow-lg  w-auto rounded-md md:aspect-auto md:h-[400px]"
          >
            <Image
              src={post?.image}
              width={500}
              height={500}
              blurDataURL="blur"
              className="h-full  w-full rounded-md object-cover"
              alt={post?.title}
            />

            <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-800 to-transparent"></div>
            <div className="absolute bottom-10 left-4 text-left">
              <small className="text-white font-bold">
                {post?.category.toLowerCase()}
              </small>
              <h1 className="text-lg font-medium text-white">{post?.title} </h1>
              <p className="mt-2 text-sm text-white">
                {post.details.length !== 12
                  ? post?.details.slice(0, 36).concat("...")
                  : post?.details}
              </p>
              <Link href={post?.sourceCode} target="_blank">
                <button className="mt-2 mr-5  inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                  Source Code &rarr;
                </button>
              </Link>
              {post?.liveLink ? (
                <Link href={post?.liveLink} target="_blank">
                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    Live Demo &rarr;
                  </button>
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-center  text-center">
        <Link href={"/works"}>
          <button className="rounded-lg shadow-xl px-3 py-2.5 text-sm font-semibold bg-indigo-500 text-white hover:bg-indigo-600 ">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}
