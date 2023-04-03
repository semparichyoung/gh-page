import React from 'react';

export default class Link extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <a className="link" href={this.props.v}>{this.props.v}</a>
    }
}