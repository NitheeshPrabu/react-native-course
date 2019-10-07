import { useContext } from 'react';

import { navigate } from '../helpers/navigationRef';

import { Context as LocationContext } from '../context/LocationContext';
import { Context as TrackContext } from '../context/TrackContext';

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate('TrackList');
  };

  return [saveTrack];
};
