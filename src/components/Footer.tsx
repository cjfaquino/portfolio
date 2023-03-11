import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <footer>
      <span>Copyright © 2023</span>
      <a href='https://github.com/cjfaquino' target='_blank' rel='noreferrer'>
        Christian Aquino <GitHubIcon fontSize='inherit' />
      </a>
    </footer>
  );
}

export default Footer;
