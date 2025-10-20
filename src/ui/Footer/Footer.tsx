"use client";

import Link from "next/link";
import Logo from "../Navbar/Logo";
const date = new Date();
let year = date.getFullYear();

function Footer() {
  return (
    <footer className="w-full pt-5 p-2  bg-slate-100 dark:bg-[#020617] sticky top-[100vh] border-t border-white/10">
      {/* <hr className="my-4" /> */}
      <div className="mx-auto max-w-7xl items-center lg:justify-between px-4 md:flex lg:px-0 w-11/12 md:w-11/12 lg:w-11/12  xl:container">
        <Link href={"/"}>
          <div className="lg:inline-flex items-center hidden">
            <Logo />

            <span className=" text-lg font-bold dark:text-white ">R</span>
          </div>
        </Link>
        <div className="md:mt-0 text-center lg:space-y-0 space-y-5">
          <p>
            © {year}
            <a
              href="https://github.com/muhammadranju"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Muhammad Ranju Github Profile"
            >
              <span className="font-bold text-indigo-500 hover:underline ml-1 mr-1">
                Muhammad Ranju.
              </span>
            </a>
            All rights reserved.
          </p>

          <strong>
            <a
              href="../../muhammadranju.apk"
              target="_blank"
              className="hover:underline underline-offset-4 ml-1 font-bold	"
              download="muhammadranju.apk"
            >
              Download App
              <i className="fa-solid fa-download ml-2"></i>
            </a>
          </strong>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
