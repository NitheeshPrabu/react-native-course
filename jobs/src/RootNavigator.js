import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import { Icon } from 'react-native-elements';

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

const MainNavigator = createBottomTabNavigator(
  {
    map: {
      screen: MapScreen,
      navigationOptions: {
        title: 'Map',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="my-location" size={30} color={tintColor} />;
        }
      }
    },
    deck: {
      screen: DeckScreen,
      navigationOptions: {
        title: 'Jobs',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="description" size={30} color={tintColor} />;
        }
      }
    },
    review: {
      screen: ReviewNavigator,
      navigationOptions: {
        title: 'Review Jobs',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="favorite" size={30} color={tintColor} />;
        }
      }
    }
  },
  {
    tabBarOptions: {
      labelStyle: { fontSize: 12 }
    }
  }
);

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
