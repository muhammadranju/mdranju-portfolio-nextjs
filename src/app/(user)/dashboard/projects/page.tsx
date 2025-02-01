import BackButton from "@/components/BackButton/BackButton";
import ProjectsTable from "@/components/ProjectsTable/ProjectsTable";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const GetAllProjects = async () => {
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
      <div className="mx-auto max-w-full px-10 ">
        <div className="pt-24 md:pt-36 flex justify-between items-center">
          <h2 className="lg:text-3xl font-bold">Project Dashboard</h2>
          <BackButton />
        </div>
        <ProjectsTable />
      </div>
    </div>
  );
};

export default GetAllProjects;
