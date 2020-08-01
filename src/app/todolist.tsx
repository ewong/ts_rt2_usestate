import React from "react";
import "./todolist.css";
import { Todo } from "./todo";

interface IProps {}

interface IState {
  value: string;
  todos: Array<String>;
}

class TodoList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: "",
      todos: [],
    };
  }

  addTodo() {
    if (this.state.value.length === 0) return;
    const todos = this.state.todos.slice();
    if (todos.length >= 9) return;
    todos.push(this.state.value);
    this.setState({ todos });
  }

  removeTodo(i: number) {
    const todos = this.state.todos.slice();
    todos.splice(i, 1);
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <div>TodoList</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.addTodo();
          }}
        >
          <input
            className="add-todo-text"
            type="text"
            name="todo"
            onChange={(e) => {
              this.setState({ value: e.target.value });
            }}
          />
          <input className="add-todo-button" type="submit" value="Add" />
        </form>
        {this.state.todos.map((value, index) => {
          return (
            <Todo
              key={index}
              value={value}
              onClick={() => {
                this.removeTodo(index);
              }}
            ></Todo>
          );
        })}
      </div>
    );
  }
}

export default TodoList;
