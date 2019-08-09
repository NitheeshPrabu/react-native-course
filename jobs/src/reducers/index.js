import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import JobsReducer from './JobsReducer';
import LikesReducer from './LikesReducer';

export default combineReducers({
  auth: AuthReducer,
  jobs: JobsReducer,
  likedJobs: LikesReducer
});
