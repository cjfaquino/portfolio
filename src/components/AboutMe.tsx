import React from 'react';
import TechStack from './TechStack';

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <div className='about-me grid'>
        <p>
          {`It makes me proud to be able to create beautiful code. Whether it be a
          passion project or commissioned project. With technology constantly
          changing, I enjoy learning better ways to improve on my existing
          knowledge on UI/UX, web development. Outside of web development, I
          enjoy tinkering with computers, cars, motorcycles.`}
        </p>
        <p>
          {`Well I wouldn't be a very good developer if I hadn't made my own site! If you would like to see some of my projects, feel free to take a look at my portfolio, or get in touch.`}
        </p>
        <TechStack />
      </div>
    </section>
  );
}

export default AboutMe;
