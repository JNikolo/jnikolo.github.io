"use client";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Button } from "../ui/Button";
import { TechIcon } from "../ui/TechIcon";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  image,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-gray-800/50 dark:bg-gray-800/80 rounded-lg overflow-hidden border border-gray-700 hover:border-emerald/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald/10">
      {/* Project Image */}
      {image && (
        <div className="relative h-48 bg-gray-900 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald transition-colors">
            {title}
          </h3>
          <div className="flex gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald transition-colors"
                aria-label={`${title} GitHub repository`}
              >
                <FiGithub className="text-xl" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald transition-colors"
                aria-label={`${title} live demo`}
              >
                <FiExternalLink className="text-xl" />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <TechIcon key={tech} name={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const projects: ProjectCardProps[] = [
    {
      title: "ElGrupos",
      description:
        "Chrome extension to organize and share browser tab groups with real-time sync and color-coded management. Featuring import/export, and keyboard shortcuts for seamless user productivity.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Chrome Extensions API",
      ],
      githubUrl: "https://github.com/JNikolo/ElGrupos",
      liveUrl:
        "https://chromewebstore.google.com/detail/elgrupos/flopalgfkalljojpemlpjcakbojeoodj",
      image: "/projects/elgrupos.png",
    },
    {
      title: "Aspire",
      description:
        "Real-time chat application powered by AI for intelligent responses. Features include message history, user presence, and natural language processing capabilities.",
      technologies: [
        "React",
        "Node.js",
        "OpenAI API",
        "WebSocket",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/JNikolo/Aspire",
      liveUrl: "https://aspire-frontend-tau.vercel.app/",
      image: "/projects/aspire.png",
    },
    {
      title: "AIr",
      description:
        "AI-powered travel companion app that provides personalized asthma-safe recommendations and real-time air quality monitoring for safer travel experiences.",
      technologies: [
        "React Native",
        "Python",
        "FastAPI",
        "Scikit-learn",
        "Open-Meteo API",
        "Tamagui",
      ],
      githubUrl: "https://github.com/FreshPineapple-jpg/AIr",
      liveUrl:
        "https://devpost.com/software/air-your-personal-asthma-assistant",
      image: "/projects/AIR.jpg",
    },
    {
      title: "GluDaily",
      description:
        "AI-powered mobile app that helps individuals with diabetes manage their condition by providing daily glucose level predictions, meal recommendations, and activity tracking using machine learning models.",
      technologies: [
        "React Native",
        "TypeScript",
        "Python",
        "FastAPI",
        "Langchain",
        "OpenAI API",
        "Pytorch",
      ],
      githubUrl: "https://github.com/sncr0/d1namo",
      liveUrl: "https://devpost.com/software/gludaily",
      image: "/projects/gludaily.jpg",
    },
    {
      title: "Phaeton",
      description:
        "An agentic AI chatbot designed to assist Customer Experience Analysts in questioning customer reviews and gaining valuable insights and suggestions.",
      technologies: [
        "Python",
        "Streamlit",
        "Gemini Developer API",
        "Langchain",
      ],
      githubUrl: "https://github.com/JNikolo/luminoso-genai-hackathon2025",
      liveUrl: "https://thehomies.streamlit.app/",
      image: "/projects/phaeton.jpg",
    },
    {
      title: "YAML LSP",
      description:
        "VSCode Extension that leverages Language Server Protocol (LSP) implementation that transforms natural language into executable YAML workflows using Large Language Models (LLMs).",
      technologies: ["TypeScript", "VS Code API", "OpenRouter API"],
      githubUrl: "https://github.com/CUNYTechPrep/languageservices",
      liveUrl: "",
      image: "/projects/lsp.png",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 bg-night dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="relative inline-block">
                Projects
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-emerald to-transparent"></span>
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Some of the projects I&apos;ve worked on
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {/* View More CTA */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              href="https://github.com/JNikolo"
              target="_blank"
              rel="noopener noreferrer"
              icon={<FiGithub />}
              iconPosition="right"
            >
              View More on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
