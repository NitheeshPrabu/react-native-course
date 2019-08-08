import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

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
  welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  auth: {
    screen: AuthScreen,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  main: {
    screen: MainNavigator,
    navigationOptions: {
      tabBarVisible: false
    }
  }
});

export default createAppContainer(RootNavigator);
