import DashboardStats from "@/components/DashboardStats/DashboardStats";
import ProjectsChart from "@/components/ProjectsChart/ProjectsChart";
import ProjectsTable from "@/components/ProjectsTable/ProjectsTable";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
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
    <div className="relative overflow-hidden bg-slate-100 dark:bg-[#020617] ">
      <div className="mx-auto max-w-7xl px-2 ">
        <div className="pt-12 md:pt-36 flex justify-between items-center">
          <h2 className="text-3xl font-bold">Project Dashboard</h2>
          <Button className="rounded-lg" variant={"outline"}>
            Add Project
          </Button>
        </div>

        <div className="flex flex-col gap-y-10 pb-10">
          <DashboardStats />
          <ProjectsChart />
          <ProjectsTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
