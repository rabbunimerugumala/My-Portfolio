import AnimatedSection from "../components/AnimatedSection";
import SkillTag from "../components/SkillTag";

const AboutPage = () => {
  const skills = [
    "Python",
    "Flask Framework",
    "API Development",
    "Webscraping",
    "Arduino",
    "NodeMCU",
    "Blynk",
    "Web Development",
    "Microcontrollers",
    "IoT",
    "C/C++ for Microcontrollers",
    "Prototyping",
    "Enterpreneurship",
    "Electronics",
    "Automation",
    "Real World Projects",
    "Engineering Projects",
    "Documentation",
    "Keyboardist🎹",
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
          <div className="prose prose-lg dark:prose-invert mx-auto text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              Hello! I'm <strong>Merugumala Rabbuni</strong>, an Electrical and
              Electronics Engineering student with a passion for embedded
              systems and IoT technologies. My journey began with a fascination
              for how electronic devices work, which evolved into a deep
              interest in creating smart, connected solutions.
            </p>
            <p className="mb-4">
              I’m currently building <strong>NEXTSTEP TECHNOLOGIES</strong>, I've
              dedicated myself to developing innovative IoT products that bridge
              the gap between hardware and software. A growing initiative focused on delivering high-quality, custom engineering projects for Diploma and B.Tech students. Through this platform, I aim to make advanced technologies more accessible while helping students gain hands-on experience through practical, real-world projects.
            </p>
            <p>
             I have a strong interest in exploring new technologies, learning new things, and staying updated in the fields of IoT, embedded systems, and automation. If you're working on something exciting or looking to collaborate on innovative tech projects, feel free to reach out—I'm always open to new ideas and opportunities.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
            Skills & Expertise
          </h2>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <AnimatedSection
                key={skill}
                delay={300 + index * 50}
                className="inline-block"
              >
                <SkillTag name={skill} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400} className="mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Education
            </h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                <p className="font-medium text-gray-900 dark:text-white">
                  Bachelor of Technology - Electrical & Electronics Engineering
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                Seshadri Rao Gudlavalleru Engineering College, 2024 - 2027
                </p>
              </div>
              <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                <p className="font-medium text-gray-900 dark:text-white">
                  Diploma - Electrical & Electronics Engineering
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                A.A.N.M. & V.V.R.S.R. POLYTECHNIC, GUDLAVALLERU, 2021 - 2024
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;
