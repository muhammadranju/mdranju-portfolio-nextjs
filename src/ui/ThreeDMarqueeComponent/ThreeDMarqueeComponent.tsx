"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import getProject from "@/config/config";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function ThreeDMarqueeComponent() {
  const [images, setImages] = useState([]);
  // const { data } = useQuery({
  //   queryKey: ["project"],
  //   queryFn: async () => {
  //     return await getProject();
  //   },
  //   staleTime: 60000,
  // });

  const { data } = useQuery({
    queryKey: ["project"],
    queryFn: async () => await getProject(),
    staleTime: 1000 * 60 * 10, // 10 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  useEffect(() => {
    const arrayImages = data?.project.map((item: any) => item.image);
    setImages(arrayImages);
  }, [data]);

  return (
    <div className="relative mx-auto flex w-full  flex-col items-center justify-center overflow-hidden lg:h-[500px] md:h-[300px] h-[300px] gap-4 lg:py-5 md:py-3 py-5">
      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/15" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}
