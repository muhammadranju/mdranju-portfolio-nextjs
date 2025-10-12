const loading = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto mt-28 mb-10 dark:bg-[#020617] bg-slate-100 rounded-xl border-[1px] dark:border-slate-500/10 border-slate-500/5 animate-pulse">
      {/* Back Button */}
      <div className="pb-5">
        <div className="rounded-full dark:bg-slate-800 bg-slate-200 h-8 w-24"></div>
      </div>

      {/* Image Placeholder */}
      <div className="bg-slate-200  dark:bg-slate-500 w-full h-[500px] rounded-lg drop-shadow-md"></div>

      <div className="mt-6">
        {/* Tag Placeholder */}
        <div className="p-2 text-xs mb-10 border-[2px] rounded-full w-16 h-5 dark:bg-slate-500 bg-slate-200"></div>

        {/* Title Placeholder */}
        <div className="h-8 dark:bg-slate-500 bg-slate-200 rounded w-3/4"></div>

        {/* Details Placeholder */}
        <div className="mt-2 space-y-3">
          <div className="h-4 dark:bg-slate-500 bg-slate-200 rounded w-full"></div>
          <div className="h-4 dark:bg-slate-500 bg-slate-200 rounded w-5/6"></div>
          <div className="h-4 dark:bg-slate-500 bg-slate-200 rounded w-3/4"></div>
        </div>

        {/* Tags Placeholder */}
        <div className="flex mt-4 space-x-2">
          {Array(3)
            .fill("")
            .map((_, idx) => (
              <div
                key={idx}
                className="w-16 h-6 dark:bg-slate-500 bg-slate-200 rounded-full"
              ></div>
            ))}
        </div>

        {/* Author Info Placeholder */}
        <div className="mt-6 flex items-center gap-x-2">
          <div className="w-12 h-12 rounded-lg dark:bg-slate-500 bg-slate-200"></div>
          <div>
            <div className="h-4 dark:bg-slate-500 bg-slate-200 rounded w-24"></div>
            <div className="h-3 dark:bg-slate-500 bg-slate-200 rounded w-20 mt-1"></div>
          </div>
        </div>

        {/* Buttons Placeholder */}
        <div className="flex items-center mt-6 gap-x-5">
          <div className="w-24 h-10 dark:bg-slate-500 bg-slate-200 rounded-lg"></div>
          <div className="w-24 h-10 dark:bg-slate-500 bg-slate-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
