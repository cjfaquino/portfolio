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

function TechStack() {
  return (
    <div className='tech-stack flex'>
      <HTML5 />
      <CSS3 />
      <Javascript />
      <Typescript />
      <ReactIcon />
      <Vite />
      <Vitest />
      <Jest />
      <ESLint />
      <Prettier />
      <Webpack />
      <Babel />
      <Firebase />
      <Docker />
      <Git />
      <NPM />
    </div>
  );
}

export default TechStack;
