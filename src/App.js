import React, { useEffect } from 'react';
import './style.scss';
import Menu from './menu.js';
import Content from './content.js';
import Data from './en.json';
import HD from './header.js';

export default function App() {
  useEffect(() => {
    document.title = "Resume"
  }, []);
  return (
    <div id="app" lang="ENG">
      <HD />
      <div id="main">
        <Menu value={Data} />
        <Content value={Data} />
      </div>
    </div>
  );
}
