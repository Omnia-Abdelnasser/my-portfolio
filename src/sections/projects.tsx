import { Code, Database, ExternalLink, Github, Palette } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Restaurant Website",
      description:
        "Team project using HTML, CSS, JavaScript, Bootstrap, and free APIs for dynamic content.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "APIs"],
      icon: <Palette className="w-8 h-8" />,
      github: "https://github.com/your-username/restaurant",
      demo: "https://restaurant-demo.vercel.app",
    },
    {
      title: "E-commerce Website",
      description:
        "Responsive e-commerce app built with React, Zustand, TanStack Query, and optimized for SEO & performance.",
      tech: [
        "React",
        "TypeScript",
        "Zustand",
        "Tanstack Query",
        "shadcn/ui",
        "Responsive Design",
        "SEO",
        "Performance",
      ],
      icon: <Database className="w-8 h-8" />,
      github: "https://github.com/your-username/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
    },
    {
      title: "Web Portfolio",
      description:
        "Modern portfolio using React, Tailwind CSS, shadcn/ui, and Firestore for content management.",
      tech: ["React", "Tailwind", "shadcn/ui", "Firestore", "TanStack Query"],
      icon: <Code className="w-8 h-8" />,
      github: "https://github.com/your-username/portfolio",
      demo: "https://portfolio.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-20 dark:bg-gray-900 bg-gray-50 ">
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16
             bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent"
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl  shadow-md 
              hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-pink-400">
                  {project.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 ml-4">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((techItem, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full 
                    text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* Overlay Links */}
              <div
                className="absolute inset-0 flex items-center justify-center gap-6 
    bg-black/40 dark:bg-black/50 backdrop-blur-sm 
    opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-pink-400 bg-gray-100 dark:bg-gray-700 hover:bg-purple-500 hover:text-white transition"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-pink-400 bg-gray-100 dark:bg-gray-700 hover:bg-pink-500 hover:text-white transition"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
