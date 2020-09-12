import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { AppTextBold } from '../components/ui/AppTextBold'

export const Todo = ({ todo, removeTodo, openTodo }) => {
    const [deleting, setDeleting] = useState(false)

    const onRemove = () => {
        setDeleting(true)
        removeTodo(todo.id)
    }

    return (
        <TouchableOpacity 
            activeOpacity={0.5} 
            onLongPress={onRemove}
            onPress={() => openTodo(todo.id)}
        >
            <View style={styles.todo(deleting)}>
                <AppTextBold style={styles.text}>{todo.title}</AppTextBold>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: (deleting) => ({
        padding: 20,
        marginBottom: 10,
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.1,
        shadowOffset: { width: 2, height: 2 },
        elevation: 2,
        backgroundColor: !deleting ? '#fff' : 'red',
        borderRadius: 10,
        margin: 2
    }),
    text: {
        fontFamily: 'roboto-bold'
    }
})
