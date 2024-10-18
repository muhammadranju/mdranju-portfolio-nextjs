"use client";
import React from "react";

const SkeletonUI = () => {
  return (
    <div className="flex w-full flex-col gap-4 dark:bg-slate-800 bg-slate-300 p-5 rounded-xl">
      <div className="skeleton h-60 w-full dark:bg-slate-600 bg-slate-200"></div>
      <div className="skeleton h-4 dark:bg-slate-500 bg-slate-200 w-28"></div>
      <div className="skeleton h-4 dark:bg-slate-500 bg-slate-200 w-full"></div>
      <div className="skeleton h-4 dark:bg-slate-500 bg-slate-200 w-full"></div>
      <div className="skeleton h-4 dark:bg-slate-500 bg-slate-200 w-full"></div>
      <div className="skeleton h-4 dark:bg-slate-500 bg-slate-200 w-full"></div>
    </div>
  );
};

export default SkeletonUI;
