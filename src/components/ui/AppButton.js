import React from 'react'
import { TouchableOpacity, View, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native'
import { THEME } from '../../theme'
import { AppText } from './AppText'

export const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR }) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
    return (
        <Wrapper onPress={onPress} activeOpacity={0.7}>
            <View style={{ ...styles.button, backgroundColor: color }}>
                <AppText style={styles.text}>{children}</AppText>
            </View>
        </Wrapper>
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