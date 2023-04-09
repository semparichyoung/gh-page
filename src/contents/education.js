import React from 'react';

export default class Education extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const $t = this;
        let content = {};
        content = this.props.values.data.map(key => {
            return Object.keys(key).map(k => {
                let item = key[k];
                let name = k.charAt(0).toUpperCase() + k.slice(1);
                if(name == "Start_date") name = "Start Date";
                else if(name == "End_date") name = "End Date";

                return <div className={"education" + name.replace(' ', '')}>
                <h3>{name}</h3>
                <span class='indent'>{item}</span>
                </div>
            })
        });
        return <div id="educationContent">{content}</div>

    }
}