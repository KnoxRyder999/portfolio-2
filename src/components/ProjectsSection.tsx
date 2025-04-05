
import { useState } from 'react';
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '@/constants/portfolioData';
import BackgroundAnimation from './BackgroundAnimation';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

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
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-4 uppercase tracking-widest"
          >
            FEATURED PROJECTS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-serif italic">Work</span>
          </motion.h2>
        </div>
        
        {/* Project content */}
        <div className="w-full max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentProject === index ? 1 : 0,
                scale: currentProject === index ? 1 : 0.95,
                pointerEvents: currentProject === index ? 'auto' : 'none',
              }}
              transition={{ duration: 0.5 }}
              style={{ 
                position: currentProject === index ? 'relative' : 'absolute',
                top: 0,
                left: 0,
                right: 0
              }}
            >
              {/* Left side - Project showcase */}
              <div className="lg:col-span-7 relative">
                <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black/40 z-10"></div>
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2 }}
                  />
                  <div className="absolute top-5 left-5 z-10">
                    <div className="bg-purple-600/90 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                      Featured Project
                    </div>
                  </div>
                  <div className="absolute bottom-5 right-5 z-10">
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 border border-white/10 transition-all"
                    >
                      Visit Project <ExternalLink size={14} />
                    </a>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                    <h3 className="text-3xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-white/70">{project.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Right side - Project details */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-white/5"
                >
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="w-2 h-8 bg-purple-500 mr-3 rounded-full"></span>
                    {project.title}
                  </h3>

                  {/* Features list */}
                  <div className="space-y-4 mt-6">
                    {project.features.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                            +
                          </div>
                        </div>
                        <p className="text-gray-300">{feature}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mt-8">
                    <h4 className="text-sm uppercase text-gray-400 tracking-wide mb-3">Built with</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 6).map((tech, idx) => (
                        <motion.span 
                          key={idx}
                          className="bg-gray-800/80 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-700/50 shadow-lg"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + idx * 0.05 }}
                          whileHover={{ 
                            scale: 1.05, 
                            backgroundColor: 'rgba(255,255,255,0.1)'
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 6 && (
                        <motion.span 
                          className="bg-gray-800/50 text-gray-400 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-700/30"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          +{project.technologies.length - 6} more
                        </motion.span>
                      )}
                    </div>
                  </div>
                  
                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      View case study <ArrowRight size={16} className="ml-1" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Project navigation */}
        <div className="flex justify-between items-center mt-12">
          <div className="flex space-x-2">
            <Button onClick={prevProject} variant="outline" size="icon" className="rounded-full">
              <ChevronLeft size={16} />
              <span className="sr-only">Previous project</span>
            </Button>
            <Button onClick={nextProject} variant="outline" size="icon" className="rounded-full">
              <ChevronRight size={16} />
              <span className="sr-only">Next project</span>
            </Button>
          </div>
          
          {/* Project indicator dots */}
          <div className="flex space-x-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentProject(idx)}
                className="focus:outline-none"
                aria-label={`Go to project ${idx + 1}`}
              >
                <motion.div
                  className={`h-2 w-2 rounded-full ${
                    currentProject === idx ? 'bg-purple-500' : 'bg-white/30'
                  }`}
                  animate={{
                    scale: currentProject === idx ? 1.5 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
