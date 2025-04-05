
import React from 'react';
import { MapPin, Users, Code2, Clock } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
  bgClass?: string;
}> = ({ icon, title, description, image, bgClass }) => {
  return (
    <div className={`rounded-3xl overflow-hidden ${bgClass || 'bg-black'}`}>
      <div className="p-6 md:p-8 h-full flex flex-col">
        <div className="mb-3">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
        {image && (
          <div className="mt-auto pt-4">
            <div className="flex flex-wrap gap-2">
              <img src={image} alt={title} className="h-12 w-12 object-cover rounded-xl" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Main Feature Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-black to-gray-900 rounded-3xl overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-3 text-gray-200">
                <Users size={24} className="mr-3" />
                <span>Collaboration</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                I prioritize client collaboration, fostering open communication
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Team member"
                  className="h-20 w-full object-cover rounded-xl"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Team member"
                  className="h-20 w-full object-cover rounded-xl"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Team member"
                  className="h-20 w-full object-cover rounded-xl"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Team member"
                  className="h-20 w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Right side feature */}
          <div className="md:row-span-2 bg-gradient-to-br from-black to-gray-900 rounded-3xl overflow-hidden">
            <div className="p-6 md:p-8 h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                I'm very flexible with time <span className="block text-blue-400">zone communications</span>
              </h3>
              <div className="flex-grow mt-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                </div>
                <img
                  src="/lovable-uploads/3c740f1a-f225-41c9-81d9-cc2b572bc612.png"
                  alt="World Map"
                  className="w-full h-full object-contain relative z-10"
                />
              </div>
              <div className="mt-6">
                <div className="flex items-center">
                  <MapPin size={18} className="text-gray-400 mr-2" />
                  <span className="text-gray-300">Remote</span>
                </div>
                <p className="font-semibold mt-1">India - 24:56</p>
              </div>
            </div>
          </div>

          {/* Technology stack */}
          <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-3 text-gray-200">
                <Code2 size={24} className="mr-3" />
                <span>Technology</span>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {['React', 'Node.js', 'TypeScript', 'Next.js', 'Express', 'MongoDB'].map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center justify-center h-12 bg-white/5 rounded-lg border border-white/10 text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Let's work together card */}
          <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl overflow-hidden">
            <div className="p-6 md:p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">AB</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Let's work together <br />
                on your next project
              </h3>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 mt-6 w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                hello@aayushbharti.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
