import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    LinksScreen: { screen: LinksScreen },
    SettingsScreen: { screen: SettingsScreen }
}, {
    initialRouteName: 'Home',
}
);

const App = createAppContainer(MainNavigator);

export default App;