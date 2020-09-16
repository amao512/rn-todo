import React, { useState } from 'react'
import { Modal, View, TextInput, Button, StyleSheet, Alert } from 'react-native'
import { THEME } from '../theme'
import { AppButton } from './ui/AppButton'
import { AntDesign } from '@expo/vector-icons'

export const EditModal = ({ visible, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value)

    const saveHandler = () => {
        if(!title.trim()){
            Alert.alert('Пустая строка', 'Пожалуйста напишите что-нибудь!')
        } else {
            onSave(title)
        }
    }

    const cancelHandler = () => {
        onCancel(false)
        setTitle(value)
    }

    return (
        <Modal visible={visible} animationType='slide' transparent={false}>
            <View style={styles.wrap}>
                <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
                
                <View style={styles.buttons}>
                    <AppButton color={THEME.GREY_COLOR} onPress={cancelHandler}>
                        <AntDesign name="back" size={24} color="#fff" />
                    </AppButton>
                    <AppButton onPress={saveHandler}>
                        <AntDesign name="check" size={24} color="#fff" />
                    </AppButton>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    input: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        paddingLeft: 10,
        height: 40,
        fontSize: 20
    },
    buttons: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})