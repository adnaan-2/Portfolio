// components/HeroSection.tsx
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-8 order-1 md:order-2">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-yellow-400"> Software Engineer....</span>
            <br />
            <br />
            Transforming Ideas Into
            <span className="text-yellow-400"> Digital Reality</span>
            <br />
          </h1>

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

        <div className="md:w-1/2 relative group order-2 md:order-1">
          <div className="relative before:absolute before:-inset-2 before:border-2 before:border-yellow-400 before:rounded-xl before:transition-all before:duration-300 hover:before:-inset-4">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/me.png`}
              alt="Profile"
              width={600}
              height={600}
              className="rounded-xl w-full h-auto relative z-10"
              priority
            />
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-yellow-400/20 rounded-xl -z-10 group-hover:w-36 group-hover:h-36 transition-all" />
        </div>
      </div>
    </section>
  );
}