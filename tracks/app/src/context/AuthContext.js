import { AsyncStorage } from 'react-native';

import { navigate } from '../helpers/navigationRef';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNIN':
      return { token: action.payload, errorMessage: '' };
    case 'SIGNOUT':
      return { token: null, errorMessage: '' };
    case 'ADD_ERROR':
      return { ...state, errorMessage: action.payload };
    case 'CLEAR_ERRORS':
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

const clearErrors = dispatch => () => {
  dispatch({ type: 'CLEAR_ERRORS' });
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'SIGNIN', payload: response.data.token });
    navigate('TrackList');
  } catch (err) {
    dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with sign up' });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'SIGNIN', payload: response.data.token });
    navigate('TrackList');
  } catch (err) {
    dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with sign in' });
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'SIGNOUT' });
  navigate('loginFlow');
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'SIGNIN', payload: token });
    navigate('TrackList');
  } else {
    navigate('Signin');
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout, clearErrors, tryLocalSignin },
  { token: null, errorMessage: '' }
);
