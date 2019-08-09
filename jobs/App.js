import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigation from './src/RootNavigator';
import configureStore from './src/store';

const { store, persistor } = configureStore();

export default class App extends Component {
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
