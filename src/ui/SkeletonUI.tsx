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

      <div className="flex gap-3">
        <div className="skeleton h-12 w-12 dark:bg-slate-500 bg-slate-200  shrink-0 rounded-xl"></div>
        <div className="space-y-2 mt-1">
          <div className="skeleton h-4 dark:bg-slate-500 bg-slate-200 w-28"></div>
          <div className="skeleton h-4 dark:bg-slate-500 bg-slate-200 w-24"></div>
        </div>
        <div className="skeleton h-12 w-24 dark:bg-slate-500 bg-slate-200  shrink-0 rounded-xl"></div>
      </div>
    </div>
  );
};

export default SkeletonUI;
