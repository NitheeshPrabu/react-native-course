import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC9U5gykpt0SaAxYbsnmkjJUSOXqVnQgog',
      authDomain: 'react-native-auth-b2253.firebaseapp.com',
      databaseURL: 'https://react-native-auth-b2253.firebaseio.com',
      projectId: 'react-native-auth-b2253',
      storageBucket: '',
      messagingSenderId: '140365694200',
      appId: '1:140365694200:web:4790f4e9a6fdd4d3'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
