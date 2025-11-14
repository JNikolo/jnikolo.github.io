import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jair Ruiz | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and Flask. Building scalable web applications and exploring AI technologies to solve real-world problems.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Flask",
    "AI",
    "Web Development",
    "Software Engineer",
    "Jair Ruiz",
  ],
  authors: [{ name: "Jair Ruiz" }],
  creator: "Jair Ruiz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jnikolo.github.io",
    title: "Jair Ruiz | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and Flask. Building scalable web applications and exploring AI technologies.",
    siteName: "Jair Ruiz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jair Ruiz | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and Flask.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-night text-white transition-colors">{children}</body>
    </html>
  );
}
