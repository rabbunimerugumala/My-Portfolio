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


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left column - Profile Image */}
          <AnimatedSection className="w-full md:w-5/12 flex justify-center">
            <div className="relative rounded-full p-1">
              {/* Rotating Border - Blue/Violet */}
              <div
                className="absolute inset-0 rounded-full border-4 border-transparent bg-clip-border animate-spin-slow"
                style={{
                  background: `linear-gradient(#02030a, #02030a) padding-box, linear-gradient(to right, #3b82f6, #8b5cf6) border-box`,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                }}
              />
              {/* Image Container */}
              <div className="rounded-full h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 overflow-hidden bg-[#0d0c22] relative z-10">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white font-display">
              Merugumala Rabbuni
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-violet-500 rounded mb-6 mx-auto md:mx-0"></div>
            <h2 className="text-lg sm:text-2xl font-medium mb-4 sm:mb-6 text-gray-300 min-h-[3rem] sm:min-h-0 leading-snug">
              {renderStyledText(displayText)}
              <span className="animate-pulse text-violet-500">|</span>
            </h2>
            <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto md:mx-0 leading-relaxed font-sans">
              <span className="font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Turning Circuits into Solutions
              </span>{" "}
              - Passionate about creating innovative IoT solutions that solve
              real-world problems through the fusion of hardware and software.
            </p>
            <div className="flex flex-row gap-4 justify-center md:justify-start w-full md:w-auto px-4 sm:px-0">
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-habit px-8 py-3.5 flex items-center justify-center group text-sm sm:text-base"
              >
                View Projects
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => window.open("/resume.pdf", "_blank")}
                className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-gray-300 font-medium rounded-xl transition-all hover:scale-[1.02] border border-white/10 flex items-center justify-center text-sm sm:text-base backdrop-blur-sm"
              >
                <FileText size={18} className="mr-2 text-violet-400" />
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
