import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { THEME } from '../theme'

export const AddTodo = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const onPress = () => {
        addTodo(value)
        setValue('')
    }

    return (
        <View style={styles.addTodo}>
            <TextInput 
                style={styles.input}
                placeholder="Add Todo"
                value={value}
                onChangeText={text => setValue(text)}
            />
            <Button onPress={onPress} color={THEME.MAIN_COLOR} style={styles.button} title="add" />
        </View>
    )
}

const styles = StyleSheet.create({
    addTodo: {
        flexDirection: 'column'
    },
    input: {
        paddingLeft: 10,
        height: 30,
        marginBottom: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderStyle: 'solid',
        borderBottomWidth: 1
    },
    button: {
        marginTop: 10
    }
})
