
import { useEffect, useRef } from 'react';

const skills = [
  { name: 'HTML', icon: '🌐', category: 'frontend' },
  { name: 'CSS', icon: '🎨', category: 'frontend' },
  { name: 'JavaScript', icon: '⚡', category: 'frontend' },
  { name: 'TypeScript', icon: '📝', category: 'frontend' },
  { name: 'React.JS', icon: '⚛️', category: 'frontend' },
  { name: 'Next.JS', icon: '▲', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '🌊', category: 'frontend' },
  { name: 'Framer Motion', icon: '🔄', category: 'frontend' },
  { name: 'Shadcn', icon: '📋', category: 'frontend' },
  { name: 'Node.JS', icon: '🟢', category: 'backend' },
  { name: 'Express.JS', icon: '🚀', category: 'backend' },
  { name: 'MongoDB', icon: '🍃', category: 'database' },
  { name: 'MySQL', icon: '📊', category: 'database' },
  { name: 'PostgreSQL', icon: '🐘', category: 'database' },
  { name: 'Prisma', icon: '🔺', category: 'database' },
  { name: 'Zustand', icon: '🐻', category: 'frontend' },
  { name: 'Zod', icon: '✅', category: 'frontend' },
  { name: 'Git', icon: '📂', category: 'tools' },
  { name: 'GitHub', icon: '🐙', category: 'tools' },
  { name: 'Vercel', icon: '▲', category: 'tools' },
  { name: 'Postman', icon: '📮', category: 'tools' },
  { name: 'Java', icon: '☕', category: 'backend' },
  { name: 'Linux', icon: '🐧', category: 'tools' },
  { name: 'pnpm', icon: '📦', category: 'tools' },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const skills = document.querySelectorAll('.skill-item');
          skills.forEach((skill, index) => {
            setTimeout(() => {
              skill.classList.add('animate-fade-in');
            }, index * 50);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative bg-black py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <p className="text-gray-400 uppercase tracking-widest text-center">I CONSTANTLY TRY TO IMPROVE</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-4">My Tech Stack</h2>
        </div>

        <div ref={skillsRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item opacity-0 flex flex-col items-center justify-center p-4 bg-gray-900 hover:bg-gray-800 rounded-xl border border-gray-800 transition-all cursor-pointer"
            >
              <span className="text-2xl mb-2">{skill.icon}</span>
              <span className="text-sm text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
