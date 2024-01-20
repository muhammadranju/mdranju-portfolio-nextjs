"use client";
import { useState } from "react";
import Link from "next/link";

import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { ModeToggle } from "@/components/ui/ModeToggle";
const menuItems = [
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative w-full">
      <div className="bg-background text-foreground" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/">
          <div className="inline-flex items-center space-x-0 mt-3">
            <span className="bg-white rounded p-1 pr-0">
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
              {/* <svg
                width="30"
                height="30"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="black"
                />
              </svg> */}
            </span>
            <span className="font-bold">R</span>
          </div>
        </Link>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold hover:text-gray-500"
                >
                  {item.name}
                  <span>
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden space-x-2 lg:block">
          <button
            type="button"
            className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Sign In
          </button>
          <button
            type="button"
            className="rounded-md border border-black px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Log In
          </button>
        </div>
        <div className="m-2">
          <ModeToggle />
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <Link href="/">
                    <div className="inline-flex items-center space-x-2">
                      <span className="bg-white rounded p-1 pr-0">
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
                      <span className="font-bold">R</span>
                    </div>
                  </Link>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                        <span>
                          <ChevronRight className="ml-3 h-4 w-4" />
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="mt-2 space-y-2">
                  <button
                    type="button"
                    className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
