import React from 'react';
import laptop from '../assets/laptop.jpeg';

function Laptop({ imgURL }: { imgURL: string }) {
  return (
    <div className='laptop-container relative'>
      <img src={laptop} alt='' />
      {imgURL && <img src={imgURL} alt='' className='inside-laptop absolute' />}
    </div>
  );
}

export default Laptop;
