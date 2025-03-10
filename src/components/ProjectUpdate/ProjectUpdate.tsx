"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import { URL_V2 } from "@/api/cron/route";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// const BaseURL = "http://localhost:3030/v2/api";

const ProjectUpdate = ({ projectID }: any) => {
  const [project, setProject] = useState<any>({
    title: projectID.title,
    description: projectID.details,
    longDescription: projectID.longDetails,
    frontendUrl: projectID.sourceCode,
    backendSourceCode: projectID.backendSourceCode,
    liveUrl: projectID.liveLink,
    image: projectID.image,
    category: projectID.category,
    tags: projectID.tags,
    sourceCode: projectID.sourceCode,
    // longDetails: projectID.longDetails,
  });
  const [value, setValue] = useState(projectID.longDetails);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const handleChange = (e: any) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handelProjectSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();

    const response = await fetch(`${URL_V2}/projects/${projectID._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: project.title,
        details: project.description,
        longDetails: value,
        sourceCode: project.frontendUrl,
        backendSourceCode: project.backendSourceCode,
        liveLink: project.liveUrl,
        image: project.image,
        category: project.category,
        tags: project.tags,
        author: "Md. Ranju",
        avatar: "https://avatars.githubusercontent.com/u/80270685?v=4",
      }),
    });

    if (!response.ok) {
      setIsLoading(false);
      throw new Error("Failed to fetch data");
    }

    if (response.status === 200) {
      setIsLoading(false);
      toast.success("Project update successfully!");
      setProject({
        title: "",
        description: "",
        longDescription: "",
        frontendUrl: "",
        backendUrl: "",
        liveUrl: "",
        image: "",
        category: "",
        tags: "",
        author: "",
        createdAt: "",
        sourceCode: "",
        liveLink: "",
        longDetails: "",
      });
      router.push("/dashboard/projects");
      return;
    }
  };

  return (
    <form
      onSubmit={handelProjectSubmit}
      className="border rounded-lg p-5 shadow-md border-slate-200 dark:border-slate-800 my-10"
    >
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block cursor-pointer mb-2 text-sm font-medium text-slate-900 dark:text-white"
        >
          Project Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your title"
          required
          // defaultValue={projectID.title}
          value={project.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block mb-2 cursor-pointer text-sm font-medium text-slate-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          cols={30}
          rows={5}
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your description"
          required
          // defaultValue={projectID.details}
          value={project.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="mb-6">
        <label
          htmlFor="description"
          className="block mb-2 cursor-pointer text-sm font-medium text-slate-900 dark:text-white"
        >
          Long Description
        </label>
        <ReactQuill
          modules={{ toolbar: toolbarOptions }}
          theme="snow"
          value={value}
          onChange={setValue}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="sourceCode"
          className="block mb-2 cursor-pointer text-sm font-medium text-slate-900 dark:text-white"
        >
          Frontend Source Code URL
        </label>
        <input
          type="text"
          name="sourceCode"
          id="sourceCode"
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your frontend source code url"
          // defaultValue={projectID.sourceCode}
          value={project.sourceCode}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="backendSourceCode"
          className="block mb-2 cursor-pointer text-sm font-medium text-slate-900 dark:text-white"
        >
          Backend Source Code URL <small> (optional)</small>
        </label>
        <input
          type="text"
          id="backendSourceCode"
          name="backendSourceCode"
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your backend source code url"
          // defaultValue={projectID.backendSourceCode}
          value={project.backendSourceCode}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="liveUrl"
          className="block mb-2 cursor-pointer text-sm font-medium text-slate-900 dark:text-white"
        >
          Live URL <small> (optional)</small>
        </label>
        <input
          type="text"
          id="liveUrl"
          name="liveUrl"
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your live url"
          // defaultValue={projectID.liveLink}
          value={project.liveUrl}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-6 justify-center items-center">
        <div className="mb-6 w-full">
          <label
            htmlFor="category"
            className="block mb-2 cursor-pointer text-sm font-medium text-slate-900 dark:text-white"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter category e.g. React-Nextjs-Tailwind-Nodejs"
            required
            // defaultValue={projectID.category}
            value={project.category}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 w-full">
          <label
            htmlFor="tags"
            className="block mb-2 cursor-pointer text-sm font-medium text-slate-900 dark:text-white"
          >
            Tags
          </label>
          <input
            type="text"
            name="tags"
            id="tags"
            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter tags e.g. react, nextjs, tailwind, etc"
            required
            // defaultValue={projectID.tags}
            value={project.tags}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="image"
          className="block mb-2 cursor-pointer text-sm font-medium text-slate-900 dark:text-white"
        >
          Project Image
        </label>
        <input
          type="text"
          name="image"
          id="image"
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your project image"
          required
          // defaultValue={projectID.image}
          value={project.image}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-center">
        <Button className="w-full" disabled={isLoading}>
          {isLoading ? "Updating..." : "Update Project"}
        </Button>
      </div>
    </form>
  );
};

export default ProjectUpdate;
