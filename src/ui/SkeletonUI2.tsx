import React from "react";

const SkeletonUI2 = () => {
  return (
    <div className="group relative border rounded-xl dark:bg-slate-800 bg-slate-300 shadow-md animate-pulse">
  <div className="aspect-video w-full rounded-t-xl dark:bg-slate-500 bg-slate-200 h-64" />
  <div className="p-3">
    <div className="mt-4 w-3/5 h-4 dark:bg-slate-500 bg-slate-200 rounded-xl" />
    <div className="mt-4 h-4 dark:bg-slate-500 bg-slate-200 w-3/4 rounded-xl" />
    <div className="mt-4 w-full h-4 dark:bg-slate-500 bg-slate-200 rounded-xl" />
    <div className="mt-4 w-full h-4 dark:bg-slate-500 bg-slate-200 rounded-xl" />
  </div>
 
</div>

  );
};

export default SkeletonUI2;
