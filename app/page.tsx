import Hero from "../components/hero";
import Work from "../components/work";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Experience from "../components/experience"; // Import Experience component
import Skills from "../components/skills";         // Import Skills component
import Blogs from "../components/blogs";           // Import Blogs component

export default function Page() {
  return (
    <main> {/* Use <main> semantic tag */}
      <section id="hero" className="py-20"> {/* Add ID and padding */}
        <Hero />
      </section>
      <section id="work" className="py-20"> {/* Add ID and padding */}
        <h2 className="text-4xl font-bold mb-10 text-center">Featured Projects</h2> {/* Section Title */}
        <Work />
      </section>
      {/* Experience section */}
      <section id="experience" className="py-20">
        <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
        <Experience /> {/* Render Experience component */}
      </section>
      {/* Skills section */}
      <section id="skills" className="py-20">
        <h2 className="text-4xl font-bold mb-10 text-center">Skills & Tools</h2>
        <Skills /> {/* Render Skills component */}
      </section>
      {/* Blogs section */}
      <section id="blogs" className="py-20">
        <h2 className="text-4xl font-bold mb-10 text-center">Latest Blogs & Articles</h2>
        <Blogs /> {/* Render Blogs component */}
      </section>
      <section id="contact" className="py-20"> {/* Add ID and padding */}
        <h2 className="text-4xl font-bold mb-10 text-center">Get in Touch</h2>
        <Contact />
      </section>
      <Footer />
    </main>
  );
}