const admin = require('firebase-admin');

module.exports = function(req, res) {
	if (!req.body.phone || !req.body.code) {
		return res.status(422).send({ error: 'Bad input, missing phone number or OTP' });
	}

	const phone = String(req.body.phone).replace(/[^\d]/g, '');
	const code = parseInt(req.body.code);
	
	admin.auth().getUser(phone)
	.then(() => {
		const ref = admin.database().ref('users/' + phone);
		return ref.on('value', snapshot => {
				ref.off();
				const user = snapshot.val();
				if (user.code !== code || !user.codeValid) {
					return res.status(422).send({ error: 'Invalid OTP' });
				}

				// reach here if valid
				ref.update({ codeValid: false });
				return admin.auth().createCustomToken(phone)
					.then(token => res.send({ token: token }));
			});
		}).catch(err => {
			return res.status(422).send(err);
		});
}