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
    <div className="relative overflow-hidden bg-slate-100 dark:bg-[#020617]  h-screen">
      <div className="mx-auto max-w-7xl px-2 ">
        <div className="pb-10 pt-12 md:pt-36">Dashboard</div>
      </div>
    </div>
  );
};

export default DashboardPage;
