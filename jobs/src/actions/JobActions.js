import axios from 'axios';
import qs from 'qs';
import striptags from 'striptags';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import { FETCH_JOBS, LIKE_JOB, CLEAR_LIKED_JOBS } from './types';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');

const LOCATION_ROOT_URL = 'https://us1.locationiq.com/v1/search.php?key=09d8e48d7a1ecf&';
const LOCATION_QUERY_PARAMS = {
  format: 'json'
};

const JOB_ROOT_URL = 'https://jobs.github.com/positions.json?';
const JOB_QUERY_PARAMS = {
  description: 'javascript'
};

const buildLocationUrl = location => {
  const query = qs.stringify({ q: location, ...LOCATION_QUERY_PARAMS });
  return `${LOCATION_ROOT_URL}${query}`;
};

const buildJobsUrl = ({ latitude, longitude }) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, lat: latitude, long: longitude });
  return `${JOB_ROOT_URL}${query}`;
};

const getLatLong = async (location, region) => {
  try {
    const url = buildLocationUrl(location);
    let { data } = await axios.get(url);
    return { latitude: data[0].lat, longitude: data[0].lon };
  } catch (err) {
    return region;
  }
};

export const fetchJobs = (region, callback) => async dispatch => {
  try {
    const jobsUrl = buildJobsUrl(region);
    let { data } = await axios.get(jobsUrl);
    let jobs = await Promise.all(
      data.map(async job => {
        let { latitude, longitude } = await getLatLong(job.location, region);
        return {
          ...job,
          description: striptags(job.description).substring(0, 100),
          created_at: timeAgo.format(new Date(job.created_at)),
          latitude,
          longitude
        };
      })
    );
    dispatch({ type: FETCH_JOBS, payload: jobs });
    callback();
  } catch (err) {
    console.log(err);
  }
};

export const likeJob = job => {
  return { type: LIKE_JOB, payload: job };
};

export const clearLikedJobs = () => {
  return { type: CLEAR_LIKED_JOBS };
};
