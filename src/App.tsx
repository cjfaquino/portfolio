import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <Header />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
