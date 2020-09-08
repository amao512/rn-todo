import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export const TodoScreen = ({ todo, goBack }) => {
    return (
        <View style={styles.todo}>
            <View style={styles.info}>
                <Text style={styles.text}>{todo.text}</Text>
            </View>
            <Button style={styles.button} color='#222' title='Back' onPress={goBack} />
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        
    },
    info: {
        height: '88%',
        fontSize: 20
    },
    text: {
        fontSize: 24,
        textAlign: 'center'
    },
    button: {}
})