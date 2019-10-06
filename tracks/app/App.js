import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import { setNavigator } from './src/helpers/navigationRef';

const loginStackNav = createStackNavigator({
  Signin: SigninScreen,
  Signup: SignupScreen
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
  ResolveAuth: ResolveAuthScreen,
  loginFlow: loginStackNav,
  mainFlow: mainBottomTabNav
});

const App = createAppContainer(switchNavigtor);

export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </LocationProvider>
  );
};
