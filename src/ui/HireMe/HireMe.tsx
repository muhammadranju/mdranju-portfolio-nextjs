import { Button } from "@/components/ui/button";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
const HireMe = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center space-y-3 my-16">
      <h1 className="text-3xl">
        Hire me to build your {""}
        <span className="text-indigo-500">next project</span>!
      </h1>
      <p className="max-w-2xl">
        I have a proven track record of delivering high-quality, efficient, and
        user-friendly web applications.
      </p>
      <Link href="/contact">
        <Button>Hire me</Button>
      </Link>
    </div>
  );
};

export default HireMe;
