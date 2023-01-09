import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';

const Second = (props) => {
    console.log(props);
// NavigatorContainer dan gelen pakette 2 tane props vardır (navigate, route) bunlar hazır halde gelir. Sayfalar arası veri aktarımında route bu sekilde kullanılır 
    const user = props.route.params.username;

    const goToBackPage = () => {
        props.navigation.goBack();
// Sayfalar arası geçiş olayında ise navigation kullanılır. 
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}> Hello Second Page!</Text>
            <Text> {user} </Text>
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