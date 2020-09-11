import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from './ui/AppCard'

export const Todo = ({ todo, removeTodo, openTodo }) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.5} 
            onLongPress={() => removeTodo(todo.id)}
            onPress={() => openTodo(todo.id)}
        >
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        padding: 20,
        marginBottom: 10,
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.1,
        shadowOffset: { width: 2, height: 2 },
        elevation: 2,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 2
    }
})
