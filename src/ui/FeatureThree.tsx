import React from "react";
import { Laptop, Hexagon, DatabaseZap, Code } from "lucide-react";

export function FeatureThree() {
  return (
    <div className="w-full py-20  dark:bg-gray-800/20 bg-gray-300/20">
      {/* <hr className="my-8   w-full" /> */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  ">
        <div className="mx-auto max-w-xl text-center">
          {/* <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-black">
              I have done all of my skills
            </p>
          </div> */}
          <h2 className=" text-3xl font-bold leading-tightsm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 from-10% via-violet-500 via-30% to-sky-500 to-90%">
            Skills & Services
          </h2>
          <p className="mt-4 text-base leading-relaxed ">
            This are my working Skills & Services
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Laptop className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold">
              BackEnd Web Development
            </h3>
            {/* <p className="mt-4 text-sm ">
              Node.js, Express.js, MongoDB, Mongoose and more.
            </p> */}
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Code className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold ">RESTful API</h3>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Hexagon className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold">Node.JS & Express</h3>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <DatabaseZap className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold ">MongoDB Database</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
