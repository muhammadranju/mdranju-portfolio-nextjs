import Image from "next/image";
import heroImage from "../../public/hero-image.jpeg";

/* eslint-disable react/no-unescaped-entities */
function HeroSection() {
  return (
    <div className="relative w-full mb-20">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
          <div className="mt-2 flex max-w-max items-center space-x-2 rounded-full border p-2">
            Hey there!🙂
          </div>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight md:text-4xl lg:text-6xl flex">
            <span className="mr-3 font-medium">I'm</span>
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              Muhammad Ranju
            </span>
          </h1>
          <h2 className="mt-6 font-bold text-2xl">
            <strong>
              I am a JavaScript back-end focused API Developer at Node.JS
            </strong>
          </h2>
          <p className="mt-6  text-base font-medium lg:w-4/5">
            Welcome to my Portfolio. I hope you well to visit, I am Muhammad
            Ranju I'm working in Node.js back-end api development. I have 3+
            years of experience in Node.js, Express.js, MongoDB, React.js
            Next.js and other related technologies. I have worked on various
            projects, including E-Commerce API, Website Design and Development,
            Business Management API, Blog Server API's & many more. I am
            passionate about learning new technologies and building solutions
            that make a difference. Thank you for visiting my portfolio. I hope
            you will like my work, Happy coding🧑🏻‍💻.
          </p>
          <p className="font-medium text-base mt-5 ">
            Working on: - E-Commerce API | Website Design and Development |
            Business Management API | Blog Server API's & many more.
          </p>

          <div className="flex gap-5 mt-5 border-white border-collapse rounded">
            <a href="https://github.com/muhammadranju" target="_blank">
              <span>
                <svg viewBox="0 0 438.549 438.549" className="h-6 w-6">
                  <title>Github</title>
                  <path
                    fill="currentColor"
                    d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                  ></path>
                </svg>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/muhammadranju" target="_blank">
              <span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </span>
            </a>
            <a href="https://twitter.com/muhammad_ranju" target="_blank">
              <span>
                <svg
                  className="h-6 w-6 fill-current "
                  height="50"
                  viewBox="0 0 1200 1227"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>X</title>
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
                </svg>
              </span>
            </a>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="rounded-md border bg-green-400 hover:bg-green-500 text-black border-green-300 px-3 py-2  font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Download Resume
            </button>
          </div>
        </div>
        <hr className="my-5 w-full -mt-3" />
        <div className="rounded-lg bg-gray-500 p-[3px]">
          <Image
            placeholder="blur"
            className="rounded-lg"
            src={heroImage}
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
}

<button
  type="button"
  className="rounded-md border bg-green-400 hover:bg-green-500 text-black border-green-300 px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 w-40 focus-visible:outline-offset-2 focus-visible:outline-black"
>
  Download Resume
</button>;
export default HeroSection;
