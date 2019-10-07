import React, { useContext, useCallback } from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

import Map from '../components/Map';
import TrackForm from '../components/TrackForm';

// import '../helpers/_mockLocation';   // Use only when testing

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext);

  // rebuild the callback function in memory each time value of `recording`
  // is changed. Thus this will trigger useEffect in useLocation when `recording`
  // changes too (apart from shouldTrack)
  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [error] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {error ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name="plus" size={20} />
};

export default withNavigationFocus(TrackCreateScreen);
