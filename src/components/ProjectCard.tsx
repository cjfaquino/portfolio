import React from 'react';
import Laptop from './Laptop';
import Phone from './Phone';
import Tablet from './Tablet';

function ProjectCard() {
  return (
    <div className='card-container relative'>
      <button type='button'>
        <Laptop imgURL='' />
        <Tablet imgURL='' />
        <Phone imgURL='' />
      </button>
    </div>
  );
}

export default ProjectCard;
