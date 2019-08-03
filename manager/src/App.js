import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import RouterComponent from './Router';

export default class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyAaDKlRXWZ_xLmoBKI8AJ2nNz_4pdDt0fs',
      authDomain: 'react-native-manager-2f750.firebaseapp.com',
      databaseURL: 'https://react-native-manager-2f750.firebaseio.com',
      projectId: 'react-native-manager-2f750',
      storageBucket: '',
      messagingSenderId: '707237043292',
      appId: '1:707237043292:web:88edf680c400231c'
    };

    firebase.initializeApp(config);
  }

  render() {
    // reducers, initial state, store-enhancers (typically middleware)
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <RouterComponent />
        </View>
      </Provider>
    );
  }
}
