/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import getProject from "@/api/cron/route";

async function Works() {
  const posts = await getProject();
  const shuffledPosts = posts.sort(() => {
    return Math.random() - 0.5;
  });
  return (
    <>
      <title>Project - MDR</title>

      <div>
        <div className="mx-auto max-w-7xl px-2">
          <div className="flex flex-col  pb-10 pt-12 md:pt-24">
            <p className="text-3xl font-bold  md:text-5xl md:leading-10 mb-8 leading-tightsm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 from-10% via-cyan-500 via-30% to-sky-500 to-90%">
              Projects & Products
            </p>
            <hr />
            <p className="lg:max-w-4xl text-base  md:text-xl mt-8 mb-2">
              Here is some kind of {posts.length} project's i have finished.
            </p>
            <small className="">
              * The project's are always show in randomly.
            </small>
          </div>

          <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2  rounded lg:grid-cols-3">
            {shuffledPosts.map((post: any) => (
              <div key={post?.title} className="border rounded shadow-lg ">
                <Image
                  src={post?.image}
                  className="aspect-video w-full rounded"
                  width={500}
                  height={500}
                  blurDataURL="blur"
                  placeholder="blur"
                  alt={post?.title}
                />
                <div className="min-h-min p-3">
                  <p className="mt-4 w-full text-xs font-semibold leading-tight ">
                    #{post?.category.toLocaleLowerCase()}
                  </p>
                  <p
                    className="mt-4 flex-1 text-base font-semibold"
                    title={post?.title}
                  >
                    {post?.title.length > 40
                      ? post?.title.substring(0, 38).concat("...")
                      : post?.title}
                  </p>
                  <p
                    className="mt-2 w-full text-sm leading-normal "
                    title={post?.details}
                  >
                    {post?.details.length > 150
                      ? post?.details.substring(0, 150).concat("...")
                      : post?.details}
                  </p>

                  <div className="flex flex-row justify-center lowercase items-center mt-4 space-x-2">
                    <p className=" font-semibold capitalize">Tags:</p>
                    <span className="text-sm ">React</span>,
                    <span className="text-sm ">Node</span>,
                    <span className="text-sm ">tailwindcss </span>
                  </div>
                  <div className="mt-4 flex space-x-3 ">
                    <Image
                      className="h-full w-10 rounded-lg"
                      src={post?.avatar}
                      width={500}
                      height={500}
                      blurDataURL="blur"
                      placeholder="blur"
                      alt={post?.author}
                    />
                    <div>
                      <p className="text-sm font-semibold leading-tight">
                        {post?.author}
                      </p>
                      <span className="text-sm leading-tight hover:underline hover:text-indigo-500">
                        <Link href={post?.sourceCode} target="_blank">
                          View Code
                        </Link>
                      </span>
                    </div>
                    {post?.liveLink ? (
                      <div>
                        <button className="rounded-lg shadow-md px-3 py-2.5 text-sm font-semibold bg-indigo-500 text-white hover:bg-indigo-600">
                          <Link href={post?.liveLink} target="_blank">
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
    </>
  );
}

export default Works;
