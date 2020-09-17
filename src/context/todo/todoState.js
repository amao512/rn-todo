import React, { useReducer, useContext } from 'react'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_TODO, REMOVE_TODO, CHANGE_TODO, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR } from '../types'
import { screenContext } from '../screen/screenContext'
import { Alert } from 'react-native'

export const TodoState = ({ children }) => {
    const { setTodoId } = useContext(screenContext)

    const initialState = {
        todos: [],
        todoId: null,
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = async title => {
        const res = await fetch('https://rn-todo-app-53385.firebaseio.com/todos.json', {
            method: 'POST',
            contentType: 'application/json',
            body: JSON.stringify({ title })
        })
        const data = await res.json()

        dispatch({ type: ADD_TODO, title, id: data.name })
    }

    const removeTodo = id => {
        const todo = state.todos.find(todo => todo.id === id)

        Alert.alert(
            'Удаление элемента',
            `Вы уверены что хотите удалить "${todo.title}"`,
            [
            {
                text: 'Cancel',
                style: 'cancel'
            },
            {
                text: 'Remove',
                onPress: () => {
                    setTodoId(null)
                    dispatch({ type: REMOVE_TODO, id })
                }
            }
            ],
            { cancelable: false }
        )
    }

    const changeTodo = (id, title) => dispatch({ type: CHANGE_TODO, id, title })

    const showLoader = () => dispatch({ type: SHOW_LOADER })
    const hideLoader = () => dispatch({ type: HIDE_LOADER })
    const showError = error => dispatch({ type: SHOW_ERROR, error })
    const clearError = () => dispatch({ type: CLEAR_ERROR })

    const dispatches = { addTodo, removeTodo, changeTodo }

    return <TodoContext.Provider value={{...state, ...dispatches}}>{children}</TodoContext.Provider>
}
