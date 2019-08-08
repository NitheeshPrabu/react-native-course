import { AsyncStorage } from 'react-native';
import * as Facebook from 'expo-facebook';

import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('FB_TOKEN');
  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('507910686643154', {
    permissions: ['public_profile']
  });

  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem('FB_TOKEN', token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
