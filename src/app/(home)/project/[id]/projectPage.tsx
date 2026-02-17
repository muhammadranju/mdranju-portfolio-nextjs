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
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-gray-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#1d4ed81a,_transparent_60%),radial-gradient(circle_at_bottom,_#4c1d9517,_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_#1d4ed81a,_transparent_60%),radial-gradient(circle_at_bottom,_#4c1d9517,_transparent_55%)]" />
      <div className="relative w-full overflow-hidden antialiased px-3 lg:px-8">
        <Spotlight />
        <div className="mx-auto mt-28 mb-10 max-w-7xl rounded-3xl border border-slate-200/70 bg-white/90 shadow-[0_18px_60px_rgba(15,23,42,0.18)] backdrop-blur-2xl dark:border-slate-800/80 dark:bg-slate-900/70 dark:shadow-[0_18px_60px_rgba(15,23,42,0.9)]">
          <div className="flex items-center justify-between border-b border-slate-200/70 px-4 py-4 lg:px-8 lg:py-6 dark:border-slate-800/70">
            <HoverBorderGradient
              onClick={handelClick}
              containerClassName="rounded-full"
              as="button"
              className="flex items-center bg-slate-100 px-4 py-1.5 text-xs font-medium text-slate-800 dark:bg-slate-900/80 dark:text-slate-100"
            >
              <IoIosArrowBack className="mr-2 text-base" />
              Back to projects
            </HoverBorderGradient>
            <span className="rounded-full bg-slate-100 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 dark:bg-slate-900/60 dark:text-slate-400">
              Featured case study
            </span>
          </div>

          <div className="grid gap-10 px-4 pb-8 pt-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:px-8 lg:pb-10 lg:pt-8">
            <div className="space-y-6">
              <div className="relative h-64 overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-100 sm:h-80 lg:h-[460px] dark:border-slate-800/70 dark:bg-slate-900/80">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-emerald-400/10 dark:from-indigo-500/20 dark:to-emerald-400/10" />
                <Image
                  src={project?.image}
                  width={1200}
                  height={720}
                  alt={project?.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-4 lg:space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-50 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-indigo-600 dark:bg-indigo-500/5 dark:text-indigo-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                  <TextAnimate animation="blurInUp" by="word">
                    {project?.category}
                  </TextAnimate>
                </span>

                <h1 className="text-balance text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl lg:text-4xl dark:text-slate-50">
                  <TextAnimate animation="blurInUp" by="word">
                    {project?.title}
                  </TextAnimate>
                </h1>

                <p className="max-w-3xl text-sm leading-relaxed text-slate-700 lg:text-[15px] dark:text-slate-300/90">
                  {project?.details}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/70 bg-white px-4 py-4 lg:px-6 lg:py-5 dark:border-slate-800/70 dark:bg-slate-900/70">
                <div className="prose max-w-none text-sm leading-relaxed text-slate-800 prose-headings:mb-2 prose-headings:text-slate-900 prose-p:mb-3 prose-ul:mt-1 prose-ul:mb-3 prose-li:my-0 prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-img:rounded-xl dark:text-slate-200 dark:prose-headings:text-slate-50 dark:prose-strong:text-slate-50 dark:prose-a:text-indigo-300 dark:hover:prose-a:text-indigo-200">
                  {project?.longDetails && parse(project?.longDetails)}
                </div>
              </div>

              {project?.tags?.length > 0 && (
                <div className="rounded-2xl border border-slate-200/70 bg-white px-4 py-4 lg:px-6 lg:py-5 dark:border-slate-800/70 dark:bg-slate-900/70">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Tags
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project?.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-slate-200/80 bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-800 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <aside className="space-y-5 lg:space-y-6">
              <div className="rounded-2xl border border-slate-200/80 bg-white px-4 py-4 lg:px-5 lg:py-5 dark:border-slate-800/80 dark:bg-slate-900/80">
                <div className="flex items-center gap-x-3">
                  <Image
                    width={72}
                    height={72}
                    src={project?.avatar}
                    className="h-14 w-14 rounded-2xl border border-slate-700/70 object-cover"
                    alt={project?.author}
                  />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                      <TextAnimate animation="blurInUp" by="word">
                        {project?.author}
                      </TextAnimate>
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      Added on{" "}
                      <span className="text-slate-100">
                        {format(project?.createdAt, "dd MMM yyyy")}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white px-4 py-4 lg:px-5 lg:py-5 dark:border-slate-800/80 dark:bg-slate-900/80">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Explore project
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href={project?.sourceCode} target="_blank">
                    <HoverBorderGradient
                      containerClassName="rounded-xl"
                      as="button"
                      className="flex w-full items-center justify-center gap-2 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-50"
                    >
                      <FaGithub className="text-base" />
                      Github
                    </HoverBorderGradient>
                  </a>

                  {project?.backendSourceCode && (
                    <a href={project?.backendSourceCode} target="_blank">
                      <HoverBorderGradient
                        containerClassName="rounded-xl"
                        as="button"
                        className="flex w-full items-center justify-center gap-2 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-50"
                      >
                        <FaGithub className="text-base" />
                        Backend
                      </HoverBorderGradient>
                    </a>
                  )}
                </div>

                {project?.liveLink && (
                  <div className="mt-3">
                    <a href={project?.liveLink} target="_blank">
                      <HoverBorderGradient
                        containerClassName="rounded-xl"
                        as="button"
                        className="flex w-full items-center justify-center gap-2 bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-slate-50"
                      >
                        <MdOpenInNew className="text-base" />
                        Live preview
                      </HoverBorderGradient>
                    </a>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
