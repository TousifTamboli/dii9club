import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './pages/Loading';
import Screen from './pages/Screen';
import backgroundImage from './assets/images/bg_dii9club.png';

function App() {
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    // Set loading to false after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    },3500);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div >
      {loading ? <Loading /> : <Screen />}
    </div>
  );
}

export default App;
