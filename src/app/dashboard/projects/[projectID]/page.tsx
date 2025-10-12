import { URL_V2 } from "@/api/cron/route";
import BackButton from "@/components/BackButton/BackButton";
import ProjectUpdate from "@/components/ProjectUpdate/ProjectUpdate";

async function getProject(id: string) {
  try {
    const response = await fetch(`${URL_V2}/projects/${id}`, {
      cache: "no-store",
    }); // Ensure fresh data
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.data; // Accessing the 'project' field directly
  } catch (error) {
    console.error("Error fetching project data:", error);
    return null;
  }
}

const ProjectUpdatePage = async ({
  params,
}: {
  params: { projectID: string };
}) => {
  const project = await getProject(params.projectID);
  return (
    <div className="relative overflow-hidden bg-slate-100 dark:bg-[#020617]  ">
      <div className="mx-auto max-w-7xl px-2 ">
        <div className="pt-24 md:pt-36 flex justify-between items-center">
          <h2 className="lg:text-3xl font-bold">Update Project</h2>
          <BackButton />
        </div>
        <ProjectUpdate projectID={project} />
      </div>
    </div>
  );
};

export default ProjectUpdatePage;
