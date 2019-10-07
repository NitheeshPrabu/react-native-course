import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import MapView, { Polyline } from 'react-native-maps';

import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');

  const track = state.find(track => track._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text h2>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{ ...initialCoords, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
      >
        <Polyline coordinates={track.locations.map(location => location.coords)} />
      </MapView>
    </>
  );
};

TrackDetailScreen.navigationOptions = {
  headerTitle: 'Track Details'
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default TrackDetailScreen;
