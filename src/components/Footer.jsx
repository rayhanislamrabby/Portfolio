import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socials = [
  { icon: FiGithub,   href: 'https://github.com/rayhanislamrabby',    label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/rayhanislamrabby',  label: 'LinkedIn' },
    { icon: FaWhatsapp,     href: 'https://wa.me/8801315110644',label: 'Whatsapp' },
  { icon: FaFacebook,     href: 'https://facebook.com/abirahmedrabbyyy',label: 'Facebook' },
 
    { icon: BsInstagram,     href: 'https://instagram.com/abir_ahmed_rabby',label: 'Instagram' },
 
  { icon: FiMail,     href: 'mailto:rabbydev25@gmail.com',label: 'Email' },
];

const Footer = () => (
  <footer className="relative z-10 border-t border-border py-10 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

      <div className="text-center md:text-left">
        <a href="#home" className="text-lg font-black text-gradient">RABBY</a>
        <p className="text-xs text-textSecondary mt-1.5 max-w-xs">
          Built with React, Tailwind and modern web technologies.
        </p>
      </div>

      <div className="flex items-center gap-4">
        {socials.map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
            className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-textSecondary hover:text-textPrimary hover:border-accent/40 transition-all duration-200">
            <Icon size={16} />
          </a>
        ))}
      </div>

      <p className="text-xs text-textSecondary text-center md:text-right">
        &copy; {new Date().getFullYear()} Rabby. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
