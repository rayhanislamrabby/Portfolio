import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-surface/90 backdrop-blur-lg border-b border-border shadow-lg py-3' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" onClick={e => scrollTo(e, '#home')} className="text-xl font-black text-gradient tracking-tight">
            RABBY
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={e => scrollTo(e, link.href)}
                className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={e => scrollTo(e, '#contact')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-background font-bold text-sm transition-colors duration-200 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-3">
           
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-textPrimary text-xl">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
            
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                href={link.href}
                onClick={e => scrollTo(e, link.href)}
                className="text-3xl font-bold text-textPrimary hover:text-accent transition-colors"
              >
                {link.name}
              </motion.a>
            ))}

<a 
  href="#contact" 
  onClick={e => scrollTo(e, '#contact')} 
  className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 md:px-4 md:py-2 rounded-xl bg-accent text-background font-bold text-sm transition-colors duration-200 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
>
  Hire Me
</a>
          </motion.div>
          
        )}
        
      </AnimatePresence>
    </>
  );
};

export default Navbar;
