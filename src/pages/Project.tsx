import LaunchIcon from '@mui/icons-material/Launch';
import GitHub from '@mui/icons-material/GitHub';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import projects from '../assets/projects.json';
import Laptop from '../components/Laptop';
import Phone from '../components/Phone';
import Tablet from '../components/Tablet';
import { Project as IProject } from '../interfaces/Project';

function Project() {
  const params = useParams();
  const [project, setProject] = useState<IProject | null>(null);
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    const projectPath = params.project;
    // get project from params
    if (projectPath) {
      const i = projects.findIndex((p) => p.path === projectPath);
      setProject(projects[i] as IProject);
      setIndex(i);
    }

    return () => {};
  }, [params.project]);

  useLayoutEffect(() => {
    // set window title
    if (project) {
      document.title = `${project.name} | Christian Aquino`;
    }
    return () => {
      document.title = 'Front End Developer | Christian Aquino';
    };
  }, [project]);

  return project && index !== null ? (
    <main>
      <section className='project'>
        <div className='container relative select-disable'>
          <div className='arrows absolute flex'>
            <Link to={`/${projects.at(index - 1)!.path}`}>
              <ArrowBackIosNewIcon fontSize='inherit' />{' '}
              {projects.at(index - 1)!.name}
            </Link>
            <Link to={`/${projects.at((index + 1) % projects.length)!.path}`}>
              {projects.at((index + 1) % projects.length)!.name}{' '}
              <ArrowForwardIosIcon fontSize='inherit' />
            </Link>
          </div>
          <Laptop imgURL={project.laptopIMG} />
          <Tablet imgURL={project.tabletIMG} />
          <Phone imgURL={project.phoneIMG} />
        </div>
        <span className='flex'>
          <h2>{project.name} </h2>
          <div className='links flex'>
            <a href={project.repo}>
              github <GitHub fontSize='inherit' />
            </a>{' '}
            <a href={project.live}>
              live <LaunchIcon fontSize='inherit' />
            </a>
          </div>
        </span>

        <p>
          {project.desc ||
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor possimus facere ab. A magnam quasi facilis sed quae, nesciunt tenetur vero itaque similique porro, placeat totam fuga sapiente! Error, ipsa.'}
        </p>
      </section>
    </main>
  ) : null;
}

export default Project;
