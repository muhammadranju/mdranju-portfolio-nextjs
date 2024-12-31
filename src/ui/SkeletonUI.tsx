"use client";
import React from "react";

const SkeletonUI = () => {
  return (
    <div className="animate-pulse border h-fit rounded-xl dark:bg-slate-800 bg-slate-300 ">
  <div className="h-48 dark:bg-slate-500 bg-slate-200 rounded-t-xl" />
  <div className="min-h-min p-3 space-y-4">
    <div className="h-4 dark:bg-slate-500 bg-slate-200  rounded-xl w-3/5" />
    <div className="h-4 dark:bg-slate-500 bg-slate-200  rounded-xl w-3/4" />
    <div className="h-4 dark:bg-slate-500 bg-slate-200  rounded-xl w-full" />
    <div className="h-4 dark:bg-slate-500 bg-slate-200  rounded-xl w-full" />
    <div className="h-4 dark:bg-slate-500 bg-slate-200  rounded-xl w-full" />
    <div className="flex space-x-3">
      <div className="h-10 w-10 dark:bg-slate-500 bg-slate-200   rounded-lg" />
      <div>
        <div className="h-4 dark:bg-slate-500 bg-slate-200  rounded-xl w-1/2" />
        <div className="h-4 dark:bg-slate-500 bg-slate-200  rounded-xl w-1/2 mt-1" />
      </div>
      <div className="h-10 w-20 dark:bg-slate-500 bg-slate-200  rounded-lg" />
    </div>
  </div>
</div>


  );
};

export default SkeletonUI;
