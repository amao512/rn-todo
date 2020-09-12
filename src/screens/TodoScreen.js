import React, { useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'
import { AppText } from '../components/ui/AppText'
import { AppButton } from '../components/ui/AppButton'
import { MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons'

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
                        <AppButton onPress={() => setModal(true)}>
                            <MaterialCommunityIcons name="square-edit-outline" size={20} color="#fff" />
                        </AppButton>
                    </View>
                    <View style={styles.button}>
                        <AppButton color={THEME.DANGER_COLOR} onPress={() => removeTodo(todo.id)}>
                            <FontAwesome name="remove" size={20} color="#fff" />
                        </AppButton>
                    </View>
                </View>
                
            </AppCard>
            
            <AppButton color={THEME.GREY_COLOR} onPress={goBack}>
                <AntDesign name="back" size={20} color="#fff" />
            </AppButton>
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