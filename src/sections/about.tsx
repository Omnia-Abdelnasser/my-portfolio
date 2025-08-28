

"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, GraduationCap, Code } from "lucide-react";


export default function About() {
  return (
    <section id="about" className="relative  bg-gray-50 dark:bg-gray-900 overflow-hidden py-10">
      {/* Background blobs */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 
          bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center leading-relaxed">
          {/* Left Text */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a Junior Front-End Developer with hands-on experience in
              building modern web applications. I'm passionate about creating
              clean, responsive interfaces that provide excellent user
              experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Currently pursuing my Bachelor's degree in Computer Science, I'm
              always eager to learn new technologies and improve my skills
              through real-world practice and challenging projects.
            </motion.p>

            {/* Personal Information */}
            <motion.ul
              className="space-y-4 mt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span>Qena , Egypt</span>
              </li>
              <li className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                <span>Bachelor's in Computer Science</span>
              </li>
              <li className="flex items-center gap-3">
                <Code className="w-5 h-5 text-indigo-400" />
                <span>React, TypeScript, Tailwind, Shadcn UI</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pink-500" />
                <span>omnia@example.com</span>
              </li>
            </motion.ul>
          </div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="relative w-80 h-80 justify-center flex rounded-2xl overflow-hidden shadow-2xl border-4 border-gradient-to-r from-purple-400 to-pink-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.img
                src="/my-img.jpg"
                alt="Omnia"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
