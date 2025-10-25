import { FeatureThree } from "@/ui/FeatureCard/FeatureThree";
import HeroSection from "@/ui/HeroSection/HeroSection";
import HireMe from "@/ui/HireMe/HireMe";
import { Projects } from "@/ui/Projects/Projects";
import { ThreeDMarqueeComponent } from "@/ui/ThreeDMarqueeComponent/ThreeDMarqueeComponent";

function home() {
  return (
    <>
      <title>Muhammad Ranju Official Portfolio Website</title>
      <HeroSection />
      <FeatureThree />
      <Projects />
      <ThreeDMarqueeComponent />
      <HireMe />
    </>
  );
}

export default home;
