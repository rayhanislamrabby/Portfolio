import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const queryClient = new QueryClient();

const Home = () => (
  <div className="flex flex-col w-full">
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
);

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="relative w-full min-h-screen bg-background text-textPrimary">

          {/* Scroll progress line */}
          <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />

          {/* Ambient background blobs */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple/10 blur-[140px] animate-blob" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] animate-blob" style={{ animationDelay: '3s' }} />
            <div className="absolute top-[50%] left-[40%] w-[300px] h-[300px] rounded-full bg-cyan/8 blur-[100px] animate-blob" style={{ animationDelay: '5s' }} />
          </div>

          <Navbar />

          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
