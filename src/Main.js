import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet } from 'react-native'
import { Navbar } from './components/Navbar'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { THEME } from './theme'
import { screenContext } from './context/screen/screenContext'

export const Main = () => {
    const { todoId } = useContext(screenContext)

    return (
        <View style={styles.wrap}>
            <StatusBar style="auto" backgroundColor={THEME.MAIN_COLOR} />

            <Navbar />
            <View style={styles.container}>
                { todoId ? <TodoScreen /> : <MainScreen />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1
    },
    container: {
      paddingHorizontal: THEME.PADDING_HORIZONTAL,
      paddingVertical: 20,
      flex: 1
    },
})
