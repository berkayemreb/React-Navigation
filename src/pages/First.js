import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';

const First = (props) => {
    const goToSecondPage = () => {
        props.navigation.navigate('SecondPage');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}> Hello First Page!</Text>
            <Button title='Go To Second Page!' onPress={goToSecondPage} />
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