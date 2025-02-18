"use client";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import DashboardMenu from "./DashboardMenu/DashboardMenu";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  // {
  //   name: "Experience",
  //   href: "/experience",
  // },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  // {
  //   name: "Login",
  //   href: "/api/auth/login",
  // },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { isAuthenticated } = useKindeBrowserClient();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky lg:top-3 top-0 z-50  mx-auto max-w-7xl rounded-full lg:border lg:border-slate-500/10  flex-none shadow-sm transition-colors duration-500 lg:z-50  dark:border-slate-50/[0.06]   bg-slate-50/5 backdrop-blur-2xl supports-backdrop-blur:bg-white/10 dark:bg-slate-900/5 -mb-20"
    >
      <div className="relative w-full">
        <div className="bg-background text-foreground" />
        <div className="mx-auto flex container items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <Link href="/">
            <div className="inline-flex items-center space-x-0 mt-3">
              <span className="bg-gray-100 dark:text-white rounded p-1 pr-0">
                <svg
                  width="30"
                  height="30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  viewBox="0 0 512.000000 512.000000"
                >
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path
                      d="M2235 5104 c-591 -80 -1100 -334 -1510 -755 -267 -274 -430 -533
-582 -926 -3 -7 55 18 128 57 215 111 383 147 556 121 250 -39 369 -208 453
-639 16 -83 60 -401 60 -434 0 -4 8 -8 18 -8 14 0 27 21 51 88 47 123 151 333
212 427 246 378 528 562 874 568 93 2 116 -1 150 -18 49 -24 90 -99 101 -181
9 -77 -4 -168 -101 -684 -101 -535 -118 -656 -110 -765 8 -107 32 -220 60
-277 l22 -48 -49 -31 c-94 -60 -163 -82 -274 -87 -73 -3 -116 0 -155 12 -177
51 -241 258 -194 623 15 114 101 645 112 691 4 18 1 22 -19 22 -20 0 -36 -17
-81 -84 -163 -245 -299 -606 -347 -921 -14 -91 -28 -111 -105 -155 -99 -56
-227 -76 -298 -47 -153 64 -256 420 -299 1030 -12 172 -13 177 -34 177 -25 0
-23 6 -65 -200 -71 -349 -103 -592 -94 -709 8 -105 33 -217 60 -273 l22 -48
-49 -31 c-94 -60 -163 -82 -274 -87 -133 -5 -197 12 -259 72 -25 23 -45 42
-45 40 0 -1 22 -51 48 -111 130 -294 312 -553 553 -788 410 -399 898 -634
1472 -710 156 -20 478 -20 634 0 595 78 1105 332 1518 756 192 197 330 388
448 621 192 376 277 737 277 1168 0 431 -85 792 -277 1168 -118 233 -256 424
-448 621 -413 424 -923 678 -1518 756 -146 19 -500 19 -642 -1z m1465 -1505
c25 -5 62 -24 83 -40 l38 -31 122 32 c156 41 364 52 492 26 205 -42 374 -172
474 -366 75 -145 101 -261 101 -448 0 -520 -340 -994 -843 -1177 -173 -62
-276 -79 -497 -79 -159 -1 -207 3 -259 17 -189 54 -319 164 -372 315 -49 139
-37 284 71 880 l68 377 -74 147 c-41 81 -74 150 -74 153 0 12 263 134 343 159
123 40 247 54 327 35z"
                    />
                    <path
                      d="M3860 3241 l-45 -6 -12 -75 c-7 -41 -51 -307 -97 -590 -110 -665
-106 -638 -89 -645 26 -9 210 -5 265 6 292 61 498 368 498 746 0 274 -114 484
-295 542 -69 22 -159 31 -225 22z"
                    />
                    <path
                      d="M101 3292 c-40 -137 -66 -265 -87 -422 -23 -175 -15 -554 14 -726 19
-108 77 -353 86 -362 2 -2 2 44 -1 101 -9 161 14 331 149 1100 l22 127 -69
141 c-39 77 -73 143 -76 145 -4 2 -21 -45 -38 -104z"
                    />
                  </g>
                </svg>
              </span>
              <span className="font-bold dark:text-white ">R</span>
            </div>
          </Link>
          <div className="hidden grow items-start lg:flex md:flex md:flex-grow flex-row justify-end space-x-1">
            <ul className="ml-12 inline-flex space-x-8 justify-center items-center">
              {menuItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (pathname.startsWith(item.href) && item.href !== "/");
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`inline-flex items-center text-lg font-semibold px-2  hover:underline underline-offset-4 dark:hover:text-indigo-500 hover:text-indigo-400 transition-all ease-in-out duration-150 ${
                        isActive
                          ? "font-bold text-indigo-600 dark:text-indigo-600"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              {isAuthenticated && (
                <li
                  className={`inline-flex items-center text-lg font-bold px-2  dark:hover:text-slate-500 hover:text-slate-400 transition-all ease-in-out duration-150 `}
                >
                  <DashboardMenu />
                </li>
              )}
            </ul>
          </div>

          <div className="m-2">
            <ModeToggle />
          </div>

          <div className={`dropdown `}>
            <div className="flex justify-center items-center">
              <div className=" lg:hidden">
                {isAuthenticated && <DashboardMenu />}
              </div>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                {isMenuOpen ? (
                  <X onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                ) : (
                  <Menu
                    onClick={toggleMenu}
                    className="h-6 w-6 cursor-pointer"
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content z-[1000] bg-slate-100 dark:bg-slate-900 rounded-box  mt- w-52 px-6 py-5 shadow right-0 text-lg gap-3 font-medium ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              {menuItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (pathname.startsWith(item.href) && item.href !== "/");
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={toggleMenu}
                    className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 ${
                      isActive ? "underline underline-offset-4 " : ""
                    }`}
                  >
                    <span className="ml-3 text-base font-medium text-slate-900 dark:text-slate-100">
                      {item.name}
                    </span>
                    <span>
                      <ChevronRight className="ml-3 h-4 w-4" />
                    </span>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
