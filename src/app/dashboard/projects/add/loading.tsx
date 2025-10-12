import BackButton from "@/components/BackButton/BackButton";
import ProjectAdd from "@/components/ProjectAdd/ProjectAdd";

const loading = () => {
  return (
    <div className="relative overflow-hidden bg-slate-100 dark:bg-[#020617]  ">
      <div className="mx-auto max-w-7xl px-2 ">
        <div className="pt-24 md:pt-36 flex justify-between items-center">
          <h2 className="lg:text-3xl font-bold"> Add Project</h2>
          <BackButton />
        </div>
        <ProjectAdd />
      </div>
    </div>
  );
};

export default loading;
