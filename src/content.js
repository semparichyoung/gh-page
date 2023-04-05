import React from 'react';
import Profile from './contents/profile';

const componentMap = {
  profile: Profile,
  // add more components here with their corresponding keys
};

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const $t = this;
    let content = {};
    content = Object.keys($t.props.value).map(function(key) {
      const item = $t.props.value[key];
      console.log(item);
      const DynamicComponent = componentMap[key] || null;
      return <div
          id={key + 'Div'}
          key={key + 'Div'}
          className={"contentDiv " + key + "Div contents"}
        >
          <h2>{item.text}</h2>
          {/* Render the dynamic template component if it is loaded */}
          {DynamicComponent ? <DynamicComponent values={item} /> : <p>{item.content || ""}</p>}
        </div>
    })

    return <div id="content">{content}</div>;
  }
}
