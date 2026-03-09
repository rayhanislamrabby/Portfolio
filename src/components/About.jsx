import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
 {
  year: '',
  role: 'Frontend Developer',
  company: '',
  desc: 'Developed responsive user interfaces using React.js and Tailwind CSS. Optimized component performance and ensured cross-browser compatibility to deliver a smooth user experience.',
},
{
  year: '',
  role: 'React Developer',
  company: '',
  desc: 'Built dynamic single-page applications using React.js, and REST APIs. Improved application performance by implementing reusable components and efficient state management.',
},
{
  year: '',
  role: 'Backend Developer',
  company: '',
  desc: 'Designed and developed RESTful APIs using Node.js and Express.js. Managed MongoDB databases, implemented authentication systems, and ensured secure and scalable backend services.',
},
{
  year: '',
  role: 'Full Stack Developer',
  company: '',
  desc: 'Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Integrated frontend with backend APIs, implemented authentication, and deployed applications on cloud platforms.',
}
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.15, ease: 'easeOut' } }),
  };

  return (
    <section id="about" className="py-28 px-6 relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div>
          <motion.div custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants}>
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Who I am</p>
            <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-purple mb-6" />
          </motion.div>

          <motion.p custom={1} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants}
            className="text-textSecondary leading-relaxed mb-4">
            Hey! I'm a passionate <span className="text-textPrimary font-semibold">Full Stack Developer</span> specializing in the
            MERN stack. I love crafting fast, beautiful, and accessible web experiences from idea to production.
          </motion.p>
          <motion.p custom={2} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants}
            className="text-textSecondary leading-relaxed mb-8">
            I believe in clean code, elegant design, and continuous learning. When I'm not coding, I'm exploring new technologies or contributing to open-source.
          </motion.p>

          {/* Stats */}
          <motion.div custom={3} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants}
            className="grid grid-cols-3 gap-4">
            {[ ['50+', 'Projects'], ['20+', 'Clients'], ['100%', 'Dedication'] ].map(([n, l]) => (
              <div key={l} className="glass-card p-5 text-center">
                <p className="text-2xl font-black text-gradient">{n}</p>
                <p className="text-xs text-textSecondary mt-1 font-medium">{l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Timeline */}
        <div>
          <motion.h3 custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants}
            className="text-xl font-bold text-textPrimary mb-8">Experience</motion.h3>

          <div className="space-y-6 relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-border">
            {experiences.map((exp, i) => (
              <motion.div key={i} custom={i + 1} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants}
                className="relative">
                {/* Dot */}
                <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-accent shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
                <div className="glass-card p-5 border border-border">
                  <span className="text-accent text-xs font-semibold">{exp.year}</span>
                  <h4 className="text-textPrimary font-bold mt-1">{exp.role}</h4>
                  <p className="text-textSecondary text-sm">{exp.company}</p>
                  <p className="text-textSecondary text-sm mt-2 leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
