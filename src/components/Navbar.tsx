import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full backdrop-blur-2xl bg-[#030014]/60 sm:bg-black/30 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300">
      <div className="px-6 sm:px-8">
        <div className="flex justify-between h-14 sm:h-16 items-center">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center group"
            >
              <span className="text-xl sm:text-2xl font-bold font-['Outfit'] tracking-tight bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-violet-300 transition-all duration-300">
                Merugumala Rabbuni
              </span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-1 bg-white/5 rounded-full px-2 py-1 border border-white/5 backdrop-blur-md">
            {["home", "about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${activeSection === section
                  ? "text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                <span
                  className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg shadow-blue-500/25 transition-opacity duration-300 ${activeSection === section ? "opacity-100" : "opacity-0"
                    }`}
                />
                <span className="relative z-10 capitalize">{section}</span>
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-gray-300 hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - refined glass dropdown */}
      <div
        className={`md:hidden absolute top-full mt-2 left-0 w-full z-[60] overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="mx-2 bg-[#030014]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden p-2 space-y-1">
          {["home", "about", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors capitalize ${activeSection === section
                ? "bg-blue-600/20 text-blue-400 border border-blue-500/20"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
