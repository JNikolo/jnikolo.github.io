"use client";
import { TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";
import { HiMail, HiArrowUp } from "react-icons/hi";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand/About */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-emerald">Jair Ruiz</h3>
              <p className="text-gray-400 text-sm">
                Full Stack Developer passionate about building innovative web
                applications and AI-powered solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <a
                  href="#home"
                  className="text-gray-400 hover:text-emerald transition-colors text-sm"
                >
                  Home
                </a>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-emerald transition-colors text-sm"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-emerald transition-colors text-sm"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-emerald transition-colors text-sm"
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-3">
                <a
                  href="mailto:jruizm13@outlook.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-emerald transition-colors text-sm"
                >
                  <HiMail className="text-lg" />
                  jruizm13@outlook.com
                </a>
                <div className="flex gap-4 pt-2">
                  <a
                    href="https://www.linkedin.com/in/jair-ruiz-211889267/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-400 hover:text-emerald transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <TiSocialLinkedin />
                  </a>
                  <a
                    href="https://github.com/JNikolo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-400 hover:text-emerald transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <TiSocialGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Jair Ruiz. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-emerald hover:text-emerald/80 transition-colors text-sm font-semibold"
              aria-label="Scroll to top"
            >
              Back to top
              <HiArrowUp className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
