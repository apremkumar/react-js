export const ADD_TODO = 'ADD_TODO'
export const addTodo = text => ({
    type: ADD_TODO,
    payload: { text }
})

export const REMOVE_TODO = 'REMOVE_TODO'
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text }
})

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED'
export const markTodoAsCompleted = text => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { text }
})