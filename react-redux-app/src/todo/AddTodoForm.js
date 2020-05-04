import React, { useState } from "react"
import { connect } from "react-redux"
import { addTodo } from "./actions"

import "./AddTodoForm.css"

const AddTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('')
    return (
        <div className="form-todo-add">
            <input
                className="txt-todo-input"
                type="text"
                placeholder="Type you new TODO Item"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button
                className="btn-todo-add"
                onClick={() => {
                    const isDuplicate = todos.some(todo => todo.text === inputValue)
                    if (!isDuplicate) {
                        onCreatePressed(inputValue)
                        setInputValue('')
                    }
                }}
            >
                Add
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)