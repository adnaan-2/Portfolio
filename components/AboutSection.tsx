export default function AboutSection() {
    return (
      <section id="about" className="py-20 bg-gray-900 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                Adnan Khalil <br />Software Engineer | COMSATS University Islamabad <br /><br />
                Graduate As a full-stack developer with 3+ years of professional
                experience, I specialize in delivering end-to-end technical
                solutions across diverse technology stacks. <br /><br />
                While maintaining cutting-edge industry knowledge with 2 years of successful freelance experience, I demonstrate proven
                capability to independently manage development lifecycles - from
                initial architecture to production deployment.
              </p>
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">20+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">80%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React",
                  "Node.js",
                  "TypeScript",
                  "MongoDB",
                  "Express",
                  "NextJs",
                  "Sockets",
                  "SQL",
                  "Figma",
                  "AWS",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 bg-gray-800 p-3 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }