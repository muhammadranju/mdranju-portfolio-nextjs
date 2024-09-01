import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";

import metaData from "@/data/metadata.json";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
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
          <div className="bg-gray-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]  dark:bg-slate-900 text-gray-800 dark:text-gray-200">
            {<Navbar />}
            {children}
            {<Footer />}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
