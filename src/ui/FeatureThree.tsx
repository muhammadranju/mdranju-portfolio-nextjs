"use client";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

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
  const { theme, resolvedTheme } = useTheme();

  const effectiveTheme = theme === "system" ? resolvedTheme : theme;
  return (
    <div className="w-full py-20   dark:bg-slate-900/30 bg-gray-300/20">
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
        <div className="mt-12 grid grid-cols-1 gap-y-8 lg:px-0 px-6 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <MagicCard
            gradientColor={effectiveTheme === "dark" ? "#334155" : "#e0e7ff"}
          >
            <div className="rounded-lg p-5 w-full">
              <div className="mx-auto flex h-20 w-20 items-center  justify-center rounded-full ">
                {imageLink.react}
              </div>
              <h3 className="mt-8 text-lg font-semibold ">React.js</h3>
              <p className="mt-4 text-sm ">
                React.js for Frontend and User-Interface Development.
              </p>
            </div>
            <BorderBeam
              className="rounded-xl"
              size={120}
              duration={12}
              delay={9}
            />
          </MagicCard>

          <MagicCard
            gradientColor={effectiveTheme === "dark" ? "#334155" : "#e0e7ff"}
          >
            <div className="rounded-lg p-5">
              <div className="mx-auto flex h-20 w-20 items-center  justify-center rounded-full ">
                {imageLink.next}
              </div>
              <h3 className="mt-8 text-lg font-semibold ">Next.js</h3>
              <p className="mt-4 text-sm ">
                Next.js for Frontend and Backend Both Development.
              </p>
            </div>
            <BorderBeam
              className="rounded-xl"
              size={120}
              duration={12}
              delay={9}
            />
          </MagicCard>

          <MagicCard
            gradientColor={effectiveTheme === "dark" ? "#334155" : "#e0e7ff"}
          >
            <div className="rounded-lg p-5">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
                {imageLink.node}
              </div>
              <h3 className="mt-8 text-lg font-semibold">
                Node.JS & Express.js
              </h3>
              <p className="mt-4 text-sm ">
                Node.JS & Express.js for Backend API's Development.
              </p>
            </div>
            <BorderBeam
              className="rounded-xl"
              size={100}
              duration={12}
              delay={9}
            />
          </MagicCard>

          <MagicCard
            gradientColor={effectiveTheme === "dark" ? "#334155" : "#e0e7ff"}
          >
            <div className="rounded-lg p-5">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
                {imageLink.mongodb}
              </div>
              <h3 className="mt-8 text-lg font-semibold ">MongoDB Database</h3>
              <p className="mt-4 text-sm ">
                MongoDB for Backend API's Database Management.
              </p>
            </div>
            <BorderBeam
              className="rounded-xl"
              size={120}
              duration={12}
              delay={9}
            />
          </MagicCard>
        </div>
      </div>
      {/* <div className="flex justify-center items-center mt-12 container mx-auto px-3">
        <Marquee pauseOnHover className="[--duration:8s]">
          <img
            className="w-14"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          />
          <img
            className="w-14"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          />
          <img
            className="w-14"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          />
          <img
            className="w-14"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          />

          <img
            className="w-14"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          />
          <img
            className="w-14 bg-slate-100 p-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
          />

          <img
            className="w-14"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          />
        </Marquee>
      </div> */}
    </div>
  );
}
