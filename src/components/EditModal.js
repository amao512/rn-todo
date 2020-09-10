import React, { useState } from 'react'
import { Modal, View, TextInput, Button, StyleSheet } from 'react-native'
import { THEME } from '../theme'

export const EditModal = ({ visible, cancelModal, text }) => {
    const [value, setValue] = useState(text)

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.wrap}>
                <TextInput style={styles.input} value={value} onChangeText={t => setValue(t)} />
                
                <View style={styles.buttons}>
                    <Button title='Cancel' color={THEME.DANGER_COLOR} onPress={() => cancelModal(false)} />
                    <Button title='Save' />
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