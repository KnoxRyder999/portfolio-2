
import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/constants/portfolioData';
import BackgroundAnimation from './BackgroundAnimation';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentProject, setCurrentProject] = useState(0);
  
  // Fixed height for the entire section
  const SECTION_HEIGHT = 100 * projects.length; // vh
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const sectionTop = scrollPosition + rect.top;
      const scrollOffset = scrollPosition - sectionTop;
      
      // Calculate which project should be visible based on scroll position
      const projectIndex = Math.max(
        0,
        Math.min(
          Math.floor(scrollOffset / (window.innerHeight)),
          projects.length - 1
        )
      );
      
      setCurrentProject(projectIndex);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section 
      id="work" 
      className="relative bg-black"
      ref={sectionRef}
      style={{ height: `${SECTION_HEIGHT}vh` }}
    >
      {/* Three.js background animation */}
      <BackgroundAnimation color="#4a00e0" particleCount={1500} speed={0.0005} />
      
      {/* Fixed header */}
      <div className="sticky top-0 left-0 right-0 h-screen w-full overflow-hidden">
        {/* Section title */}
        <div className="absolute top-[15%] left-0 right-0 z-30 pointer-events-none">
          <div className="container mx-auto px-6 md:px-10 lg:px-16">
            <div className="text-center">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-400 mb-4 uppercase tracking-widest"
              >
                FEATURED CASE STUDIES
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-serif italic">work</span>
              </motion.h2>
            </div>
          </div>
        </div>
        
        {/* Project content container - fixed position */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 container mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`w-full max-w-6xl ${index === 0 ? 'mt-0' : 'mt-[100vh]'} mb-[20vh] relative`}
              initial={{ opacity: 0, y: 100 }}
              animate={{ 
                opacity: currentProject === index ? 1 : 0,
                y: currentProject === index ? 0 : 100,
                scale: currentProject === index ? 1 : 0.95,
                pointerEvents: currentProject === index ? 'auto' : 'none',
              }}
              transition={{ 
                duration: 0.8, 
                ease: "easeInOut",
                opacity: { duration: 0.5 }
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Project Image - Left Side */}
                <motion.div 
                  className="rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/30"
                  whileInView={{ 
                    boxShadow: '0 25px 50px -12px rgba(124, 58, 237, 0.4)'
                  }}
                  transition={{ duration: 1 }}
                >
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center"
                      initial={{ scale: 1.1 }}
                      animate={{ 
                        scale: currentProject === index ? 1 : 1.1,
                      }}
                      transition={{ duration: 1.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="absolute bottom-6 right-6 inline-flex items-center justify-center gap-2 py-2 px-4 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all w-max backdrop-blur-sm"
                    >
                      Visit Website <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
                
                {/* Project Details - Right Side */}
                <motion.div 
                  className="flex flex-col"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ 
                    opacity: currentProject === index ? 1 : 0, 
                    x: currentProject === index ? 0 : 30 
                  }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex items-center mb-8">
                    <div className="h-1 w-8 bg-pink-500 mr-4"></div>
                    <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                  </div>

                  <p className="text-gray-300 mb-8">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-pink-500 mr-2 mt-1">+</span>
                        <p className="text-gray-300">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <h4 className="text-lg font-semibold mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span 
                          key={idx}
                          className="bg-gray-800/80 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-700 shadow-lg"
                          whileHover={{ 
                            scale: 1.05, 
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.5)'
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Project indicator dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
          {projects.map((_, idx) => (
            <motion.div
              key={idx}
              className={`h-2 w-2 rounded-full ${
                currentProject === idx ? 'bg-pink-500 scale-150' : 'bg-white/40'
              }`}
              animate={{
                scale: currentProject === idx ? 1.5 : 1,
                backgroundColor: currentProject === idx ? 
                  'rgba(236, 72, 153, 1)' : 'rgba(255, 255, 255, 0.4)'
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
