"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FiEdit,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import ProjectSkeleton from "./ProjectSkeleton";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";
import getProject from "@/api/cron/route";

const ProjectsTable = () => {
  // const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;

  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return await getProject();
    },
    staleTime: 60000,
  });
  const projects = data?.project;

  // useEffect(() => {
  //   const getProjects = async () => {
  //     const res = await fetch(`/api/projects`);
  //     const data = await res.json();
  //     setProjects(data?.data || []);
  //     setCurrentPage(1); // Reset to first page on new fetch
  //   };
  //   getProjects();
  // }, []);

  // Calculate current projects for the page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects?.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Calculate total pages
  const totalPages = Math.ceil(projects?.length / projectsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Handle previous/next
  const handlePrevPage = () => handlePageChange(currentPage - 1);
  const handleNextPage = () => handlePageChange(currentPage + 1);

  // Generate page numbers (show 5 pages max, with ellipsis if more)
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
      <table className="w-full text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400">
        <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              details
            </th>
            <th scope="col" className="px-6 py-3">
              category
            </th>
            <th scope="col" className="px-6 py-3">
              liveLink
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {projects?.length === 0 && <ProjectSkeleton range={8} />}
          {projects?.length > 0 &&
            currentProjects?.map((project: any) => (
              <tr
                key={project?._id}
                className="odd:bg-white odd:dark:bg-slate-900 even:bg-slate-50 even:dark:bg-slate-900/50 border-b dark:border-slate-700 border-slate-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
                >
                  <Image
                    src={project?.image}
                    className="w-24 h-16 rounded-md object-cover"
                    width={50}
                    height={50}
                    alt={project?.title}
                  />
                </th>

                <td className="px-6 py-4">
                  {project?.title.length > 50
                    ? project?.title.substring(0, 40).concat("...")
                    : project?.title}
                  {/* {project?.title} */}
                </td>
                <td className="px-6 py-4 w-1/3">
                  {project?.details.length > 150
                    ? project?.details.substring(0, 200).concat("...")
                    : project?.details}
                </td>
                <td className="px-6 py-4">{project?.category}</td>
                <td className="px-6 py-4">
                  {project?.liveLink ? (
                    <a
                      href={project?.liveLink}
                      target="_blank"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <FiExternalLink className="mr-2 h-4 w-4" />
                    </a>
                  ) : (
                    ""
                  )}
                </td>
                <td className="px-6 py-4">
                  <Link
                    href={`/dashboard/projects/${project._id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <FiEdit className="mr-2 h-4 w-4" />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {projects?.length > 0 && totalPages > 1 && (
        <div className="flex items-center justify-between bg-white border-t border-slate-200 px-6 py-3 sm:px-6 dark:bg-slate-800 dark:border-slate-700">
          <div className="text-sm text-slate-700 dark:text-slate-400">
            Page {currentPage} of {totalPages} ({projects?.length} total
            projects)
          </div>
          <div className="flex items-center space-x-1">
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-500 bg-white border border-slate-300 hover:bg-slate-50 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiChevronLeft className="h-4 w-4" />
            </Button>

            {/* Page Numbers */}
            {getPageNumbers()?.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 rounded-md text-sm font-medium border ${
                  currentPage === page
                    ? "z-10 bg-blue-50 border-blue-500 text-blue-600 dark:bg-blue-900 dark:border-blue-500 dark:text-blue-400"
                    : "bg-white border-slate-300 text-slate-500 hover:bg-slate-50 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-300"
                }`}
              >
                {page}
              </Button>
            ))}

            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-500 bg-white border border-slate-300 hover:bg-slate-50 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsTable;
