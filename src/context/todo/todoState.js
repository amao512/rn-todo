import React, { useReducer } from 'react'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_TODO, REMOVE_TODO, CHANGE_TODO, SET_TODO_ID } from '../types'

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [{ id: Date.now(), title: 'Hello' }],
        todoId: null
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const setTodoId = id => dispatch({ type: SET_TODO_ID, id })
    const addTodoDispatch = todo => dispatch({ type: ADD_TODO, todo })
    const removeTodoDispatch = id => dispatch({ type: REMOVE_TODO, id })
    const changeTodoDispatch = (id, title) => dispatch({ type: CHANGE_TODO, id, title })

    const dispatches = { setTodoId, addTodoDispatch, removeTodoDispatch, changeTodoDispatch }

    return <TodoContext.Provider value={{...state, ...dispatches}}>{children}</TodoContext.Provider>
}
