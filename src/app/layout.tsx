import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";

import metaData from "@/data/metadata.json";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
  keywords: metaData.keywords,
  openGraph: {
    title: metaData.title,
    description: metaData.description,
    images: [
      {
        url: metaData.image,

        alt: metaData.title,
      },
    ],

    siteName: metaData.title,
    type: "website",
    url: "https://mdranju.xyz",
  },
  twitter: {
    title: metaData.title,
    description: metaData.description,
    images: [
      {
        url: metaData.image,

        alt: metaData.title,
      },
    ],
    card: "summary_large_image",
    site: "@muhammad_ranju",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_Grotesk.className}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-slate-100 min-h-screen bg-[linear-gradient(to_right,#80808011_1px,transparent_1px),linear-gradient(to_bottom,#80808011_1px,transparent_1px)] bg-[size:14px_24px]  dark:bg-[#020617] text-gray-800 dark:text-gray-200 ">
            {<Navbar />}
            {children}
            {<Footer />}
          </div>
          <ToastContainer
            autoClose={1500}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </ThemeProvider>
      </body>
    </html>
  );
}