import React from "react"
import AddTodoForm from "./AddTodoForm"
import TodoListItem from "./TodoListItem"
import { connect } from "react-redux"

import { removeTodo, markTodoAsCompleted } from "./actions"

const TodoList = ({ todos = [], onRemovePressed, onDonePressed }) => (
    <div className="list-wrapper">
        <AddTodoForm />
        {todos.map(todo => <TodoListItem
            key={todo.text}
            todo={todo}
            onDonePressed={onDonePressed}
            onRemovePressed={onRemovePressed} />)}
    </div>
)

const mapStateToProps = state => ({
    todos: state.todos
})
const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onDonePressed: text => dispatch(markTodoAsCompleted(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)