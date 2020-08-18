import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.items.map((element) => (
                    <Todo text={element.text} priority={element.priority} dueDate={element.dueDate}/>
                ))
                }
            </div>
        );
    }
}