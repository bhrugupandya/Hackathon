import React from 'react';

const Experience = () => {
  return (
    <section className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Experience Card 1 */}
        <div className="border-2 border-border p-6 shadow-neo bg-background">
          <h3 className="text-2xl font-bold mb-2">Senior Software Engineer</h3>
          <p className="text-lg text-foreground/80 mb-4">Tech Company, City | Jan 2022 - Present</p>
          <ul className="list-disc list-inside text-foreground/70">
            <li>Developed and maintained scalable web applications.</li>
            <li>Collaborated with cross-functional teams.</li>
            <li>Mentored junior developers.</li>
          </ul>
        </div>

        {/* Experience Card 2 */}
        <div className="border-2 border-border p-6 shadow-neo bg-background">
          <h3 className="text-2xl font-bold mb-2">Software Developer</h3>
          <p className="text-lg text-foreground/80 mb-4">Another Company, City | Jul 2019 - Dec 2021</p>
          <ul className="list-disc list-inside text-foreground/70">
            <li>Designed and implemented new features.</li>
            <li>Optimized application performance.</li>
            <li>Participated in code reviews.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
