"use client";
import { useQuery } from "@tanstack/react-query";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type TooltipPayloadItem = {
  value: number;
};

type ChartTooltipProps = {
  active?: boolean;
  label?: string;
  payload?: TooltipPayloadItem[];
};

const VisitorsTooltip = ({ active, label, payload }: ChartTooltipProps) => {
  if (!active || !payload || payload.length === 0) return null;
  const value = payload[0]?.value ?? 0;
  return (
    <div className="rounded-md border border-slate-700 bg-slate-900/90 px-3 py-2 text-xs text-slate-100 shadow-lg">
      <div className="mb-1 text-[10px] uppercase tracking-wide text-slate-400">
        {label}
      </div>
      <div className="font-medium">
        Visitors: <span className="text-indigo-300">{value}</span>
      </div>
    </div>
  );
};

const PortfolioTooltip = ({ active, label, payload }: ChartTooltipProps) => {
  if (!active || !payload || payload.length === 0) return null;
  const value = payload[0]?.value ?? 0;
  return (
    <div className="rounded-md border border-slate-700 bg-slate-900/90 px-3 py-2 text-xs text-slate-100 shadow-lg">
      <div className="mb-1 text-[10px] uppercase tracking-wide text-slate-400">
        {label}
      </div>
      <div className="font-medium">
        Views: <span className="text-indigo-300">{value}</span>
      </div>
    </div>
  );
};

const fallbackVisitors = [
  { name: "Jan", value: 0 },
  { name: "Feb", value: 0 },
  { name: "Mar", value: 0 },
  { name: "Apr", value: 0 },
  { name: "May", value: 0 },
  { name: "Jun", value: 0 },
  { name: "Jul", value: 0 },
  { name: "Aug", value: 0 },
  { name: "Sep", value: 0 },
  { name: "Oct", value: 0 },
  { name: "Nov", value: 0 },
  { name: "Dec", value: 0 },
];

const fallbackProfileViews = fallbackVisitors;

type MonthlyPoint = {
  key: string;
  month: string;
  year: number;
  count: number;
};

type MonthlyStatsResponse = {
  success: boolean;
  data?: {
    visitors: MonthlyPoint[];
    profileViews: MonthlyPoint[];
  };
};

export const PortfolioViewChart = () => {
  const { data } = useQuery<MonthlyStatsResponse>({
    queryKey: ["monthly-stats"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/stats/monthly`,
      );
      if (!res.ok) {
        throw new Error("Failed to fetch monthly stats");
      }
      return res.json();
    },
    staleTime: 60000,
  });

  const visitors =
    data?.data?.visitors?.map((item) => ({
      name: item.month,
      value: item.count,
    })) ?? fallbackVisitors;

  const hasVisitorsData = visitors.some((item) => item.value > 0);

  return (
    <div className="w-full lg:h-96 h-44 lg:my-10">
      {hasVisitorsData ? (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={visitors}>
            <Bar dataKey="value" fill="#312e81" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip content={<VisitorsTooltip />} cursor={false} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex h-full items-center justify-center text-xs text-slate-500">
          No visitor data yet
        </div>
      )}
    </div>
  );
};

export const ProjectsChart = () => {
  const { data } = useQuery<MonthlyStatsResponse>({
    queryKey: ["monthly-stats"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/stats/monthly`,
      );
      if (!res.ok) {
        throw new Error("Failed to fetch monthly stats");
      }
      return res.json();
    },
    staleTime: 60000,
  });

  const profileViews =
    data?.data?.profileViews?.map((item) => ({
      name: item.month,
      value: item.count,
    })) ?? fallbackProfileViews;

  const hasProfileViewsData = profileViews.some((item) => item.value > 0);

  return (
    <div className="w-full lg:h-96 h-44 lg:my-10">
      <span className="flex float-end">Portfolio Viewers</span>
      {hasProfileViewsData ? (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={profileViews}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis className="border-none" axisLine={false} tickLine={false} />
            <Tooltip content={<PortfolioTooltip />} cursor={false} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fill="#312e81"
              fillOpacity={0.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex h-full items-center justify-center text-xs text-slate-500">
          No profile view data yet
        </div>
      )}
    </div>
  );
};
