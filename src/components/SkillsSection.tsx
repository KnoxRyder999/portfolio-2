
import React from 'react';
import { skillCategories } from '@/constants/portfolioData';
import { Database, Cloud, Code, Cpu } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; icon: string }[];
}

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Code': return <Code className="w-6 h-6" />;
    case 'Server': return <Database className="w-6 h-6" />;
    case 'Database': return <Database className="w-6 h-6" />;
    case 'Cloud': return <Cloud className="w-6 h-6" />;
    default: return <Cpu className="w-6 h-6" />;
  }
};

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills }) => {
  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-blue-400">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50 text-sm transition-all duration-300 hover:bg-gray-700/70 hover:border-blue-500/30"
            >
              <span dangerouslySetInnerHTML={{ __html: skill.icon }} className="text-lg" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive set of skills and technologies I've mastered throughout my professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.name}
              icon={getIconComponent(category.icon)}
              skills={category.skills}
            />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Core Areas of Expertise</h3>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Code className="text-blue-400" size={18} />
                  <span className="font-medium">Full-Stack Development</span>
                </div>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-300 h-full rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Cpu className="text-purple-400" size={18} />
                  <span className="font-medium">Blockchain Development</span>
                </div>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-purple-300 h-full rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Database className="text-green-400" size={18} />
                  <span className="font-medium">Application Architecture</span>
                </div>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-green-300 h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Cloud className="text-cyan-400" size={18} />
                  <span className="font-medium">DevOps & Cloud Solutions</span>
                </div>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-300 h-full rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
