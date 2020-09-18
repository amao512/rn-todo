import React, { useReducer, useContext } from 'react'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_TODO, REMOVE_TODO, CHANGE_TODO, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR, FETCH_TODOS } from '../types'
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
            headers: { 'Content-Type': 'application/json' },
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
                onPress: async () => {
                    try {
                        clearError()
    
                        await fetch(`https://rn-todo-app-53385.firebaseio.com/todos/${id}.json`, {
                            method: 'DELETE',
                            headers: { 'Content-Type': 'application/json' }
                        })

                        setTodoId(null)
                        dispatch({ type: REMOVE_TODO, id })   
                    } catch (error) {
                        showError('Something went wrong...')
                        console.log(error)
                    } finally {
                        hideLoader()
                    }
                }
            }
            ],
            { cancelable: false }
        )
    }

    const changeTodo = async (id, title) => {
        try {
            clearError()
            await fetch(`https://rn-todo-app-53385.firebaseio.com/todos/${id}.json`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title })
            })

            dispatch({ type: CHANGE_TODO, id, title })
        } catch (error) {
            showError('Something went wrong...')
            console.log(error)
        } finally {
            hideLoader()
        }
    }

    const fetchTodos = async () => {
        try {
            showLoader()
            clearError()

            const res = await fetch('https://rn-todo-app-53385.firebaseio.com/todos.json', { 
                headers: { 'Content-Type': 'application/json' } 
            })
            const data = await res.json()
            const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))

            dispatch({ type: FETCH_TODOS, todos })            
        } catch (error) {
            showError('Something went wrong...')
            console.log(error)
        } finally {
            hideLoader()
        }
    }

    const showLoader = () => dispatch({ type: SHOW_LOADER })
    const hideLoader = () => dispatch({ type: HIDE_LOADER })
    const showError = error => dispatch({ type: SHOW_ERROR, error })
    const clearError = () => dispatch({ type: CLEAR_ERROR })

    const dispatches = { addTodo, removeTodo, changeTodo, fetchTodos }

    return <TodoContext.Provider value={{...state, ...dispatches}}>{children}</TodoContext.Provider>
}
