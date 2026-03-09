import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaNodeJs,
  FaGitAlt, FaGithub, FaAws, FaChrome, FaUbuntu, FaCloud, FaFire
} from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiMui, SiExpress, SiMongodb, SiMongoose, SiNetlify, SiDaisyui, SiPnpm } from 'react-icons/si';
import { FiCode } from 'react-icons/fi';
import { CgNpm, CgVercel } from 'react-icons/cg';
import { VscCode, VscCodeOss } from 'react-icons/vsc';
import { RiNextjsFill } from 'react-icons/ri';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: 'Frontend', color: '#38BDF8',
    skills: [
      { name: 'HTML5',       Icon: FaHtml5,       color: '#E34F26' },
      { name: 'CSS3',        Icon: FaCss3Alt,     color: '#1572B6' },
      { name: 'JavaScript',  Icon: FaJs,          color: '#F7DF1E' },
      { name: 'Tailwind',    Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'React JS',    Icon: FaReact,       color: '#61DAFB' },
      { name: 'Nextjs Js',       Icon: RiNextjsFill,      color: '#764ABC' },
    
      { name: 'Formik',      Icon: FiCode,        color: '#0050CB' },
       { name: 'DaisyUI',     Icon: SiDaisyui,  color: '#0050CB' },
      { name: 'Material UI', Icon: SiMui,         color: '#007FFF' },
      { name: 'SCSS',        Icon: FaSass,        color: '#CC6699' },
    ]
  },
  {
    title: 'Backend', color: '#8B5CF6',
    skills: [
      { name: 'Node JS',    Icon: FaNodeJs,  color: '#339933' },
      { name: 'Express JS', Icon: SiExpress, color: '#94A3B8' },
    ]
  },
  {
    title: 'Database', color: '#22D3EE',
    skills: [
      { name: 'MongoDB',  Icon: SiMongodb,  color: '#47A248' },
      { name: 'Mongoose', Icon: SiMongoose, color: '#880000' },
    ]
  },
  {
    title: 'Tools & DevOps', color: '#38BDF8',
    skills: [
      { name: 'Git',      Icon: FaGitAlt,  color: '#F05032' },
      { name: 'GitHub',   Icon: FaGithub,  color: '#F1F5F9' },
      // { name: 'EC2',      Icon: FaAws,     color: '#FF9900' },
      { name: 'VS Code',  Icon: VscCode,    color: '#007ACC' },
      { name: 'Chrome',   Icon: FaChrome,  color: '#4285F4' },
      { name: 'Compass',  Icon: SiMongodb, color: '#47A248' },
      { name: 'Postman',  Icon: FiCode,    color: '#FF6C37' },
      { name: 'Ubuntu',   Icon: FaUbuntu,  color: '#E95420' },
      { name: 'Vercel',   Icon: CgVercel,    color: '#F1F5F9' },
      { name: 'Netlify',  Icon: SiNetlify,   color: '#00C7B7' },
      { name: 'Firebase', Icon: FaFire,    color: '#FFCA28' },
       { name: 'NPM',       Icon: CgNpm,      color: '#764ABC' },
       { name: 'PNPM',       Icon: SiPnpm,      color: '#764ABC' },
    ]
  }
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cat-block',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' } }
      );
      gsap.fromTo('.skill-icon-tile',
        { opacity: 0, scale: 0.65 },
        { opacity: 1, scale: 1, duration: 0.45, stagger: { amount: 1.2, from: 'start' }, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-28 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">What I work with</p>
          <h2 className="section-title">My <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-accent to-purple mx-auto mt-3" />
        </div>

        <div className="space-y-14">
          {categories.map((cat, ci) => (
            <div key={ci} className="cat-block">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-bold tracking-wide" style={{ color: cat.color }}>{cat.title}</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
                {cat.skills.map((s, si) => (
                  <div key={si} className="skill-icon-tile group flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl glass-card">
                    <s.Icon style={{ color: s.color, fontSize: '2rem' }} />
                    <span className="text-[11px] font-semibold text-textSecondary text-center leading-tight group-hover:text-textPrimary transition-colors duration-200">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
