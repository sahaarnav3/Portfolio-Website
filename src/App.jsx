import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Connect from "./components/Connect";
import Footer from './components/Footer';

const App = () => {
  return (
    <main className='bg-black px-3' style={{minHeight: "100vh", minWidth: "400px"}}>
      {/*   */}
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <Connect />
      <Footer />
    </main>
  );
};

export default App;