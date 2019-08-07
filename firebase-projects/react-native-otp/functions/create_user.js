const admin = require('firebase-admin');

module.exports = function(req, res) {
	// verify user provided phone number
	if (!req.body.phone) {
		return res.status(422).send({ error: 'Bad input, missing phone number'});
	}

	// format phone number
	const phone = String(req.body.phone).replace(/[^\d]/g, "");

	// create a new user account using phone number
	admin.auth().createUser({uid: phone})
	.then(user => res.send(user))	// respond to user request informing creation of account
	.catch(err => res.status(422).send({ error: err }));
}