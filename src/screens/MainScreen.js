import React, { useState, useEffect, useContext, useCallback } from 'react'
import { View, FlatList, StyleSheet, Image, Dimensions } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { THEME } from '../theme'
import { TodoContext } from '../context/todo/todoContext'
import { screenContext } from '../context/screen/screenContext'

export const MainScreen = () => {
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2)
    const { todos, addTodo, removeTodo, fetchTodos } = useContext(TodoContext)
    const { setTodoId } = useContext(screenContext)

    const loadTodos = useCallback(async () => fetchTodos(), [fetchTodos])

    useEffect(() => {
        loadTodos()
    }, [])

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
            setDeviceWidth(width)
        }

        Dimensions.addEventListener('change', update)

        return () => Dimensions.removeEventListener('change', update)
    })

    return (
        <View>
            <AddTodo addTodo={addTodo} />

            { todos.length === 0 ? (
                    <View style={styles.imgWrap}><Image style={styles.imgWrap} source={require('../../assets/no-items.png')} /></View>
                ) : (
                    <View style={{ width: deviceWidth, marginTop: 15 }}>
                        <FlatList
                            data={todos}
                            renderItem={({item}) => (
                                <Todo todo={item} removeTodo={removeTodo} openTodo={setTodoId} />
                            )}
                            keyExtractor={todo => todo.id}
                        />
                    </View>
                )}
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
