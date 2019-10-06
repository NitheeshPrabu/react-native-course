import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListScreen = props => {
  const friends = [
    { name: 'Friend #1', age: 21 },
    { name: 'Friend #2', age: 23 },
    { name: 'Friend #3', age: 21 },
    { name: 'Friend #4', age: 20 },
    { name: 'Friend #5', age: 22 },
    { name: 'Friend #6', age: 21 },
    { name: 'Friend #7', age: 21 },
    { name: 'Friend #8', age: 23 },
    { name: 'Friend #9', age: 22 },
    { name: 'Friend #10', age: 24 }
  ];

  const renderItem = function(item) {
    return <Text style={styles.textStyle}>{item.name}</Text>;
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={friends}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={friend => friend.name}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
