"use client";
import Globe from "./Globe";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import { TiDocumentText } from "react-icons/ti";

export function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="flex flex-row items-center text-center lg:text-left lg:items-start">
          {/* Main Content */}
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi{" "}
              <span className="inline-block hover:animate-[wave_2s_ease-in-out_infinite] origin-[70%_70%]">
                👋
              </span>
              , I'm <span className="text-emerald">Jair Ruiz</span>
              <br />
              Full Stack Developer
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-2xl">
              I'm a software developer with a focus on building web
              applications, and scalable services. I specialize in frontend and
              backend development with technologies like React, Next.js,
              Node.js, and Flask. I also have a passion for AI technologies to
              solve real-world problems. When I'm not coding, I enjoy playing
              video games and traveling.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-2xl text-white font-bold">
                Let's get in touch!
              </p>
              <a
                href="mailto:jruizm13@outlook.com"
                className="text-lg text-emerald"
              >
                jruizm13@outlook.com
              </a>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/jair-ruiz-211889267/"
                  className="text-5xl text-emerald"
                >
                  <TiSocialLinkedin />
                </a>
                <a
                  href="https://github.com/JNikolo"
                  className="text-5xl text-emerald"
                >
                  <TiSocialGithub />
                </a>

                <a href="#" className="text-5xl text-emerald">
                  <TiDocumentText />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
}
