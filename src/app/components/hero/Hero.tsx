"use client";
import Globe from "./Globe";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import { TiDocumentText } from "react-icons/ti";

export function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32 relative z-10">
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
              Full Stack Developer
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white mx-auto lg:mx-0 max-w-2xl">
              I&apos;m a software developer with a focus on building web
              applications, and scalable services. I specialize in frontend and
              backend development with technologies like{" "}
              <span className="text-emerald drop-shadow-[0_0_10px_rgba(24,189,118,0.5)]">
                React, Next.js, Node.js, and Flask
              </span>
              . I also have a passion for AI technologies to solve real-world
              problems. When I&apos;m not coding, I enjoy playing video games
              and traveling.
            </p>
            <div className="flex flex-col items-center lg:items-start space-y-4 pt-4">
              <p className="text-xl sm:text-2xl text-white font-bold">
                Let&apos;s get in touch!
              </p>
              <a
                href="mailto:jruizm13@outlook.com"
                className="text-base sm:text-lg text-emerald hover:underline"
              >
                jruizm13@outlook.com
              </a>
              <div className="flex space-x-4 sm:space-x-6">
                <a
                  href="https://www.linkedin.com/in/jair-ruiz-211889267/"
                  className="text-4xl sm:text-5xl text-emerald hover:text-emerald/80 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <TiSocialLinkedin />
                </a>
                <a
                  href="https://github.com/JNikolo"
                  className="text-4xl sm:text-5xl text-emerald hover:text-emerald/80 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <TiSocialGithub />
                </a>

                <a
                  href="#"
                  className="text-4xl sm:text-5xl text-emerald hover:text-emerald/80 transition-colors"
                  aria-label="Resume/CV"
                >
                  <TiDocumentText />
                </a>
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
  );
}
