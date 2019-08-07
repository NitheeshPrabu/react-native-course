import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-react-native-otp-e1089.cloudfunctions.net';

class SignUpForm extends Component {
	constructor(props) {
		super(props);
		this.state = { phone: '' };
	}

	// handleSubmit = () => {
	// 	axios.post(`${ROOT_URL}/createUser`, {
	// 		phone: this.state.phone	
	// 	}).then(user => {
	// 		axios.post(`${ROOT_URL}/requestOtp`, {
	// 			phone: this.state.phone
	// 		});
	// 	})
	// }

	handleSubmit = async () => {
		try {
			await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
			await axios.post(`${ROOT_URL}/requestOtp`, { phone: this.state.phone });
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
				<Button onPress={this.handleSubmit} title="Submit" />
			</View>
		);
	}
}

export default SignUpForm;