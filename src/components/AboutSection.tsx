
import { Linkedin, Github, Twitter, BookOpen } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <p className="text-gray-400 uppercase tracking-widest">MORE ABOUT ME</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Full-Stack Developer and
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-serif italic">
                a little bit of everything
              </span>
            </h2>

            <div className="space-y-6 text-gray-300">
              <p>
                I'm Aayush Bharti, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.
              </p>

              <p>
                When I'm not coding, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
              </p>

              <p>
                I believe in waking up each day eager to make a difference!
              </p>
            </div>

            <div className="flex space-x-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
              >
                <BookOpen size={18} />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                <img
                  src="/lovable-uploads/def1dcae-3d41-4b9b-bd37-a93000a0c320.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
