import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Context } from '../context/BlogContext';

const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context); // returns prop `value` in BlogContext.Provider

  const renderItem = item => {
    return (
      <View style={styles.row}>
        <Text style={styles.title}>
          {item.title} - {item.id}
        </Text>
        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
          <Feather name="trash" style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id.toString()}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
