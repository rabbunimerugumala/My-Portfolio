import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ChevronRight, FileText } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  const profileImage = "/images/Photo.jpg"; // Replace with your image path
  const [displayText, setDisplayText] = useState("");
  const fullText =
    "BTech EEE | Software Development & IoT Enthusiast | Building Smart Solutions at RcubiX TECHNOLOGIES.";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blueIndex, setBlueIndex] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);

  // Typing animation
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (!typingComplete) {
      setTypingComplete(true);
    }
  }, [currentIndex, fullText, typingComplete]);

  // Blue coloring animation after typing is complete
  useEffect(() => {
    if (typingComplete) {
      const companyName = "RcubiX TECHNOLOGIES";
      if (blueIndex < companyName.length) {
        const timeout = setTimeout(() => {
          setBlueIndex(blueIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      }
    }
  }, [typingComplete, blueIndex]);

  // Function to render text with progressive blue styling after typing
  const renderStyledText = (text: string) => {
    const companyName = "RcubiX TECHNOLOGIES";
    const companyStartIndex = fullText.indexOf(companyName);
    const companyEndIndex = companyStartIndex + companyName.length;

    // If typing not complete, return normal text
    if (!typingComplete) {
      return text;
    }

    const beforeCompany = text.slice(0, companyStartIndex);
    const afterCompany = text.slice(companyEndIndex);

    // Progressive blue styling
    const blueText = companyName.slice(0, blueIndex);
    const normalText = companyName.slice(blueIndex);

    return (
      <>
        {beforeCompany}
        <span className="font-bold text-blue-600 dark:text-blue-400">
          {blueText}
        </span>
        <span className="font-bold">{normalText}</span>
        {afterCompany}
      </>
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Particles - Enhanced for light mode */}
        <div
          className="absolute w-2.5 h-2.5 bg-blue-500/80 dark:bg-blue-400/30 rounded-full animate-float-1 shadow-lg shadow-blue-500/50"
          style={{ top: "20%", left: "10%" }}
        ></div>
        <div
          className="absolute w-3.5 h-3.5 bg-teal-500/70 dark:bg-teal-400/20 rounded-full animate-float-2 shadow-lg shadow-teal-500/40"
          style={{ top: "60%", left: "15%" }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-green-500/85 dark:bg-green-400/40 rounded-full animate-float-3 shadow-lg shadow-green-500/50"
          style={{ top: "40%", left: "85%" }}
        ></div>
        <div
          className="absolute w-3 h-3 bg-blue-600/75 dark:bg-blue-500/25 rounded-full animate-float-4 shadow-lg shadow-blue-600/40"
          style={{ top: "70%", left: "80%" }}
        ></div>
        <div
          className="absolute w-2.5 h-2.5 bg-cyan-500/80 dark:bg-cyan-400/30 rounded-full animate-float-5 shadow-lg shadow-cyan-500/50"
          style={{ top: "30%", left: "70%" }}
        ></div>
        <div
          className="absolute w-4 h-4 bg-teal-600/65 dark:bg-teal-300/15 rounded-full animate-float-6 shadow-lg shadow-teal-600/40"
          style={{ top: "80%", left: "25%" }}
        ></div>

        {/* Geometric Shapes - More prominent in light mode */}
        <div
          className="absolute w-10 h-10 border-2 border-blue-500/60 dark:border-blue-400/20 rotate-45 animate-rotate-slow shadow-blue-500/30"
          style={{ top: "15%", right: "20%" }}
        ></div>
        <div
          className="absolute w-8 h-8 border-2 border-teal-500/65 dark:border-teal-400/25 animate-rotate-reverse shadow-teal-500/30"
          style={{ top: "75%", right: "15%" }}
        ></div>
        <div
          className="absolute w-12 h-12 border-2 border-green-500/55 dark:border-green-400/15 rounded-full animate-pulse shadow-green-500/30"
          style={{ top: "25%", left: "5%" }}
        ></div>
        <div
          className="absolute w-6 h-6 border border-purple-500/50 dark:border-purple-400/20 rotate-45 animate-rotate-slow"
          style={{ top: "35%", left: "90%" }}
        ></div>

        {/* Gradient Orbs - More visible in light mode */}
        <div
          className="absolute w-40 h-40 bg-gradient-to-br from-blue-400/30 via-blue-500/25 to-cyan-400/20 dark:from-blue-400/10 dark:via-blue-400/8 dark:to-cyan-400/10 rounded-full blur-3xl animate-float-slow shadow-xl"
          style={{ top: "5%", right: "10%" }}
        ></div>
        <div
          className="absolute w-32 h-32 bg-gradient-to-tr from-green-400/35 via-teal-400/30 to-cyan-400/25 dark:from-green-400/10 dark:via-teal-400/8 dark:to-cyan-400/10 rounded-full blur-3xl animate-float-slow-reverse shadow-xl"
          style={{ bottom: "15%", left: "5%" }}
        ></div>
        <div
          className="absolute w-28 h-28 bg-gradient-to-r from-purple-400/25 via-pink-400/20 to-blue-400/15 dark:from-purple-400/8 dark:via-pink-400/8 dark:to-blue-400/8 rounded-full blur-3xl animate-float-slow"
          style={{ top: "50%", left: "50%" }}
        ></div>

        {/* Tech Circuit Lines - Enhanced visibility */}
        <div
          className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-500/60 to-transparent dark:via-blue-400/20 animate-pulse shadow-lg shadow-blue-500/40"
          style={{ top: "45%", left: "25%" }}
        ></div>
        <div
          className="absolute w-20 h-px bg-gradient-to-r from-transparent via-teal-500/60 to-transparent dark:via-teal-400/20 animate-pulse shadow-lg shadow-teal-500/40"
          style={{ top: "55%", right: "25%" }}
        ></div>
        <div
          className="absolute w-px h-16 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent dark:via-cyan-400/20 animate-pulse"
          style={{ top: "65%", left: "85%" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left column - Profile Image */}
          <AnimatedSection className="w-full md:w-5/12 flex justify-center">
            <div className="relative rounded-full p-1">
              {" "}
              {/* outer wrapper with padding for border */}
              {/* Rotating Border */}
              <div
                className="absolute inset-0 rounded-full border-4 border-transparent bg-clip-border animate-spin-slow"
                style={{
                  background: `linear-gradient(white, white) padding-box, linear-gradient(to right,rgb(25, 104, 231),rgb(3, 255, 41)) border-box`,
                  boxShadow:
                    "0 0 15px 5px rgba(59, 130, 246, 0.6), 0 0 20px 10px rgba(11, 91, 64, 0.5)",
                }}
              />
              {/* Image Container */}
              <div className="rounded-full h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 overflow-hidden bg-gray-100 relative z-10">
                <img
                  src={profileImage}
                  alt="Merugumala Rabbuni"
                  className="rounded-full object-contain w-full h-full"
                  style={{
                    transform: "scale(1.2)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Right column - Text content */}
          <AnimatedSection
            className="w-full md:w-7/12 text-center md:text-left"
            delay={200}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Merugumala Rabbuni
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-400 rounded mb-6 mx-auto md:mx-0"></div>
            <h2 className="text-lg sm:text-2xl font-medium mb-4 sm:mb-6 text-gray-700 dark:text-gray-300 min-h-[3rem] sm:min-h-0 leading-snug">
              {renderStyledText(displayText)}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              <span className="font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                Turning Circuits into Solutions
              </span>{" "}
              - Passionate about creating innovative IoT solutions that solve
              real-world problems through the fusion of hardware and software.
            </p>
            <div className="flex flex-row gap-4 justify-center md:justify-start w-full md:w-auto px-4 sm:px-0">
              <button
                onClick={() => scrollToSection("projects")}
                className="flex-1 md:flex-none md:w-48 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center group text-sm sm:text-base"
              >
                View Projects
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => window.open("/resume.pdf", "_blank")}
                className="flex-1 md:flex-none md:w-48 px-6 py-3.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center text-sm sm:text-base"
              >
                <FileText size={18} className="mr-2" />
                Resume
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-40px) translateX(-5px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-20px) translateX(15px);
            opacity: 0.7;
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          33% {
            transform: translateY(-30px) translateX(-10px);
            opacity: 0.5;
          }
          66% {
            transform: translateY(-15px) translateX(20px);
            opacity: 0.3;
          }
        }

        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-25px) rotate(180deg);
            opacity: 0.6;
          }
        }

        @keyframes float-4 {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-35px) scale(1.2);
            opacity: 0.5;
          }
        }

        @keyframes float-5 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-15px) translateX(-20px);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.4;
          }
        }

        @keyframes float-6 {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.3;
          }
        }

        @keyframes rotate-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes rotate-reverse {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
          }
        }

        @keyframes float-slow-reverse {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(10px) translateX(-5px);
          }
        }

        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 12s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 10s ease-in-out infinite;
        }
        .animate-float-4 {
          animation: float-4 14s ease-in-out infinite;
        }
        .animate-float-5 {
          animation: float-5 9s ease-in-out infinite;
        }
        .animate-float-6 {
          animation: float-6 16s ease-in-out infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        .animate-rotate-reverse {
          animation: rotate-reverse 25s linear infinite;
        }
        .animate-float-slow {
          animation: float-slow 18s ease-in-out infinite;
        }
        .animate-float-slow-reverse {
          animation: float-slow-reverse 22s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
