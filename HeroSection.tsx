import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroVideo from "./hero.mp4";

const navItems = [
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#work" },
  { name: "SKILLS", href: "#skills" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const HeroSection: React.FC = () => {
  const [cursor, setCursor] = useState({
    x: -100,
    y: -100,
  });

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursor({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* VIDEO BACKGROUND */}

      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support video playback.
        </video>

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* CUSTOM CURSOR */}

      <motion.div
        className="fixed left-0 top-0 z-[100] pointer-events-none rounded-full border border-blue-400/50"
        animate={{
          x: cursor.x - (hovered ? 24 : 5),
          y: cursor.y - (hovered ? 24 : 5),
          width: hovered ? 48 : 10,
          height: hovered ? 48 : 10,
          backgroundColor: hovered
            ? "rgba(59,130,246,0.15)"
            : "rgba(255,255,255,0.9)",
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 350,
          mass: 0.5,
        }}
      />

      {/* MAIN CONTENT */}

      <div className="relative z-10 flex min-h-screen flex-col px-6 py-6 sm:px-10 lg:px-16">

        {/* NAVIGATION */}

        <header className="flex w-full items-center justify-between">

          <a
            href="#home"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:text-blue-400"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            SURESH G
          </a>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative py-2 text-[10px] uppercase tracking-[0.25em] text-gray-200 transition-colors duration-300 hover:text-white"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {item.name}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="ml-auto flex items-center gap-2 border border-gray-500 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-gray-100 backdrop-blur-sm transition-all duration-300 hover:border-blue-500"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <span>LET'S TALK</span>
            <span>↗</span>
          </a>

        </header>

        {/* HERO CONTENT */}

        <div className="my-auto flex flex-1 items-center py-16">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-20 w-full max-w-5xl"
          >

            <motion.p
              variants={fadeUpVariants}
              className="mb-6 text-xs uppercase tracking-[0.4em] text-blue-400"
            >
              MCA STUDENT • DEVELOPER
            </motion.p>

            {/* NAME */}

            <motion.h1
              variants={fadeUpVariants}
              className="flex items-baseline whitespace-nowrap text-[clamp(2.8rem,10vw,7rem)] font-bold uppercase leading-none tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                SURESH
              </span>

              <span className="mx-2 sm:mx-4 lg:mx-5">{" "}</span>

              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                G
              </span>
            </motion.h1>

            {/* SKILLS */}

            <motion.div
              variants={fadeUpVariants}
              className="mt-7"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-200 sm:text-xs">
                PYTHON
                <span className="mx-2 text-blue-500">•</span>
                DATA ANALYTICS
                <span className="mx-2 text-blue-500">•</span>
                MACHINE LEARNING
              </p>
            </motion.div>

            {/* DESCRIPTION */}

            <motion.p
              variants={fadeUpVariants}
              className="mt-6 max-w-xl text-sm leading-8 tracking-wide text-gray-200 md:text-base"
            >
              I build practical solutions using Python,
              data analytics and machine learning to solve
              real-world problems.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              variants={fadeUpVariants}
              className="mt-8 flex flex-wrap gap-4"
            >

              <motion.a
                href="#work"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 border border-blue-500 bg-blue-600/30 px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] backdrop-blur-sm transition-all duration-300 hover:bg-blue-600/50"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <span>VIEW MY WORK</span>
                <span>↗</span>
              </motion.a>

              <motion.a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 border border-gray-500 bg-black/30 px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] text-gray-100 backdrop-blur-sm transition-all duration-300 hover:border-blue-500"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <span>RESUME</span>
                <span>↓</span>
              </motion.a>

            </motion.div>

          </motion.div>

        </div>

        {/* YOUR PHOTO */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            x: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute bottom-24 right-8 hidden lg:block"
        >

          <div className="relative">

            <div className="absolute inset-0 scale-110 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative h-60 w-60 overflow-hidden rounded-full border border-blue-400/50 bg-black/40 shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Suresh G"
                className="block h-full w-full object-cover"
              />
            </div>

            <div className="pointer-events-none absolute -inset-3 rounded-full border border-blue-500/20" />

          </div>

          <p className="mt-5 text-center text-[9px] uppercase tracking-[0.3em] text-gray-300">
            PYTHON • DATA • AI
          </p>

        </motion.div>

        {/* BOTTOM */}

        <div className="flex items-center justify-between border-t border-white/20 pt-5 text-[8px] uppercase tracking-[0.25em] text-gray-300">
          <span>COIMBATORE • INDIA</span>

          <span className="hidden sm:block">
            SCROLL TO EXPLORE ↓
          </span>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
