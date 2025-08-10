import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Github, ExternalLink } from "lucide-react";
import { Code, Server, Brain, BookOpen, Cpu, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: "nlp-classification",
      title: "NLP Text Classification System",
      description:
        "Built a machine learning system for automatic text classification using NLP techniques. Achieved 94% accuracy on multi-class classification.",
      technologies: ["Python", "NLP", "TensorFlow", "Scikit-learn"],
      github: "https://github.com/yourusername/nlp-classification",
      demo: "https://your-demo-url.com",
    },
    {
      id: "java-microservices",
      title: "Java Microservices Platform",
      description:
        "Designed and implemented a scalable microservices architecture for e-commerce platform handling 100k+ daily transactions.",
      technologies: ["Java", "Spring Boot", "Docker", "Kubernetes"],
      github: "https://github.com/yourusername/java-microservices",
      demo: "https://your-demo-url.com",
    },
    {
      id: "ai-chatbot",
      title: "AI-Powered Chatbot",
      description:
        "Developed an intelligent chatbot using NLP and deep learning for customer support automation.",
      technologies: ["Python", "NLP", "PyTorch", "FastAPI"],
      github: "https://github.com/yourusername/ai-chatbot",
      demo: "https://your-demo-url.com",
    },
  ];

  return (
    <>
      <Navbar />
      {/* Projects Section */}
      <section
        id="projects"
        className="section-padding bg-gray-50 dark:bg-gray-900"
      >
        <div className="container-custom">
          <h2 className="text-center text-gray-900 dark:text-white mb-12 animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="card-dark hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
