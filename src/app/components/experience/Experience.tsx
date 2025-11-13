"use client";

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
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald border-4 border-night dark:border-gray-900"></div>

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

export function Experience() {
  const experiences: ExperienceItemProps[] = [
    {
      title: "Full Stack Developer",
      company: "Your Company Name",
      period: "Jan 2023 - Present",
      description: [
        "Developed and maintained web applications using React, Next.js, and Node.js",
        "Implemented RESTful APIs and integrated third-party services",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Optimized application performance and improved user experience",
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Software Developer",
      company: "Previous Company",
      period: "Jun 2021 - Dec 2022",
      description: [
        "Built scalable backend services using Flask and Python",
        "Designed and implemented database schemas and queries",
        "Participated in code reviews and mentored junior developers",
        "Implemented CI/CD pipelines for automated testing and deployment",
      ],
      technologies: ["Python", "Flask", "MongoDB", "Docker", "AWS"],
    },
    {
      title: "Junior Developer",
      company: "Startup Company",
      period: "Jan 2020 - May 2021",
      description: [
        "Developed responsive web interfaces using modern JavaScript frameworks",
        "Integrated frontend applications with backend APIs",
        "Participated in agile development processes and sprint planning",
        "Contributed to open-source projects and internal tools",
      ],
      technologies: ["JavaScript", "React", "HTML/CSS", "Git"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 bg-night dark:bg-gray-900"
    >
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
        </div>
      </div>
    </section>
  );
}
