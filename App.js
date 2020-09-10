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
  
  const addTodo = title => {
    if(!title.trim()){
      return Alert.alert(
        'Строка пустая',
        'Пожалуйста напишите что-нибудь!'
      )
    }

    setTodos(prevTodos => [...prevTodos, { id: Date.now(), title }])
  }

  const removeTodo = id => {
    const todo = todos.find(todo => todo.id === id)

    Alert.alert(
      'Удаление элемента',
      `Вы уверены что хотите удалить "${todo.title}"`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Remove',
          onPress: () => {
            setTodoId(null)
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
          }
        }
      ],
      { cancelable: false }
    )
  }

  const changeTodo = (id, title) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if(todo.id === id){
        todo.title = title
      }

      return todo
    }))
  }

  let content = <MainScreen 
                  todos={todos} 
                  addTodo={addTodo} 
                  removeTodo={removeTodo} 
                  openTodo={setTodoId}
                />

  if(todoId){
    const todo = todos.find(todo => todo.id === todoId)
    content = <TodoScreen 
                todo={todo} 
                goBack={() => setTodoId(null)} 
                removeTodo={removeTodo}
                onSave={changeTodo}
              />
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