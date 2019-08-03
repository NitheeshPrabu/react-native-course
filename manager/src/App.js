import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}
