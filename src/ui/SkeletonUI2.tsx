import React from "react";

const SkeletonUI2 = () => {
  return (
    <div className="group relative border rounded-xl dark:bg-slate-800 bg-slate-300 shadow-md animate-pulse">
      {/* Aspect ratio for the top element */}
      <div className="aspect-video w-full rounded-t-xl dark:bg-slate-500 bg-slate-200 h-40 sm:h-48 md:h-56 lg:h-64" />
      <div className="p-3">
        {/* First line */}
        <div className="mt-4 w-4/5 h-4 dark:bg-slate-500 bg-slate-200 rounded-xl sm:w-3/5 md:w-2/3 lg:w-1/2" />
        {/* Second line */}
        <div className="mt-4 w-full h-4 dark:bg-slate-500 bg-slate-200 rounded-xl sm:w-3/4 md:w-4/5 lg:w-3/4" />
        {/* Third line */}
        <div className="mt-4 w-full h-4 dark:bg-slate-500 bg-slate-200 rounded-xl" />
        {/* Fourth line */}
        <div className="mt-4 w-full h-4 dark:bg-slate-500 bg-slate-200 rounded-xl" />
      </div>
    </div>
  );
};

export default SkeletonUI2;
