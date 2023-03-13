import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../../interfaces/Project';
import Laptop from '../../components/Laptop';
import Phone from '../../components/Phone';
import Tablet from '../../components/Tablet';

function ProjectCard({ project }: { project: Project }) {
  const navigate = useNavigate();
  return (
    <div className='card-container relative select-disable'>
      <button
        type='button'
        onClick={() => {
          navigate(`/${project.path}`);
        }}
      >
        <Laptop imgURL={project.laptopIMG} />
        <h4 className='absolute'>{project.name}</h4>
        <Tablet imgURL={project.tabletIMG} />
        <Phone imgURL={project.phoneIMG} />
      </button>
    </div>
  );
}

export default ProjectCard;
