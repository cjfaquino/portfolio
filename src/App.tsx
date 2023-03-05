import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import WhatIDo from './components/WhatIDo';

function App() {
  return (
    <div className='App'>
      <Header />
      <AboutMe />
      <Projects />
      <WhatIDo />
      <Footer />
    </div>
  );
}

export default App;
