
import { ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-black py-20 overflow-hidden relative"
      style={{
        backgroundImage: "url('/lovable-uploads/f55efce3-be0e-49fa-9ca7-bc5d963b39cb.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="bg-blue-900/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
            <img
              src="/lovable-uploads/3eab83e0-8688-401f-ae62-d1290223066f.png"
              alt="AB Logo"
              className="w-10 h-10 object-contain"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            FROM CONCEPT TO <span className="text-white font-bold">CREATION</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2">
            LET's MAKE IT <span className="text-white font-bold">HAPPEN!</span>
          </h3>

          <div className="mt-12">
            <a
              href="mailto:hello@aayushbharti.in"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full border border-white/20 transition-all group"
            >
              Get In Touch
              <span className="bg-white rounded-full p-1 text-black group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </span>
            </a>
          </div>

          <div className="mt-16 max-w-2xl text-center">
            <p className="text-xl">I'm available for full-time roles & freelance projects.</p>
            <p className="text-gray-400 mt-4">
              I thrive on crafting dynamic web applications, and delivering seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
