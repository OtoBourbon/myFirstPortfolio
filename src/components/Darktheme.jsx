import { useEffect, useState } from "react";
import Switch from 'react-switch';
import { FaSun, FaMoon } from 'react-icons/fa';

function Darktheme() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
      // Detect user's system preference
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  
      // Apply the initial theme based on user's preference or previous selection
      const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
      setTheme(currentTheme);
      document.body.setAttribute('data-theme', currentTheme);
  
      // Listen for changes in the user's system preference
      prefersDarkScheme.addEventListener('change', (e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
      });
  
      // Cleanup event listener on component unmount
      return () => {
        prefersDarkScheme.removeEventListener('change', (e) => {
          const newTheme = e.matches ? 'dark' : 'light';
          setTheme(newTheme);
          document.body.setAttribute('data-theme', newTheme);
          localStorage.setItem('theme', newTheme);
        });
      };
    }, []);
  
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    };


    return(
        <>
      <Switch
        checked={theme === 'dark'}
        onChange={toggleTheme}
        offColor="#1d1f24"
        onColor="#000"
        offHandleColor="#FFF"
        onHandleColor="#FFF"
        checkedIcon={<FaMoon style={{ color: "#FFF", margin: "4px" }} />}
        uncheckedIcon={<FaSun style={{ color: "#ffffff", margin: "4px" }} />}
        boxShadow="0px 0px 2px 3px #6e6e6e"
        className="switch"
      />
        </>
    )
    
}

export default Darktheme