import BackButton from "@/components/BackButton/BackButton";
import ProjectAdd from "@/components/ProjectAdd/ProjectAdd";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { redirect } from "next/navigation";
const AddPage = async () => {
  const { getUser, isAuthenticated, getPermission } = getKindeServerSession();
  const user = await getUser();
  const isLoggedIn = await isAuthenticated();
  const permission = await getPermission("create:post");
  if (!isLoggedIn) {
    redirect("/api/auth/login");
  }

  if (!permission?.isGranted) {
    redirect("/");
  }

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

export default AddPage;
