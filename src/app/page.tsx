import Footer from "@/component/footer";
import Navbar from "@/component/nav";
import About from "@/sections/about";
import Contact from "@/sections/contact";
import Home from "@/sections/home";
import Projects from "@/sections/projects";
import Skills from "@/sections/skills";

const Pages = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
export default Pages;
