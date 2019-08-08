import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import WelcomeScreen from './src/screens/WelcomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import MapScreen from './src/screens/MapScreen';
import DeckScreen from './src/screens/DeckScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const ReviewNavigator = createStackNavigator({
  review: { screen: ReviewScreen },
  settings: { screen: SettingsScreen }
});

const MainNavigator = createBottomTabNavigator({
  map: { screen: MapScreen },
  deck: { screen: DeckScreen },
  review: { screen: ReviewNavigator }
});

const RootNavigator = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen },
  auth: { screen: AuthScreen },
  main: { screen: MainNavigator }
});

export default createAppContainer(RootNavigator);
