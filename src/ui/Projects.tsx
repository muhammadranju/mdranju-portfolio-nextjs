/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Link from "next/link";
import posts from "@/data/data.json";
import Image from "next/image";
// import { getData } from "@/lib/getData";
export async function Projects() {
  // const posts = await getData();

  return (
    <div className=" w-full bg-inherit py-10 mt-10 mb-5">
      <hr className="my-6 w-full" />
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-9 md:space-y-0 lg:grid-cols-4">
        {posts.map((items: any) => (
          <div
            key={items.title}
            className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
          >
            {/* <Image placeholder="blur" src={items?.image} alt="jf" /> */}
            <Image
              src={items?.image}
              width={500}
              height={500}
              blurDataURL="blur"
              className="h-full  w-full rounded-md object-cover"
              alt={items?.title}
            />
            <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-800 to-transparent"></div>
            <div className="absolute bottom-10 left-4 text-left">
              <small className="text-white font-bold">
                {items?.category.toLowerCase()}
              </small>
              <h1 className="text-lg font-medium text-white">{items?.title}</h1>
              <p className="mt-2 text-sm text-white">{items?.details}</p>
              <Link href={items?.sourceCode} target="_blank">
                <button className="mt-2 mr-5  inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                  Source Code &rarr;
                </button>
              </Link>
              {items?.liveLink ? (
                <Link href={items?.liveLink} target="_blank">
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
