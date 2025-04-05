
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '@/constants/portfolioData';
import BackgroundAnimation from './BackgroundAnimation';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ProjectsSection = () => {
  // Initialize scroll reveal hook
  useScrollReveal();
  
  // Define animation variants for enhanced fading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(10px)",
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <section 
      id="work" 
      className="relative bg-black min-h-screen"
    >
      {/* Three.js background animation */}
      <BackgroundAnimation color="#4a00e0" particleCount={1500} speed={0.0005} />
      
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28 lg:py-40 relative z-10">
        {/* Section title with enhanced animation */}
        <motion.div 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p 
            variants={textVariants}
            className="text-gray-400 mb-4 uppercase tracking-widest"
          >
            FEATURED PROJECTS
          </motion.p>
          <motion.h2 
            variants={textVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-serif italic">Work</span>
          </motion.h2>
        </motion.div>
        
        {/* Project content with enhanced animations */}
        <motion.div 
          className="w-full max-w-7xl mx-auto space-y-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 slide-in-blur"
              variants={itemVariants}
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
              custom={index}
              transition={{ staggerChildren: 0.1 }}
              whileInView="visible"
              initial="hidden"
              exit={{ 
                opacity: 0,
                y: 30,
                filter: "blur(5px)",
                transition: { duration: 0.5 }
              }}
            >
              {/* Left side - Project showcase with enhanced hover effects */}
              <motion.div 
                className="lg:col-span-7 relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black/40 z-10"></div>
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover shine"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1 }}
                    initial={{ opacity: 0.8, filter: "blur(2px)" }}
                    whileInView={{ 
                      opacity: 1, 
                      filter: "blur(0px)",
                      transition: { duration: 0.8 }
                    }}
                  />
                  <div className="absolute top-5 left-5 z-10">
                    <motion.div 
                      className="bg-purple-600/90 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      Featured Project
                    </motion.div>
                  </div>
                  <div className="absolute bottom-5 right-5 z-10">
                    <motion.a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 border border-white/10 transition-all btn-glow"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(0,0,0,0.6)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      Visit Project <ExternalLink size={14} />
                    </motion.a>
                  </div>
                  <motion.div 
                    className="absolute inset-x-0 bottom-0 p-6 z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h3 className="text-3xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-white/70">{project.description}</p>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Right side - Project details with staggered animations */}
              <motion.div 
                className="lg:col-span-5 flex flex-col justify-center space-y-6"
                variants={itemVariants}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover-3d"
                  whileHover={{ 
                    backgroundColor: "rgba(25, 25, 35, 0.6)",
                    borderColor: "rgba(255, 255, 255, 0.15)",
                    transition: { duration: 0.3 } 
                  }}
                >
                  <motion.h3 
                    className="text-2xl font-bold mb-4 flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <motion.span 
                      className="w-2 h-8 bg-purple-500 mr-3 rounded-full"
                      initial={{ height: 0 }}
                      whileInView={{ height: 32 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    ></motion.span>
                    {project.title}
                  </motion.h3>

                  {/* Features list with staggered animations */}
                  <div className="space-y-4 mt-6">
                    {project.features.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                      >
                        <motion.div 
                          className="flex-shrink-0 mt-1"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.4 + idx * 0.1, duration: 0.4, type: "spring" }}
                        >
                          <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs pulse-glow">
                            +
                          </div>
                        </motion.div>
                        <motion.p 
                          className="text-gray-300"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
                        >
                          {feature}
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies with staggered fade-in */}
                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <h4 className="text-sm uppercase text-gray-400 tracking-wide mb-3">Built with</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 6).map((tech, idx) => (
                        <motion.span 
                          key={idx}
                          className="bg-gray-800/80 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-700/50 shadow-lg enhanced-tag"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + idx * 0.05, duration: 0.4 }}
                          whileHover={{ 
                            scale: 1.05, 
                            backgroundColor: "rgba(255,255,255,0.1)"
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 6 && (
                        <motion.span 
                          className="bg-gray-800/50 text-gray-400 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-700/30"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8, duration: 0.4 }}
                        >
                          +{project.technologies.length - 6} more
                        </motion.span>
                      )}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    <motion.a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      View case study <ArrowRight size={16} className="ml-1" />
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
