"use client";
import FeatureCard from "./FeatureCard/FeatureCard";
export function FeatureThree() {
  return (
    <div className="w-full py-20 dark:bg-slate-900/30 bg-gray-100/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  ">
        <div className="mx-auto max-w-xl text-center">
          <h2 className=" text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 from-10% via-violet-500 via-30% to-sky-500 to-90%">
            Skills & Services
          </h2>
          <p className="mt-4 text-base leading-relaxed ">
            These are my working Skills & Services I have done.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-8 lg:px-0 px-6 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <FeatureCard />
        </div>
      </div>
    </div>
  );
}
