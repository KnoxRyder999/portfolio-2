
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillItemProps {
  name: string;
  icon: LucideIcon;
}

interface SkillsGroupProps {
  title: string;
  icon: LucideIcon;
  skills: SkillItemProps[];
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon: Icon }) => {
  return (
    <div className="flex items-center gap-2 p-2 rounded-md bg-background/50 backdrop-blur-sm border border-border hover:bg-primary/5 transition-colors">
      <Icon className="h-4 w-4 text-primary" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

const SkillsGroup: React.FC<SkillsGroupProps> = ({ title, icon: Icon, skills }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {skills.map((skill, index) => (
          <SkillItem key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default SkillsGroup;
