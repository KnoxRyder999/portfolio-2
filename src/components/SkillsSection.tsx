
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'Vue', icon: '🖖' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Angular', icon: '🅰️' },
      { name: 'TailwindCSS', icon: '🌊' },
      { name: 'TypeScript', icon: '📝' },
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'NestJS', icon: '🐈' },
      { name: 'Django', icon: '🐍' },
      { name: 'PHP', icon: '🐘' },
      { name: 'Laravel', icon: '🔺' },
      { name: 'ASP.NET', icon: '🌐' },
    ]
  },
  {
    name: 'Blockchain',
    skills: [
      { name: 'Ethereum', icon: '⟠' },
      { name: 'Solana', icon: '☀️' },
      { name: 'TON', icon: '💎' },
      { name: 'Tron', icon: '♦️' },
      { name: 'Smart Contract', icon: '📜' },
      { name: 'Web3.js', icon: '🔌' },
      { name: 'Ethers.js', icon: '🔄' },
    ]
  },
  {
    name: 'Database',
    skills: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'Firebase', icon: '🔥' },
    ]
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
      { name: 'Kafka', icon: '📊' },
      { name: 'CI/CD', icon: '🔄' },
      { name: 'AWS', icon: '☁️' },
      { name: 'Google Cloud', icon: '☁️' },
      { name: 'Redis', icon: '🔻' },
      { name: 'Linux', icon: '🐧' },
    ]
  },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-black to-[#07071c] py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 uppercase tracking-widest text-center"
          >
            PROFESSIONAL EXPERTISE
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-4"
          >
            My Tech Stack
          </motion.h2>
        </div>

        {skillCategories.map((category, categoryIndex) => (
          <div key={category.name} className="mb-16 last:mb-0">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
            >
              {category.name}
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  className="flex flex-col items-center justify-center p-4 bg-gray-900/50 hover:bg-gray-800/50 rounded-xl border border-gray-800 transition-all cursor-pointer backdrop-blur-sm"
                >
                  <span className="text-2xl mb-2">{skill.icon}</span>
                  <span className="text-sm text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 text-sm">
              Google Cloud Certified – Associate Cloud Engineer
            </span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 text-sm">
              Ethereum Blockchain Developer Certification
            </span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 text-sm">
              Contributor to open-source blockchain projects
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
