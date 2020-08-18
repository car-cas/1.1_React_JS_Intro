import React from 'react';


export class TodoList extends React.Component{
    constructor (props){
       super(props);
    }
    render(){
        const todos = this.props.todoList;
         const listItems = todos.map((todo) =>
            <Todo text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
         );
         return (
            <ul> {listItems} </ul>
         );
    }


}