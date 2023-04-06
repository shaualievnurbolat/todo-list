import React, {useState} from "react";
import { v4 as uuid } from 'uuid'
import Header from "../header/Header";
import TodoInput from "../todo-input/Todo-input";
import TodoList from "../todo-list/Todo-list";
import DoneList from "../done-list/Done-list";

import './App.css'

export interface ITodo {
  id: any;
  description: string;
  isDone: boolean
}

export class Todo implements ITodo {
  id: any;
  description: string;
  isDone: boolean;

  constructor(description: string = '', isDone:boolean = false){
    this.id = uuid();
    this.description = description;
    this.isDone = isDone;
  }
}

function App(): JSX.Element {

  const newTodos = [
    new Todo('Сходить в магазин'),
    new Todo('Выполнить домашнее задание')
  ]

  const [todos, setTodos] = useState(newTodos)

  function addTodo(todo: Todo) {
    setTodos([todo, ...todos])
  }

  return (
    <div>
      <Header />
      <TodoInput addTodo={addTodo}/>
      <div className="wrapper">
        <TodoList className="list" todos={todos} setTodos={setTodos}/>
        <DoneList className="done" todos={todos}/>
      </div>
    </div>
  )
}

export default App;