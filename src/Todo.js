import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h4> {this.props.todo.text} {this.props.todo.priority} {String(this.props.todo.dueDate)}</h4>
        );
    }

}