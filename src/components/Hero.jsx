import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import devAvatar from '../assets/dev_avatar.png';
import { FiDownload } from "react-icons/fi";
const Hero = () => {
  const containerRef = useRef(null);
  const textItems = useRef([]);
console.log('hello wprld ')
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textItems.current.filter(Boolean),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out', delay: 0.3 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={containerRef} className="min-h-screen flex items-center pt-24 pb-20 px-6 relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <div ref={el => textItems.current[0] = el}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for new projects
            </span>
          </div>

          <div ref={el => textItems.current[1] = el} className="space-y-2">
            <p className="text-textSecondary text-lg font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none">
              {/* <span className="text-textPrimary">Rabby</span>{' '} */}
              <span className="text-gradient">Rabby</span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-textSecondary mt-2">
              MERN Stack Developer
            </p>
          </div>

          <p ref={el => textItems.current[2] = el} className="text-textSecondary text-lg leading-relaxed max-w-lg">
            I build modern full-stack web applications using
            <span className="text-accent font-semibold"> MongoDB</span>,
            <span className="text-purple font-semibold"> Express</span>,
            <span className="text-cyan font-semibold"> React</span>, and
            <span className="text-accent font-semibold"> Node.js</span> — delivering clean code and premium user experiences.
          </p>

          <div ref={el => textItems.current[3] = el} className="flex flex-wrap gap-3 pt-2">
            <a href="#projects" onClick={e => scrollTo(e, 'projects')}
              className="px-7 py-3 rounded-xl bg-accent text-background font-bold text-sm hover:bg-cyan transition-colors duration-200 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
              View Projects
            </a>
<a
  href="https://drive.google.com/file/d/1lE7ck36WlUMNsjbS15Lz8XDcKaJsaGsr/view?usp=sharing" target='_blank'
  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-border text-textSecondary font-semibold text-sm hover:border-accent/40 hover:text-textPrimary transition-all duration-200"
>
  <FiDownload /> Download CV
</a>

          </div>
 
          
        </div>

        {/* Right: Avatar */}
        <div className="flex justify-center items-center order-1 lg:order-2 relative">
          {/* Glow blobs */}
          <div className="absolute w-80 h-80 rounded-full bg-accent/15 blur-[80px] animate-blob" />
          <div className="absolute w-64 h-64 rounded-full bg-purple/15 blur-[60px] animate-blob" style={{ animationDelay: '2s' }} />

          {/* Floating avatar */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10"
          >
            {/* Gradient ring */}
            <div className="p-[3px] rounded-full bg-gradient-to-br from-accent via-purple to-cyan" style={{ filter: 'drop-shadow(0 0 30px rgba(56,189,248,0.4))' }}>
              <div className="p-[3px] rounded-full bg-background">
                <img src={devAvatar} alt="Developer" className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover" />
              </div>
            </div>
            {/* Orbit ring (decorative) */}
            <div className="absolute inset-[-16px] rounded-full border border-accent/10 animate-spin-slow" />
            {/* Badges */}
            <div className="absolute -bottom-3 -right-6 px-4 py-2 rounded-xl glass border border-accent/20 text-xs font-bold text-accent shadow-lg">
              ⚡ MERN Stack
            </div>
           
          </motion.div>
        </div>


      </div> 
    </section>
  );
};

export default Hero;
