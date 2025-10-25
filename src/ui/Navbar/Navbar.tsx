"use client";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import Logo from "./Logo";

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
      <div className="relative w-full z-50">
        <div className="bg-background text-foreground" />
        <div className="mx-auto flex container items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <Link href="/">
            <div className="inline-flex items-center space-x-0 mt-3">
              <Logo />
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
                    className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 `}
                  >
                    <span
                      className={`ml-3 text-base font-medium ${
                        isActive
                          ? "font-bold text-indigo-600 dark:text-indigo-600 text-lg"
                          : "text-slate-900 dark:text-slate-100"
                      }`}
                    >
                      {item.name}
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
