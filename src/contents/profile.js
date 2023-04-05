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
            if(key == 'text') return;
            let item = $t.props.values[key];
            let name = key.charAt(0).toUpperCase() + key.slice(1);
            if(name == "Email") {
                return <div className={"profile" + name}><h3>{name}</h3> <Email v={item} /></div>
            }else if(item.indexOf('https://') === 0) {
                return <div className={"profile" + name}><h3>{name}</h3> <Link v={item} /></div>
            }else {
                return <div className={"profile" + name}><h3>{name}</h3> {item}</div>
            }
        });
        return <div id="profileContent">{content}</div>

    }
}