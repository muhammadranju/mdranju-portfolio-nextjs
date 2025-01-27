import { URL } from "@/api/cron/route";
import { Metadata } from "next";
import ProjectPage from "./projectPage";

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

const Project = async ({ params }: { params: { id: string } }) => {
  const project = await getProject(params.id);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <>
      <ProjectPage project={project} />
    </>
  );
};

export default Project;
