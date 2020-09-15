import React, { useState, useContext, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Alert, StyleSheet } from 'react-native'
import { Navbar } from './components/Navbar'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { THEME } from './theme'
import { TodoContext } from './context/todo/todoContext'

export const Main = () => {
    const todoContext = useContext(TodoContext)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        setTodos(todoContext.todos)
    }, [todoContext])

    const removeTodo = id => {
        const todo = todos.find(todo => todo.id === id)

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
                    todoContext.setTodoId(null)
                    todoContext.removeTodoDispatch(id)
                }
            }
            ],
            { cancelable: false }
        )
    }

    const changeTodo = (id, title) =>  todoContext.changeTodoDispatch(id, title)

    let content = <MainScreen 
                    todos={todos} 
                    addTodo={todoContext.addTodoDispatch} 
                    removeTodo={removeTodo} 
                    openTodo={todoContext.setTodoId}
                />

    if(todoContext.todoId){
        content = <TodoScreen 
                    todo={todos.find(todo => todo.id === todoContext.todoId)} 
                    goBack={() => todoContext.setTodoId(null)} 
                    removeTodo={removeTodo}
                    onSave={changeTodo}
                />
    }

    return (
        <View>
            <StatusBar style="auto" backgroundColor={THEME.MAIN_COLOR} />

            <Navbar />
            <View style={styles.container}>{ content }</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: THEME.PADDING_HORIZONTAL,
      paddingVertical: 20
    }
})
