"use client";
import { URL_V2 } from "@/api/cron/route";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const ProjectsTable = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch(`${URL_V2}/projects`);
      const data = await res.json();
      setProjects(data?.data);
    };
    getProjects();
  }, []);
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
          {projects?.map((project: any) => (
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
                  className="w-10 h-10 rounded-md"
                  width={50}
                  height={50}
                  alt={project?.title}
                />
              </th>
              <td className="px-6 py-4">{project?.title}</td>
              <td className="px-6 py-4">
                {project?.details.length > 100
                  ? project?.details.substring(0, 100).concat("...")
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
                    {project?.liveLink}
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
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
