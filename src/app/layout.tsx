import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "Muhammad Ranju Official Portfolio Website",
  description:
    "I'm a JavaScript (Web,App) Backend API Developer at Node.JS  My Self Muhammad Ranju I'm working in Node.js Backend Development. it's a JavaScript Runtime at Node.js  Working on: - API Design & Development Like: - Chat API, E-commerce API, Blog API and more.",
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
          <div className="bg-gray-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]  dark:bg-slate-900 text-gray-800 dark:text-gray-100">
            {<Navbar />}
            {children}
            {<Footer />}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
