import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.navbarLogo}>TODO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 22
    },
    navbarLogo: {
        color: '#fff',
        fontSize: 24,
    }
})

export default Navbar
