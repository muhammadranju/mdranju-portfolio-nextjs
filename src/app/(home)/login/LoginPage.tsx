import { ArrowRight } from "lucide-react";
export default function Login() {
  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <div className="inline-flex items-center space-x-0 mt-3">
              <span className="bg-white rounded p-1 pr-0">
                <svg
                  width="50"
                  height="56"
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
              <span className="font-bold text-3xl">R</span>
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">
            Sign in to your account
          </h2>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="" className="text-base font-medium ">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="text-base font-medium0">
                    Password
                  </label>
                  <a
                    href=""
                    title=""
                    className="text-sm font-semibold hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Login Now <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
