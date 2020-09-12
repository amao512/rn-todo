import React, { useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'
import { AppText } from '../components/ui/AppText'

export const TodoScreen = ({ todo, goBack, removeTodo, onSave }) => {
    const [modal, setModal] = useState(false)

    const saveHandler = title => {
        onSave(todo.id, title)
        setModal(false)
    }

    return (
        <View>
            <EditModal 
                visible={modal} 
                onCancel={setModal} 
                value={todo.title}
                onSave={saveHandler}
            />

            <AppCard style={styles.todo}>
                <AppText style={styles.title}>{todo.title}</AppText>

                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button title='Edit' onPress={() => setModal(true)} />
                    </View>
                    <View style={styles.button}>
                        <Button color={THEME.DANGER_COLOR} title='Remove' onPress={() => removeTodo(todo.id)} />
                    </View>
                </View>
                
            </AppCard>
            
            <Button color={THEME.GREY_COLOR} title='Back' onPress={goBack} />
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        marginBottom: 20
    },
    title: {
        fontSize: 24,
        textAlign: 'center'
    },
    buttons: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '45%'
    }
})