import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import imgEcommerce from "../assets/project_ecommerce.png";
import imgTask from "../assets/project_taskapp.png";
import imgBlog from "../assets/project_blog.png";
import imgChat from "../assets/project_chat.png";
import imgPortfolio from "../assets/project_portfolio.png";
import imgEcommerceFlower from "../assets/project_ecommerce_flower.png";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack MERN e-commerce with authentication, product management, cart, and Stripe payments.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/rayhanislamrabby/mern-ecommerce-clint",
    live: "https://shop-zoon-6f877.web.app",
    img: imgEcommerce,
    accent: "#38BDF8",
  },
 
  {
    title: "Task Management App",
    description:
      "Real-time collaborative Kanban board with drag-and-drop, team workspaces, and Socket.io.",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com/rayhanislamrabby/react-world-toure",
    live: "https://react-world-toure-rabby-projectas.netlify.app/",
    img: imgTask,
    accent: "#8B5CF6",
  },
  {
    title: " News CMS",
    description:
      "Headless CMS-powered blog with Markdown support and advanced filtering.",
    tags: ["React",  "Tailwind", "Firebase" ],
    github: "https://github.com/rayhanislamrabby/dragone-news",
    live: "https://magenta-kringle-13a478.netlify.app/",
    img: imgBlog,
    accent: "#22D3EE",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Encrypted chat with rooms, direct messages, file sharing, and typing indicators.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    img: imgChat,
    accent: "#38BDF8",
  },
  {
    title: "Portfolio Builder",
    description:
      "Drag-and-drop portfolio builder with live preview and deploy integration.",
    tags: ["React",  "Node.js"],
    github: "https://github.com/rayhanislamrabby/Portfolio",
    live: "https://rabby-portfolio.netlify.app/",
    img: imgPortfolio,
    accent: "#8B5CF6",
  },
    
   {
    title: "E-Commerce Platform",
    description:
      "Full-stack MERN e-commerce with authentication, product management, cart, and Stripe payments.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://nikitas-florist.netlify.app",
    img: imgEcommerceFlower,
    accent: "#38BDF8",
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl overflow-hidden border border-white/10 bg-[#020617] shadow-xl hover:shadow-2xl transition-all"
    >
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Accent line */}
        <div
          className="h-[2px] w-12 mb-4 rounded-full"
          style={{ background: project.accent }}
        />

        <h3 className="text-xl font-bold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full border"
              style={{
                borderColor: project.accent,
                color: project.accent,
                background: `${project.accent}15`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 border border-white/20 rounded-lg text-sm text-white/70 hover:text-white hover:border-white/40 transition-all flex-1"
          >
            <FiGithub size={14} />
            Code
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold flex-1 transition-all hover:scale-105"
            style={{
              background: `${project.accent}20`,
              color: project.accent,
              border: `1px solid ${project.accent}40`,
            }}
          >
            <FiExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const titleInView = useInView(sectionRef, { once: true });

  return (
    <section id="projects" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>

          <div className="w-20 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;