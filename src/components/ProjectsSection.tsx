
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '@/constants/portfolioData';
import BackgroundAnimation from './BackgroundAnimation';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  
  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  
  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  
  return (
    <section 
      id="work" 
      className="relative bg-black min-h-screen"
    >
      {/* Three.js background animation */}
      <BackgroundAnimation color="#4a00e0" particleCount={1500} speed={0.0005} />
      
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28 lg:py-40 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
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
        
        {/* Project carousel */}
        <div className="w-full max-w-6xl mx-auto relative">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-16 z-20">
            <Button 
              onClick={prevProject} 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-black/50"
            >
              <ChevronLeft />
              <span className="sr-only">Previous project</span>
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-16 z-20">
            <Button 
              onClick={nextProject} 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-black/50"
            >
              <ChevronRight />
              <span className="sr-only">Next project</span>
            </Button>
          </div>
          
          {/* Project content */}
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="w-full relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: currentProject === index ? 1 : 0,
                x: currentProject === index ? 0 : 100,
                pointerEvents: currentProject === index ? 'auto' : 'none',
              }}
              transition={{ 
                duration: 0.5, 
                ease: "easeInOut"
              }}
              style={{ 
                position: currentProject === index ? 'relative' : 'absolute',
                top: 0
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
                      animate={{ scale: 1 }}
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
                  animate={{ opacity: 1, x: 0 }}
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
        <div className="flex justify-center space-x-3 mt-10">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentProject(idx)}
              className="focus:outline-none"
              aria-label={`Go to project ${idx + 1}`}
            >
              <motion.div
                className={`h-2 w-2 rounded-full ${
                  currentProject === idx ? 'bg-pink-500' : 'bg-white/40'
                }`}
                animate={{
                  scale: currentProject === idx ? 1.5 : 1,
                  backgroundColor: currentProject === idx ? 
                    'rgba(236, 72, 153, 1)' : 'rgba(255, 255, 255, 0.4)'
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
