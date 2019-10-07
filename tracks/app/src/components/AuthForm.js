import React, { useState, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';

import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let passwordRef = useRef(null);

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCorrect={false}
        autoCapitalize="none"
        autoFocus
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.focus()}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
        ref={ref => (passwordRef = ref)}
        onSubmitEditing={() => onSubmit({ email, password })}
      />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <Spacer>
        <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  }
});

export default AuthForm;
