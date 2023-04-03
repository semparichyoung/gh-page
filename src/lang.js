import React from 'react';

export default class lang extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let text = {};
    if (typeof this.props.v == 'string') {
      text = {
        ENG: this.props.v,
        CHT: this.props.v,
      };
    } else if (typeof this.props.v == 'object') {
      text = this.props.v;
    }
    let cont = Object.keys(text).map((lang) => (
      <span lang={lang}>{text[lang]}</span>
    ));
    return cont;
  }
}
