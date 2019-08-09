import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/es/constants';

import { LIKE_JOB, CLEAR_LIKED_JOBS } from '../actions/types';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload) return action.payload.likedJobs;
      return [];
    case LIKE_JOB:
      return _.uniqBy([action.payload, ...state], 'id');
    case CLEAR_LIKED_JOBS:
      return [];
    default:
      return state;
  }
}
