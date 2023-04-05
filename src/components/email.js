import React from 'react';

export default class Link extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <a className="email" href={'mailto: ' + this.props.v}>{this.props.v}</a>
    }
}