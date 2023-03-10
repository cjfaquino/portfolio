import React from 'react';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import WhatIDo from '../components/WhatIDo';

function Home() {
  return (
    <main>
      <AboutMe />
      <Projects />
      <WhatIDo />
    </main>
  );
}

export default Home;
