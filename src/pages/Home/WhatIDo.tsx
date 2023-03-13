import React from 'react';
import TechStack from '../../components/TechStack';

function WhatIDo() {
  return (
    <section className='what-i-do'>
      <h2>What I Do</h2>

      <div className=' grid'>
        <div className='design'>
          <h3>Web Design</h3>
          <p>
            I specialize in utilizing the most cutting-edge technology and
            industry standards to craft bespoke web applications that seamlessly
            function across all web browsers, while maintaining an impeccable
            online presence.
          </p>
        </div>
        <div className='development'>
          <h3>Web Development</h3>
          <p>
            I am currently passionate about developing with ReactJS, and
            specialize in front-end development, hand-crafting my applications
            with expertise in <code>Typescript</code>, <code>HTML5</code>, and{' '}
            <code>CSS3</code>. Additionally, I have ample experience working on
            projects involving <code>Firebase</code>.
          </p>
        </div>
        <div className='responsive'>
          <h3>Responsive Design</h3>
          <p>
            By leveraging the latest standards in <code>Typescript</code> and{' '}
            <code>CSS3</code>, I am able to develop highly responsive
            applications that effortlessly adapt to all browser sizes,
            effectively showcasing their optimal features.
          </p>
        </div>
        <TechStack all />
      </div>
    </section>
  );
}

export default WhatIDo;
