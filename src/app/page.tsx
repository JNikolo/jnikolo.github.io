import { Navbar } from "./components/navigation/Navbar";
import { Hero } from "./components/hero/Hero";
import { Experience } from "./components/experience/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
    </>
  );
}
