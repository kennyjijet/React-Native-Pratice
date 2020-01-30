import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, Dimensions } from 'react-native';

export default function SeatScreen() {


    return (

        <View style={{ alignItems: "center" }}>
            <View style={styles.container}>
                {
                    [...Array(24).keys()].map(function (value, index) {
                        return (
                            <Image key={index}
                                style={{
                                    width: 50, height: 50,
                                }}
                                source={require('../assets/images/robot-dev.png')}
                            />)
                    })
                }
            </View>
        </View>

    );
}

SeatScreen.navigationOptions = {
    title: 'SeatScreen',
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //paddingTop: 15,
        //backgroundColor: '#fff',
        //justifyContent: 'center',
        //alignItems: 'center',
        //flexDirection: 'column',
        flexDirection: 'row',
        flexWrap: "wrap",
        width: 600
        //justifyContent: 'space-between',
        //alignSelf: 'baseline',
        //height: 500
    },
});


/*
this.state.data.map(function(item, i){
  console.log('test');
  return <li key={i}>Test</li>
})*/