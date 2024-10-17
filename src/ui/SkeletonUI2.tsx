import React from "react";

const SkeletonUI2 = () => {
  return (
    <div className="flex w-full flex-col gap-4 dark:bg-slate-600 bg-slate-100 p-5 rounded-xl">
      <div className="skeleton h-44 w-64"></div>
      <div className="skeleton h-4 w-28 "></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
};

export default SkeletonUI2;
