import { FeatureThree } from "@/ui/FeatureCard/FeatureThree";
import HeroSection from "@/ui/HeroSection/HeroSection";
import HireMe from "@/ui/HireMe/HireMe";
import { Projects } from "@/ui/Projects/Projects";
import { ThreeDMarqueeComponent } from "@/ui/ThreeDMarqueeComponent/ThreeDMarqueeComponent";
import type { Metadata } from "next";
import Script from "next/script";
import metaData from "@/data/metadata.json";

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
  keywords: metaData.keywords,
};

function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md. Ranju",
    url: "https://mdranju.vercel.app",
    jobTitle: "Full-Stack Web Application Developer",
    sameAs: [
      "https://github.com/muhammadranju",
      "https://www.linkedin.com/in/muhammadranju",
      "https://x.com/muhammad_ranju",
      "https://www.facebook.com/aminhossainranju",
      "https://www.instagram.com/aminhossainranju",
    ],
  };

  return (
    <>
      <Script
        id="ld-json-person"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <FeatureThree />
      <Projects />
      <ThreeDMarqueeComponent />
      <HireMe />
    </>
  );
}

export default Home;
