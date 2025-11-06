"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import getProject from "@/config/config";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function ThreeDMarqueeComponent() {
  const [images, setImages] = useState([]);
  const { data } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      return await getProject();
    },
    staleTime: 60000,
  });

  useEffect(() => {
    const arrayImages = data?.project.map((item: any) => item.image);
    setImages(arrayImages);
  }, [data]);

  return (
    <div className="relative mx-auto flex w-full  flex-col items-center justify-center overflow-hidden lg:h-[500px] md:h-[300px] gap-4 lg:py-5 md:py-3 py-5">
      {/* <h2 className="relative z-20 mx-auto lg:max-w-4xl  text-center text-2xl font-bold text-balance text-white md:text-3xl lg:text-5xl">
        Here is my design work{" "}
        <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white  backdrop-blur-sm">
          project here
        </span>
        👇.
      </h2>
      <p className="relative z-20 mx-auto lg:max-w-2xl w-96 py-8 text-center text-sm text-white md:text-base">
        I&apos;m a developer who loves to create beautiful and functional
        designs.
      </p> */}

      {/* <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link href={"/projects"}>
          <ShinyButton className="rounded-full py-4 px-10 capitalize">
            Check out more
          </ShinyButton>
        </Link>
      </div> */}

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/30 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}
