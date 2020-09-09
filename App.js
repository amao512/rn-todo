import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { View, Alert, StyleSheet } from 'react-native'
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'
import { THEME } from './src/theme'

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([])
  
  const addTodo = text => {
    if(!text.trim()){
      return Alert.alert('Input is empty!')
    }
    setTodos(prevTodos => [...prevTodos, { id: Date.now(), text }])
  }

  const removeTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    setTodoId(null)
  }

  let content = <MainScreen 
                  todos={todos} 
                  addTodo={addTodo} 
                  removeTodo={removeTodo} 
                  openTodo={setTodoId}
                />

  if(todoId){
    const todo = todos.find(todo => todo.id === todoId)
    content = <TodoScreen todo={todo} goBack={() => setTodoId(null)} removeTodo={removeTodo} />
  }

  return (
    <View>
      <StatusBar style="auto" backgroundColor={THEME.MAIN_COLOR} />
        <Navbar />

      <View style={styles.container}>
        { content }
      </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15
  }
})