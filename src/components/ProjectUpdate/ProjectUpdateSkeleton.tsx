import { Skeleton } from "../ui/skeleton";

const ProjectUpdateSkeleton = () => {
  return (
    <form className="border rounded-lg p-5 shadow-md border-slate-200 dark:border-slate-800 my-10">
      <div className="mb-6">
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
      <div className="mb-6">
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-20 w-full rounded-lg" />
      </div>
      <div className="mb-6">
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-32 w-full rounded-lg border" />
      </div>
      <div className="mb-6">
        <Skeleton className="h-4 w-40 mb-2" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
      <div className="mb-6">
        <Skeleton className="h-4 w-40 mb-2" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
      <div className="mb-6">
        <Skeleton className="h-4 w-24 mb-2" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
      <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-6 justify-center items-center">
        <div className="mb-6 w-full">
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
        <div className="mb-6 w-full">
          <Skeleton className="h-4 w-16 mb-2" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
      </div>
      <div className="mb-6">
        <Skeleton className="h-4 w-24 mb-2" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
      <div className="flex justify-center">
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
    </form>
  );
};

export default ProjectUpdateSkeleton;
