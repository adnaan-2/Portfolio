"use client";
import { Code, Server, Database, Layout, Globe, Smartphone } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">My Expertise</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
              { 
                icon: Code, 
                title: "Frontend Development",
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
              },
              { 
                icon: Server, 
                title: "Backend Development",
                skills: ["Node.js", "Express", "GraphQL", "REST APIs"]
              },
              { 
                icon: Database, 
                title: "Database Management",
                skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"]
              },
              { 
                icon: Layout, 
                title: "UI/UX Design",
                skills: ["Figma", "Adobe XD", "Prototyping", "Wireframing"]
              },
              { 
                icon: Globe, 
                title: "DevOps",
                skills: ["AWS", "Docker", "CI/CD", "Kubernetes"]
              },
              { 
                icon: Smartphone, 
                title: "Mobile Development",
                skills: ["React Native", "Flutter", "Swift", "Kotlin"]
              },
            ].map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <skill.icon className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <ul className="space-y-3">
                  {skill.skills.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}