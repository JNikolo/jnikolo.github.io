"use client";
import { HiDownload } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { Button } from "../ui/Button";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-gradient-to-b from-night to-gray-900 dark:from-gray-900 dark:to-black"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="relative inline-block">
                Let&apos;s Work Together
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-emerald to-transparent"></span>
              </span>
            </h2>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
              I&apos;m currently open to new opportunities and collaborations.
              Whether you have a project in mind or just want to connect, feel
              free to reach out!
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-gray-800/50 dark:bg-gray-800/80 border border-gray-700 rounded-2xl p-8 sm:p-12 text-center shadow-xl">
            <div className="space-y-6">
              {/* Email Display */}
              <div className="space-y-2">
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Email
                </p>
                <a
                  href="mailto:jruizm13@outlook.com"
                  className="text-2xl sm:text-3xl text-emerald hover:text-emerald/80 font-semibold transition-colors inline-block"
                >
                  jruizm13@outlook.com
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button
                  variant="primary"
                  size="lg"
                  href="mailto:jruizm13@outlook.com"
                  icon={<FiSend />}
                  iconPosition="right"
                >
                  Send Me an Email
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="#"
                  icon={<HiDownload />}
                  iconPosition="right"
                >
                  Download Resume
                </Button>
              </div>

              {/* Additional Info */}
              <div className="pt-8 border-t border-gray-700">
                <p className="text-gray-400 mb-4">
                  Prefer a different platform?
                </p>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="secondary"
                    size="md"
                    href="https://www.linkedin.com/in/jair-ruiz-211889267/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="secondary"
                    size="md"
                    href="https://github.com/JNikolo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats or Additional CTA */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/50">
              <div className="text-3xl font-bold text-emerald mb-2">3+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/50">
              <div className="text-3xl font-bold text-emerald mb-2">6+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/50">
              <div className="text-3xl font-bold text-emerald mb-2">100%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
