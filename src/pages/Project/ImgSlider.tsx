import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Project } from '../../interfaces/Project';
import Laptop from '../../components/Laptop';
import laptop from '../../assets/laptop.jpeg';
import useWindowSize from '../../hooks/useWindowSize';
import Phone from '../../components/Phone';
import Tablet from '../../components/Tablet';

interface IProps {
  project: Project;
}

function ImgSlider({ project }: IProps) {
  const [imgIndex, setImgIndex] = useState(0);
  const [imgHeight, setImgHeight] = useState(900);
  const [width] = useWindowSize();

  const laptopRef = useRef(null);

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
    // get & set max height
    if (laptopRef.current) {
      setImgHeight((laptopRef.current as unknown as HTMLElement).clientHeight);
    }

    return () => {};
  }, [laptopRef, width]);

  const nextImg = useCallback(() => {
    setImgIndex((prev) => (prev + 1) % photos!.length);
  }, [photos]);

  const prevImg = useCallback(() => {
    setImgIndex((prev) => (prev - 1 + photos!.length) % photos!.length);
  }, [photos]);

  useEffect(() => {
    const arrowNav = (e: KeyboardEvent) => {
      // use arrow keys for slider
      if (e.key === 'ArrowLeft') {
        prevImg();
      } else if (e.key === 'ArrowRight') {
        nextImg();
      }
    };

    document.addEventListener('keydown', arrowNav);
    return () => {
      document.removeEventListener('keydown', arrowNav);
    };
  }, [nextImg, prevImg]);

  return photos ? (
    <>
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

      <ul className='slider' style={{ height: `${imgHeight}px` }}>
        {photos?.at(imgIndex)}{' '}
        <li
          style={{ height: 'fit-content', top: 0 }}
          className='absolute hidden'
        >
          <div className='laptop-container relative'>
            <img
              src={laptop}
              alt=''
              ref={laptopRef}
              onLoad={(e) => {
                setImgHeight((e.target as HTMLElement).clientHeight);
              }}
            />
          </div>
        </li>
      </ul>
    </>
  ) : null;
}

export default ImgSlider;
