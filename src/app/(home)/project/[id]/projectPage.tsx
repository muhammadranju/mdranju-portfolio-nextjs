"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TextAnimate } from "@/components/ui/text-animate";
import { format } from "date-fns";
import parse from "html-react-parser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { MdOpenInNew } from "react-icons/md";
import { Spotlight } from "@/components/ui/spotlight-new";
type Project = {
  id: string;
  title: string;
  details: string;
  longDetails: string;
  backendSourceCode: string;
  tags: string[];
  category: string;
  author: string;
  avatar: string;
  createdAt: string;
  sourceCode: string;
  liveLink: string;
  image: string;
};

type ProjectPageProps = {
  project: Project;
};

const ProjectPage = ({ project }: ProjectPageProps) => {
  const router = useRouter();

  const handelClick = () => {
    router.back();
  };

  return (
    <div className=" bg-slate-100 dark:bg-[#020617] relative  w-full  overflow-hidden antialiased ">
      <Spotlight />
      <div className=" p-8 max-w-7xl mx-auto mt-28 mb-10 dark:bg-[#020617] bg-slate-100 rounded-xl border-[1px] dark:border-slate-100/30 border-slate-500/5 shadow-lg    ">
        <div className="pb-5">
          <HoverBorderGradient
            onClick={handelClick}
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-slate-800 bg-slate-100 text-sm  text-slate-700 dark:text-slate-100 flex items-center"
          >
            <IoIosArrowBack className="font-extrabold text-lg mr-1 -ml-2" />{" "}
            Back
          </HoverBorderGradient>
        </div>
        <div className="bg-blue-100 w-full h-full rounded-lg drop-shadow-md overflow-hidden">
          <Image
            src={project?.image}
            width={1080}
            height={720}
            alt={project?.title}
            className="w-full "
          />
        </div>
        <div className="mt-6">
          <span className="p-2 text-xs mb-10 border-[2px] rounded-full flex items-center w-fit px-4">
            #
            <TextAnimate animation="blurInUp" by="word">
              {project?.category}
            </TextAnimate>
          </span>
          <h2 className="lg:text-3xl text-xl font-bold mt-5 z-[1000]">
            <TextAnimate animation="blurInUp" by="word">
              {project?.title}
            </TextAnimate>
          </h2>
          <p className=" mt-2 lg:max-w-5xl lg:text-base text-sm ">
            <TextAnimate animation="blurInUp" by="word">
              {project?.details}
            </TextAnimate>
          </p>

          <hr className="my-5" />

          <div
            className="prose max-w-full prose-headings:mb-2 prose-p:mb-1 prose-ul:mt-1 prose-ul:mb-1 prose-li:my-0
  prose-headings:text-gray-900 dark:prose-headings:text-gray-100
  prose-p:text-gray-700 dark:prose-p:text-gray-300
  prose-ul:text-gray-700 dark:prose-ul:text-gray-300
  prose-li:text-gray-600 dark:prose-li:text-gray-400
  prose-img:rounded-lg"
          >
            {project?.longDetails && parse(project?.longDetails)}
          </div>

          {project?.tags.length > 0 && (
            <div className="flex mt-4">
              <div>
                <div className="flex space-x-2 mt-2 flex-wrap items-center">
                  <span className="font-semibold ">Tags:</span>
                  {project?.tags.map((tag: string) => (
                    <button
                      key={tag}
                      className="w-fit h-6 px-5 flex text-xs items-center justify-center border rounded-full "
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-6">
            <div className="flex items-center gap-x-2">
              <Image
                width={100}
                height={100}
                src={project?.avatar}
                className="w-12 h-12 rounded-lg"
                alt={project?.author}
              />
              <div>
                <p>
                  <TextAnimate animation="blurInUp" by="word">
                    {project?.author}
                  </TextAnimate>
                </p>
                <span className="text-xs leading-tight ">
                  Added At: {format(new Date(project?.createdAt), "dd/MM/yyyy")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-6 gap-x-5">
            <a href={project?.sourceCode} target="_blank">
              <HoverBorderGradient
                containerClassName="rounded-lg"
                as="button"
                className="dark:bg-slate-900 bg-slate-100  text-slate-700 dark:text-slate-100 flex items-center space-x-2"
              >
                <FaGithub className="font-extrabold text-lg mr-2" /> Github
              </HoverBorderGradient>
            </a>
            {project?.backendSourceCode && (
              <a href={project?.backendSourceCode} target="_blank">
                <HoverBorderGradient
                  containerClassName="rounded-lg"
                  as="button"
                  className="dark:bg-slate-900 bg-slate-100  text-slate-700 dark:text-slate-100 flex items-center space-x-2"
                >
                  <FaGithub className="font-extrabold text-lg mr-2" /> Backend
                </HoverBorderGradient>
              </a>
            )}

            {project?.liveLink && (
              <a href={project?.liveLink} target="_blank">
                <HoverBorderGradient
                  containerClassName="rounded-lg"
                  as="button"
                  className="dark:bg-indigo-600 bg-indigo-600 text-slate-100 dark:text-slate-100 flex items-center space-x-2"
                >
                  <MdOpenInNew className="font-extrabold text-lg mr-2" /> Live
                </HoverBorderGradient>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

// "use client";
// import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
// import { TextAnimate } from "@/components/ui/text-animate";
// import { format } from "date-fns";
// import parse from "html-react-parser";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa6";
// import { IoIosArrowBack } from "react-icons/io";
// import { MdOpenInNew } from "react-icons/md";
// import { useParams } from "next/navigation"; // Added for dynamic route params
// import { useEffect, useState } from "react"; // Added for state management

// // Assume this fetches from your API (adapt to your getProjectById logic)
// async function fetchProject(id: string): Promise<Project | null> {
//   try {
//     const response = await fetch(`/api/projects/${id}`); // Or your endpoint
//     if (!response.ok) throw new Error("Failed to fetch");
//     return await response.json();
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return null;
//   }
// }

// type Project = {
//   id: string;
//   title: string;
//   details: string;
//   longDetails: string;
//   backendSourceCode: string;
//   tags: string[];
//   category: string;
//   author: string;
//   avatar: string;
//   createdAt: string;
//   sourceCode: string;
//   liveLink: string;
//   image: string;
// };

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2,
//     },
//   },
// } as const;

// const itemVariants = {
//   hidden: { opacity: 0, y: 50, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// } as const;

// const ProjectPage = () => {
//   const router = useRouter();
//   const params = useParams(); // Get dynamic params (e.g., { id: '123' })
//   const [project, setProject] = useState<Project | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadProject = async () => {
//       if (!params?.id) {
//         setError("No project ID found");
//         setLoading(false);
//         return;
//       }
//       const data = await fetchProject(params.id as string);
//       setProject(data);
//       setLoading(false);
//       if (!data) setError("Project not found");
//     };
//     loadProject();
//   }, [params?.id]);

//   const handleClick = () => {
//     router.back();
//   };

//   if (loading) {
//     return (
//       <div className="p-8 max-w-7xl mx-auto mt-28 mb-10 flex justify-center items-center">
//         <p>Loading project...</p>
//       </div>
//     );
//   }

//   if (error || !project) {
//     return (
//       <div className="p-8 max-w-7xl mx-auto mt-28 mb-10">
//         <h2 className="text-red-500">Error: {error || "Project not found"}</h2>
//         <button onClick={handleClick} className="mt-4 text-blue-500">
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       className="p-8 max-w-7xl mx-auto mt-28 mb-10 dark:bg-[#020617] bg-slate-100 rounded-xl border-[1px] dark:border-slate-100/30 border-slate-500/5 shadow-lg"
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//     >
//       <motion.div
//         className="pb-5"
//         variants={itemVariants}
//         whileHover={{ scale: 1.05 }}
//         transition={{ type: "spring", stiffness: 400 }}
//       >
//         <HoverBorderGradient
//           onClick={handleClick}
//           containerClassName="rounded-full"
//           as="button"
//           className="dark:bg-slate-800 bg-slate-100 text-sm text-slate-700 dark:text-slate-100 flex items-center"
//         >
//           <IoIosArrowBack className="font-extrabold text-lg mr-1 -ml-2" /> Back
//         </HoverBorderGradient>
//       </motion.div>
//       <motion.div
//         className="bg-blue-100 w-full h-full rounded-lg drop-shadow-md overflow-hidden"
//         variants={itemVariants}
//         whileHover={{ scale: 1.02, rotateY: 5 }}
//         transition={{ type: "spring", stiffness: 300 }}
//       >
//         <Image
//           src={project.image}
//           width={1080}
//           height={720}
//           alt={project.title}
//           className="w-full"
//           priority // Preload for better performance
//         />
//       </motion.div>
//       <motion.div className="mt-6" variants={itemVariants}>
//         <motion.span
//           className="p-2 text-xs mb-10 border-[2px] rounded-full flex items-center w-fit px-4"
//           variants={itemVariants}
//           whileHover={{ scale: 1.1, rotate: 360 }}
//           transition={{ type: "spring", stiffness: 400 }}
//         >
//           #
//           <TextAnimate animation="blurInUp" by="word">
//             {project.category}
//           </TextAnimate>
//         </motion.span>
//         <motion.h2
//           className="lg:text-3xl text-xl font-bold mt-5 z-[1000]"
//           variants={itemVariants}
//           whileHover={{ y: -5 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <TextAnimate animation="blurInUp" by="word">
//             {project.title}
//           </TextAnimate>
//         </motion.h2>
//         <motion.p
//           className="mt-2 lg:max-w-5xl lg:text-base text-sm"
//           variants={itemVariants}
//         >
//           <TextAnimate animation="blurInUp" by="word">
//             {project.details}
//           </TextAnimate>
//         </motion.p>

//         <motion.hr
//           className="my-5"
//           variants={itemVariants}
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 400 }}
//         />

//         <motion.div
//           className="prose max-w-full prose-headings:mb-2 prose-p:mb-1 prose-ul:mt-1 prose-ul:mb-1 prose-li:my-0
//   prose-headings:text-gray-900 dark:prose-headings:text-gray-100
//   prose-p:text-gray-700 dark:prose-p:text-gray-300
//   prose-ul:text-gray-700 dark:prose-ul:text-gray-300
//   prose-li:text-gray-600 dark:prose-li:text-gray-400
//   prose-img:rounded-lg"
//           variants={itemVariants}
//         >
//           {project.longDetails && parse(project.longDetails)}
//         </motion.div>

//         {project.tags.length > 0 && (
//           <motion.div className="flex mt-4" variants={itemVariants}>
//             <div>
//               <div className="flex space-x-2 mt-2 flex-wrap items-center">
//                 <span className="font-semibold">Tags:</span>
//                 {project.tags.map((tag: string, index: number) => (
//                   <motion.button
//                     key={tag}
//                     className="w-fit h-6 px-5 flex text-xs items-center justify-center border rounded-full"
//                     variants={itemVariants}
//                     custom={index}
//                     initial="hidden"
//                     animate="visible"
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     {tag}
//                   </motion.button>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         )}

//         <motion.div className="mt-6" variants={itemVariants}>
//           <motion.div
//             className="flex items-center gap-x-2"
//             variants={itemVariants}
//             whileHover={{ x: 5 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <Image
//               width={100}
//               height={100}
//               src={project.avatar}
//               className="w-12 h-12 rounded-lg"
//               alt={project.author}
//               priority
//             />
//             <div>
//               <p>
//                 <TextAnimate animation="blurInUp" by="word">
//                   {project.author}
//                 </TextAnimate>
//               </p>
//               <span className="text-xs leading-tight">
//                 Added At: {format(new Date(project.createdAt), "dd/MM/yyyy")}
//               </span>
//             </div>
//           </motion.div>
//         </motion.div>
//         <motion.div
//           className="flex items-center mt-6 gap-x-5"
//           variants={itemVariants}
//         >
//           <motion.a
//             href={project.sourceCode}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.05, y: -2 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <HoverBorderGradient
//               containerClassName="rounded-lg"
//               as="button"
//               className="dark:bg-slate-800 bg-slate-100 text-slate-700 dark:text-slate-100 flex items-center space-x-2"
//             >
//               <FaGithub className="font-extrabold text-lg mr-2" /> Github
//             </HoverBorderGradient>
//           </motion.a>
//           {project.backendSourceCode && (
//             <motion.a
//               href={project.backendSourceCode}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.05, y: -2 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <HoverBorderGradient
//                 containerClassName="rounded-lg"
//                 as="button"
//                 className="dark:bg-slate-800 bg-slate-100 text-slate-700 dark:text-slate-100 flex items-center space-x-2"
//               >
//                 <FaGithub className="font-extrabold text-lg mr-2" /> Backend
//               </HoverBorderGradient>
//             </motion.a>
//           )}

//           {project.liveLink && (
//             <motion.a
//               href={project.liveLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.05, y: -2 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <HoverBorderGradient
//                 containerClassName="rounded-lg"
//                 as="button"
//                 className="dark:bg-indigo-500 bg-indigo-500 text-slate-100 dark:text-slate-100 flex items-center space-x-2"
//               >
//                 <MdOpenInNew className="font-extrabold text-lg mr-2" /> Live
//               </HoverBorderGradient>
//             </motion.a>
//           )}
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ProjectPage;
