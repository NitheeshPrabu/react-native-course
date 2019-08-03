import React, { Component } from 'react';
import { View, NativeModules } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const { UIManager } = NativeModules;

export default class App extends Component {
  constructor() {
    super();
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}
