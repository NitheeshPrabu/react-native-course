const admin = require('firebase-admin');
const serviceAccount = require('./service_account.json');

const functions = require('firebase-functions');
const createUser = require('./create_user');
const requestOtp = require('./request_otp');
const verifyOtp = require('./verify_otp');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://react-native-otp-e1089.firebaseio.com"
  });

exports.createUser = functions.https.onRequest(createUser);
exports.requestOtp = functions.https.onRequest(requestOtp);
exports.verifyOtp = functions.https.onRequest(verifyOtp);