import _ from 'lodash';

import { LIKE_JOB, CLEAR_LIKED_JOBS } from '../actions/types';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LIKE_JOB:
      return _.uniqBy([action.payload, ...state], 'id');
    case CLEAR_LIKED_JOBS:
      return [];
    default:
      return state;
  }
}
