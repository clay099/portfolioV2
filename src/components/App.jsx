import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Skills from './Skills/Skills';
import Intro from './Intro/Intro';
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
  const [hideIntro, setHideIntro] = useState(false);
  const [startHideIntro, setStartHideIntro] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setSkills([...skillsData]);
    setFooter({ ...footerData });
    // hid loader on mobile
    if (window.innerWidth < 769) setHideIntro(true);
  }, []);

  // start animation to hide
  useEffect(() => {
    const timerID = setTimeout(() => {
      setStartHideIntro(true);
    }, 5500);
    return () => clearTimeout(timerID);
  }, []);

  // actually hide component
  useEffect(() => {
    let delayedTimerID;
    if (startHideIntro) {
      delayedTimerID = setTimeout(() => {
        setHideIntro(true);
      }, 1000);
    }
    return () => clearTimeout(delayedTimerID);
  }, [startHideIntro]);

  return (
    <PortfolioProvider
      value={{ hero, about, projects, contact, skills, footer, darkTheme, setDarkTheme }}
    >
      {!hideIntro ? (
        <Intro startHide={startHideIntro} />
      ) : (
        <div className={`theme theme-${darkTheme ? 'dark' : 'light'}`}>
          <Hero />
          <ThemeToggle />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      )}
    </PortfolioProvider>
  );
}

export default App;
