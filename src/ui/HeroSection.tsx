import Image from "next/image";
import heroImage from "../../public/hero-image.jpeg";

/* eslint-disable react/no-unescaped-entities */
function HeroSection() {
  return (
    <div className="relative w-full">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
          <div className="mt-2 flex max-w-max items-center space-x-2 rounded-full border p-2">
            Hi there!🙂
          </div>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight md:text-4xl lg:text-6xl">
            Muhammad Ranju.
          </h1>
          <h2 className="mt-6 max-w-3xl font-medium text-2xl text-gray-900-700">
            <strong>
              I'm a JavaScript (Web,App) Backend API Developer at Node.JS
            </strong>
          </h2>
          <span className="mt-6 font-semibold">
            My Self Muhammad Ranju I'm working in Node.js Backend Development.
            it's a JavaScript Runtime at Node.js
            <br />
            Working on: - API Design & Development Like: - Chat API, E-commerce
            API, Blog API and more.
          </span>
          <div className="mt-8">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Download Resume
            </button>
          </div>
        </div>
        <hr className="my-8 w-full" />
        <div className="rounded-lg bg-gray-200 p-1">
          <Image placeholder="blur" src={heroImage} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
