import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LinksScreen from './screens/LinksScreen';
import SeatScreen from './screens/SeatScreen';

import { createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    LinksScreen: { screen: LinksScreen },
    SeatScreen: { screen: SeatScreen },
});

const App = createAppContainer(MainNavigator);

export default App;