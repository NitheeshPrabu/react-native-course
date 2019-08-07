import React, { Component } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-react-native-otp-e1089.cloudfunctions.net';

class SignInForm extends Component {
	constructor(props) {
		super(props);
		this.state = { phone: '', code: '' };
	}

	handleSubmit = async () => {
		const { phone, code } = this.state;
		try {
			let { data } = await axios.post(`${ROOT_URL}/verifyOtp`, { phone, code });
			firebase.auth().signInWithCustomToken(data.token);
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<View>
				<View style={{ marginBottom: 10 }}>
					<Input
						value={this.state.phone}
						onChangeText={phone => this.setState({ phone })}
						label="Enter Phone Number"
					/>
				</View>
				<View style={{ marginBottom: 10 }}>
					<Input
						value={this.state.code}
						onChangeText={code => this.setState({ code })}
						label="Enter OTP"
					/>
				</View>
				<Button onPress={this.handleSubmit} title="Submit" />
			</View>
		);
	}
}

export default SignInForm;