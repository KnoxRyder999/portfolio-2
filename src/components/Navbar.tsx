
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 transition-all duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 transition-all duration-300 hover:text-primary">
          <span className="text-white font-bold text-xl">AB</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-white/80 hover:text-white transition-all duration-300">
            Home
          </a>
          <a href="#work" className="text-white/80 hover:text-white transition-all duration-300">
            Work
          </a>
          <a href="#about" className="text-white/80 hover:text-white transition-all duration-300">
            About
          </a>
          <a href="#skills" className="text-white/80 hover:text-white transition-all duration-300">
            Skills
          </a>
          <div className="relative group">
            <button className="text-white/80 hover:text-white transition-all duration-300 flex items-center gap-1">
              More
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 transition-all duration-300 hover:bg-white/10 rounded-md"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white block transition-transform ${
                mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white block transition-opacity ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white block transition-transform ${
                mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-purple-400 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-purple-400 transition-all duration-300"
          >
            Work
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-purple-400 transition-all duration-300"
          >
            About
          </a>
          <a
            href="#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-purple-400 transition-all duration-300"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
