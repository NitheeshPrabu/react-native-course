import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
  const renderItem = item => {
    return <ResultsDetail result={item} />;
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultsList;
