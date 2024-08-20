import Image from "next/image";
import Link from "next/link";
import getProject from "@/api/cron/route";

async function Works() {
  const posts = await getProject();
  return (
    <>
      <title>Works - MDR</title>

      <div>
        <div className="mx-auto max-w-7xl px-2">
          <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
            <p className="text-3xl font-bold  md:text-5xl md:leading-10 leading-tightsm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 from-10% via-cyan-500 via-30% to-sky-500 to-90%">
              Projects & Products
            </p>
            <hr />
            <p className="max-w-4xl text-base  md:text-xl ">
              My many kind of project i have finished.
            </p>
          </div>

          <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2  rounded lg:grid-cols-3">
            {posts.map((post: any) => (
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
                  <p className="mt-4 flex-1 text-base font-semibold">
                    {post?.title}
                  </p>
                  <p className="mt-2 w-full text-sm leading-normal ">
                    {post.details.length !== 50
                      ? post?.details.slice(0, 100).concat("...")
                      : post?.details}
                  </p>
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
