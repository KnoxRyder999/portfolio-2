
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';

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
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

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
      if (!projectsRef.current || !isIntersecting) return;
      
      const scrollPosition = window.scrollY;
      const sectionTop = projectsRef.current.offsetTop;
      const sectionHeight = projectsRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll percentage within the section
      const scrollPercentage = (scrollPosition - sectionTop + windowHeight) / (sectionHeight + windowHeight);
      const clampedPercentage = Math.max(0, Math.min(1, scrollPercentage));
      
      // Apply parallax effect to project images
      const projectImages = document.querySelectorAll('.project-image-wrapper');
      projectImages.forEach((image) => {
        const translateY = -30 + clampedPercentage * 60; // Move from -30% to +30%
        (image as HTMLElement).style.transform = `translateY(${translateY}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isIntersecting]);

  return (
    <section id="work" className="bg-black py-20" ref={projectsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gray-400 mb-4 uppercase tracking-widest">FEATURED CASE STUDIES</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-serif italic">work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Project Showcase */}
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-transparent p-1">
            <div className="rounded-3xl overflow-hidden relative bg-gradient-to-br from-gray-900 to-black">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <div className="project-image-wrapper h-full">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.description}</h3>
                <a 
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="mt-4 inline-flex items-center justify-center gap-2 py-2 px-4 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all w-max"
                >
                  See Website <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex flex-col">
            <div className="flex items-center mb-8">
              <div className="h-1 w-8 bg-pink-500 mr-4"></div>
              <h3 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h3>
            </div>

            <p className="text-gray-300 mb-8">
              {selectedProject.description}
            </p>

            <div className="space-y-4 mb-8">
              {selectedProject.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-pink-500 mr-2 mt-1">+</span>
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <h4 className="text-lg font-semibold mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-gray-800 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* More Projects */}
        <div className="mt-20">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">More Projects</h3>
            <a href="#" className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
              View All <ChevronRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`project-card cursor-pointer rounded-xl overflow-hidden border ${
                  selectedProject.id === project.id 
                    ? 'border-pink-500/50' 
                    : 'border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <div className="project-image-wrapper h-full">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="p-4 bg-gray-900/50">
                  <h4 className="font-medium">{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
