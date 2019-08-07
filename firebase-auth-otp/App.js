import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import SignUpForm from './src/components/SignUpForm';
import SignInForm from './src/components/SignInForm';

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAPmo9ZPG0DmwsShFWc7XN3xd8N2LsKl0g",
      authDomain: "react-native-otp-e1089.firebaseapp.com",
      databaseURL: "https://react-native-otp-e1089.firebaseio.com",
      projectId: "react-native-otp-e1089",
      storageBucket: "",
      messagingSenderId: "946903621999",
      appId: "1:946903621999:web:8c9cc6ef5df92120"
    };
    // Initialize Firebase
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default App;