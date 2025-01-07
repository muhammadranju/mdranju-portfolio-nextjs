import { Metadata } from "next";
import Login from "./LoginPage";
import metaData from "@/data/metadata.json";
export const metadata: Metadata = {
  title: {
    default: "Login",
    template: `%s - ${"Login"}`,
  },
  description:
    "Welcome back! I Hope you enjoy your visit. You can login with your email and password to access your account.",
  keywords: metaData.keywords,
  openGraph: {
    title: "Login Page",
    description:
      "Welcome back! I Hope you enjoy your visit. You can login with your email and password to access your account.",
    images: [
      {
        url: metaData.image,

        alt: "Login Page",
      },
    ],

    siteName: "Login Page",
    type: "website",
    url: "https://mdranju.xyz/login",
  },
  twitter: {
    title: "Login Page",
    description:
      "Welcome back! I Hope you enjoy your visit. You can login with your email and password to access your account.",
    images: [
      {
        url: metaData.image,

        alt: "Login Page",
      },
    ],
    card: "summary_large_image",
    site: "@muhammad_ranju",
  },
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
