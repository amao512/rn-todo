import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet, Image, Dimensions } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { THEME } from '../theme'

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2)

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
            setDeviceWidth(width)
        }

        Dimensions.addEventListener('change', update)

        return () => Dimensions.removeEventListener('change', update)
    })

    let content = <View style={{ width: deviceWidth, marginTop: 15 }}>
        <FlatList
            data={todos}
            renderItem={({item}) => (
                <Todo todo={item} removeTodo={removeTodo} openTodo={openTodo} />
            )}
            keyExtractor={todo => todo.id.toString()}
        />
    </View>

    if(todos.length === 0){
        content = <View style={styles.imgWrap}><Image style={styles.imgWrap} source={require('../../assets/no-items.png')} /></View>
    }

    return (
        <View>
            <AddTodo addTodo={addTodo} />

            { content }
        </View>
    )
}

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    }
})
