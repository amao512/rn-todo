import React from 'react'
import { View, StyleSheet } from 'react-native'

export const AppCard = ({ children, style }) => {
    return (
        <View style={{ ...styles.card, ...style }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'space-between',
        // alignItems: 'center',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        elevation: 8,
        backgroundColor: '#fff',
        borderRadius: 10
    }
})