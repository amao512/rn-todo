import React, { useState } from 'react'
import { Modal, View, TextInput, Button, StyleSheet, Alert } from 'react-native'
import { THEME } from '../theme'

export const EditModal = ({ visible, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value)

    const saveHandler = () => {
        if(!title.trim()){
            Alert.alert('Пустая строка', 'Пожалуйста напишите что-нибудь!')
        } else {
            onSave(title)
        }
    }

    return (
        <Modal visible={visible} animationType='slide' transparent={false}>
            <View style={styles.wrap}>
                <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
                
                <View style={styles.buttons}>
                    <Button title='Cancel' color={THEME.DANGER_COLOR} onPress={() => onCancel(false)} />
                    <Button title='Save' onPress={saveHandler}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%',
        padding: 10
    },
    buttons: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    }
})