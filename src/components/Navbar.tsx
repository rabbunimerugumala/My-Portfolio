import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm dark:shadow-gray-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                Merugumala Rabbuni
              </span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-base font-medium transition-colors text-gray-800 dark:text-gray-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 ${activeSection === "home" ? "after:w-full" : "after:w-0"
                }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-base font-medium transition-colors text-gray-800 dark:text-gray-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 ${activeSection === "about" ? "after:w-full" : "after:w-0"
                }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-base font-medium transition-colors text-gray-800 dark:text-gray-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 ${activeSection === "projects" ? "after:w-full" : "after:w-0"
                }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-base font-medium transition-colors text-gray-800 dark:text-gray-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 ${activeSection === "contact" ? "after:w-full" : "after:w-0"
                }`}
            >
              Contact
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="mr-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with smooth transition */}
      <div
        className={`md:hidden absolute top-full left-0 w-full z-50 overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={() => scrollToSection("home")}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === "home"
              ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === "about"
              ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === "projects"
              ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === "contact"
              ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
