import React from "react"
import "./TodoListItem.css"

const TodoListItem = ({ todo, onRemovePressed, onDonePressed }) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="btn-container">
            {todo.isCompleted ? 'Task Completed' : <button
                className="btn-todo-done"
                onClick={() => onDonePressed(todo.text)}
            >
                Done
            </button>}
            <button
                className="btn-todo-remove"
                onClick={() => onRemovePressed(todo.text)}
            >Remove</button>
        </div>
    </div>
)

export default TodoListItem