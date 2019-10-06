import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import { Context as AuthContext } from '../context/AuthContext';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
  const { state, signup, clearErrors } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrors} />
      <AuthForm
        headerText="Sign Up for Tracker"
        submitButtonText="Sign Up"
        errorMessage={state.errorMessage}
        onSubmit={signup}
      />
      <NavLink routeName="Signin" linkText="Already have any account? Sign in instead" />
    </View>
  );
};

// can be a function returning an object, or just directly an object, like so
SignupScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
});

export default SignupScreen;
