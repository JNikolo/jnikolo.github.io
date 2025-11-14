"use client";
import { Button } from "../ui/Button";
import { TiSocialLinkedin } from "react-icons/ti";
import { TechIcon } from "../ui/TechIcon";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

function ExperienceItem({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) {
  return (
    <div className="relative pl-8 pb-12 border-l-2 border-emerald/30 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald border-4 border-night"></div>

      <div className="space-y-3">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
          <p className="text-emerald font-semibold">{company}</p>
          <p className="text-sm text-gray-400">{period}</p>
        </div>

        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-gray-300 flex items-start">
              <span className="text-emerald mr-2 mt-1">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <TechIcon key={tech} name={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const experiences: ExperienceItemProps[] = [
    {
      title: "Software Engineer Consultant",
      company: "Belle Lyric Music",
      period: "October 2025 - Present",
      description: [
        "Developed a digital lyrics catalog platform to migrate manually maintained data into a database-driven system",
        "Implemented automated data workflows to improve data integrity and cut manual processing time by 40%",
        "Built iterative prototypes emphasizing modular design principles, system scalability, and cross-tool data integration",
      ],
      technologies: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Software Developer Fellow",
      company: "CUNY Tech Prep",
      period: "Aug 2024 - May 2025",
      description: [
        "Built full-stack CRUD apps using React, Node.js, and Supabase, while also utilizing MVC & Git workflows",
        "Developed a habit tracker leveraging OpenAI LLM to deliver personalized coaching and contextual insights",
        "Increased engagement for 50+ users by 40% through heatmap visualizations and real-time progress analysis",
      ],
      technologies: ["React.js", "Node.js", "PostgreSQL", "Supabase", "Prisma"],
    },
    {
      title: "Software Engineer Intern",
      company: "IQSpatial LLC",
      period: "Jun 2024 - Aug 2024",
      description: [
        "Automated backend pipelines to serve real-time GeoJSON APIs using Python, Flask, and spatial data processing tools",
        "Developed a document analysis platform for business intelligence analysts using Python, JS, and React",
        "Reduced manual document searches by 60% by developing an AI-powered keyword finder tool for internal data retrieval",
      ],
      technologies: ["Python", "Flask", "JavaScript", "React", "AWS", "ArcGIS"],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 bg-night">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="relative inline-block">
                Experience
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-emerald to-transparent"></span>
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              My professional journey and work history
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-8">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400 mb-6">
              Want to know more about my professional experience?
            </p>
            <Button
              variant="primary"
              size="lg"
              href="https://www.linkedin.com/in/jair-ruiz-211889267/"
              target="_blank"
              rel="noopener noreferrer"
              icon={<TiSocialLinkedin />}
              iconPosition="right"
            >
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
