import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { EMPLOYEE_UPDATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_FORM_CLEAR } from './types';

export const employeeFormClear = () => ({
  type: EMPLOYEE_FORM_CLEAR
});

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
});

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_FORM_CLEAR });
        Actions.pop();
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_FORM_CLEAR });
        Actions.pop();
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        // no need to dispatch
        Actions.pop();
      });
  };
};
