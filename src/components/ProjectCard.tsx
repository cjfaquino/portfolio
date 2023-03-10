import React from 'react';
import { Project } from '../interfaces/Project';
import Laptop from './Laptop';
import Phone from './Phone';
import Tablet from './Tablet';

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className='card-container relative'>
      <button type='button'>
        <Laptop imgURL={project.laptopIMG} />
        <Tablet imgURL={project.tabletIMG} />
        <Phone imgURL={project.phoneIMG} />
      </button>
    </div>
  );
}

export default ProjectCard;
