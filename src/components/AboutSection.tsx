
import { Linkedin, Github, Twitter, BookOpen, Briefcase, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/hooks/useScrollReveal';
import { experienceData, socialLinks } from '@/constants/portfolioData';
import ThreeBackground from './ThreeBackground';

const ExperienceItem = ({ title, company, period, location, descriptions }: { 
  title: string; 
  company: string; 
  period: string; 
  location: string;
  descriptions: string[];
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="mb-8 border-l-2 border-gray-700 pl-5 relative"
  >
    <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-1.5"></div>
    <div className="flex justify-between flex-wrap gap-2 mb-1">
      <h3 className="text-xl font-bold text-white">{title} <span className="text-purple-400">| {company}</span></h3>
      <div className="flex items-center gap-2 text-gray-400">
        <Calendar size={14} />
        <span className="text-sm">{period}</span>
      </div>
    </div>
    <p className="text-gray-400 mb-2">{location}</p>
    <ul className="list-disc list-inside space-y-2 text-gray-300">
      {descriptions.map((desc, index) => (
        <li key={index} className="text-sm">{desc}</li>
      ))}
    </ul>
  </motion.div>
);

const AboutSection = () => {
  return (
    <section id="about" className="bg-black py-20 relative overflow-hidden">
      {/* Three.js custom background */}
      <ThreeBackground type="particles" color="#9333ea" density={800} speed={0.0003} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12">
          <p className="text-gray-400 uppercase tracking-widest">MY JOURNEY</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ScrollReveal threshold={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Full-Stack Developer and
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-serif italic">
                  Blockchain Specialist
                </span>
              </h2>

              <div className="space-y-6 text-gray-300">
                <p>
                  I am a highly skilled Full-Stack Developer with extensive experience in building scalable, high-performance 
                  web applications and blockchain solutions. I specialize in working with React, Node.js, Next.js, Django, 
                  and Ethereum, Solana, Tron to deliver custom web development services to European and global clients.
                </p>

                <p>
                  My passion for technology innovation and client satisfaction drives me to deliver solutions that help 
                  businesses scale, optimize, and grow in the competitive digital landscape. I've improved website 
                  performance by optimizing server responses, reducing load times by up to 40%.
                </p>

                <p>
                  When I'm not coding, I enjoy contributing to open-source blockchain projects and staying updated 
                  with the latest advancements in web development and blockchain technology.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Award size={18} className="text-purple-400" />
                    Education
                  </h3>
                  <p className="text-gray-300">Master's Degree in Computer Engineering</p>
                  <p className="text-gray-400 text-sm">Kyiv Polytechnic Institute, 2016-2019</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Briefcase size={18} className="text-purple-400" />
                    Experience
                  </h3>
                  <p className="text-gray-300">Senior Full-Stack Developer</p>
                  <p className="text-gray-400 text-sm">5+ years of professional experience</p>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                {socialLinks.map((link, index) => {
                  const IconComponent = {
                    'Linkedin': Linkedin,
                    'Github': Github,
                    'Twitter': Twitter,
                    'BookOpen': BookOpen
                  }[link.icon] || BookOpen;
                  
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal threshold={0.1} delay={200}>
              <div className="relative w-full h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Briefcase size={20} className="text-purple-400" />
                  Work Experience
                </h3>
                
                {experienceData.map((experience, index) => (
                  <ExperienceItem
                    key={index}
                    title={experience.title}
                    company={experience.company}
                    period={experience.period}
                    location={experience.location}
                    descriptions={experience.descriptions}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
