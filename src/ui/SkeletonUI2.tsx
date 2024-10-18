import React from "react";

const SkeletonUI2 = () => {
  return (
    <div className="flex w-full flex-col gap-4 dark:bg-slate-800 bg-slate-300  p-5 rounded-xl">
      <div className="skeleton  dark:bg-slate-500 bg-slate-200  h-40 w-64"></div>
      <div className="skeleton  dark:bg-slate-500 bg-slate-200  h-4 w-28 "></div>
      <div className="skeleton  dark:bg-slate-500 bg-slate-200  h-4 w-full"></div>
      <div className="skeleton  dark:bg-slate-500 bg-slate-200  h-4 w-full"></div>
      <div className="skeleton  dark:bg-slate-500 bg-slate-200  h-4 w-full"></div>
      <div className="skeleton  dark:bg-slate-500 bg-slate-200  h-4 w-full"></div>

      <div className="flex gap-3 justify-around items-center">
        <div className="skeleton h-10 w-24 dark:bg-slate-500 bg-slate-200  shrink-0 rounded-xl"></div>
        <div className="skeleton h-10 w-24 dark:bg-slate-500 bg-slate-200  shrink-0 rounded-xl"></div>
      </div>
    </div>
  );
};

export default SkeletonUI2;
