/* eslint-disable react/no-unescaped-entities */
function HeroSection() {
  return (
    <div className="relative w-full">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
          <div className="mt-2 flex max-w-max items-center space-x-2 rounded-full border p-2">
            Hi there🙂
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
            My Self Muhammad Ranju I was working in Node.js Backend Development.
            it's a JavaScript RunTime at Node.js
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
        <hr className="my-6 w-full" />
        <div className="rounded-lg bg-gray-200 p-2">
          <img
            className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
            src="https://camo.githubusercontent.com/48420398d0640d223e9406f067b0a68225251040340d2b6acf1bb4c59db034e9/68747470733a2f2f7062732e7477696d672e636f6d2f70726f66696c655f62616e6e6572732f313233393634383731343634333233343831372f313637363331343230372f3135303078353030"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
