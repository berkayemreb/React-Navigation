import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Second = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}> Hello Second Page!</Text>
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
        fontStyle: 'italic',
        fontSize: 20,
    }
})

export default Second;