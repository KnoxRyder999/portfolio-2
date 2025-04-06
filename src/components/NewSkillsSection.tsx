
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SkillsGroup from './SkillsGroup';
import { Code, Database, Globe, Layers, Monitor, Server, Settings, Smartphone } from 'lucide-react';

const NewSkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  // Define skill groups with their respective icons
  const frontendSkills = [
    { name: 'React', icon: Monitor },
    { name: 'Next.js', icon: Monitor },
    { name: 'TypeScript', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'HTML5', icon: Code },
    { name: 'CSS3', icon: Code },
    { name: 'Tailwind CSS', icon: Code },
    { name: 'Material UI', icon: Monitor },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: Server },
    { name: 'Express', icon: Server },
    { name: 'Django', icon: Server },
    { name: 'Flask', icon: Server },
    { name: 'RESTful APIs', icon: Globe },
    { name: 'GraphQL', icon: Database },
  ];

  const databaseSkills = [
    { name: 'MongoDB', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'MySQL', icon: Database },
    { name: 'Redis', icon: Database },
    { name: 'Firebase', icon: Database },
  ];

  const devopsSkills = [
    { name: 'Docker', icon: Settings },
    { name: 'Kubernetes', icon: Settings },
    { name: 'CI/CD', icon: Settings },
    { name: 'AWS', icon: Server },
    { name: 'GCP', icon: Server },
    { name: 'Azure', icon: Server },
  ];

  const mobileSkills = [
    { name: 'React Native', icon: Smartphone },
    { name: 'Flutter', icon: Smartphone },
    { name: 'iOS', icon: Smartphone },
    { name: 'Android', icon: Smartphone },
  ];

  const otherSkills = [
    { name: 'Git', icon: Settings },
    { name: 'Agile', icon: Settings },
    { name: 'TDD', icon: Settings },
    { name: 'UI/UX Design', icon: Layers },
    { name: 'Figma', icon: Layers },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transform transition-all duration-700 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Technical Skills</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Through years of hands-on experience, I've developed expertise in these technologies:
          </p>

          <div className="grid gap-8 md:gap-10">
            <SkillsGroup title="Frontend Development" icon={Monitor} skills={frontendSkills} />
            <SkillsGroup title="Backend Development" icon={Server} skills={backendSkills} />
            <SkillsGroup title="Database Technologies" icon={Database} skills={databaseSkills} />
            <SkillsGroup title="DevOps & Cloud" icon={Settings} skills={devopsSkills} />
            <SkillsGroup title="Mobile Development" icon={Smartphone} skills={mobileSkills} />
            <SkillsGroup title="Other Tools & Skills" icon={Layers} skills={otherSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSkillsSection;
