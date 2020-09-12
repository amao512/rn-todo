import React from 'react'
import { View, FlatList, StyleSheet, Image } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {

    let content = <View style={styles.todoList}>
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
    todoList: {
        marginTop: 10,
    },
    imgWrap: {
        height: 300,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    }
})
