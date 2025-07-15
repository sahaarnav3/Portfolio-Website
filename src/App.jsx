import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';

const App = () => {
  return (
    <main className='bg-black' style={{minHeight: "100vh"}}>
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
    </main>
  );
};

export default App;