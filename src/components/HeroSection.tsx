
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative bg-gradient-to-b from-[#11112f] to-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute w-96 h-96 rounded-full bg-purple-700/20 blur-3xl -top-20 -left-20"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute w-96 h-96 rounded-full bg-blue-700/20 blur-3xl -bottom-20 -right-20"
        />
        
        {/* Code matrix animation in background */}
        <div className="absolute inset-0 opacity-10">
          <div className="code-rain"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 pt-24 pb-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* New Tag */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-200 px-4 py-1.5 rounded-full mb-8 border border-blue-500/30 shadow-lg shadow-blue-500/20"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span className="text-sm font-medium">Expert Full-Stack Developer</span>
              <ArrowRight size={14} />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 font-serif"
            >
              <span className="block">ARTEM SUROVIHIN</span>
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-100 to-gray-400">
                Full-Stack Developer
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg text-gray-300"
            >
              Specialized in React • Node.js • Django • Blockchain
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-12"
            >
              <div className="flex items-center gap-4">
                <p className="text-gray-300 text-lg">Based in Kyiv, Ukraine</p>
                <div className="relative h-12 w-12">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse"></div>
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover relative z-10 border-2 border-white"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10"
            >
              <a
                href="#contact"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full border border-white/20 transition-all group shadow-lg shadow-purple-900/10"
              >
                Let's Connect
                <span className="bg-white rounded-full p-1 text-black group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={16} />
                </span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>suroviahinartem@gmail.com</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Animation/Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square">
              <motion.div 
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.02, 1, 0.98, 1]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear" 
                }}
                className="absolute inset-0 bg-gradient-to-r from-purple-700/20 to-blue-700/20 rounded-full blur-3xl"
              />
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full border-2 border-purple-500/20 rounded-full" />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-[90%] h-[90%] border border-blue-500/30 rounded-full" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, -10, 0, 10, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl shadow-purple-900/20 border-4 border-white/10">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Artem Surovihin"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Curved bottom shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L48 8.85C96 17.7 192 35.4 288 40C384 44.6 480 35.4 576 31.2C672 26.5 768 26.5 864 31.2C960 35.4 1056 44.6 1152 49.3C1248 53.5 1344 53.5 1392 53.5H1440V120H0V0Z"
            fill="black"
            fillOpacity="0.2"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
