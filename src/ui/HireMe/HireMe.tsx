import { RainbowButton } from "@/components/ui/rainbow-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { TextShimmer } from "@/components/ui/text-shimmer";
import Link from "next/link";
const HireMe = () => {
  return (
    <section className="relative  py-16 dark:bg-slate-900/30 bg-gray-100/40">
      <div className="flex flex-col text-center items-center justify-center space-y-3 ">
        <h1 className="text-3xl font-semibold">
          Hire me to build your {""}
          {/* <span className="text-indigo-500">next project</span>! */}
          <TextShimmer
            duration={2.5}
            className="text-3xl font-semibold [--base-color:theme(colors.indigo.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.indigo.700)] dark:[--base-gradient-color:theme(colors.indigo.400)]"
          >
            Next Project!
          </TextShimmer>
        </h1>
        <p className="lg:max-w-2xl lg:px-0 px-3">
          <TextAnimate animation="blurIn" by="word">
            I have a proven track record of delivering high-quality, efficient,
            and user-friendly web applications.
          </TextAnimate>
        </p>
        <Link href="/contact">
          <RainbowButton className="rounded-full">Hire me</RainbowButton>
        </Link>
      </div>
    </section>
  );
};

export default HireMe;
