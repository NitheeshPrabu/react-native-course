const admin = require('firebase-admin');
const twilio = require('./twilio');

module.exports = function(req, res) {
	if (!req.body.phone) {
		return res.status(422).send({ error: 'Bad input, missing phone number' });
	}

	const phone = String(req.body.phone).replace(/[^\d]/g, '');

	admin.auth().getUser(phone)
		.then(userRecord => {
			// const code = Math.floor((Math.random() * 89999 + 1000));
			// return twilio.messages.create({
			// 	body: 'Your code is ' + 1111,
			// 	to: phone,
			// 	from: '+13612395663'
			// }, (err) => {
			// 	if (err) {
			// 		return res.status(422).send(err);
			// 	}
			// 	return admin.database().ref('users/' + phone)
			// 		.update({ code: code, codeValid: true }, () => {
			// 			return res.send({ success: true });
			// 		});
			// });

			return admin.database().ref('users/' + phone)
					.update({ code: 1111, codeValid: true }, () => {
						return res.send({ success: true });
					});
		}).catch(err => {
			return res.status(422).send(err);
		});
}