import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import metaData from "@/data/metadata.json";
import Footer from "@/ui/Footer/Footer";
import Navbar from "@/ui/Navbar/Navbar";
import QueryProvider from "@/utils/Provider";
import ScrollToTop from "@/utils/ScrollToTop/ScrollToTop";
import { AuthProvider } from "./AuthProvider";

const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    url: "https://mdranju.vercel.app",
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
          <Navbar />
          <AuthProvider>
            <QueryProvider>
              <div className="dark:bg-[#020617] bg-slate-100 relative overflow-hidden">
                {children}
              </div>
            </QueryProvider>
          </AuthProvider>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
