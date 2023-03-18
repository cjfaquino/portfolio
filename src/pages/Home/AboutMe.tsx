import React, { useEffect, useRef } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TypingText from './TypingText';
import user from '../../assets/user.json';

function AboutMe() {
  const btnRef = useRef(null);
  const divRef = useRef(null);

  const mailLink = `mailto:${user.email}`;

  useEffect(() => {
    let scrollObserver: IntersectionObserver;

    // show/hide small contact button
    if (divRef) {
      const options = {
        rootMargin: '100px',
        threshold: 1,
      };

      // create IntersectionObserver
      scrollObserver = new IntersectionObserver((entries) => {
        const entry = entries[0];
        (btnRef.current! as Element).classList.toggle(
          'show',
          !entry.isIntersecting
        );
      }, options);

      // observe div containing contact me button
      scrollObserver.observe(divRef.current!);
    }

    return () => {
      // clean IntersectionObserver
      scrollObserver.disconnect();
    };
  }, [divRef]);

  return (
    <section className='about-me'>
      <h2>
        About Me ~ <TypingText>Developer</TypingText>
      </h2>

      <div className='about-grid box grid'>
        <p>
          {`I take immense pride in crafting beautiful code, be it for my personal passion projects or commissioned work. In today's constantly evolving technological landscape, I am constantly seeking out new and innovative ways to enhance my knowledge of UI/UX and web development, in order to provide my clients with the best possible outcome.`}
        </p>

        <p>
          {`Beyond web development, I love mechanical keyboards! The tactile feel and sound of the keys are so satisfying. There are many types of switches and keycaps to personalize your keyboard. It's a fun hobby, whether building a custom keyboard or just swapping keycaps. Add some personality to your workspace!`}
        </p>

        <div className='flex-col' ref={divRef}>
          <p>
            {`Well I wouldn't be a very good developer if I hadn't made my own site! If you would like to see some of my projects, feel free to take a look at my portfolio, or get in touch.`}
          </p>
          <a href={mailLink} className='contact flex'>
            Contact me <MailOutlineIcon />
          </a>
        </div>
      </div>

      <a href={mailLink} className='contact small flex' ref={btnRef}>
        <MailOutlineIcon />
      </a>
    </section>
  );
}

export default AboutMe;
