import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center gap-6 mb-8">
          {[Github, Linkedin, Mail].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p className="text-gray-400">
          © 2024 Adnan Khalil. All rights reserved.
        </p>
      </div>
    </footer>
  );
}