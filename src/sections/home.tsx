"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Phone } from "lucide-react";
export default function Home() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center px-6 py-5 
     overflow-hidden dark:bg-gray-900 bg-gray-50"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="flex-1 mx-auto text-center dark:text-white "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            Omniya Abdelnasser
          </h1>
          <h2 className="text-xl mb-6">Front-End Developer</h2>
          <p className="leading-relaxed mb-6">
            {" "}
            I’m a passionate front-end developer who loves building modern,
            user-friendly web applications with{" "}
            <span className="font-medium">
              React, TypeScript, and Tailwind CSS
            </span>
            . Always learning, always curious, always improving 🚀{" "}
          </p>
          <div className="flex gap-6 items-center justify-center mb-8">
            <a
              href="https://github.com/Omnia-Abdelnasser"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-pink-500 hover:bg-pink-500 hover:text-white transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/omnia-abdelnasser"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-pink-500 hover:bg-pink-500 hover:text-white transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-pink-500 hover:bg-pink-500 hover:text-white transition"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>

          <div className="flex gap-4 items-center justify-center">
            <a href="#contact">
              <button className="rounded-md bg-pink-500 px-5 py-2 hover:bg-pink-600 transition text-white">
                Contact Me
              </button>
            </a>
            <a href="#projects">
              <button className="rounded-md border border-pink-500 px-5 py-2 hover:bg-pink-500 transition dark:text-gray-50 ">
                View Projects
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
