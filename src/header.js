import React from 'react';
import './header.scss';
import Lang from './lang.js';

export default class HD extends React.Component {
  constructor(props) {
    super(props);
    this.switchLang = this.switchLang.bind(this);
    this.lang = 'ENG';
  }
  switchLang($t) {
    $t.lang = this.lang == 'ENG' ? 'CHT' : 'ENG';
    document.getElementById('main').setAttribute('lang', $t.lang);
  }
  render() {
    return (
      <div id="headerDiv">
        <img
          id="headerIcon"
          src="https://avatars.githubusercontent.com/u/5654836?v=4"
        />
        <h1><Lang v={{"ENG": "Shelob Yang", "CHT": "楊森畔"}}/></h1>
        <a id="switchLang" onClick={this.switchLang.bind(this)}>
          <span id='CHT'>中</span>/<span id="ENG">Eng</span>
        </a>
      </div>
    );
  }
}
