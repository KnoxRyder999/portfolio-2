
import { Linkedin, Github, Twitter, BookOpen, Briefcase, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const ExperienceItem = ({ title, company, period, location, descriptions }: { 
  title: string; 
  company: string; 
  period: string; 
  location: string;
  descriptions: string[];
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="mb-8 border-l-2 border-gray-700 pl-5 relative"
  >
    <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-1.5"></div>
    <div className="flex justify-between flex-wrap gap-2 mb-1">
      <h3 className="text-xl font-bold text-white">{title} <span className="text-purple-400">| {company}</span></h3>
      <div className="flex items-center gap-2 text-gray-400">
        <Calendar size={14} />
        <span className="text-sm">{period}</span>
      </div>
    </div>
    <p className="text-gray-400 mb-2">{location}</p>
    <ul className="list-disc list-inside space-y-2 text-gray-300">
      {descriptions.map((desc, index) => (
        <li key={index} className="text-sm">{desc}</li>
      ))}
    </ul>
  </motion.div>
);

const AboutSection = () => {
  return (
    <section id="about" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <p className="text-gray-400 uppercase tracking-widest">MY JOURNEY</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ScrollReveal threshold={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Full-Stack Developer and
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-serif italic">
                  Blockchain Specialist
                </span>
              </h2>

              <div className="space-y-6 text-gray-300">
                <p>
                  I am a highly skilled Full-Stack Developer with extensive experience in building scalable, high-performance 
                  web applications and blockchain solutions. I specialize in working with React, Node.js, Next.js, Django, 
                  and Ethereum, Solana, Tron to deliver custom web development services to European and global clients.
                </p>

                <p>
                  My passion for technology innovation and client satisfaction drives me to deliver solutions that help 
                  businesses scale, optimize, and grow in the competitive digital landscape. I've improved website 
                  performance by optimizing server responses, reducing load times by up to 40%.
                </p>

                <p>
                  When I'm not coding, I enjoy contributing to open-source blockchain projects and staying updated 
                  with the latest advancements in web development and blockchain technology.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Award size={18} className="text-purple-400" />
                    Education
                  </h3>
                  <p className="text-gray-300">Master's Degree in Computer Engineering</p>
                  <p className="text-gray-400 text-sm">Kyiv Polytechnic Institute, 2016-2019</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Briefcase size={18} className="text-purple-400" />
                    Experience
                  </h3>
                  <p className="text-gray-300">Senior Full-Stack Developer</p>
                  <p className="text-gray-400 text-sm">5+ years of professional experience</p>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <a
                  href="https://linkedin.com/in/artem-suroviahin-b857a4357"
                  target="_blank"
                  rel="noopener noreferrer"
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
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal threshold={0.1} delay={200}>
              <div className="relative w-full h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Briefcase size={20} className="text-purple-400" />
                  Work Experience
                </h3>
                
                <ExperienceItem
                  title="Senior Full-Stack Developer"
                  company="SoftServe"
                  period="2023 - 2025"
                  location="Kyiv, Ukraine"
                  descriptions={[
                    "Began offering custom web development and blockchain solutions for European clients in e-commerce, fintech, and blockchain.",
                    "Successfully collaborated with company and developing scalable, high-performance web applications using React, Next.js, Node.js.",
                    "Optimized website performance, reducing load times by 30% and improving API response speeds.",
                    "Developed secure blockchain applications, including smart contracts on the Ethereum and Solana networks."
                  ]}
                />

                <ExperienceItem
                  title="Backend Developer"
                  company="HTEC"
                  period="2022 - 2023"
                  location="Germany"
                  descriptions={[
                    "Improved the website's backend performance by optimizing server responses, resulting in 40% faster load times.",
                    "Built and integrated real-time product recommendation engines, enhancing user engagement and increasing conversion rates.",
                    "Worked closely with the frontend team using Django and MongoDB."
                  ]}
                />

                <ExperienceItem
                  title="Full-Stack Developer"
                  company="Monzo"
                  period="2020 - 2021"
                  location="UK"
                  descriptions={[
                    "Built and optimized backend services for a mobile banking app serving over 5 million users in the UK and Europe.",
                    "Focused on developing secure, high-performance APIs for payments and financial transactions.",
                    "Reduced data processing time by 30%, improving efficiency of banking services."
                  ]}
                />

                <ExperienceItem
                  title="Software Engineer"
                  company="Balt"
                  period="2019 - 2020"
                  location="Lithuania"
                  descriptions={[
                    "Built and maintained microservices for a major European marketplace.",
                    "Enhanced the platform's search functionality and user recommendation system using Node.js and React.",
                    "Reduced platform load times by 25%, improving performance on both mobile and desktop versions.",
                    "Integrated payment platforms like PayPal and Stripe, and implemented cloud hosting solutions."
                  ]}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
