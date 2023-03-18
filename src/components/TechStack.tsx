import React from 'react';
import Babel from '../assets/icons/Babel';
import CSS3 from '../assets/icons/CSS3';
import Docker from '../assets/icons/Docker';
import ESLint from '../assets/icons/ESLint';
import Firebase from '../assets/icons/Firebase';
import Git from '../assets/icons/Git';
import HTML5 from '../assets/icons/HTML5';
import Javascript from '../assets/icons/Javascript';
import Jest from '../assets/icons/Jest';
import NPM from '../assets/icons/NPM';
import Prettier from '../assets/icons/Prettier';
import ReactIcon from '../assets/icons/ReactIcon';
import Typescript from '../assets/icons/Typescript';
import Vite from '../assets/icons/Vite';
import Vitest from '../assets/icons/Vitest';
import Webpack from '../assets/icons/Webpack';
import { Tech } from '../interfaces/Tech';

interface IProps extends Tech {
  all?: boolean;
}

function TechStack({
  all,
  html,
  css,
  js,
  ts,
  react,
  vite,
  vitest,
  jest,
  eslint,
  prettier,
  webpack,
  babel,
  firebase,
  docker,
  git,
  npm,
}: IProps) {
  return (
    <div className='tech-stack box flex'>
      {(html || all) && <HTML5 />}
      {(css || all) && <CSS3 />}
      {(js || all) && <Javascript />}
      {(ts || all) && <Typescript />}
      {(react || all) && <ReactIcon />}
      {(vite || all) && <Vite />}
      {(vitest || all) && <Vitest />}
      {(jest || all) && <Jest />}
      {(eslint || all) && <ESLint />}
      {(prettier || all) && <Prettier />}
      {(webpack || all) && <Webpack />}
      {(babel || all) && <Babel />}
      {(firebase || all) && <Firebase />}
      {(docker || all) && <Docker />}
      {(git || all) && <Git />}
      {(npm || all) && <NPM />}
    </div>
  );
}

TechStack.defaultProps = {
  all: false,
};

export default TechStack;
