import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';

const loginStackNav = createStackNavigator({
  Signup: SignupScreen,
  Signin: SigninScreen
});

const trackListStackNav = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});

const mainBottomTabNav = createBottomTabNavigator({
  trackListFlow: trackListStackNav,
  TrackCreate: TrackCreateScreen,
  Account: AccountScreen
});

const switchNavigtor = createSwitchNavigator({
  loginFlow: loginStackNav,
  mainFlow: mainBottomTabNav
});

export default createAppContainer(switchNavigtor);
