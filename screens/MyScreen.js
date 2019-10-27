import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function LinksScreen() {
    return (
        <View style={styles.container}>
            <Text>I'm Ultra</Text>
        </View>
    );
}

LinksScreen.navigationOptions = {
    title: 'MyScreen',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
