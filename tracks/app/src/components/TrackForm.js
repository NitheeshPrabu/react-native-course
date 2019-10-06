import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';

import { Context as LocationContext } from '../context/LocationContext';

import Spacer from './Spacer';

const TrackForm = () => {
  const {
    state: { name, recording },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);

  return (
    <>
      <Spacer>
        <Input value={name} onChangeText={changeName} placeholder="Enter name" />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
    </>
  );
};

export default TrackForm;
