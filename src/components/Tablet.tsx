import React from 'react';
import tablet from '../assets/tablet.png';

function Tablet({ imgURL }: { imgURL: string }) {
  return imgURL ? (
    <div className='tablet-container absolute'>
      <img src={tablet} alt='' />
      <img src={imgURL} alt='' className='inside-tablet absolute' />
    </div>
  ) : null;
}

export default Tablet;
