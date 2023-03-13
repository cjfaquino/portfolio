import LaunchIcon from '@mui/icons-material/Launch';
import GitHub from '@mui/icons-material/GitHub';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Link, useParams } from 'react-router-dom';
import projects from '../assets/projects.json';
import Laptop from '../components/Laptop';
import Phone from '../components/Phone';
import Tablet from '../components/Tablet';
import { Project as IProject } from '../interfaces/Project';
import useWindowSize from '../hooks/useWindowSize';
import TechStack from '../components/TechStack';

function Project() {
  const params = useParams();
  const [project, setProject] = useState<IProject | null>(null);
  const [index, setIndex] = useState<number | null>(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [maxImgHeight, setMaxImgHeight] = useState(900);
  const [width] = useWindowSize();

  const firstImgRef = useRef(null);

  const photos = useMemo(() => {
    if (!project) return undefined;

    // array for image slider
    const arr = [
      <li>
        <Laptop imgURL={project.laptopIMG} />
        <Tablet imgURL={project.tabletIMG} />
        <Phone imgURL={project.phoneIMG} />
      </li>,
      <li className='screenshot'>
        <img src={project.laptopIMG} alt='' className='screenshot' />
      </li>,
    ];

    if (project.tabletIMG) {
      arr[2] = (
        <li>
          <img src={project.tabletIMG} alt='' className='screenshot' />
        </li>
      );
    }

    if (project.phoneIMG) {
      arr[3] = (
        <li>
          <img src={project.phoneIMG} alt='' className='screenshot' />
        </li>
      );
    }

    return arr;
  }, [project]);

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

  useEffect(() => {
    // get & set max height
    if (firstImgRef.current) {
      setMaxImgHeight(
        (firstImgRef.current as unknown as HTMLElement).clientHeight
      );
    }

    return () => {};
  }, [firstImgRef, width]);

  useLayoutEffect(() => {
    // set window title
    if (project) {
      document.title = `${project.name} | Christian Aquino`;
    }
    return () => {
      document.title = 'Front End Developer | Christian Aquino';
    };
  }, [project]);

  const nextImg = () => {
    setImgIndex((prev) => (prev + 1) % photos!.length);
  };

  const prevImg = () => {
    setImgIndex((prev) => (prev - 1 + photos!.length) % photos!.length);
  };

  const styles = useMemo(
    () => ({ height: `${maxImgHeight}px` }),
    [maxImgHeight]
  );

  return project && index !== null ? (
    <main>
      <section className='project'>
        <div className='container relative select-disable'>
          <div className='arrows relative flex'>
            <Link to={`/${projects.at(index - 1)!.path}`}>
              <ArrowBackIosNewIcon fontSize='inherit' />{' '}
              {projects.at(index - 1)!.name}
            </Link>
            <Link to={`/${projects.at((index + 1) % projects.length)!.path}`}>
              {projects.at((index + 1) % projects.length)!.name}{' '}
              <ArrowForwardIosIcon fontSize='inherit' />
            </Link>
          </div>

          <ul className='slider' style={styles}>
            {photos?.at(imgIndex)}{' '}
            <li
              style={{ height: 'fit-content', top: 0 }}
              className='absolute hidden'
              ref={firstImgRef}
            >
              <Laptop imgURL='' />
            </li>
          </ul>

          <div className='dots flex'>
            <button type='button' onClick={prevImg} className='slider-arrow'>
              <ArrowBackIosNewIcon fontSize='inherit' />
            </button>

            {photos?.map((img, i) => (
              <button
                className={`dot ${imgIndex === i ? 'active' : ''}`}
                // eslint-disable-next-line react/no-array-index-key
                key={`${project.name}-img${i}`}
                onClick={() => setImgIndex(i)}
                type='button'
              >
                <span className='hidden'>{i}</span>
              </button>
            ))}

            <button type='button' onClick={nextImg} className='slider-arrow'>
              <ArrowForwardIosIcon fontSize='inherit' />
            </button>
          </div>
        </div>

        <span className='flex'>
          <h2>{project.name} </h2>
          <div className='links flex'>
            <a href={project.repo} target='_blank' rel='noreferrer'>
              github <GitHub fontSize='inherit' />
            </a>{' '}
            <a href={project.live} target='_blank' rel='noreferrer'>
              live <LaunchIcon fontSize='inherit' />
            </a>
          </div>
        </span>

        <div className='info grid'>
          <p>
            {project.desc ||
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor possimus facere ab. A magnam quasi facilis sed quae, nesciunt tenetur vero itaque similique porro, placeat totam fuga sapiente! Error, ipsa.'}
          </p>

          <TechStack {...project.tech} />
        </div>
      </section>
    </main>
  ) : null;
}

export default Project;
