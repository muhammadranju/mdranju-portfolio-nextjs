import { Button } from "@/components/ui/button";
import ShinyButton from "@/components/ui/shiny-button";
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
        <ShinyButton>Hire me</ShinyButton>
      </Link>
    </div>
  );
};

export default HireMe;
