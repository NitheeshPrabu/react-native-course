import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import { Context as AuthContext } from '../context/AuthContext';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const { state, signin, clearErrors } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrors} />
      <AuthForm
        headerText="Sign In to Your Account"
        submitButtonText="Sign In"
        errorMessage={state.errorMessage}
        onSubmit={signin}
      />
      <NavLink routeName="Signup" linkText="Don't have an account? Sign up instead" />
    </View>
  );
};

SigninScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
});

export default SigninScreen;
