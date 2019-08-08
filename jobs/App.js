import React, { Component } from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import Navigation from './src/RootNavigator';
import store from './src/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.containerStyle}>
          <Navigation />
        </View>
      </Provider>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1
  }
};
