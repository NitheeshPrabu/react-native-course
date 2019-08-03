import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: null
    };
  }

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

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
