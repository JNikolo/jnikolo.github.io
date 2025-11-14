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
  SiStreamlit,
  SiGooglegemini,
  SiLangchain,
  SiArcgis,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaChrome } from "react-icons/fa";
import Image from "next/image";
import { VscVscode } from "react-icons/vsc";

interface TechIconProps {
  name: string;
  className?: string;
  showLabel?: boolean;
}

const techIconMap: Record<
  string,
  { icon: React.ReactNode; color: string; label: string }
> = {
  React: { icon: <SiReact />, color: "text-[#61DAFB]", label: "React" },
  "React.js": { icon: <SiReact />, color: "text-[#61DAFB]", label: "React" },
  "Next.js": { icon: <SiNextdotjs />, color: "text-white", label: "Next.js" },
  TypeScript: {
    icon: <SiTypescript />,
    color: "text-[#3178C6]",
    label: "TypeScript",
  },
  JavaScript: {
    icon: <SiJavascript />,
    color: "text-[#F7DF1E]",
    label: "JavaScript",
  },
  "Tailwind CSS": {
    icon: <SiTailwindcss />,
    color: "text-[#06B6D4]",
    label: "Tailwind",
  },
  "React Native": {
    icon: <TbBrandReactNative />,
    color: "text-[#61DAFB]",
    label: "React Native",
  },
  "Node.js": {
    icon: <SiNodedotjs />,
    color: "text-[#339933]",
    label: "Node.js",
  },
  Express: { icon: <SiExpress />, color: "text-white", label: "Express" },
  Python: { icon: <SiPython />, color: "text-[#3776AB]", label: "Python" },
  Flask: { icon: <SiFlask />, color: "text-white", label: "Flask" },
  FastAPI: { icon: <SiFastapi />, color: "text-[#009688]", label: "FastAPI" },
  PostgreSQL: {
    icon: <SiPostgresql />,
    color: "text-[#4169E1]",
    label: "PostgreSQL",
  },
  MongoDB: { icon: <SiMongodb />, color: "text-[#47A248]", label: "MongoDB" },
  Supabase: {
    icon: <SiSupabase />,
    color: "text-[#3ECF8E]",
    label: "Supabase",
  },
  Prisma: { icon: <SiPrisma />, color: "text-white", label: "Prisma" },
  "OpenAI API": {
    icon: <SiOpenai />,
    color: "text-[#412991]",
    label: "OpenAI",
  },
  PyTorch: { icon: <SiPytorch />, color: "text-[#EE4C2C]", label: "PyTorch" },
  Pytorch: { icon: <SiPytorch />, color: "text-[#EE4C2C]", label: "PyTorch" },
  "Scikit-learn": {
    icon: <SiScikitlearn />,
    color: "text-[#F7931E]",
    label: "Scikit-learn",
  },
  Git: { icon: <SiGit />, color: "text-[#F05032]", label: "Git" },
  Docker: { icon: <SiDocker />, color: "text-[#2496ED]", label: "Docker" },
  AWS: { icon: <SiAmazon />, color: "text-[#FF9900]", label: "AWS" },
  ArcGIS: { icon: <SiArcgis />, color: "text-[#2C7AC3]", label: "ArcGIS" },
  Vercel: { icon: <SiVercel />, color: "text-white", label: "Vercel" },
  WebSocket: {
    icon: <SiNodedotjs />,
    color: "text-[#339933]",
    label: "WebSocket",
  },
  "Open-Meteo API": {
    icon: <SiPython />,
    color: "text-[#3776AB]",
    label: "Open-Meteo",
  },
  Tamagui: { icon: <SiReact />, color: "text-[#61DAFB]", label: "Tamagui" },
  Langchain: {
    icon: <SiLangchain />,
    color: "text-[#274343]",
    label: "Langchain",
  },
  Streamlit: {
    icon: <SiStreamlit />,
    color: "text-[#FF4B4B]",
    label: "Streamlit",
  },
  "Gemini Developer API": {
    icon: <SiGooglegemini />,
    color: "text-[#8E75B2]",
    label: "Gemini",
  },
  "VS Code API": {
    icon: <VscVscode />,
    color: "text-[#007ACC]",
    label: "VS Code",
  },
  "OpenRouter API": {
    icon: (
      <Image
        src="/open-router.svg"
        alt="OpenRouter"
        width={16}
        height={16}
        className="inline-block"
      />
    ),
    color: "text-white",
    label: "OpenRouter",
  },
  "Chrome Extensions API": {
    icon: <FaChrome />,
    color: "text-[#4285F4]",
    label: "Chrome API",
  },
};

export function TechIcon({
  name,
  className = "",
  showLabel = true,
}: TechIconProps) {
  const tech = techIconMap[name];

  if (!tech) {
    // Fallback to text if no icon found
    return (
      <span
        className={`px-3 py-1.5 text-xs bg-emerald/10 text-emerald rounded-full border border-emerald/30 ${className}`}
      >
        {name}
      </span>
    );
  }

  return (
    <div
      className={`flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-emerald/30 transition-colors group ${className}`}
      title={tech.label}
    >
      <span
        className={`text-base ${tech.color} transition-transform group-hover:scale-110`}
      >
        {tech.icon}
      </span>
      {showLabel && (
        <span className="text-xs text-gray-400 group-hover:text-gray-300">
          {tech.label}
        </span>
      )}
    </div>
  );
}

export function TechIconOnly({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const tech = techIconMap[name];

  if (!tech) {
    return null;
  }

  return (
    <span className={`${tech.color} ${className}`} title={tech.label}>
      {tech.icon}
    </span>
  );
}
