import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { View, StyleSheet, Text, FlatList, Alert } from 'react-native'
import Navbar from './src/Navbar';
import Input from './src/Input';
import Todo from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([])
  
  const addTodo = text => {
    if(!text.trim()){
      return Alert.alert('Input is empty!')
    }
    setTodos(prevTodos => [...prevTodos, { id: Date.now(), text }])
  }

  const removeTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <StatusBar style="auto" backgroundColor={'#d2d2d2'} />
      <Navbar />

      <View style={styles.container}>
        <Input addTodo={addTodo} />

        <FlatList
          data={todos}
          renderItem={({item}) => (
            <Todo todo={item} removeTodo={removeTodo} />
          )}
          keyExtractor={todo => todo.id.toString()}
          style={styles.todos}
        />
        { todos.length === 0 && <Text style={styles.noTodos}>No any todos!</Text> }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  todos: {
    marginTop: 10
  },
  noTodos: {
    justifyContent: 'center',
    padding: 15,
    color: 'red'
  }
})