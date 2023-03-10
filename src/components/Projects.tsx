import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../assets/projects.json';

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <ul className='projects-list grid'>
        {projects.map((project) => (
          <li>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
