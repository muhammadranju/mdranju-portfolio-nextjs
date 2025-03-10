// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { Button } from "../ui/button";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { URL_V2 } from "@/api/cron/route";

// const BaseURL = "http://localhost:3030/v2/api/projects";

// const ProjectAdd = () => {
//   const [value, setValue] = useState("");
//   const [project, setProject] = useState<any>({
//     title: "",
//     description: "",
//     longDescription: value,
//     frontendUrl: "",
//     backendUrl: "",
//     liveUrl: "",
//     image: "",
//     category: "",
//     tags: "",
//     author: "",
//     createdAt: "",
//     sourceCode: "",
//     liveLink: "",
//     // longDetails: "",
//   });

//   useEffect(() => {
//     const element = document.getElementById("myElement");
//     console.log(element);
//   }, []); // Empty dependency array means it runs once on mount
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   const toolbarOptions = [
//     ["bold", "italic", "underline", "strike"], // toggled buttons
//     ["blockquote", "code-block"],
//     ["link", "image", "video", "formula"],

//     [{ header: 1 }, { header: 2 }], // custom button values
//     [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
//     [{ script: "sub" }, { script: "super" }], // superscript/subscript
//     [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
//     [{ direction: "rtl" }], // text direction

//     [{ size: ["small", false, "large", "huge"] }], // custom dropdown
//     [{ header: [1, 2, 3, 4, 5, 6, false] }],

//     [{ color: [] }, { background: [] }], // dropdown with defaults from theme
//     [{ font: [] }],
//     [{ align: [] }],

//     ["clean"], // remove formatting button
//   ];

//   const handleChange = (e: any) => {
//     setProject({
//       ...project,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handelProjectSubmit = async (e: any) => {
//     setIsLoading(true);
//     e.preventDefault();

//     const response = await fetch(`${URL_V2}/projects`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         title: project.title,
//         details: project.description,
//         longDetails: value,
//         sourceCode: project.frontendUrl,
//         backendSourceCode: project.backendUrl,
//         liveLink: project.liveUrl,
//         image: project.image,
//         category: project.category,
//         tags: project.tags,
//         author: "Md. Ranju",
//         avatar: "https://avatars.githubusercontent.com/u/80270685?v=4",
//         createdAt: project.createdAt,
//       }),
//     });

//     if (!response.ok) {
//       setIsLoading(false);
//       throw new Error("Failed to fetch data");
//     }
//     if (response.status === 201) {
//       setIsLoading(false);
//       toast.success("Project added successfully!");
//       setProject({
//         title: "",
//         description: "",
//         longDescription: "",
//         frontendUrl: "",
//         backendUrl: "",
//         liveUrl: "",
//         image: "",
//         category: "",
//         tags: "",
//         author: "",
//         createdAt: "",
//         sourceCode: "",
//         liveLink: "",
//         // longDetails: "",
//       });
//       setTimeout(() => {
//         router.push("/dashboard/projects");
//       }, 300);
//       return;
//     }
//   };

"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // CSS can stay static
import { URL_V2 } from "@/api/cron/route";

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const ProjectAdd = () => {
  const [value, setValue] = useState("");
  const [project, setProject] = useState<any>({
    title: "",
    description: "",
    longDescription: value,
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
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false); // Add client-side check
  const router = useRouter();

  // Set isClient to true only on the client side
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["clean"],
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

    const response = await fetch(`${URL_V2}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: project.title,
        details: project.description,
        longDetails: value,
        sourceCode: project.frontendUrl,
        backendSourceCode: project.backendUrl,
        liveLink: project.liveUrl,
        image: project.image,
        category: project.category,
        tags: project.tags,
        author: "Md. Ranju",
        avatar: "https://avatars.githubusercontent.com/u/80270685?v=4",
        createdAt: project.createdAt,
      }),
    });

    if (!response.ok) {
      setIsLoading(false);
      throw new Error("Failed to fetch data");
    }
    if (response.status === 201) {
      setIsLoading(false);
      toast.success("Project added successfully!");
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
      });
      setValue("");
      setTimeout(() => {
        router.push("/dashboard/projects");
      }, 300);
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
          htmlFor="frontendUrl"
          className="block mb-2 cursor-pointer text-sm font-medium text-slate-900 dark:text-white"
        >
          Frontend Source Code URL
        </label>
        <input
          type="text"
          name="frontendUrl"
          id="frontendUrl"
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your frontend source code url"
          value={project.frontendUrl}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="backendUrl"
          className="block mb-2 cursor-pointer text-sm font-medium text-slate-900 dark:text-white"
        >
          Backend Source Code URL <small> (optional)</small>
        </label>
        <input
          type="text"
          id="backendUrl"
          name="backendUrl"
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your backend source code url"
          value={project.backendUrl}
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
          value={project.image}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-center">
        <Button className="w-full">
          {isLoading ? "Submitting..." : "Submit Project"}
        </Button>
      </div>
    </form>
  );
};

export default ProjectAdd;
