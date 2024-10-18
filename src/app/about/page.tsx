/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { Badge } from "@radix-ui/themes";

const users = [
  {
    name: "Md. Ranju",
    image: "https://avatars.githubusercontent.com/u/80270685?v=4",
    position: "Full Stack Web Developer ",
  },
  {
    name: "Mukit Hossen",
    image: "../../../team/Mukit.jpg",
    position: "Frontend Developer",
  },
  {
    name: "Saidur Rahman Shifat",
    image: "../../../team/Shifat.jpg",
    position: "Frontend Developer",
  },
];
function about() {
  return (
    <>
      <title>About - MDR</title>

      <div>
        <div className="mx-auto max-w-7xl px-4 ">
          {/* Hiring Banner */}
          <div className=" flex lg:flex-row flex-col gap-10 justify-between py-16">
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
              <button
                type="button"
                className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join Now
              </button>
            </div>
            {/* <div className="md:mt-o mt-10  ">
              <Image
                src="https://res.cloudinary.com/nodelove/image/upload/v1719253849/mdranju/i2f3rcfyeuw1q3xuddyg.jpg"
                alt="Getting Started"
                className="rounded-full"
                width={700}
                height={500}
              />
            </div> */}
          </div>

          <hr className="mt-10 mb-4" />
          {/* greetings */}
          <div className="mt-16 flex items-center">
            <div className="space-y-6 md:w-3/4">
              <div className="max-w-max rounded-full border p-1 px-3">
                <p className="text-xs font-semibold leading-normal md:text-sm">
                  Join Us &rarr;
                </p>
              </div>
              <p className="text-3xl font-bold  md:text-4xl">Meet our team</p>
              <p className="max-w-4xl text-base  md:text-xl">
                Our philosophy is simple — hire a team of diverse, passionate
                people and foster a culture that empowers you to do your best
                work.
              </p>
              <div></div>
            </div>
          </div>
          {/* TEAM */}
          <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
            {users.map((user) => (
              <div
                className=" rounded-xl  border p-3 dark:bg-slate-900 bg-slate-100"
                key={user.name}
              >
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-[300px] w-full rounded-xl object-cover"
                />
                <p className="mt-6 w-full px-2 text-xl  font-semibold">
                  {user.name}
                </p>
                <p className="w-full px-2 pb-6 text-sm font-semibold ">
                  {user.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
