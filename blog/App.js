import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { BlogProvider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blog'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
