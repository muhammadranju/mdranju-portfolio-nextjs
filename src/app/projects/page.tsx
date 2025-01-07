import React from "react";
import Project from "./ProjectsPage";
import { Metadata } from "next";
import metaData from "@/data/metadata.json";

export const metadata: Metadata = {
  title: {
    default: "Projects",
    template: `%s - ${"Projects"}`,
  },
  description:
    "This is my portfolio page. I have a lot of projects that I have worked on. You can find them here. I hope you enjoy your visit.",
  keywords: metaData.keywords,
  openGraph: {
    title: "Project's Page",
    description:
      "This is my portfolio page. I have a lot of projects that I have worked on. You can find them here. I hope you enjoy your visit.",
    images: [
      {
        url: metaData.image,

        alt: "Projects Page",
      },
    ],

    siteName: "Projects Page",
    type: "website",
    url: "https://mdranju.xyz/projects",
  },
  twitter: {
    title: "Projects Page",
    description:
      "This is my portfolio page. I have a lot of projects that I have worked on. You can find them here. I hope you enjoy your visit.",
    images: [
      {
        url: metaData.image,

        alt: "Projects Page",
      },
    ],
    card: "summary_large_image",
    site: "@muhammad_ranju",
  },
};

const ProjectPage = () => {
  return <Project />;
};

export default ProjectPage;
