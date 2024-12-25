import BoxReveal from "@/components/ui/box-reveal";
import Ranju from "../../public/mdranju.jpg";
import ShinyButton from "@/components/ui/shiny-button";
import Image from "next/image";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export const ContentUs = () => {
  return (
    <div className="relative flex flex-col-reverse rounded-xl py-16 my-20 lg:dark:bg-slate-900 lg:bg-slate-100 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full  rounded-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full dark:text-slate-900 text-slate-100 transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image
          width={500}
          height={500}
          className="object-cover w-full h-56 rounded-xl shadow-lg lg:shadow-none md:h-96 lg:h-full"
          placeholder="blur"
          src={Ranju}
          alt="Md Ranju Images"
        />
      </div>
      <div className="relative flex flex-col items-start w-full  mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          {/* <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl sm:leading-none">
            About Me
          </h2> */}
          <BoxReveal boxColor={"#6366f1"} duration={0.5}>
            <p className="text-[2rem] font-semibold rounded-lg">
              About Me<span className="text-[#6366f1]">.</span>
            </p>
          </BoxReveal>
          <p className="pr-5 mb-5 text-base dark:text-gray-200 text-slate-900 md:text-lg">
            Hi, I'm{" "}
            <span className="text-xl font-bold md:text-2xl text-indigo-500">
              {" "}
              Md. Ranju
            </span>
            , a passionate Web Application Developer from Rajshahi, Bangladesh.
            I began my journey into web development in 2021, the same year I
            completed my Higher Secondary Certificate (HSC). Currently, I am
            pursuing further studies at Degree College while continuing to
            develop my skills in both frontend and backend technologies. Over
            the past few years, I have honed my expertise in Web App
            Development, allowing me to build dynamic, responsive websites and
            applications from the ground up. My skill set spans a variety of
            programming languages and frameworks, including HTML, CSS,
            JavaScript, and Node.JS backend nad more technologies. I'm committed
            to delivering efficient, high-quality solutions that meet the needs
            of clients and users.
          </p>
          <div className="flex items-center">
            <Link href="/contact">
              <ShinyButton>Contact Me</ShinyButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
