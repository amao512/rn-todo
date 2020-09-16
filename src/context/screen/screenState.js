import React, { useReducer } from 'react'
import { screenContext } from './screenContext'
import { screenReducer } from './screenReducer'
import { SET_TODO_ID } from '../types'

export const ScreenState = ({ children }) => {
    const initialState = {
        todoId: null
    }
    const [state, dispatch] = useReducer(screenReducer, initialState)

    const setTodoId = id => dispatch({ type: SET_TODO_ID, id })

    return (
        <screenContext.Provider value={{ ...state, setTodoId }}>
            {children}
        </screenContext.Provider>
    )
}
