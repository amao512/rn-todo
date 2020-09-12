import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from '../theme'
import { AppText } from '../components/ui/AppText'

export const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <AppText style={styles.navbarLogo}>TODO</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        backgroundColor: THEME.MAIN_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 22
    },
    navbarLogo: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'roboto-bold'
    }
})
