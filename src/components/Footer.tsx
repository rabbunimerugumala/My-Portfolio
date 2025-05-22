import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Merugumala Rabbuni. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/rabbunimerugumala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rabbunimerugumala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:rabbuni144@gmail.com" 
              className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;