"use client";
import { Button } from "../ui/Button";
import Globe from "./Globe";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaCalendarAlt,
  FaFileDownload,
} from "react-icons/fa";

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center -mt-[73px] pt-[73px]"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="space-y-6 w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi{" "}
                <span className="inline-block hover:animate-[wave_2s_ease-in-out_infinite] origin-[70%_70%]">
                  👋
                </span>
                , I&apos;m <span className="text-emerald">Jair Ruiz</span>
                <br />
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mx-auto lg:mx-0 max-w-2xl">
                Full-stack Developer |{" "}
                <span className="text-emerald drop-shadow-[0_0_10px_rgba(24,189,118,0.5)]">
                  React, Next.js, Node.js, and Python
                </span>
                <br />
                <span className="font-bold">
                  Available for Freelance and Full-Time Opportunities
                </span>
              </p>

              {/* Condensed About */}
              <div className="p-2 mx-auto lg:mx-0 max-w-2xl">
                <p className="text-gray-300 leading-relaxed">
                  I&apos;m a passionate developer who loves building innovative
                  web applications and AI-powered solutions. Currently working
                  as a Software Engineer Consultant at Belle Lyric Music, I
                  specialize in creating scalable full-stack applications that
                  solve real-world problems, while drinking a lot of coffee ☕.
                  When I&apos;m not coding, you&apos;ll find me exploring the
                  latest AI technologies, or playing video games.
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start space-y-4 pt-2">
                <div className="flex space-x-4 sm:space-x-6">
                  <a
                    href="https://www.linkedin.com/in/jair-ruiz-211889267/"
                    className="text-4xl sm:text-5xl text-[#126bc4] transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com/JNikolo"
                    className="text-4xl sm:text-5xl transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.instagram.com/jair_ruiz03/"
                    className="text-4xl sm:text-5xl text-[#fc09d1] transition-colors"
                    aria-label="Instagram Profile"
                  >
                    <FaInstagram />
                  </a>
                  <Button
                    variant="primary"
                    size="sm"
                    href="mailto:jruizm13@outlook.com"
                    icon={<FaCalendarAlt />}
                    iconPosition="left"
                  >
                    Schedule a Meeting
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    href="/resume.pdf"
                    icon={<FaFileDownload />}
                    iconPosition="left"
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>

            {/* Globe - Only visible on large screens */}
            <div className="hidden lg:flex lg:w-1/2 justify-end">
              <Globe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
