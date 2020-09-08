import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
    return (
        <View>
            <AddTodo addTodo={addTodo} />

            <FlatList
                data={todos}
                renderItem={({item}) => (
                    <Todo todo={item} removeTodo={removeTodo} openTodo={openTodo} />
                )}
                keyExtractor={todo => todo.id.toString()}
                style={styles.todos}
            />
            { todos.length === 0 && <Text style={styles.noTodos}>No any todos!</Text> }
        </View>
    )
}

const styles = StyleSheet.create({
    todos: {
        marginTop: 10
    },
    noTodos: {
        justifyContent: 'center',
        padding: 15,
        color: 'red'
      }
})
