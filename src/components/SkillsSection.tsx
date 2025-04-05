
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Settings, Layout, Coins } from 'lucide-react';
import { skillCategories } from '@/constants/portfolioData';
import BackgroundAnimation from './BackgroundAnimation';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Layout': return <Layout className="w-6 h-6" />;
    case 'Server': return <Server className="w-6 h-6" />;
    case 'Database': return <Database className="w-6 h-6" />;
    case 'Settings': return <Settings className="w-6 h-6" />;
    case 'Coins': return <Coins className="w-6 h-6" />;
    default: return <Code2 className="w-6 h-6" />;
  }
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-black to-[#07071c] py-28 lg:py-40 overflow-hidden"
    >
      {/* Three.js background animation */}
      <BackgroundAnimation color="#0070f3" particleCount={1200} speed={0.0008} />
      
      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col items-center mb-20">
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

        <div className="grid gap-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name} 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600/30 to-blue-600/30 shadow-lg shadow-purple-900/20">
                  {getIconComponent(category.icon)}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  {category.name}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.3)'
                    }}
                    className="flex flex-col items-center justify-center p-6 bg-gray-900/50 hover:bg-gray-800/50 rounded-xl border border-gray-800 transition-all cursor-pointer backdrop-blur-sm shadow-lg shadow-purple-900/10"
                  >
                    <span className="text-3xl mb-3">{skill.icon}</span>
                    <span className="text-sm text-center font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.span 
              whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.3)' }}
              className="px-5 py-3 bg-gray-800/50 rounded-full border border-gray-700 text-sm shadow-lg"
            >
              Google Cloud Certified – Associate Cloud Engineer
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.3)' }}
              className="px-5 py-3 bg-gray-800/50 rounded-full border border-gray-700 text-sm shadow-lg"
            >
              Ethereum Blockchain Developer Certification
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.3)' }}
              className="px-5 py-3 bg-gray-800/50 rounded-full border border-gray-700 text-sm shadow-lg"
            >
              Contributor to open-source blockchain projects
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
