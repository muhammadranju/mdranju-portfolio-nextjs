import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FeatureCardJSON } from "./FeatureCardJSON";

const FeatureCard = () => {
  const { theme, resolvedTheme } = useTheme();
  const effectiveTheme = theme === "system" ? resolvedTheme : theme;
  return FeatureCardJSON.map((item, index) => {
    return (
      <MagicCard
        key={index}
        gradientColor={effectiveTheme === "dark" ? "#334155" : "#e0e7ff"}
      >
        <div className="rounded-lg p-5 w-full">
          <div className="mx-auto flex h-20 w-20 items-center  justify-center rounded-full ">
            <Image
              width={500}
              height={500}
              src={item.imageLink}
              alt={item.title}
              className={`${
                item.isDark && effectiveTheme === "dark" ? "filter invert" : ""
              }`}
            />
          </div>
          <h3 className="mt-8 text-lg font-semibold ">{item.title}</h3>
          <p className="mt-4 text-sm ">{item.description}</p>
        </div>
        <BorderBeam className="rounded-xl" size={120} duration={12} delay={9} />
      </MagicCard>
    );
  });
};

export default FeatureCard;
