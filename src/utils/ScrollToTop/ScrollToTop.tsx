"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, searchParams]);

  return null;
}

export default ScrollToTop;
