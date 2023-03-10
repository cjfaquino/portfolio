import React from 'react';
import phone from '../assets/phone.png';

function Phone({ imgURL }: { imgURL: string }) {
  return imgURL ? (
    <div className='phone-container absolute'>
      <img src={phone} alt='' />
      <img src={imgURL} alt='' className='inside-phone absolute' />
    </div>
  ) : null;
}

export default Phone;
