import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.input}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginVertical: 10
  },
  input: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
