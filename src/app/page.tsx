import { Navbar } from "./components/navigation/Navbar";
import { Hero } from "./components/hero/Hero";
import { Experience } from "./components/experience/Experience";
import { Projects } from "./components/projects/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
    </>
  );
}
