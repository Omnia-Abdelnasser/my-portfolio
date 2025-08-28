"use client";
import { motion } from "framer-motion";
import { Code, Database, Zap } from "lucide-react";
const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skills = [
    {
      category: "Languages",
      items: ["HTML", "CSS", "JavaScript", "TypeScript"],
      icon: <Code className="w-8 h-8" />,
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "React",
        "Next.js",
        "Bootstrap",
        "Tailwind CSS",
        "shadcn/ui",
        "TanStack Query",
      ],
      icon: <Zap className="w-8 h-8" />,
    },
    {
      category: "Tools & Technologies",
      items: [
        "Git & GitHub",
        "Visual Studio",
        "Firebase",
        "Firestore",
        "Responsive Design",
      ],
      icon: <Database className="w-8 h-8" />,
    },
  ];

  return (
    <section id="skills" className="py-20 dark:bg-gray-900 bg-gray-50  ">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-16
             bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent"
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 ">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl backdrop-blur-sm border shadow-md hover:shadow-2xl
                 dark:border-white/10 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4 ">
                  <div className="text-pink-400">{skillGroup.icon}</div>
                  <h3 className="text-xl font-semibold text-pink-400">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-1 dark:bg-white/10 bg-gray-200 rounded-full text-sm dark:text-gray-50 inline-block mr-2 mb-2"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
