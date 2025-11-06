"use client";
import getProject from "@/api/cron/route";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiEdit,
  FiExternalLink,
  FiMoreVertical,
} from "react-icons/fi";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProjectSkeleton from "./ProjectSkeleton";

// Define types for better TypeScript support
interface Project {
  _id: string;
  title: string;
  details: string;
  category: string;
  liveLink?: string;
  image: string;
  slug: string;
}

interface ProjectsResponse {
  project: Project[];
}

const ProjectsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;

  const { data, isLoading, isError, error } = useQuery<ProjectsResponse, Error>(
    {
      queryKey: ["projects"],
      queryFn: async () => await getProject(),
      staleTime: 60000,
      refetchOnWindowFocus: false, // Prevent unnecessary refetches on focus
      retry: 2, // Retry failed requests up to 2 times
    }
  );

  const projects = data?.project ?? [];
  const totalProjects = projects.length;

  // Early return for error state
  if (isError) {
    return (
      <div className="flex items-center justify-center p-8 text-center">
        <div>
          <h3 className="text-lg font-medium text-destructive mb-2">
            Failed to load projects
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {error?.message || "Something went wrong. Please try again."}
          </p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </div>
    );
  }

  // Calculate current projects for the page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Calculate total pages
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= totalPages &&
      pageNumber !== currentPage
    ) {
      setCurrentPage(pageNumber);
    }
  };

  // Handle previous/next
  const handlePrevPage = () => handlePageChange(currentPage - 1);
  const handleNextPage = () => handlePageChange(currentPage + 1);

  // Generate page numbers (show 5 pages max, with ellipsis if more)
  const getPageNumbers = () => {
    const pages: number[] = [];
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

  // Empty state component
  const EmptyState = () => (
    <tr>
      <td colSpan={5} className="px-6 py-12 text-center">
        <div className="text-muted-foreground">
          <p className="text-lg font-medium mb-2">No projects found</p>
          <p className="text-sm">Get started by creating a new project.</p>
        </div>
      </td>
    </tr>
  );

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
              Details
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3 text-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {currentProjects.length === 0 ? (
            <ProjectSkeleton range={8} />
          ) : totalProjects === 0 ? (
            <EmptyState />
          ) : (
            currentProjects.map((project) => (
              <tr
                key={project._id} // Use _id directly for stable key
                className="odd:bg-white odd:dark:bg-slate-900 even:bg-slate-50 even:dark:bg-slate-900/50 border-b dark:border-slate-700 border-slate-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
                >
                  <Image
                    src={project.image}
                    className="w-24 h-16 rounded-md object-cover"
                    width={96}
                    height={64}
                    alt={project.title}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={false} // Only prioritize if needed
                  />
                </th>

                <td className="px-6 py-4">
                  {project.title.length > 50
                    ? `${project.title.substring(0, 50)}...`
                    : project.title}
                </td>
                <td className="px-6 py-4 w-1/3">
                  {project.details.length > 150
                    ? `${project.details.substring(0, 150)}...`
                    : project.details}
                </td>
                <td className="px-6 py-4">{project.category}</td>
                <td className="px-6 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <FiMoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {project.liveLink && (
                        <DropdownMenuItem asChild>
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full cursor-pointer items-center gap-2"
                          >
                            <FiExternalLink className="h-4 w-4" />
                            Visit Live Site
                          </a>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem asChild>
                        <Link
                          href={`/dashboard/projects/${project?.slug}`}
                          // href={`/dashboard/projects/${project._id}`}
                          className="flex w-full items-center gap-2"
                        >
                          <FiEdit className="h-4 w-4" />
                          Edit Project
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {!isLoading && totalProjects > 0 && totalPages > 1 && (
        <div
          role="navigation"
          aria-label="Projects pagination"
          className="flex items-center justify-between bg-white border-t border-slate-200 px-6 py-3 sm:px-6 dark:bg-slate-800 dark:border-slate-700"
        >
          <div className="text-sm text-slate-700 dark:text-slate-400">
            Page {currentPage} of {totalPages} ({totalProjects} total projects)
          </div>
          <div className="flex items-center space-x-1">
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              aria-label={`Go to previous page (${currentPage - 1})`}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-500 bg-white border border-slate-300 hover:bg-slate-50 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiChevronLeft className="h-4 w-4" />
            </Button>

            {/* Page Numbers */}
            {getPageNumbers().map((page) => (
              <Button
                key={page}
                onClick={() => handlePageChange(page)}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
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
              aria-label={`Go to next page (${currentPage + 1})`}
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
