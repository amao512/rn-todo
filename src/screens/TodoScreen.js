import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { THEME } from '../theme'

export const TodoScreen = ({ todo, goBack, removeTodo }) => {
    return (
        <View style={styles.todo}>
            <View style={styles.info}>
                <Text style={styles.text}>{todo.text}</Text>
            </View>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button color={THEME.GREY_COLOR} title='Back' onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button color={THEME.DANGER_COLOR} title='Remove' onPress={() => removeTodo(todo.id)} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {},
    info: {
        // height: '88%',
        fontSize: 20
    },
    text: {
        fontSize: 24,
        textAlign: 'center'
    },
    buttons: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '45%'
    }
})