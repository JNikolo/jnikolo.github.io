import Image from "next/image";
import { Navbar } from "./components/navigation/Navbar";
import { Hero } from "./components/hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
