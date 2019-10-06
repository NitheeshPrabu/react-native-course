import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
  const { state, getBlogPosts, deleteBlogPost } = useContext(Context); // returns prop `value` in BlogContext.Provider

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  const renderItem = item => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
        <View style={styles.row}>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
            <Feather name="trash" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id.toString()}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" style={styles.headerIcon} />
      </TouchableOpacity>
    )
  };
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
  },
  headerIcon: {
    fontSize: 30,
    marginRight: 10
  }
});

export default IndexScreen;
