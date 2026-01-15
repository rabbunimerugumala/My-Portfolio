import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import { ThemeProvider } from './context/ThemeContext';

import Background from './components/Background';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#02030a] z-50">
        <div className="relative w-24 h-24 mb-8">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
          {/* Inner Ring */}
          <div className="absolute inset-3 border-4 border-violet-500/30 border-b-violet-500 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
          {/* Core */}
          <div className="absolute inset-8 bg-gradient-to-tr from-blue-400 to-violet-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(139,92,246,0.5)]"></div>
        </div>
        <div className="text-xl font-['Outfit'] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 animate-pulse tracking-widest">
          INITIALIZING...
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col relative">
          <Background />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <section id="home">
                <HomePage />
              </section>
              <section id="about">
                <AboutPage />
              </section>
              <section id="projects">
                <ProjectsPage />
              </section>
              <section id="contact">
                <ContactPage />
              </section>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;