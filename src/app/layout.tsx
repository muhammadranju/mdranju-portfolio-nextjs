import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import metaData from "@/data/metadata.json";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "@/utils/ScrollToTop/ScrollToTop";
import QueryProvider from "@/utils/Provider";
import { AuthProvider } from "./AuthProvider";

const space_Grotesk = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: metaData.title,
    template: `%s - MDR`,
  },
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-slate-100 dark:bg-[#020617] min-h-screen bg-[linear-gradient(to_right,#80808011_1px,transparent_1px),linear-gradient(to_bottom,#80808011_1px,transparent_1px)] bg-[size:14px_24px]   text-gray-800 dark:text-gray-200 ">
            {<Navbar />}
            <AuthProvider>
              <QueryProvider>{children}</QueryProvider>
            </AuthProvider>

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
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
        <ScrollToTop />
      </body>
    </html>
  );
}
