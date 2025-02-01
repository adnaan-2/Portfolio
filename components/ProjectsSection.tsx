"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
    
  {
    title: "Online Shopping",
    description: "Modern e-commerce solution with Next.js and Stripe integration",
    tech: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    image: "/shop.jpg",
    link: "https://github.com/adnaan-2/react-shopping-site"
  },
  {
    title: "Jarvis AI Assistant",
    description: "AI that will assist you",
    tech: ["React Native", "Node.js", "MongoDB", "OpenAI"],
    image: "/jarvis.jpg",
    link: "https://github.com/adnaan-2/Jarvis-AI-bot-"
},
  {
    title: "Employee Activity Tracker Dashboard",
    description: "Analytics dashboard for Employee Tracking management",
    tech: ["React", "Python", "MongoDB", "GraphQL"],
    image: "/activity.jpg",
    link: "https://github.com/adnaan-2/Employees-Activity-Tracker"
  },
  {
    title: "Messeging App",
    description: "Secure Messeging App",
    tech: ["React Native", "Node.js", "MongoDB", "Socket"],
    image: "/messege.jpg",
    link: "https://github.com/adnaan-2/real-time-chat-application"
  },
  {
    title: "Object Tracker",
    description: "Precise and accurate tracking app",
    tech: ["React Native", "Node.js", "MongoDB", "Socket"],
    image: "/tracker.jpg",
    link: "https://github.com/adnaan-2/real-time-tracking-backend-project"
  },

];

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);

  const handleNavigation = (direction: "prev" | "next") => {
    setCurrentProject(prev => {
      if (direction === "prev") return prev === 0 ? projects.length - 1 : prev - 1;
      return prev === projects.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of my latest web development projects and case studies
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Projects Container */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentProject * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                  <div className="relative h-64 md:h-96">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain" // Changed from object-cover to object-contain
                      style={{ objectFit: "contain" }} // Added explicit style
                    />
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-500 transition-colors"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full px-4 flex justify-between">
            <button
              onClick={() => handleNavigation("prev")}
              className="p-2 bg-gray-700 rounded-full hover:bg-yellow-400 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleNavigation("next")}
              className="p-2 bg-gray-700 rounded-full hover:bg-yellow-400 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Indicators */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full ${
                  currentProject === index ? "bg-yellow-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}