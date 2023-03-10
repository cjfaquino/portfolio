import React from 'react';
import Laptop from './Laptop';
import Phone from './Phone';

function ProjectCard() {
  return (
    <div className='card-container relative'>
      <button type='button'>
        <Laptop imgURL='' />
        <Phone imgURL='' />
      </button>
    </div>
  );
}

export default ProjectCard;
