import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';

const Second = (props) => {
    console.log(props);
    const goToBackPage = () => {
        props.navigation.goBack();
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}> Hello Second Page!</Text>
            <Button title='Go Back!' onPress={goToBackPage} />
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