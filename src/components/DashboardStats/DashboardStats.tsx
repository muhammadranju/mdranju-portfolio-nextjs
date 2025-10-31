"use client";

import { SquareChartGantt, UserCircleIcon, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { CiViewBoard } from "react-icons/ci";
import { Card } from "../ui/card";
import { NumberTicker } from "../ui/number-ticker";

interface Stats {
  totalVisitors: number;
  totalVisits: number;
  monthlyVisitors: {
    [key: string]: number;
  };
}

const DashboardStats = () => {
  const [contacts, setContacts] = useState(0);
  const [projects, setProjects] = useState(0);
  const [visitors, setVisitors] = useState<Stats | null>({
    totalVisitors: 0,
    totalVisits: 0,
    monthlyVisitors: {
      "10/2025": 0,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contactsRes, projectsRes, statsRes] = await Promise.all([
          fetch(`/api/contacts`),
          fetch(`/api/projects`),
          fetch(`/api/stats`),
        ]);

        if (!contactsRes.ok) throw new Error("Failed to fetch contacts");
        if (!projectsRes.ok) throw new Error("Failed to fetch projects");
        if (!statsRes.ok) throw new Error("Failed to fetch stats");

        const [{ count: contactsCount }, { count: projectsCount }, data] =
          await Promise.all([
            contactsRes.json(),
            projectsRes.json(),
            statsRes.json(),
          ]);

        setContacts(contactsCount || 0);
        setProjects(projectsCount || 0);
        setVisitors(data?.data);
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      }
    };

    fetchData();
  }, []);

  console.log(visitors);

  return (
    <div className=" ">
      <div className="grid gap-4 lg:gap-x-8 md:grid-cols-4 mt-5 ">
        <Card className="relative p-6 rounded-2xl bg-white/30 shadow dark:bg-slate-900">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-slate-500 dark:text-slate-400">
              <span>Total Projects</span>
              <SquareChartGantt className="w-4 h-4 text-green-600" />
            </div>
            <div className="text-3xl dark:text-slate-100">
              <NumberTicker value={projects || 100} />
            </div>
          </div>
        </Card>
        <Card className="relative p-6 rounded-2xl bg-white/30 shadow dark:bg-slate-900">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-slate-500 dark:text-slate-400">
              <span>Total Visitors</span>
              <Users className="w-4 h-4 text-yellow-600" />
            </div>
            <div className="text-3xl dark:text-slate-100">
              <NumberTicker value={visitors?.totalVisitors || 0} />
            </div>
          </div>
        </Card>
        <Card className="relative p-6 rounded-2xl bg-white/30 shadow dark:bg-slate-900">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-slate-500 dark:text-slate-400">
              <span>Total Views</span>
              <CiViewBoard className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-3xl dark:text-slate-100">
              <NumberTicker value={visitors?.totalVisits || 0} />
            </div>
          </div>
        </Card>
        <Card className="relative p-6 rounded-2xl bg-white/30 shadow dark:bg-slate-900">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-slate-500 dark:text-slate-400">
              <span>Total Contacts</span>
              <UserCircleIcon className="w-4 h-4 text-green-600" />
            </div>
            <div className="text-3xl dark:text-slate-100">
              <NumberTicker value={contacts || 100} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardStats;
