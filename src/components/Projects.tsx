import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <ul className='projects-list grid'>
        {Array.from(Array(10)).map(() => (
          <li>
            <ProjectCard />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
