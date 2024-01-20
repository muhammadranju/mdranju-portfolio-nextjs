"use client";
import { FeatureThree } from "@/ui/FeatureThree";
import Footer from "@/ui/Footer";
import HeroSection from "@/ui/HeroSection";
import Navbar from "@/ui/Navbar";
import { Projects } from "@/ui/Projects";

function about() {
  return (
    <>
      {/* <div className="bg-zinc-950 dark:bg-white" /> */}

      <Navbar />
      <HeroSection />
      <FeatureThree />
      <Projects />
      <Footer />
    </>
  );
}

export default about;
