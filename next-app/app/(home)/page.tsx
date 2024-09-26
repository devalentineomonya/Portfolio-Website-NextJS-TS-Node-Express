import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import TechStacks from "./components/techStacks/TechStacks";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStacks />
      <About/>
    </>
  );
}
