import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ChevronRight } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  const profileImage = "/images/Photo.jpg"; // Replace with your image path
  const [displayText, setDisplayText] = useState("");
  const fullText =
    "BTech EEE | Software Development & IoT Enthusiast |  Building Smart Solutions at NEXTSTEP Technologies.";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left column - Profile Image */}
          <AnimatedSection className="w-full md:w-5/12 flex justify-center">
            <div className="relative rounded-full p-1"> {/* outer wrapper with padding for border */}
              {/* Rotating Border */}
           <div
  className="absolute inset-0 rounded-full border-4 border-transparent bg-clip-border animate-spin-slow"
  style={{
    background: `linear-gradient(white, white) padding-box, linear-gradient(to right,rgb(25, 104, 231),rgb(3, 255, 41)) border-box`,
    boxShadow: "0 0 15px 5px rgba(59, 130, 246, 0.6), 0 0 20px 10px rgba(11, 91, 64, 0.5)",
  }}
/>

              {/* Image Container */}
              <div className="rounded-full h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 overflow-hidden bg-gray-100 relative z-10">
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
          <AnimatedSection className="w-full md:w-7/12 text-center md:text-left" delay={200}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Merugumala Rabbuni
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-400 rounded mb-6 mx-auto md:mx-0"></div>
            <h2 className="text-xl sm:text-2xl font-medium mb-6 text-gray-700 dark:text-gray-300">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              <span className="font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                Turning Circuits into Solutions
              </span>{" "}
              - Passionate about creating innovative IoT solutions that solve
              real-world problems through the fusion of hardware and software.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors flex items-center"
              >
                View Projects
                <ChevronRight size={18} className="ml-1" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-md transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
