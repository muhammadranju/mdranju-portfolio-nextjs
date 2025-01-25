/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Badge } from "@radix-ui/themes";
import Link from "next/link";
import { ContentUs } from "@/ui/ContentUs";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import SplashCursor from "@/components/ui/SplashCursor";

// const users = [
//   {
//     name: "Md. Ranju",
//     image: "https://avatars.githubusercontent.com/u/80270685?v=4",
//     position: "Web Application Developer",
//   },
//   {
//     name: "Mukit Hossen",
//     image: "../../../team/Mukit.jpg",
//     position: "Frontend Developer",
//   },
//   {
//     name: "Saidur Rahman Shifat",
//     image: "../../../team/Shifat.jpg",
//     position: "Frontend Developer",
//   },
// ];
function About() {
  return (
    <>
      <SplashCursor />
      <div>
        <div className="mx-auto max-w-7xl px-4 lg:py-20">
          {/* <div className=" flex  lg:flex-row flex-col gap-10 justify-between py-16">
            <div className="space-y-6 w-full">
              <p
                className="text-sm font-semibold md:text-base rounded "
                color="orange"
              >
                <Badge color="blue" className="rounded p-2">
                  About Me &rarr;
                </Badge>
              </p>

              <p className="text-base md:text-lg">
                Hi, I'm{" "}
                <span className="text-xl font-bold md:text-2xl text-indigo-500">
                  {" "}
                  Md. Ranju
                </span>
                , a passionate Full Stack Web Developer from Rajshahi,
                Bangladesh. I began my journey into web development in 2021, the
                same year I completed my Higher Secondary Certificate (HSC).
                Currently, I am pursuing further studies at Degree College while
                continuing to develop my skills in both frontend and backend
                technologies. Over the past few years, I have honed my expertise
                in Full Stack Development, allowing me to build dynamic,
                responsive websites and applications from the ground up. My
                skill set spans a variety of programming languages and
                frameworks, including HTML, CSS, JavaScript, and Node.JS backend
                nad more technologies. I'm committed to delivering efficient,
                high-quality solutions that meet the needs of clients and users.
              </p>
              <Link href="/contact">
                <button
                  type="button"
                  className="btn rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div> */}

          <ContentUs />

          {/* <hr className="mt-10 mb-4" /> */}
          {/* greetings */}
          {/* <div className="mt-16 flex items-center">
            <div className="space-y-6 md:w-3/4">
              <div className="max-w-max rounded-full border p-1 px-3">
                <p className="text-xs font-semibold leading-normal md:text-sm">
                  Join Us &rarr;
                </p>
              </div>
              <p className="text-3xl font-bold  md:text-4xl">Meet our team</p>
              <p className="max-w-4xl text-base  md:text-xl">
                Our team is made up of passionate and skilled professionals
                dedicated to delivering top-notch web development solutions.
                With expertise in both frontend and backend development, we work
                collaboratively to create seamless, user-friendly websites and
                applications. Whether it's building dynamic interfaces or
                developing complex server-side logic, our team is committed to
                providing high-quality, efficient results tailored to your
                needs.
              </p>
              <div></div>
            </div>
          </div> */}
          {/* TEAM */}
          {/* <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-8 pb-12 md:grid-cols-2 lg:grid-cols-4">
            {users.map((user) => (
              <div
                className=" rounded-xl  border p-3 dark:bg-slate-900 bg-slate-100 "
                key={user.name}
              >
                <div className="w-full sm:w-[80%] lg:w-full h-[350px] overflow-hidden rounded-md relative cursor-pointer group">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-full h-full object-cover group-hover:scale-[1.15] group-hover:rotate-[8deg] transition-all duration-300 ease-out"
                  />
                </div>

                <p className="mt-6 w-full px-2 text-xl  font-semibold">
                  {user.name}
                </p>
                <p className="w-full px-2 pb-3 text-sm font-semibold ">
                  {user.position}
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default About;
