"use client";
import { useEffect, useState } from "react";
import { URL_V2 } from "@/api/cron/route";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ProjectUpdate = ({ projectData }: any) => {
  const [project, setProject] = useState<any>(null);
  const [value, setValue] = useState(projectData?.longDetails);
  const [isLoading, setIsLoading] = useState(false);

  console.log(projectData);

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
    const response = await fetch(`/api/projects/${projectData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: project?.title,
        details: project?.description,
        longDetails: value,
        sourceCode: project?.frontendUrl,
        backendSourceCode: project?.backendSourceCode,
        liveLink: project?.liveUrl,
        image: project?.image,
        category: project?.category,
        tags: project?.tags,
        author: "Md. Ranju",
        avatar: "https://avatars.githubusercontent.com/u/80270685?v=4",
      }),
    });

    if (!response.ok) {
      setIsLoading(false);
      toast.error("Failed to fetch data");
      throw new Error("Failed to fetch data");
    }

    if (response.status === 200) {
      setIsLoading(false);
      toast.success("Project update successfully!");
      return;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setProject({
      title: projectData?.title,
      description: projectData?.details,
      longDescription: projectData?.longDetails,
      frontendUrl: projectData?.sourceCode,
      backendSourceCode: projectData?.backendSourceCode,
      liveUrl: projectData?.liveLink,
      image: projectData?.image,
      category: projectData?.category,
      tags: projectData?.tags,
      sourceCode: projectData?.sourceCode,
    });
    setIsLoading(false);
  }, [
    projectData?.title,
    projectData?.details,
    projectData?.longDetails,
    projectData?.sourceCode,
    projectData?.backendSourceCode,
    projectData?.liveLink,
    projectData?.image,
    projectData?.category,
    projectData?.tags,
  ]);

  return (
    <>
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
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your title"
            className="bg-background"
            required
            // defaultValue={projectData.title}
            value={project?.title}
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
          <Textarea
            name="description"
            id="description"
            cols={30}
            rows={5}
            placeholder="Enter your description"
            className="bg-background"
            required
            // defaultValue={projectData.details}
            value={project?.description}
            onChange={handleChange}
          ></Textarea>
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
          <Input
            type="text"
            name="sourceCode"
            id="sourceCode"
            className="bg-background"
            placeholder="Enter your frontend source code url"
            // defaultValue={projectData.sourceCode}
            value={project?.sourceCode}
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
          <Input
            type="text"
            id="backendSourceCode"
            name="backendSourceCode"
            className="bg-background"
            placeholder="Enter your backend source code url"
            // defaultValue={projectData.backendSourceCode}
            value={project?.backendSourceCode}
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
          <Input
            type="text"
            id="liveUrl"
            name="liveUrl"
            className="bg-background"
            placeholder="Enter your live url"
            // defaultValue={projectData.liveLink}
            value={project?.liveUrl}
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
            <Input
              type="text"
              id="category"
              name="category"
              className="bg-background"
              placeholder="Enter category e.g. React-Nextjs-Tailwind-Nodejs"
              required
              // defaultValue={projectData.category}
              value={project?.category}
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
            <Input
              type="text"
              name="tags"
              id="tags"
              className="bg-background"
              placeholder="Enter tags e.g. react, nextjs, tailwind, etc"
              required
              // defaultValue={projectData.tags}
              value={project?.tags}
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
          <Input
            type="text"
            name="image"
            id="image"
            className="bg-background"
            placeholder="Enter your project image"
            required
            // defaultValue={projectData.image}
            value={project?.image}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-center">
          <Button className="w-full" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Project"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default ProjectUpdate;
