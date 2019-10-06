import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer YNXRzBv3WZQn1RBRnwxRa3U2g-Pj41amKfUSjmupobXDDWPKav_EveEXWSzzKs7r6P1RDpluQ4i2PmQ0jQA-UE2-IQ85c9AHN16rkzD9EFEKi5k69YevJz6GtKaZXXYx'
  }
});
