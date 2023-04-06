import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Todo } from "../app/App";

interface TodoListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    todos: Todo[],
    setTodos: any
}

export default function TodoList({todos, setTodos}: TodoListProps) {

    const todosInProgress = todos.filter((todo) => {
        return !todo.isDone;
    })

    function updateCheckedItem(todo: Todo) {
        todo.isDone = !todo.isDone;
        todos[todo.id] = todo;

        setTodos([...todos])
    }

    return (
        
        
        <div id="todo-list" className="list">
            <h2 className="title">Todo</h2>
            <ul>
                {todos.map((todo: Todo) => {
                    return (
                        <li key={todo.id}>
                            <input type="checkbox" defaultChecked={todo.isDone} onChange={(e) => {
                                updateCheckedItem(todo);
                            }} />
                            {todo.description}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}