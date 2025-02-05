// components/Navigation.tsx
"use client";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects'];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50">
      <div className="py-4 px-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold">Adnan Khalil</h1>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
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

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`${
          isMobileMenuOpen ? 'flex' : 'hidden'
        } md:hidden flex-col items-center gap-4 py-4 px-6 border-b border-gray-800`}
      >
        {navItems.map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="w-full text-center py-2 hover:text-yellow-400 transition-colors"
            onClick={handleNavClick}
          >
            {item}
          </a>
        ))}
        <a 
          href="#contact" 
          className="w-full text-center px-6 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-colors"
          onClick={handleNavClick}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}