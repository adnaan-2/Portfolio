import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center gap-6 mb-8">
        <div className="flex justify-center gap-8 ">
            {[
              { Icon: Github, href: "https://github.com/adnaan-2" },
              {Icon: Linkedin,href: "https://www.linkedin.com/in/adnankhalil099/",},
              { Icon: Mail, href: "mailto:adnanmughal0342@gmail.com" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="p-3 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-black transition-all"
              >
                <link.Icon className="w-8 h-8" />
              </a>
            ))}
        </div>
        </div>
        <p className="text-gray-400">
          Adnan Khalil. All rights reserved. Updated on 2/2/2025
        </p>
      </div>
      
    </footer>
  );
}