import ProjectCard from "./project-card";

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A comprehensive web application for managing tasks and projects efficiently.",
    tags: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    imageUrl: "/images/project-alpha.png", // Placeholder image
    link: "#"
  },
  {
    id: 2,
    title: "Project Beta",
    description: "An e-commerce platform with robust payment integration and user authentication.",
    tags: ["Vue.js", "Nuxt.js", "Express.js", "MongoDB"],
    imageUrl: "/images/project-beta.png", // Placeholder image
    link: "#"
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "A data visualization tool for analyzing complex datasets interactively.",
    tags: ["D3.js", "Python", "Flask", "PostgreSQL"],
    imageUrl: "/images/project-gamma.png", // Placeholder image
    link: "#"
  },
  {
    id: 4,
    title: "Project Delta",
    description: "A mobile-first progressive web application for social networking.",
    tags: ["React Native", "Firebase", "TypeScript"],
    imageUrl: "/images/project-delta.png", // Placeholder image
    link: "#"
  },
];

export default function Work() {
  return (
    <section className="w-full py-12 px-4 bg-background text-foreground"> {/* Use bg-background, text-foreground */}
      <div className="container mx-auto">
        {/* The H2 title is now in app/page.tsx */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}