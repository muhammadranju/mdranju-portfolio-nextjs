import { Metadata } from "next";
import About from "./AboutPage";
import metaData from "@/data/metadata.json";
import Ranju from "../../public/mdranju.jpg";
export const metadata: Metadata = {
  title: {
    default: "About",
    template: `%s - ${"About"}`,
  },
  description:
    "Hi, I'm Md. Ranju, a passionate Web Application Developer from Rajshahi, Bangladesh. I began my journey into web development in 2021, the same year I completed my Higher Secondary Certificate (HSC). Currently, I am pursuing further studies at Degree College while continuing to enhance my skills in both front-end and back-end technologies.Over the past few years, I have honed my expertise in Web Application Development, enabling me to build dynamic, responsive websites and applications from the ground up. My skill set spans various programming languages and frameworks, including HTML, CSS, JavaScript, Node.js, React.js, Next.js, MongoDB and more. I am committed to delivering efficient, high-quality solutions that meet the needs of clients and users alike.",
  keywords: metaData.keywords,
  openGraph: {
    title: "About Page",
    description:
      "Hi, I'm Md. Ranju, a passionate Web Application Developer from Rajshahi, Bangladesh. I began my journey into web development in 2021, the same year I completed my Higher Secondary Certificate (HSC). Currently, I am pursuing further studies at Degree College while continuing to enhance my skills in both front-end and back-end technologies.Over the past few years, I have honed my expertise in Web Application Development, enabling me to build dynamic, responsive websites and applications from the ground up. My skill set spans various programming languages and frameworks, including HTML, CSS, JavaScript, Node.js, React.js, Next.js, MongoDB and more. I am committed to delivering efficient, high-quality solutions that meet the needs of clients and users alike.",
    images: [
      {
        url: metaData.imageOfRanju,

        alt: "About Page",
      },
    ],

    siteName: "About Page",
    type: "website",
    url: "https://mdranju.xyz/about",
  },
  twitter: {
    title: "About Page",
    description:
      "Hi, I'm Md. Ranju, a passionate Web Application Developer from Rajshahi, Bangladesh. I began my journey into web development in 2021, the same year I completed my Higher Secondary Certificate (HSC). Currently, I am pursuing further studies at Degree College while continuing to enhance my skills in both front-end and back-end technologies.Over the past few years, I have honed my expertise in Web Application Development, enabling me to build dynamic, responsive websites and applications from the ground up. My skill set spans various programming languages and frameworks, including HTML, CSS, JavaScript, Node.js, React.js, Next.js, MongoDB and more. I am committed to delivering efficient, high-quality solutions that meet the needs of clients and users alike.",
    images: [
      {
        url: metaData.imageOfRanju,

        alt: "About Page",
      },
    ],
    card: "summary_large_image",
    site: "@muhammad_ranju",
  },
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
