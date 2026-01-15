// ✅ Generated following IndiBuddy project rules
import AnimatedSection from "../components/AnimatedSection";

const AboutPage = () => {
  // Software-related skills with their icon paths
  const softwareSkills = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Flask",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Arduino",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
  ];

  const hardwareSkills = [
    "Arduino",
    "NodeMCU",
    "Blynk",
    "Microcontrollers",
    "IoT",
    "Prototyping",
    "Electronics",
    "Automation",
    "Engineering Projects",
    "Documentation",
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            About Me
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-violet-500 rounded mb-12 mx-auto"></div>
        </AnimatedSection>

        <AnimatedSection delay={100} className="mb-12">
          <div className="prose prose-base sm:prose-lg max-w-none mx-auto text-gray-300">
            <p className="mb-6 leading-relaxed text-justify sm:text-left">
              Hello! I'm <strong>Merugumala Rabbuni</strong>, an <strong>Electrical and Electronics Engineering (EEE)</strong> student with a passion for <strong>embedded systems</strong>, <strong>IoT technologies</strong>, and <strong>coding</strong>.
            </p>
            <p className="mb-6 leading-relaxed text-justify sm:text-left">
              My journey began with a fascination for how electronic devices work, which soon evolved into a deep interest in creating <strong>smart</strong>, <strong>connected</strong>, and <strong>intelligent systems</strong> that blend <strong>hardware</strong>, <strong>software</strong>, and <strong>innovation</strong>.
            </p>
            <p className="mb-6 leading-relaxed text-justify sm:text-left">
              I'm currently building <strong className="text-blue-400">RcubiX TECHNOLOGIES</strong>, where I’ve dedicated myself to developing <strong>innovative IoT products</strong> that bridge the gap between <strong>electronics</strong> and <strong>software</strong>. RcubiX is a <strong>growing initiative</strong> focused on delivering <strong>high-quality</strong>, <strong>custom engineering projects</strong> for <strong>Diploma</strong> and <strong>B.Tech</strong> students.
            </p>
            <p className="mb-6 leading-relaxed text-justify sm:text-left">
              Along with IoT and embedded development, I’m deeply into <strong>coding</strong> and <strong>full‑stack web development</strong>  I love building <strong>dynamic</strong>, <strong>responsive websites</strong> and <strong>digital platforms</strong> that combine creative design with powerful functionality. Whether it’s <strong>coding firmware</strong> for an IoT device or developing an entire <strong>web dashboard</strong> to control it  I love bringing <strong>both worlds together</strong>.
            </p>
            <p className="mb-6 leading-relaxed text-justify sm:text-left">
              I’m always eager to <strong>explore new technologies</strong>, <strong>learn continuously</strong>, and <strong>push the boundaries</strong> of what’s possible in <strong>IoT</strong>, <strong>embedded systems</strong>, <strong>automation</strong>, and <strong>web technologies</strong>.
            </p>
            <p className="leading-relaxed text-justify sm:text-left">
              If you're working on something exciting or looking to collaborate on <strong>tech‑driven projects</strong>, feel free to reach out  I’m always open to <strong>new ideas</strong>, <strong>teamwork</strong>, and <strong>innovation</strong>.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            Skills
          </h2>

          {/* Software Skills - Responsive Premium Grid */}
          <div className="mb-16">
            <h3 className="text-lg font-semibold mb-8 text-center text-gray-300 uppercase tracking-widest text-xs">
              Software & Technologies
            </h3>

            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-6">
              {softwareSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="glass-habit relative flex flex-col items-center justify-center p-3 sm:p-6 rounded-2xl border border-white/5 group-hover:border-white/20 transition-all duration-300 h-full hover:-translate-y-2">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 mb-2 sm:mb-4 relative z-10 transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                    <span className="text-[10px] sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300 text-center truncate w-full">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hardware & IoT Skills - Tech Circuit Style */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-8 text-center text-gray-300 uppercase tracking-widest text-xs">
              Hardware & IoT
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {hardwareSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="relative group cursor-default"
                >
                  {/* Circuit connection lines decoration */}
                  <div className="absolute -left-3 top-1/2 w-3 h-[1px] bg-white/10 group-hover:bg-blue-500/50 transition-colors"></div>
                  <div className="absolute -right-3 top-1/2 w-3 h-[1px] bg-white/10 group-hover:bg-blue-500/50 transition-colors"></div>

                  <div className="relative px-6 py-2.5 bg-[#05060e] border border-white/10 rounded-lg group-hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex items-center space-x-2">
                      {/* LED indicator */}
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-blue-400 group-hover:shadow-[0_0_8px_rgba(96,165,250,0.8)] transition-all duration-300"></div>
                      <span className="text-sm font-mono text-gray-400 group-hover:text-blue-200 transition-colors tracking-wide">
                        {skill}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400} className="mt-16">
          <div className="glass-habit p-4 sm:p-6 border border-white/5">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
              Education
            </h3>

            {/* Education Timeline */}
            <div className="relative pl-8 space-y-6 sm:space-y-8 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">

              {/* Bachelor's */}
              <div className="relative">
                <div className="absolute -left-[26px] mt-1.5 w-5 h-5 rounded-full border-[3px] border-[#02030a] bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] z-10"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Bachelor of Technology
                  </h4>
                  <span className="text-xs sm:text-sm font-medium text-blue-300 bg-blue-500/10 px-2.5 py-0.5 rounded-full mt-1.5 sm:mt-0 w-fit border border-blue-500/20">
                    2024 - 2027 (Current)
                  </span>
                </div>
                <div className="text-sm sm:text-base font-medium text-gray-300 mb-0.5">
                  Electrical & Electronics Engineering
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  Seshadri Rao Gudlavalleru Engineering College
                </div>
              </div>

              {/* Diploma */}
              <div className="relative">
                <div className="absolute -left-[26px] mt-1.5 w-5 h-5 rounded-full border-[3px] border-[#02030a] bg-violet-600 shadow-[0_0_12px_rgba(139,92,246,0.6)] z-10"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Diploma in Engineering
                  </h4>
                  <span className="text-xs sm:text-sm font-medium text-violet-300 bg-violet-500/10 px-2.5 py-0.5 rounded-full mt-1.5 sm:mt-0 w-fit border border-violet-500/20">
                    2021 - 2024
                  </span>
                </div>
                <div className="text-sm sm:text-base font-medium text-gray-300 mb-0.5">
                  Electrical & Electronics Engineering
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  A.A.N.M. & V.V.R.S.R. Polytechnic
                </div>
              </div>

              {/* SSC */}
              <div className="relative">
                <div className="absolute -left-[26px] mt-1.5 w-5 h-5 rounded-full border-[3px] border-[#02030a] bg-gray-600 shadow-[0_0_12px_rgba(75,85,99,0.6)] z-10"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Secondary School Certificate
                  </h4>
                  <span className="text-xs sm:text-sm font-medium text-gray-400 bg-gray-500/10 px-2.5 py-0.5 rounded-full mt-1.5 sm:mt-0 w-fit border border-gray-500/20">
                    2021
                  </span>
                </div>
                <div className="text-sm sm:text-base font-medium text-gray-300 mb-0.5">
                  Class 10th
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  ZPH School, Tadanki
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;
