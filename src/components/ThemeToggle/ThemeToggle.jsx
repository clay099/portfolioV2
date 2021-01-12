import React, { useContext, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const ThemeToggle = () => {
  const { darkTheme, setDarkTheme } = useContext(PortfolioContext);

  useEffect(() => {
    let prefersDarkScheme = false;
    // check that browser can get computers prefers-color-scheme & if so update preferred variable.
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      prefersDarkScheme = true;
    }

    // will return a string of 'true' or 'false' if a value has been saved
    const foundLocalStorage = localStorage.getItem('darkMode');

    // preferrers to use the saved local storage, if none is found will default to users preferred color scheme
    const selectedTheme = foundLocalStorage ? foundLocalStorage === 'true' : prefersDarkScheme;

    setDarkTheme(selectedTheme);
  }, []);

  const handleChange = () => {
    localStorage.setItem('darkMode', !darkTheme);
    setDarkTheme((currentTheme) => !currentTheme);
  };

  return (
    <div className="themeToggle">
      <Form>
        <Form.Check type="switch" id="dark-mode" onChange={handleChange} checked={darkTheme} />
      </Form>
    </div>
  );
};

export default ThemeToggle;
