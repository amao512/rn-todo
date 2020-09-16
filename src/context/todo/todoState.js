import React, { useReducer, useContext } from 'react'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_TODO, REMOVE_TODO, CHANGE_TODO } from '../types'
import { screenContext } from '../screen/screenContext'
import { Alert } from 'react-native'

export const TodoState = ({ children }) => {
    const { setTodoId } = useContext(screenContext)

    const initialState = {
        todos: [{ id: Date.now(), title: 'Hello' }],
        todoId: null
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = todo => dispatch({ type: ADD_TODO, todo })
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

    const dispatches = { addTodo, removeTodo, changeTodo }

    return <TodoContext.Provider value={{...state, ...dispatches}}>{children}</TodoContext.Provider>
}
