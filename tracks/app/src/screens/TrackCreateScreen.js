import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';

import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import '../helpers/_mockLocation';

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);

  // rebuild the callback function in memory each time value of `recording`
  // is changed. Thus this will trigger useEffect in useLocation when `recording`
  // changes too (apart from shouldTrack)
  const callback = useCallback(
    location => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );

  const [error] = useLocation(isFocused, callback);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {error ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
