// Import a library to help create a component
import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header />
    <AlbumList />
  </View>
);

export default App;
