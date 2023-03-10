import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul className='flex'>
          <li>
            <h1>
              <Link to='/'>Christian Aquino</Link>
            </h1>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
