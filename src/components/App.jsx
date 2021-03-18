import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Skills from './Skills/Skills';
import ThemeToggle from './ThemeToggle/ThemeToggle';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  skillsData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [skills, setSkills] = useState([]);
  const [footer, setFooter] = useState({});
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setSkills([...skillsData]);
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider
      value={{ hero, about, projects, contact, skills, footer, darkTheme, setDarkTheme }}
    >
      <div className={`theme theme-${darkTheme ? 'dark' : 'light'}`}>
        <Hero />
        <ThemeToggle />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </PortfolioProvider>
  );
}

export default App;
