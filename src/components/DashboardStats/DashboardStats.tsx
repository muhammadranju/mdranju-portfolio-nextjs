"use client";
const DashboardStats = () => {
  return (
    <div className=" ">
      <div className="grid gap-4 lg:gap-x-8 md:grid-cols-3 mt-5 ">
        <div className="relative p-6 rounded-2xl bg-white/30 shadow dark:bg-slate-900">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-slate-500 dark:text-slate-400">
              <span>Published projects</span>
              <svg
                className="w-4 h-4 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-3xl dark:text-slate-100">22</div>
          </div>
        </div>
        <div className="relative p-6 rounded-2xl bg-white/30 shadow dark:bg-slate-900">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-slate-500 dark:text-slate-400">
              <span>Draft projects</span>
              <svg
                className="w-4 h-4 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-3xl dark:text-slate-100">0</div>
          </div>
        </div>
        <div className="relative p-6 rounded-2xl bg-white/30 shadow dark:bg-slate-900">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-slate-500 dark:text-slate-400">
              <span>Padding projects</span>
              <svg
                className="w-4 h-4 text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-3xl dark:text-slate-100">0</div>
          </div>
        </div>
        <div className="relative p-6 rounded-2xl bg-white/30 shadow dark:bg-slate-900">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-slate-500 dark:text-slate-400">
              <span>Padding projects</span>
              <svg
                className="w-4 h-4 text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-3xl dark:text-slate-100">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
