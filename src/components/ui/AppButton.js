import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { THEME } from '../../theme'
import { AppText } from './AppText'

export const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={{ ...styles.button, backgroundColor: color }}>
                <AppText style={styles.text}>{children}</AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    text: {
        color: '#fff'
    }
})