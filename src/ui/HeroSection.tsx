import Image from "next/image";
import heroImage from "../../public/hero-image.jpeg";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import ShimmerButton from "@/components/ui/shimmer-button";
import SparklesText from "@/components/ui/sparkles-text";
import MorphingText from "@/components/ui/morphing-text";
const texts = [
  "Hello",
  "Morphing",
  "Text",
  "Animation",
  "React",
  "Component",
  "Smooth",
  "Transition",
  "Engaging",
];
/* eslint-disable react/no-unescaped-entities */
function HeroSection() {
  return (
    <div className="relative w-full mb-20">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
          <div className="mt-2 flex max-w-max items-center space-x-2 rounded-full border p-2">
            Hey there!🙂
          </div>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight md:text-4xl lg:text-6xl flex">
            <span className="mr-3 font-medium">I'm</span>
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              Muhammad Ranju
            </span>
          </h1>
          <h2 className="mt-6 font-bold lg:text-2xl text-xl hidden lg:flex flex-row items-center">
            <span className="lg:text-2xl text-xl">
              I am a Web App Developer in
            </span>
            <div>
              <SparklesText className="mx-2 text-2xl" text="JavaScript." />
            </div>
          </h2>

          <h2 className="mt-6 font-bold lg:hidden lg:text-2xl text-xl flex flex-row items-center">
            <span className="lg:text-2xl text-xl">
              I am a Web Application Developer in
              <SparklesText
                className="lg:text-2xl text-3xl"
                text="JavaScript."
              />
            </span>
          </h2>
          <p className="mt-5  text-base font-medium lg:w-4/5">
            Welcome to my Portfolio. I hope you well to visit, I am Muhammad
            Ranju I'm working BackEnd in Node.js and FontEnd in React.js. I have
            2+ years of experience in Node.js, Express.js, MongoDB, React.js and
            other related technologies. I have worked on various projects,
            including E-Commerce API, Website Design and Development and many
            more. I am passionate about learning new technologies and building
            solutions that make a difference. Thank you for visiting my
            portfolio. I hope you will like my work, Happy coding🧑🏻‍💻.
          </p>
          <div className="flex gap-5 mt-5 border-white border-collapse rounded">
            <a href="https://github.com/muhammadranju" target="_blank">
              <FaGithub className="h-7 w-7" />
            </a>
            <a href="https://www.linkedin.com/in/muhammadranju" target="_blank">
              <FaLinkedin className="h-7 w-7" />
            </a>
            <a href="https://twitter.com/muhammad_ranju" target="_blank">
              <FaXTwitter className="h-7 w-7" />
            </a>
          </div>
          <div className="mt-5">
            {/* <button
              type="button"
              className="rounded-md border bg-green-400 hover:bg-green-500 text-black border-green-300 px-3 py-2  font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Download Resume
            </button> */}
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                Download Resume
              </span>
            </ShimmerButton>
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
