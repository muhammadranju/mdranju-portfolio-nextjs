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

  console.log(project);

  const handelClick = () => {
    router.back();
  };

  return (
    <div className="bg-slate-100 dark:bg-[#020617] min-h-screen bg-[linear-gradient(to_right,#80808011_1px,transparent_1px),linear-gradient(to_bottom,#80808011_1px,transparent_1px)] bg-[size:14px_24px]   text-gray-800 dark:text-gray-200 relative ">
      <div className="  relative  w-full  overflow-hidden antialiased lg:px-8  px-3">
        <Spotlight />
        <div className=" lg:p-8 p-3 max-w-7xl mx-auto mt-28 mb-10  rounded-xl border-[1px] dark:border-slate-100/30 border-slate-500/5 shadow-md bg-white dark:bg-[#020617]   ">
          <div className="pb-5">
            <HoverBorderGradient
              onClick={handelClick}
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-slate-900 bg-white text-sm  text-slate-700 dark:text-slate-100 flex items-center"
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
              {project?.details}
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

            {project?.tags?.length > 0 && (
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
                    Added At: {format(project?.createdAt, "dd/MM/yyyy")}
                    {/* Added At: {project?.createdAt} */}
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
    </div>
  );
};

export default ProjectPage;
