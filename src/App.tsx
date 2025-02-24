// portfolio/src/App.tsx
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ResumeModal from "./components/ResumeModal"; // NEW import
import "./style.css";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // NEW state for resume modal
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const openResumeModal = () => setIsResumeModalOpen(true);
  const closeResumeModal = () => setIsResumeModalOpen(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        openResumeModal={openResumeModal} // pass the function
      />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />

      {/* Conditionally render the resume modal */}
      {isResumeModalOpen && <ResumeModal onClose={closeResumeModal} />}
    </div>
  );
};

export default App;
