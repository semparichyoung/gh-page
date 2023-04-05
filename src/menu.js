import React from 'react';
import Lang from './lang.js';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.clickMenu = this.clickMenu.bind(this);
  }
  clickMenu($t, title) {
    console.log(title, document.getElementById(title + 'Div'));
    document.querySelectorAll('.contents.show').forEach(function(v) {
      v.classList.remove('show');
    });
    if(typeof title == "string" && document.getElementById(title + 'Div') !== null) {
        document.getElementById(title + 'Div').classList.add('show');
    }

    document.querySelectorAll('.menuButton.active').forEach(function(v) {
      v.classList.remove('active');
    });
    if(typeof title == "string" && document.getElementById('menu' + title + 'Btn') !== null) {
        document.getElementById('menu' + title + 'Btn').classList.add('active');
    }
  }
  componentDidMount() {
    document.getElementsByClassName('menuButton')[0].click();
  }
  render() {
    let listHtml = {};
    const $t = this;
    listHtml = Object.keys(this.props.value).map(function(key) {
        let item = $t.props.value[key];
        return <a
            id={'menu' + key + 'Btn'}
            ref={key}
            key={'menu' + key + 'Btn'}
            className="menuButton"
            onClick={() => $t.clickMenu($t, key)}
        >
            <span>{item.text}</span>
        </a>
    });
    return <div id="navigateDiv">{listHtml}</div>;
  }
}
