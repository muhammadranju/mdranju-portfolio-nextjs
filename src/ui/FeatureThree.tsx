"use client";

/* eslint-disable react/no-unescaped-entities */

const imageLink = {
  react: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
  ),
  next: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
  ),

  node: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
  ),

  mongodb: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
  ),
};

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
          <h2 className=" text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 from-10% via-violet-500 via-30% to-sky-500 to-90%">
            Skills & Services
          </h2>
          <p className="mt-4 text-base leading-relaxed ">
            These are my working Skills & Services I have done.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div className="border-gray-500 rounded-lg p-5 border">
            <div className="mx-auto flex h-20 w-20  items-center justify-center rounded-full ">
              {imageLink.react}
            </div>
            <h3 className="mt-8 text-lg font-semibold">React.js</h3>

            <p className="mt-4 text-sm ">React.js for Frontend development.</p>
          </div>
          <div className="border-gray-500 rounded-lg p-5 border">
            <div className="mx-auto flex h-20 w-20 items-center  justify-center rounded-full ">
              {imageLink.next}
            </div>
            <h3 className="mt-8 text-lg font-semibold ">Next.js</h3>
            <p className="mt-4 text-sm ">
              Next.js for frontend and backend both development.
            </p>
          </div>
          <div className="border-gray-500 rounded-lg p-5 border">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
              {imageLink.node}
            </div>
            <h3 className="mt-8 text-lg font-semibold">Node.JS & Express.js</h3>
            <p className="mt-4 text-sm ">
              Node.JS & Express.js for backend API's development.
            </p>
          </div>
          <div className="border-gray-500 rounded-lg p-5 border">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
              {imageLink.mongodb}
            </div>
            <h3 className="mt-8 text-lg font-semibold ">MongoDB Database</h3>
            <p className="mt-4 text-sm ">
              MongoDB for backend API's Database Management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
