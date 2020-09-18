import React, { useReducer, useContext } from 'react'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_TODO, REMOVE_TODO, CHANGE_TODO, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR, FETCH_TODOS } from '../types'
import { screenContext } from '../screen/screenContext'
import { Alert } from 'react-native'
import { Http } from '../../Http'

export const TodoState = ({ children }) => {
    const { setTodoId } = useContext(screenContext)

    const initialState = {
        todos: [],
        todoId: null,
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const fetchTodos = async () => {
        try {
            showLoader()
            clearError()

            const data = await Http.get('https://rn-todo-app-53385.firebaseio.com/todos.json')
            const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))

            dispatch({ type: FETCH_TODOS, todos })            
        } catch (error) {
            showError('Something went wrong...')
            console.log(error)
        } finally {
            hideLoader()
        }
    }

    const addTodo = async title => {
        const data = await Http.post('https://rn-todo-app-53385.firebaseio.com/todos.json', { title })

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
                        await Http.delete(`https://rn-todo-app-53385.firebaseio.com/todos/${id}.json`)
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
            await Http.patch(`https://rn-todo-app-53385.firebaseio.com/todos/${id}.json`, { title })
            dispatch({ type: CHANGE_TODO, id, title })
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
