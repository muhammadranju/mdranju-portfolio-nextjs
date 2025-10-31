import BackButton from "@/components/BackButton/BackButton";
import ProjectsTable from "@/components/ProjectsTable/ProjectsTable";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { MdArrowBack } from "react-icons/md";

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
    <div className="relative overflow-hidden max-w-full mx-auto ">
      <div className="mx-auto max-w-full px-10 ">
        <div className="pt-24 md:pt-36 flex justify-between items-center">
          <h2 className="lg:text-3xl font-bold">Project Dashboard</h2>
          <div className="flex gap-x-2">
            <BackButton />
            <Link href={"/dashboard/projects/add"}>
              <Button className="rounded-lg" variant={"outline"}>
                <Plus /> Add Project
              </Button>
            </Link>
          </div>
        </div>
        <ProjectsTable />
      </div>
    </div>
  );
};

export default GetAllProjects;
