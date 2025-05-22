import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import { ThemeProvider } from './context/ThemeContext';

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
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
        <div className="animate-pulse text-3xl font-bold text-blue-500">MR</div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col transition-colors duration-300 dark:bg-gray-900 bg-gray-50">
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
      </Router>
    </ThemeProvider>
  );
}

export default App;