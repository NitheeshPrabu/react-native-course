import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => ({
  timeStamp: 10000000,
  coords: {
    speed: 0,
    heading: 0,
    accuracy: 5,
    altitudeAccuracy: 5,
    altitude: 5,
    latitude: 13.0453459 + increment * tenMetersWithDegrees,
    longitude: 80.1719335 + increment * tenMetersWithDegrees
  }
});

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 2000);
