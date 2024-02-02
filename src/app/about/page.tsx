import Image from "next/image";
import React from "react";

const users = [
  {
    name: "Gabrielle Fernandez",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    position: "Marketing Lead",
  },
  {
    name: "Victória Silva",
    image:
      "https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg",
    position: "Back-end developer",
  },
  {
    name: "Gabrielle Fernandez",
    image:
      "https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
    position: "Sales",
  },
  {
    name: "Sadie Lewis",
    image:
      "https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
    position: "Sales",
  },
  {
    name: "Thilde Olaisen",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=600&w=600",
    position: "Marketing Lead",
  },
  {
    name: "Deepika Ramesh",
    image:
      "https://images.generated.photos/lEhPUYYfYr9IOt13WZZGf2zbXZnCYdU1wUp7gcu_99c/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg5NTQ5LmpwZw.jpg",
    position: "Front-end developer",
  },
  {
    name: "Jordi Santiago",
    image:
      "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    position: "Front-end developer",
  },
  {
    name: "Kerim Fahri",
    image:
      "https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
    position: "Back-end developer",
  },
];
function about() {
  return (
    <>
      <title>About - MDR</title>

      <div>
        <div className="mx-auto max-w-7xl px-4">
          {/* Hiring Banner */}
          <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
            <div className="space-y-6">
              <p className="text-sm font-semibold md:text-base">
                Join our team &rarr;
              </p>
              <p className="text-3xl font-bold md:text-4xl text-indigo-500">
                We&apos;re just getting started
              </p>
              <p className="text-base md:text-lg">
                Our philosophy is simple — hire a team of diverse, passionate
                people and foster a culture that empowers you to do your best
                work.
              </p>
              <button
                type="button"
                className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join Now
              </button>
            </div>
            <div className="md:mt-o mt-10 w-full">
              <Image
                src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="Getting Started"
                className="rounded-lg"
                width={700}
                height={500}
              />
            </div>
          </div>

          <hr className="mt-10 mb-40" />
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
                Our philosophy is simple — hire a team of diverse, passionate
                people and foster a culture that empowers you to do your best
                work.
              </p>
              <div></div>
            </div>
          </div> */}
          {/* TEAM */}
          {/* <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
            {users.map((user) => (
              <div className="rounded-md border" key={user.name}>
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-[300px] w-full rounded-lg object-cover "
                />
                <p className="mt-6 w-full px-2 text-xl  font-semibold">
                  {user.name}
                </p>
                <p className="w-full px-2 pb-6 text-sm font-semibold ">
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

export default about;
