"use client";
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
            <div className="justify-center pt-6">
              <Button
                variant="primary"
                size="lg"
                href="mailto:jruizm13@outlook.com"
                icon={<FiSend />}
                iconPosition="right"
              >
                jruizm13@outlook.com
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
