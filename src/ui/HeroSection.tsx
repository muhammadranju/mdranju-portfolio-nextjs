import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import {
  FaGithub,
  FaLinkedin,
  FaNode,
  FaReact,
  FaXTwitter,
} from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import heroImage from "../../public/hero-image.jpeg";

import { FlipWords } from "@/components/ui/flip-words";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import ShimmerButton from "@/components/ui/shimmer-button";
import SparklesText from "@/components/ui/sparkles-text";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import { MdDownload } from "react-icons/md";

/* eslint-disable react/no-unescaped-entities */
const words = [
  "Javascript.",
  "Node.js",
  "React.js",
  "Next.js",
  "Backend.",
  "Frontend.",
];
function HeroSection() {
  return (
    <div className="relative w-full lg:py-20 lg:pt-32 pt-10 bg-slate-100 dark:bg-[#020617]  antialiased  overflow-hidden ">
      <div className="z-0 dark:flex hidden">
        <Spotlight
          className="-top-32 left-0 md:left-80 md:-top-20 -z-0"
          fill="#6366f1"
        />
      </div>
      <div className="z-0 dark:hidden flex">
        <Spotlight
          className="-top-32 left-0 md:left-80 md:-top-20 -z-0"
          fill="#a5b4fc"
        />
      </div>

      <div className="mx-auto max-w-7xl lg:px-8 ">
        <div className="flex lg:flex-row flex-col  justify-center px-4 py-10 lg:px-6">
          <div className="flex flex-col justify-center px-4 py-10 lg:z-40 ">
            <div className="mt-2 flex max-w-max items-center space-x-2 rounded-full border p-2">
              <SparklesText className="mx-2 " text="Hey there!🙂" />
            </div>
            <h1 className="mt-3 max-w-4xl text-3xl  font-black tracking-tight md:text-4xl lg:text-6xl flex">
              <span className="mr-3">I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                Muhammad Ranju
              </span>
            </h1>
            <h2 className="mt-6 font-bold lg:text-2xl md:text-xl sm:text-lg flex flex-row items-center">
              <span className="">I am a Web App Developer in</span>
              <div className="text-slate-900">
                <FlipWords words={words} />
              </div>
            </h2>
            <p className="mt-5  text-base font-semibold lg:w-4/5">
              Welcome to my portfolio! I hope you enjoy your visit. I specialize
              in Back-End development with Node.js and Front-End development
              with React.js. I have worked on various projects, including a Real{" "}
              <span className="text-indigo-600">Link-Shortener</span>,
              E-Commerce APIs,{" "}
              <span className="text-indigo-600">React-based</span> Website
              Design and Development, and more.
              <br />I am passionate about learning new technologies and building
              solutions that make a difference. Thank you for visiting my
              portfolio! I hope you like my work.{" "}
              <span className="text-yellow-500">Happy coding!</span> 🧑🏻‍💻
            </p>

            {/*I have 2+ years of experience in Node.js, Express.js, MongoDB,
              React.js and other related technologies. */}
            <div className="flex gap-5 mt-5 border-white border-collapse rounded">
              <a
                href="https://github.com/muhammadranju"
                aria-label="GitHub Icon"
                target="_blank"
              >
                <FaGithub className="h-7 w-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammadranju"
                target="_blank"
                aria-label="Linkedin Icon"
              >
                <FaLinkedin className="h-7 w-7" />
              </a>
              <a
                href="https://twitter.com/muhammad_ranju"
                aria-label="Twitter Icon"
                target="_blank"
              >
                <FaXTwitter className="h-7 w-7" />
              </a>
            </div>
            <div className="mt-5">
              <div className="flex mt-5 gap-x-2 border-white border-collapse rounded">
                <a
                  href="../../full_stack_developer_resume.pdf"
                  target="_blank"
                  download="full_stack_developer_resume_of_mdranju.pdf"
                >
                  <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap flex items-center text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                      My Resume
                      <MdDownload className="ml-1 " />
                    </span>
                  </ShimmerButton>
                </a>

                <Link href="/contact">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-slate-900 lg:py-3 py-1.5 bg-white text-black dark:text-white flex items-center space-x-2"
                  >
                    <span>Contact Me</span>
                  </HoverBorderGradient>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex px-20 lg:h-[500px] h-[330px] w-full  flex-col items-center justify-center overflow-hidden ">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center lg:text-8xl text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
              Skills
            </span>

            <OrbitingCircles iconSize={40}>
              <BiLogoTypescript className="text-sky-600 lg:text-8xl text-3xl" />
              <FaNode className="text-lime-500 lg:text-8xl text-3xl" />
              <FaReact className="text-sky-500 lg:text-8xl text-3xl" />
              <SiExpress className="dark:text-slate-50 text-slate-900 lg:text-8xl text-3xl" />
              <SiTailwindcss className="text-cyan-500 lg:text-8xl text-3xl" />
              <SiNextdotjs className="dark:text-slate-50 text-slate-900 lg:text-8xl text-3xl" />
              <DiMongodb className="text-lime-500 lg:text-8xl text-3xl" />
              <RiJavascriptFill className="text-yellow-500 lg:text-8xl text-3xl" />
            </OrbitingCircles>

            <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
              <FaReact className="text-sky-500 lg:text-8xl text-3xl" />
              <DiMongodb className="text-lime-500 lg:text-8xl text-3xl" />
              <BiLogoTypescript className="text-sky-600 lg:text-8xl text-3xl" />
              <RiJavascriptFill className="text-yellow-500 lg:text-8xl text-3xl" />
              <FaNode className="text-lime-500 lg:text-8xl text-3xl" />
              <SiExpress className="dark:text-slate-50 text-slate-900 lg:text-8xl text-3xl" />
              <SiNextdotjs className="dark:text-slate-50 text-slate-900 lg:text-8xl text-3xl" />
              <SiTailwindcss className="text-cyan-500 lg:text-8xl text-3xl" />
            </OrbitingCircles>
          </div>
        </div>
        <hr className="my-5 w-full -mt-3" />
        <div className="rounded-lg lg:bg-gray-500 lg:p-[3px] px-2">
          <Image
            placeholder="blur"
            className="rounded-lg"
            src={heroImage}
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
}

<button
  type="button"
  className="rounded-md border bg-green-400 hover:bg-green-500 text-black border-green-300 px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 w-40 focus-visible:outline-offset-2 focus-visible:outline-black"
>
  Download Resume
</button>;
export default HeroSection;
