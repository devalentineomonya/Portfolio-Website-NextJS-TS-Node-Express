import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import TechStacks from "./components/techStacks/TechStacks";
import Testimonials from "./components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStacks />
      <About/>
      <Testimonials/>
      <Projects/>
    </>
  );
}
