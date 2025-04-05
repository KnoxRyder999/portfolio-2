
import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Project data
const projects = [
  {
    id: 1,
    title: 'Next Ventures',
    description: 'A online space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design.',
    image: '/lovable-uploads/c8b97f60-f85b-43f8-9b08-1f53f29e7206.png',
    url: 'https://example.com/nextventures',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Auth.js', 'Sanity.cms', 'GROQ', 'Sentry', 'markdown'],
    features: [
      'Leveraged Partial Prerendering and After for faster loading.',
      'Simplified idea submission with a clean, intuitive design.',
      'Enhanced browsing with seamless performance optimization.'
    ]
  },
  {
    id: 2,
    title: 'Fitness Tracker',
    description: 'A comprehensive fitness tracking application with personalized workout plans and progress visualization.',
    image: 'https://picsum.photos/id/26/800/600',
    url: 'https://example.com/fitnesstracker',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    features: [
      'Real-time workout tracking and analytics',
      'Personalized fitness recommendations',
      'Social sharing and community features'
    ]
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with advanced product filtering and secure checkout process.',
    image: 'https://picsum.photos/id/96/800/600',
    url: 'https://example.com/ecommerce',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
    features: [
      'Secure payment processing with Stripe integration',
      'Advanced product filtering and search capabilities',
      'Responsive design for all devices'
    ]
  }
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!projectsRef.current || !isIntersecting || !projectsContainerRef.current) return;
      
      const sectionTop = projectsRef.current.offsetTop;
      const sectionHeight = projectsRef.current.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate which project should be active based on scroll position
      const relativePosition = scrollPosition - sectionTop + windowHeight / 2;
      const projectHeight = sectionHeight / projects.length;
      const newActiveProject = Math.max(0, Math.min(
        Math.floor(relativePosition / projectHeight),
        projects.length - 1
      ));
      
      if (newActiveProject !== activeProject) {
        setActiveProject(newActiveProject);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isIntersecting, activeProject]);

  return (
    <section 
      id="work" 
      className="relative bg-black py-28 lg:py-40 overflow-hidden" 
      ref={projectsRef}
      style={{ height: `${100 * projects.length}vh` }}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative">
        <div className="fixed top-[25%] left-0 right-0 z-10 pointer-events-none">
          <div className="container mx-auto px-6 md:px-10 lg:px-16">
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
          </div>
        </div>

        <div className="fixed top-1/2 left-0 right-0 -translate-y-1/2 z-20 pointer-events-none" ref={projectsContainerRef}>
          <div className="container mx-auto px-6 md:px-10 lg:px-16">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pointer-events-auto"
                initial={{ opacity: 0, y: 100 }}
                animate={{ 
                  opacity: activeProject === index ? 1 : 0,
                  y: activeProject === index ? 0 : 100,
                  scale: activeProject === index ? 1 : 0.95
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ position: 'absolute', width: '100%', display: 'grid' }}
              >
                {/* Project Image - Left Side */}
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/20">
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center"
                      initial={{ scale: 1.1 }}
                      animate={{ 
                        scale: activeProject === index ? 1 : 1.1,
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
                </div>
                
                {/* Project Details - Right Side */}
                <div className="flex flex-col">
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ 
                      opacity: activeProject === index ? 1 : 0, 
                      x: activeProject === index ? 0 : 30 
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
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
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
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
