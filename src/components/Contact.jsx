import React, { useState } from 'react';
import { useFormik } from 'formik';
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiCheckCircle, FiGithub, FiLinkedin, } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import { FaWhatsapp } from 'react-icons/fa';

const validate = v => {
  const e = {};
  if (!v.name) e.name = 'Name is required';
  if (!v.email) e.email = 'Email is required';
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v.email)) e.email = 'Invalid email';
  if (!v.message) e.message = 'Message is required';
  return e;
};

const inputClass = (touched, error) =>
  `w-full px-4 py-3 rounded-xl bg-surface border text-textPrimary text-sm placeholder-textSecondary/50 outline-none transition-all duration-200 ${
    touched && error ? 'border-red-500/50 focus:border-red-500' : 'border-border focus:border-accent/50'
  }`;

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validate,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setErrMsg('');
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';




        




await emailjs.send(
  serviceId,
  templateId,
  {
    user_name: values.name,
    user_email: values.email,
    user_message: values.message
  },
  publicKey
);





        setSent(true);
        resetForm();
        setTimeout(() => setSent(false), 6000);
      } catch {
        setErrMsg('Something went wrong. Please try again.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section id="contact" className="py-28 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Get in touch</p>
          <h2 className="section-title">Let's <span className="text-gradient">Work Together</span></h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-accent to-purple mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 space-y-5"
          >
            <h3 className="text-xl font-bold text-textPrimary">Send a Message</h3>

            {sent && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                <FiCheckCircle /> Message sent! I'll reply soon.
              </div>
            )}
            {errMsg && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">{errMsg}</div>
            )}

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div>
                <input
                  id="name" name="name" type="text" placeholder="Your name"
                  className={inputClass(formik.touched.name, formik.errors.name)}
                  value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && <p className="text-red-400 text-xs mt-1">{formik.errors.name}</p>}
              </div>
              <div>
                <input
                  id="email" name="email" type="email" placeholder="Your email"
                  className={inputClass(formik.touched.email, formik.errors.email)}
                  value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && <p className="text-red-400 text-xs mt-1">{formik.errors.email}</p>}
              </div>
              <div>
                <textarea
                  id="message" name="message" placeholder="Tell me about your project..." rows={5}
                  className={`${inputClass(formik.touched.message, formik.errors.message)} resize-none`}
                  value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message && <p className="text-red-400 text-xs mt-1">{formik.errors.message}</p>}
              </div>
              <button
                type="submit" disabled={formik.isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent text-background font-bold text-sm hover:bg-cyan transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(56,189,248,0.25)]"
              >
                {formik.isSubmitting ? 'Sending...' : <><FiSend /> Send Message</>}
              </button>
            </form>
          </motion.div>

          {/* Right: Info + Hire Me */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
          {/* Hire Me highlight card */}
<div className="p-8 rounded-2xl bg-gradient-to-br from-accent/20 to-purple/20 border border-accent/30">

  <p className="text-textSecondary text-sm leading-relaxed mb-6">
    I'm actively looking for freelance and full-time opportunities. 
    Whether it's a startup project or an enterprise app — let's build something great together.
  </p>

  <a
    href="mailto:rabbydev25@gmail.com"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-background font-bold text-sm hover:bg-cyan transition-colors duration-200 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
  >
    <FiMail /> Contact Me Now
  </a>
</div>
            {/* Contact info */}
            <div className="glass-card p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent"><FiMail size={18} /></div>
                <div>
                  <p className="text-sm font-semibold text-textPrimary">Email</p>
                  <p className="text-sm text-textSecondary mt-0.5">rabbydev25@gmail.com</p>
                </div> 
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple/10 text-purple"><FiMapPin size={18} /></div>
                <div>
                  <p className="text-sm font-semibold text-textPrimary">Location</p>
                  <p className="text-sm text-textSecondary mt-0.5">Remote — Available Worldwide</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan/10 text-cyan"><FiCheckCircle size={18} /></div>
                <div>
                  <p className="text-sm font-semibold text-textPrimary">Availability</p>
                  <p className="text-sm text-textSecondary mt-0.5">Open to full-time </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              {[
                { icon: FiGithub, label: 'GitHub', href: 'https://github.com/rayhanislamrabby', color: '#F1F5F9' },
                { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rayhanislamrabby/', color: '#0A66C2' },
                { icon: FaWhatsapp, label: 'Whatsapp', href: 'https://wa.me/8801315110644', color: '#38BDF8' },
              ].map(({ icon: Icon, label, href, color }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border text-textSecondary hover:text-textPrimary hover:border-accent/30 transition-all duration-200 text-sm font-medium flex-1 justify-center">
                  <Icon style={{ color }} size={16} /> {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
