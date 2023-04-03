import React from 'react';
import Lang from './lang.js';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.clickHeader = this.clickHeader.bind(this);
  }
  clickHeader($t, title) {
    console.log(title, document.getElementById(title + 'Div'));
    document.querySelectorAll('.content.show').forEach(function(v) {
      v.classList.remove('show');
    });
    if(typeof title == "string" && document.getElementById(title + 'Div') !== null) {
        document.getElementById(title + 'Div').classList.add('show');
    }

    document.querySelectorAll('.headerButton.active').forEach(function(v) {
      v.classList.remove('active');
    });
    if(typeof title == "string" && document.getElementById('header' + title + 'Btn') !== null) {
        document.getElementById('header' + title + 'Btn').classList.add('active');
    }
  }
  componentDidMount() {
    document.getElementsByClassName('headerButton')[0].click();
  }
  render() {
    let listHtml = {};
    const $t = this;
    listHtml = Object.keys(this.props.value).map(function(key) {
        let item = $t.props.value[key];
        return <a
            id={'header' + key + 'Btn'}
            ref={key}
            key={'header' + key + 'Btn'}
            className="headerButton"
            onClick={() => $t.clickHeader($t, key)}
        >
            <span>{item.text}</span>
        </a>
    });
    return <div id="navigateDiv">{listHtml}</div>;
  }
}
