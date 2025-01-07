import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { TextShimmer } from "@/components/ui/text-shimmer";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
const HireMe = () => {
  const springOptions = { bounce: 0.1 };
  return (
    <div className="flex flex-col text-center items-center justify-center space-y-3 my-16">
      <h1 className="text-3xl">
        Hire me to build your {""}
        {/* <span className="text-indigo-500">next project</span>! */}
        <TextShimmer
          duration={1.2}
          className="text-3xl font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
        >
          Next Project!
        </TextShimmer>
      </h1>
      <p className="max-w-2xl">
        I have a proven track record of delivering high-quality, efficient, and
        user-friendly web applications.
      </p>
      <Link href="/contact">
        <Magnetic
          intensity={0.2}
          springOptions={springOptions}
          actionArea="global"
          range={200}
        >
          <button
            type="button"
            className="inline-flex items-center rounded-lg border border-zinc-100 bg-slate-900 px-4 py-2 text-sm text-slate-100 transition-all duration-200 hover:bg-slate-800 dark:border-zinc-900 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
          >
            <Magnetic
              intensity={0.1}
              springOptions={springOptions}
              actionArea="global"
              range={200}
            >
              <span>Hire me</span>
            </Magnetic>
          </button>
        </Magnetic>
      </Link>
    </div>
  );
};

export default HireMe;
