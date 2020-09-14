import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { THEME } from '../theme'
import { AppText } from '../components/ui/AppText'

export const Navbar = () => {
    return (
        <View style={{...styles.navbar, ...Platform.select({
            ios: styles.navbarIos,
            android: styles.navbarAndroid
        })}}>
            <AppText style={styles.navbarLogo}>TODO</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 22
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    navbarIos: {
        borderBottomColor: THEME.MAIN_COLOR
    },
    navbarLogo: {
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
        fontSize: 24,
        fontFamily: 'roboto-bold'
    }
})
