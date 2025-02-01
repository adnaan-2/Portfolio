"use client";
import { useState, useEffect } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50 py-4 px-6 flex justify-between items-center border-b border-gray-800">
      <h1 className="text-4xl font-bold">Adnan Khalil</h1>
      
      <div className="hidden md:flex items-center gap-8">
        {['Home', 'About', 'Skills', 'Projects'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="hover:text-yellow-400 transition-colors"
          >
            {item}
          </a>
        ))}
        <a 
          href="#contact" 
          className="ml-4 px-6 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-colors"
        >
          Contact
        </a>
      </div>

      <button className="md:hidden p-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}