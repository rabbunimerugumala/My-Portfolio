// ✅ Generated following IndiBuddy project rules
import { useRef, useEffect } from "react";
import AnimatedSection from "../components/AnimatedSection";
import SkillTag from "../components/SkillTag";

const AboutPage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.25;
    let isScrolling = true;
    let animationId: number;

    const autoScroll = () => {
      if (!isScrolling) {
        animationId = requestAnimationFrame(autoScroll);
        return;
      }

      const maxScroll = container.scrollWidth - container.clientWidth;

      if (maxScroll > 0) {
        scrollAmount += scrollSpeed;

        // Reset when reaching the end for seamless loop
        if (scrollAmount >= maxScroll) {
          scrollAmount = 0;
          container.scrollLeft = 0;
        } else {
          container.scrollLeft = scrollAmount;
        }
      }

      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    const handleMouseEnter = () => {
      isScrolling = false;
    };
    const handleMouseLeave = () => {
      isScrolling = true;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchstart", handleMouseEnter); // Pause on touch
    container.addEventListener("touchend", handleMouseLeave);   // Resume on touch end

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleMouseEnter);
      container.removeEventListener("touchend", handleMouseLeave);
    };
  }, []);
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            About Me
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-400 rounded mb-12 mx-auto"></div>
        </AnimatedSection>

        <AnimatedSection delay={100} className="mb-12">
          <div className="prose prose-base sm:prose-lg dark:prose-invert mx-auto text-gray-700 dark:text-gray-300">
            <p className="mb-6 leading-relaxed text-justify sm:text-left">
              Hello! I'm <strong>Merugumala Rabbuni</strong>, an <strong>Electrical and Electronics Engineering (EEE)</strong> student with a passion for <strong>embedded systems</strong>, <strong>IoT technologies</strong>, and <strong>coding</strong>.
            </p>
            <p className="mb-6 leading-relaxed text-justify sm:text-left">
              My journey began with a fascination for how electronic devices work, which soon evolved into a deep interest in creating <strong>smart</strong>, <strong>connected</strong>, and <strong>intelligent systems</strong> that blend <strong>hardware</strong>, <strong>software</strong>, and <strong>innovation</strong>.
            </p>
            <p className="mb-6 leading-relaxed text-justify sm:text-left">
              I'm currently building <strong className="text-blue-600 dark:text-blue-400">RcubiX TECHNOLOGIES</strong>, where I’ve dedicated myself to developing <strong>innovative IoT products</strong> that bridge the gap between <strong>electronics</strong> and <strong>software</strong>. RcubiX is a <strong>growing initiative</strong> focused on delivering <strong>high-quality</strong>, <strong>custom engineering projects</strong> for <strong>Diploma</strong> and <strong>B.Tech</strong> students.
            </p>
            <p className="mb-6 leading-relaxed text-justify sm:text-left">
              Along with IoT and embedded development, I’m deeply into <strong>coding</strong> and <strong>full‑stack web development</strong> — I love building <strong>dynamic</strong>, <strong>responsive websites</strong> and <strong>digital platforms</strong> that combine creative design with powerful functionality. Whether it’s <strong>coding firmware</strong> for an IoT device or developing an entire <strong>web dashboard</strong> to control it — I love bringing <strong>both worlds together</strong>.
            </p>
            <p className="mb-6 leading-relaxed text-justify sm:text-left">
              I’m always eager to <strong>explore new technologies</strong>, <strong>learn continuously</strong>, and <strong>push the boundaries</strong> of what’s possible in <strong>IoT</strong>, <strong>embedded systems</strong>, <strong>automation</strong>, and <strong>web technologies</strong>.
            </p>
            <p className="leading-relaxed text-justify sm:text-left">
              If you're working on something exciting or looking to collaborate on <strong>tech‑driven projects</strong>, feel free to reach out — I’m always open to <strong>new ideas</strong>, <strong>teamwork</strong>, and <strong>innovation</strong>.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">
            Skills
          </h2>

          {/* Software Skills - Horizontal Scrolling Row with Icons */}
          <div className="mb-12 py-2">
            <h3 className="text-lg font-semibold mb-6 text-center text-gray-700 dark:text-gray-300">
              Software & Technologies
            </h3>
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto scrollbar-hide pb-6 px-2 whitespace-nowrap"
              >
                <div className="flex gap-4 min-w-max py-2">
                  {softwareSkills.map((skill, index) => (
                    <AnimatedSection
                      key={skill.name}
                      delay={300 + index * 30}
                      className="flex-shrink-0"
                    >
                      <div className="flex flex-col items-center p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-2xl group w-28 sm:w-36 shadow-md hover:scale-[1.05]">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 flex items-center justify-center bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-cyan-50 dark:group-hover:from-blue-900/20 dark:group-hover:to-cyan-900/20 transition-all duration-300">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                            }}
                          />
                        </div>
                        <span className="text-[12px] sm:text-sm font-bold text-gray-800 dark:text-gray-200 text-center leading-tight max-w-full truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
              {/* Left fade overlay - Light mode */}
              <div
                className="absolute top-0 left-0 bottom-0 w-16 sm:w-24 pointer-events-none z-10 dark:hidden"
                style={{
                  background:
                    "linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0.4) 70%, transparent 100%)",
                }}
              ></div>
              {/* Left fade overlay - Dark mode */}
              <div
                className="absolute top-0 left-0 bottom-0 w-16 sm:w-24 pointer-events-none z-10 hidden dark:block"
                style={{
                  background:
                    "linear-gradient(to right, rgb(17, 24, 39) 0%, rgba(17, 24, 39, 0.85) 40%, rgba(17, 24, 39, 0.5) 70%, transparent 100%)",
                }}
              ></div>
              {/* Right fade overlay - Light mode */}
              <div
                className="absolute top-0 right-0 bottom-0 w-16 sm:w-24 pointer-events-none z-10 dark:hidden"
                style={{
                  background:
                    "linear-gradient(to left, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0.4) 70%, transparent 100%)",
                }}
              ></div>
              {/* Right fade overlay - Dark mode */}
              <div
                className="absolute top-0 right-0 bottom-0 w-16 sm:w-24 pointer-events-none z-10 hidden dark:block"
                style={{
                  background:
                    "linear-gradient(to left, rgb(17, 24, 39) 0%, rgba(17, 24, 39, 0.85) 40%, rgba(17, 24, 39, 0.5) 70%, transparent 100%)",
                }}
              ></div>
            </div>
          </div>

          {/* Hardware & IoT Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-center text-gray-700 dark:text-gray-300">
              Hardware & IoT
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {hardwareSkills.map((skill, index) => (
                <AnimatedSection
                  key={skill}
                  delay={600 + index * 50}
                  className="inline-block"
                >
                  <SkillTag name={skill} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400} className="mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Education
            </h3>

            {/* Education Timeline */}
            <div className="relative pl-8 space-y-6 sm:space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200 dark:before:bg-gray-700">

              {/* Bachelor's */}
              <div className="relative">
                <div className="absolute -left-8 mt-1.5 w-6 h-6 rounded-full border-4 border-white dark:border-gray-800 bg-blue-600 z-10"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                    Bachelor of Technology
                  </h4>
                  <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-0.5 rounded-full mt-1.5 sm:mt-0 w-fit">
                    2024 - 2027 (Current)
                  </span>
                </div>
                <div className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-0.5">
                  Electrical & Electronics Engineering
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Seshadri Rao Gudlavalleru Engineering College
                </div>
              </div>

              {/* Diploma */}
              <div className="relative">
                <div className="absolute -left-8 mt-1.5 w-6 h-6 rounded-full border-4 border-white dark:border-gray-800 bg-teal-500 z-10"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                    Diploma in Engineering
                  </h4>
                  <span className="text-xs sm:text-sm font-medium text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-2.5 py-0.5 rounded-full mt-1.5 sm:mt-0 w-fit">
                    2021 - 2024
                  </span>
                </div>
                <div className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-0.5">
                  Electrical & Electronics Engineering
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  A.A.N.M. & V.V.R.S.R. Polytechnic
                </div>
              </div>

              {/* SSC */}
              <div className="relative">
                <div className="absolute -left-8 mt-1.5 w-6 h-6 rounded-full border-4 border-white dark:border-gray-800 bg-gray-400 dark:bg-gray-600 z-10"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                    Secondary School Certificate
                  </h4>
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-2.5 py-0.5 rounded-full mt-1.5 sm:mt-0 w-fit">
                    2021
                  </span>
                </div>
                <div className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-0.5">
                  Class 10th
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
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
