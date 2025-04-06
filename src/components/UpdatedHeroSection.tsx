
import React from 'react';
import { Button } from './ui/button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const UpdatedHeroSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div
            ref={ref}
            className={`transform transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="text-primary">Aayush Bharti</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-muted-foreground">
              Full Stack Developer
            </h2>
            <p className="text-lg mb-8 max-w-lg text-muted-foreground">
              I create seamless digital experiences with modern web technologies.
              Specializing in both client and server-side development to build
              robust applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <div className="flex items-center gap-4 ml-2">
                <a
                  href="https://github.com/aayushbharti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/aayushbharti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative mx-auto max-w-md overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
              <img
                src="/lovable-uploads/2459d008-bfd6-4bf4-a27d-0aa11a872ff7.png"
                alt="Aayush Bharti"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-primary/10 ring-offset-2 ring-offset-background"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpdatedHeroSection;
