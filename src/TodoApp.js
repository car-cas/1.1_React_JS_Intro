import React from 'react';
import {TodoList} from './TodoList'

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label>
            What needs to be done? :
            <input
                id="new-todo"
                onChange={(e)=> this.setState({text:e.target.value})}
                value={this.state.text}
            />
          </label>
          <label>
             Priority :
             <input
                id="priority"
                onChange={(e)=> this.setState({priority:e.target.value})}
                value={this.state.priority}
             />
          </label>
          <label>
              Date :
              <input
                id="dueDate"
                onChange={(e)=> this.setState({dueDate:e.target.value})}
                value={this.state.dueDate}
              />
            </label>
          <button>
            Add : {this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }
  handleChange(e) {
     this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now(),
        priority: this.state.priority,
        dueDate: this.state.dueDate
      };
      this.setState(State => ({
        items: State.items.concat(newItem),
        text: '',
        priority: '',
        dueDate: ''
      }));
    }
}