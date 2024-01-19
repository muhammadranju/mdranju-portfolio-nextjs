"use client";
import Footer from "@/ui/Footer";
import Navbar from "@/ui/Navbar";
import Link from "next/link";
import posts from "@/data/data.json";

function Products() {
  return (
    <>
      <Navbar />
      <div>
        <div className="mx-auto max-w-7xl px-2">
          <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
            <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
              Resources and insights
            </p>
            <p className="max-w-4xl text-base text-gray-600 md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              veritatis voluptates neque itaque repudiandae sint, explicabo
              assumenda quam ratione placeat?
            </p>
          </div>

          {/* posts */}
          <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 rounded lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post?.title} className="border">
                <img
                  src={post?.image}
                  className="aspect-video w-full rounded"
                  alt=""
                />
                <div className="min-h-min p-3">
                  <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                    #{post?.category.toLocaleLowerCase()}
                  </p>
                  <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                    {post?.title}
                  </p>
                  <p className="mt-2 w-full text-sm leading-normal text-gray-600">
                    {post?.details}
                  </p>
                  <div className="mt-4 flex space-x-3 ">
                    <img
                      className="h-full w-10 rounded-lg"
                      src={post?.avatar}
                      alt={post?.author}
                    />
                    <div>
                      <p className="text-sm font-semibold leading-tight text-gray-900">
                        {post?.author}
                      </p>
                      <span className="text-sm leading-tight text-gray-600">
                        <Link href={post.sourceCode} target="_blank">
                          View Code
                        </Link>
                      </span>
                    </div>
                    {post.liveLink ? (
                      <div>
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          <Link href={post.liveLink} target="_blank">
                            Live Demo
                          </Link>
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;
