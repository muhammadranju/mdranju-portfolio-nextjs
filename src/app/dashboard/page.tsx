import DashboardStats from "@/components/DashboardStats/DashboardStats";
import PortfolioViewChart from "@/components/ProjectsChart/PortfolioViewChart";
import ProjectsChart from "@/components/ProjectsChart/ProjectsChart";
import ProjectsTable from "@/components/ProjectsTable/ProjectsTable";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

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
        <div className="pt-24 md:pt-36 flex justify-between items-center">
          <h2 className="lg:text-3xl font-bold">Dashboard</h2>
          <Link href="/dashboard/projects/add">
            <Button className="rounded-lg" variant={"outline"}>
              Add Project
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-y-10 pb-10">
          <DashboardStats />
          <div className="flex  gap-x-5 pb-10">
            <PortfolioViewChart />
            <ProjectsChart />
          </div>
          {/* <ProjectsTable /> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
