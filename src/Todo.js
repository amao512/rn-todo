import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Todo = ({ todo, removeTodo }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => removeTodo(todo.id)}>
            <View style={styles.todo}>
                <Text>{todo.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        borderStyle: 'solid',
        borderColor: '#222',
        borderWidth: 1,
        padding: 10,
        marginTop: 10
    }
})

export default Todo
