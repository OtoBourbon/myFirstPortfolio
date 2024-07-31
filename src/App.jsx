import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import React, { useState, useEffect } from 'react';
import Responsivenav from './components/Responsivenav';


function App() {

  function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowWidth;
  }

  const windowWidth = useWindowWidth();
  const isSmall = windowWidth <= 960;

  return (
    <div className="App">
      {isSmall ? <Responsivenav /> : <Navbar />}
      <Welcome/>
    </div>
  );
}

export default App;
