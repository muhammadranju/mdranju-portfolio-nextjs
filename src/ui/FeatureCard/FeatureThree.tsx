"use client";
import FeatureCard from "./FeatureCard";
export function FeatureThree() {
  return (
    <div className="w-full py-10 dark:bg-[#020617]/20  bg-gray-100/40 relative overflow-hidden z-50">
      {/*  */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 animate-gradient" />
      <div className="absolute top-20 -left-1/3 w-1/2 h-[500px] dark:bg-blue-500/10 bg-gray-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-96 -right-80 w-1/4 h-[200px] dark:bg-blue-500/10 bg-gray-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 -right-1/3  w-1/2 h-[800px] dark:bg-sky-500/5 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="mx-auto max-w-7xl z-50 ">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="inset-0 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-indigo-700">
            Skills & Services
          </h2>
          <p className="mt-4 text-base leading-relaxed ">
            These are my working Skills, I&apos;m providing my services to you.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 ">
          <FeatureCard />
        </div>
      </div>
    </div>
  );
}
