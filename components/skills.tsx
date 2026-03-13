import React from 'react';

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js",
  "Python", "Django", "Flask", "Tailwind CSS", "PostgreSQL", "MongoDB",
  "Git", "Docker", "AWS", "Framer Motion"
];

const Skills = () => {
  return (
    <section className="container mx-auto py-12">
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-6 py-3 border-2 border-border shadow-neo bg-background text-lg font-medium hover:bg-foreground hover:text-background transition-colors duration-200"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
