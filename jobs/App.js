import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Notifications } from 'expo';

import Navigation from './src/RootNavigator';
import configureStore from './src/store';
import registerForPushNotifications from './src/services/pushNotifications';

const { store, persistor } = configureStore();

export default class App extends Component {
  componentDidMount() {
    registerForPushNotifications();
    Notifications.addListener(notification => {
      const {
        data: { text },
        origin
      } = notification;
      if (origin === 'received' && text) {
        Alert.alert('New Push Notification', text, [{ text: 'Ok.' }]);
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.containerStyle}>
            <Navigation />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1
  }
};
