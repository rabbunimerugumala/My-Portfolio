import AnimatedSection from "../components/AnimatedSection";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Apartment Power Alert System",
      description:
        "A Smart System to Detect Power Availability and Alert Users to Turn Off or Turn On The Backup Generators — Save Fuel, Stay Notified..",
      images: [
        { url: "images/APAS2.jpg", alt: "Apartment Power Alert System" },
        { url: "images/APAS1.jpg", alt: "Apartment Power Alert System" },
        { url: "images/APAS3.jpg", alt: "Apartment Power Alert System" },
      ],
      githubUrl:
        "https://github.com/rabbunimerugumala/Apartment-Power-Alert-System",
      technologies: [
        "Arduino",
        "Voltage Sensor",
        "Current Sensor",
        "LCD",
        "Buzzer",
      ],
      linkNote: "My own project",
    },
    {
      title: "AgroSense: Smart IoT-Based Irrigation & Monitoring System",
      description:
        "AgroSense is a smart IoT-based irrigation system that monitors soil moisture in real-time and automates watering only when needed. It reduces water wastage and allows remote monitoring via a mobile app.",
      images: [
        { url: "images/agro1.jpg", alt: "AgroSense" },
        { url: "images/agro2.jpg", alt: "AgroSense" },
        { url: "images/agro3.jpg", alt: "AgroSense" },
      ],
      githubUrl: "https://github.com/rabbunimerugumala",
      technologies: ["NodeMCU", "Arduino", "Blynk App"],
      linkNote: "Under NextStep Technologies",
    },
    {
      title: "Automatic Water Level Controller",
      description:
        "The Automatic Water Level Controller monitors tank water levels and automatically controls the motor to prevent overflow or dry run. It ensures efficient water usage, protects the pump, and eliminates the need for manual supervision.",
      images: [
        { url: "images/AWL1.jpg", alt: "Automatic Water Level Controller" },
        { url: "images/AWL2.jpg", alt: "Automatic Water Level Controller" },
        { url: "images/AWL3.jpg", alt: "Automatic Water Level Controller" },
      ],
      githubUrl: "https://github.com/rabbunimerugumala",
      technologies: ["Arduino", "Buzzer", "LCD", "Relay Modules", "Switchs"],
      linkNote: "Under NextStep Technologies",
    },
    {
      title: "Automatic Railway Gate Control System (Dual Gate)",
      description:
        "An automated system that controls dual railway gates using sensors to detect train movement.Enhances safety by minimizing human error and ensuring synchronized gate operation.",
      images: [
        {
          url: "images/ARG1.jpg",
          alt: "Automatic Railway Gate Control System",
        },
        {
          url: "images/ARG2.jpg",
          alt: "Automatic Railway Gate Control System",
        },
        {
          url: "images/ARG3.jpg",
          alt: "Automatic Railway Gate Control System",
        },
      ],
      githubUrl: "https://github.com/rabbunimerugumala",
      technologies: ["Arduino", "Ultra Sonic Sensor", "LCD", "Servo Motors"],
      linkNote: "Under NextStep Technologies",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Projects
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-400 rounded mb-12 mx-auto"></div>
        </AnimatedSection>

        {/* NEXTSTEP TECHNOLOGIES Card - Custom Design Like Visiting Card */}
        <AnimatedSection delay={100} className="mb-12 px-4 sm:px-0">
          <div
            className="
              relative p-6 sm:p-8 text-white overflow-hidden
              border border-white border-opacity-20
              shadow-lg
              transition-transform duration-300 ease-in-out
              hover:scale-[1.03] hover:shadow-2xl
              max-w-md sm:max-w-lg md:max-w-xl
              mx-auto
              bg-white bg-opacity-10
              backdrop-filter backdrop-blur-md
            "
            style={{
              borderImageSlice: 1,
              borderImageSource:
                "linear-gradient(270deg, #0bc5ea, #2c7a7b, #f6ad55, #0bc5ea)",
              animation: "borderShift 8s linear infinite",
            }}
          >
            <div className="relative flex flex-col items-center space-y-3 z-10">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-center drop-shadow-md"
                style={{
                  background:
                    "linear-gradient(90deg,rgb(12, 188, 247),rgb(213, 226, 255))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                NEXTSTEP TECHNOLOGIES
              </h2>

              <p className="italic text-xs sm:text-sm md:text-base text-blue-200 drop-shadow-sm text-center">
                "Innovate, Build, Succeed"
              </p>

              <div className="text-base sm:text-lg md:text-xl text-orange-400 font-semibold space-y-1 text-center">
                <p>Engineering Projects</p>
                <p>Diploma Projects</p>
              </div>

              <p className="text-yellow-100 font-medium text-xs sm:text-sm md:text-base max-w-xs sm:max-w-md mx-auto px-2 text-center">
                Projects available for CSE, ECE, EEE, and all Engineering & Diploma branches.
              </p>
            </div>

            {/* Animated glowing blobs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-600/20 blur-3xl rounded-full pointer-events-none animate-glowBlob1"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full pointer-events-none animate-glowBlob2"></div>
          </div>

          <style jsx>{`
            @keyframes borderShift {
              0% {
                border-image-source: linear-gradient(
                  270deg,
                  #0bc5ea,
                  #2c7a7b,
                  rgb(231, 0, 0),
                  #0bc5ea
                );
              }
              50% {
                border-image-source: linear-gradient(
                  450deg,
                  #f6ad55,
                  #0bc5ea,
                  #2c7a7b,
                  #f6ad55
                );
              }
              100% {
                border-image-source: linear-gradient(
                  270deg,
                  #0bc5ea,
                  #2c7a7b,
                  rgb(0, 250, 12),
                  #0bc5ea
                );
              }
            }
            @keyframes glowBlob1 {
              0%,
              100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.2;
              }
              50% {
                transform: translate(10px, 10px) scale(1.1);
                opacity: 0.4;
              }
            }
            @keyframes glowBlob2 {
              0%,
              100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.15;
              }
              50% {
                transform: translate(-10px, 5px) scale(1.05);
                opacity: 0.35;
              }
            }
            .animate-glowBlob1 {
              animation: glowBlob1 6s ease-in-out infinite;
            }
            .animate-glowBlob2 {
              animation: glowBlob2 7s ease-in-out infinite;
            }
          `}</style>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={200 + index * 100}>
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
