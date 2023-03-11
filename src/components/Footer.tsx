import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import user from '../assets/user.json';

function Footer() {
  return (
    <footer>
      <span>Copyright © 2023</span>
      <a href='https://github.com/cjfaquino' target='_blank' rel='noreferrer'>
        {user.name} <GitHubIcon fontSize='inherit' />
      </a>
    </footer>
  );
}

export default Footer;
