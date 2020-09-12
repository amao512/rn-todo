import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Keyboard } from 'react-native'
import { THEME } from '../theme'
import { AntDesign } from '@expo/vector-icons'

export const AddTodo = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const onPress = () => {
        addTodo(value)
        setValue('')
        Keyboard.dismiss()
    }

    return (
        <View style={styles.addTodo}>
            <TextInput 
                style={styles.input}
                placeholder="Add Todo"
                value={value}
                onChangeText={text => setValue(text)}
            />
            <AntDesign.Button onPress={onPress} color={THEME.MAIN_COLOR} name="pluscircleo" size={24}  >
                Add
            </AntDesign.Button>
            {/* <Button onPress={onPress} color={THEME.MAIN_COLOR} style={styles.button} title="add" /> */}
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
