import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const First = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}> Hello First Page!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 26,
    }
})

export default First;