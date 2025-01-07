"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
