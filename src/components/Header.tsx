import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import user from '../assets/user.json';

function Header() {
  return (
    <header>
      <nav>
        <ul className='flex'>
          <li>
            <h1>
              <Link to='/'>{user.name}</Link>
            </h1>
          </li>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <a href={`mailto:${user.email}`}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
