import { Skeleton } from "../ui/skeleton";

const ProjectSkeleton = ({ range = 6 }: { range?: number }) => {
  return (
    <>
      {Array(range)
        .fill(null)
        .map((_, index) => (
          <tr
            className="odd:bg-white odd:dark:bg-slate-900 even:bg-slate-50 even:dark:bg-slate-900/50 border-b dark:border-slate-700 border-slate-200"
            key={index}
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
            >
              <Skeleton className="w-24 h-16 rounded-md" />
            </th>
            <td className="px-6 py-4">
              <Skeleton className="h-4 w-32" />
            </td>
            <td className="px-6 py-4">
              <Skeleton className="h-4 w-64" />
            </td>
            <td className="px-6 py-4">
              <Skeleton className="h-4 w-20" />
            </td>
            <td className="px-6 py-4">
              <Skeleton className="h-4 w-40" />
            </td>
            <td className="px-6 py-4">
              <Skeleton className="h-4 w-12" />
            </td>
          </tr>
        ))}
    </>
  );
};

export default ProjectSkeleton;
