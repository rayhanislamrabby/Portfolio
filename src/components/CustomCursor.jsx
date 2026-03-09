import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: "transparent",
      border: "2px solid #22D3EE"
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1, // Removed scale change per instructions
      backgroundColor: "rgba(34, 211, 238, 0.2)",
      border: "2px solid #22D3EE"
    }
  };

  // Only render on desktop (or let CSS handle it, but we can also check window width here)
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null; /* Don't render on mobile */
  }

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-screen custom-cursor"
        variants={variants}
        animate={isHovered ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-neonPink rounded-full pointer-events-none z-[9999] custom-cursor"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 28, mass: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
