import React from 'react';
import Link from '../components/link';
import Email from '../components/email';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const $t = this;
        let content = {};
        content = Object.keys(this.props.values).map(key => {
            if(key === 'text') return;
            let item = $t.props.values[key];
            let name = key.charAt(0).toUpperCase() + key.slice(1);
            if(name === "Email") {
                return <div className={"profile" + name}><h3>{name}</h3> <span class='indent'><Email v={item} /></span></div>
            }else if(item.indexOf('https://') === 0) {
                return <div className={"profile" + name}><h3>{name}</h3> <span class='indent'><Link v={item} /></span></div>
            }else {
                return <div className={"profile" + name}><h3>{name}</h3> <span class='indent'>{item}</span></div>
            }
        });
        return <div id="profileContent">{content}</div>

    }
}