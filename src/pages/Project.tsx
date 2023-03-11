import LaunchIcon from '@mui/icons-material/Launch';
import GitHub from '@mui/icons-material/GitHub';
import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../assets/projects.json';
import Laptop from '../components/Laptop';
import Phone from '../components/Phone';
import Tablet from '../components/Tablet';

function Project() {
  const params = useParams();
  const projectPath = params.project;
  const found = projects.find((p) => p.path === projectPath);

  return found ? (
    <main>
      <section className='project'>
        <div className='container relative select-disable'>
          <Laptop imgURL={found.laptopIMG} />
          <Tablet imgURL={found.tabletIMG} />
          <Phone imgURL={found.phoneIMG} />
        </div>
        <span className='flex'>
          <h2>{found.name} </h2>
          <div className='links flex'>
            <a href={found.repo}>
              github <GitHub fontSize='inherit' />
            </a>{' '}
            <a href={found.live}>
              live <LaunchIcon fontSize='inherit' />
            </a>
          </div>
        </span>

        <p>
          {found.desc ||
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor possimus facere ab. A magnam quasi facilis sed quae, nesciunt tenetur vero itaque similique porro, placeat totam fuga sapiente! Error, ipsa.'}
        </p>
      </section>
    </main>
  ) : null;
}

export default Project;
