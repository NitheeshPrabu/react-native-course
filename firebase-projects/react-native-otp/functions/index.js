const admin = require('firebase-admin');
const serviceAccount = require('./service_account.json');

const functions = require('firebase-functions');
const createUser = require('./create_user');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://react-native-otp-e1089.firebaseio.com"
  });

exports.createUser = functions.https.onRequest(createUser);