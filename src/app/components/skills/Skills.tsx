"use client";
import { useEffect, useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFlask,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiPrisma,
  SiGit,
  SiDocker,
  SiAmazon,
  SiVercel,
  SiOpenai,
  SiPytorch,
  SiScikitlearn,
  SiExpress,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Core/Most Important Technologies
  const coreTechnologies: TechItem[] = [
    { name: "React", icon: <SiReact />, color: "text-[#61DAFB]" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178C6]" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-[#339933]" },
    { name: "Python", icon: <SiPython />, color: "text-[#3776AB]" },
    { name: "FastAPI", icon: <SiFastapi />, color: "text-[#009688]" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#4169E1]" },
  ];

  // Additional Technologies for Carousel
  const additionalTechnologies: TechItem[] = [
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
    {
      name: "React Native",
      icon: <TbBrandReactNative />,
      color: "text-[#61DAFB]",
    },
    { name: "Express", icon: <SiExpress />, color: "text-white" },
    { name: "Flask", icon: <SiFlask />, color: "text-white" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
    { name: "Supabase", icon: <SiSupabase />, color: "text-[#3ECF8E]" },
    { name: "Prisma", icon: <SiPrisma />, color: "text-white" },
    { name: "OpenAI", icon: <SiOpenai />, color: "text-[#412991]" },
    { name: "PyTorch", icon: <SiPytorch />, color: "text-[#EE4C2C]" },
    { name: "Scikit-learn", icon: <SiScikitlearn />, color: "text-[#F7931E]" },
    { name: "Git", icon: <SiGit />, color: "text-[#F05032]" },
    { name: "Docker", icon: <SiDocker />, color: "text-[#2496ED]" },
    { name: "AWS", icon: <SiAmazon />, color: "text-[#FF9900]" },
    { name: "Vercel", icon: <SiVercel />, color: "text-white" },
  ];

  // Auto-scroll carousel
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1.5;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount;

        // Reset scroll when reaching the end (seamless loop)
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="skills" className="py-16 sm:py-24 bg-night">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 flex items-center gap-4">
              <span className="relative inline-block">
                Tech Arsenal
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-emerald to-transparent"></span>
              </span>
            </h2>
          </div>

          {/* Core Technologies Grid */}
          <div className="mb-12">
            <h3 className="text-lg text-gray-400 mb-6">Core Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {coreTechnologies.map((tech, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-emerald/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald/10 hover:-translate-y-1 flex flex-col items-center justify-center gap-3 aspect-square"
                >
                  {/* Icon */}
                  <div
                    className={`text-5xl ${tech.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    {tech.icon}
                  </div>

                  {/* Name */}
                  <span className="text-xs font-semibold text-gray-400 group-hover:text-white text-center transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Technologies Carousel */}
          <div>
            <h3 className="text-lg text-gray-400 mb-6">
              Additional Technologies & Tools
            </h3>
            <div className="relative overflow-hidden">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-night to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-night to-transparent z-10 pointer-events-none"></div>

              {/* Scrolling Container */}
              <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-hidden pb-4"
                style={{ scrollBehavior: "auto" }}
              >
                {/* Duplicate items for seamless loop */}
                {[...additionalTechnologies, ...additionalTechnologies].map(
                  (tech, index) => (
                    <div
                      key={index}
                      className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-emerald/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald/10 flex flex-col items-center justify-center gap-3 min-w-[120px] aspect-square flex-shrink-0"
                    >
                      {/* Icon */}
                      <div
                        className={`text-4xl ${tech.color} transition-transform duration-300 group-hover:scale-110`}
                      >
                        {tech.icon}
                      </div>

                      {/* Name */}
                      <span className="text-xs font-semibold text-gray-400 group-hover:text-white text-center transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
