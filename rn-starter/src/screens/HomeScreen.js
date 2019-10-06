import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.textStyle}>Hi there!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => props.navigation.navigate('Components')}
      />
      <Button title="Go to List Demo" onPress={() => props.navigation.navigate('List')} />
      <Button title="Go to Image Demo" onPress={() => props.navigation.navigate('Image')} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default HomeScreen;
