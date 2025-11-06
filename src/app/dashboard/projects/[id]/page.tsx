import BackButton from "@/components/BackButton/BackButton";
import ProjectUpdate from "@/components/ProjectUpdate/ProjectUpdate";

// ✅ Helper function to fetch project data (Server Component safe)
async function getProject(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data.data; // Access the project data
  } catch (error) {
    console.error("Error fetching project data:", error);
    return null;
  }
}

const ProjectUpdatePage = async ({ params }: { params: { id: string } }) => {
  const project = await getProject(params.id);

  return (
    <div className="relative overflow-hidden bg-slate-100 dark:bg-[#020617]">
      <div className="mx-auto max-w-7xl px-2">
        <div className="pt-24 md:pt-36 flex justify-between items-center">
          <h2 className="lg:text-3xl font-bold">Update Project</h2>
          <BackButton />
        </div>

        {/* ✅ Pass the fetched project data to your component */}
        {project && <ProjectUpdate projectData={project} />}
      </div>
    </div>
  );
};

export default ProjectUpdatePage;
