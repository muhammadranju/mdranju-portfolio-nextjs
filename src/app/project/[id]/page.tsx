import { URL } from "@/api/cron/route";
import { Metadata } from "next";
import Image from "next/image";
import { format } from "date-fns";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FaGithub } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

async function getProject(id: string) {
  try {
    const response = await fetch(`${URL}/project/${id}`, { cache: "no-store" }); // Ensure fresh data
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.project; // Accessing the 'project' field directly
  } catch (error) {
    console.error("Error fetching project data:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;
  const project = await getProject(id);

  const title = project?.title || "Default Project Title";
  const description = project?.details || "Default Project Description";
  const image =
    project?.image ||
    "https://res.cloudinary.com/nodelove/image/upload/f_auto,q_auto/v1/mdranju/ngpfp5vkd5ky5wfst2ec";

  return {
    title,
    description,
    keywords: project?.tags || ["projects", "portfolio", "example"],
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          alt: title,
        },
      ],
      siteName: "Md Ranju Portfolio",
      type: "website",
      url: `https://mdranju.xyz/project/${id}`,
    },
    twitter: {
      title,
      description,
      images: [
        {
          url: image,
          alt: title,
        },
      ],
      card: "summary_large_image",
      site: "@muhammad_ranju",
    },
  };
}

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const project = await getProject(params.id);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className=" p-8 max-w-7xl mx-auto mt-28 mb-10 dark:bg-[#020617] bg-slate-100 rounded-xl border-[1px] dark:border-slate-500/10 border-slate-500/5">
      <div className="pb-5">
        <Link href="/projects">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-slate-800 bg-slate-100 text-sm  text-slate-700 dark:text-slate-100 flex items-center"
          >
            <IoIosArrowBack className="font-extrabold text-lg mr-1 -ml-2" />{" "}
            Back
          </HoverBorderGradient>
        </Link>
      </div>
      <div className="bg-blue-100 w-full h-full rounded-lg drop-shadow-md overflow-hidden">
        <Image
          src={project?.image}
          width={1080}
          height={720}
          alt={project?.title}
          className="w-full "
        />
      </div>
      <div className="mt-6">
        <span className="p-2 text-xs mb-10 border-[2px] rounded-full">
          #{project?.category}
        </span>
        <h2 className="lg:text-3xl text-xl font-bold mt-5">{project?.title}</h2>
        <p className=" mt-2 lg:max-w-5xl lg:text-base text-sm ">
          {project?.details}
        </p>
        {project?.tags.length > 0 && (
          <div className="flex mt-4">
            <div>
              <div className="flex space-x-2 mt-2 flex-wrap items-center">
                <span className="font-semibold ">Tags:</span>
                {project?.tags.map((tag: string) => (
                  <button
                    key={tag}
                    className="w-fit h-10 px-2 flex text-xs items-center justify-center border rounded-full "
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-6">
          <div className="flex items-center gap-x-2">
            <Image
              width={100}
              height={100}
              src={project?.avatar}
              className="w-12 h-12 rounded-lg"
              alt={project?.author}
            />
            <div>
              <p>{project?.author}</p>
              <span className="text-xs leading-tight ">
                Added At: {format(new Date(project?.createdAt), "dd/MM/yyyy")}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-6 gap-x-5">
          <a href={project?.sourceCode} target="_blank">
            <HoverBorderGradient
              containerClassName="rounded-lg"
              as="button"
              className="dark:bg-slate-800 bg-slate-100  text-slate-700 dark:text-slate-100 flex items-center space-x-2"
            >
              <FaGithub className="font-extrabold text-lg mr-2" /> Github
            </HoverBorderGradient>
          </a>
          {project?.liveLink && (
            <a href={project?.liveLink} target="_blank">
              <HoverBorderGradient
                containerClassName="rounded-lg"
                as="button"
                className="dark:bg-indigo-500 bg-indigo-500 text-slate-100 dark:text-slate-100 flex items-center space-x-2"
              >
                <MdOpenInNew className="font-extrabold text-lg mr-2" /> Live
              </HoverBorderGradient>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
