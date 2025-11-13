"use client";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

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
            <span
              key={tech}
              className="px-3 py-1 text-xs sm:text-sm bg-emerald/10 text-emerald rounded-full border border-emerald/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const projects: ProjectCardProps[] = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern web technologies for optimal performance.",
      technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com/JNikolo",
      liveUrl: "https://example.com",
      image: "/projects/ecommerce.jpg",
    },
    {
      title: "AI Chat Application",
      description:
        "Real-time chat application powered by AI for intelligent responses. Features include message history, user presence, and natural language processing capabilities.",
      technologies: ["React", "Flask", "Python", "OpenAI", "WebSocket"],
      githubUrl: "https://github.com/JNikolo",
      liveUrl: "https://example.com",
      image: "/projects/ai-chat.jpg",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative task management tool with drag-and-drop functionality, team collaboration features, and real-time updates for improved productivity.",
      technologies: ["TypeScript", "Next.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/JNikolo",
      liveUrl: "https://example.com",
      image: "/projects/task-manager.jpg",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather dashboard with forecasts, historical data, and interactive maps. Integrates with multiple weather APIs for accurate predictions.",
      technologies: ["React", "Chart.js", "REST API", "CSS"],
      githubUrl: "https://github.com/JNikolo",
      liveUrl: "https://example.com",
      image: "/projects/weather.jpg",
    },
    {
      title: "Portfolio Generator",
      description:
        "A tool that helps developers create stunning portfolio websites with customizable templates, themes, and deployment options.",
      technologies: ["Next.js", "TypeScript", "Markdown", "Vercel"],
      githubUrl: "https://github.com/JNikolo",
      liveUrl: "https://example.com",
      image: "/projects/portfolio-gen.jpg",
    },
    {
      title: "Fitness Tracker",
      description:
        "Mobile-responsive fitness tracking application with workout logs, progress charts, goal setting, and personalized workout recommendations.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      githubUrl: "https://github.com/JNikolo",
      liveUrl: "https://example.com",
      image: "/projects/fitness.jpg",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 bg-night dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
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
        </div>
      </div>
    </section>
  );
}
