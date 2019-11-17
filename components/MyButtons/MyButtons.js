import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Button } from 'react-native-elements';

const titleStyle = StyleSheet.create({

    loginText: { color: '#000000' }

});


const buttonStyle = StyleSheet.create({
    bigRed: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    loginScreenButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#DDDDDD',
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },

});

export default function MyButtons(props) {
    return (
        <Button
            titleStyle={titleStyle.loginText}
            buttonStyle={buttonStyle.loginScreenButton}
            title={props.name}
            onPress={props.onPress}
        />
    );
}
