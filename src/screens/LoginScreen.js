import React, { Component } from 'react';
import {
	Text,
	View,
	Button,
	Image,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	AsyncStorage
} from 'react-native';

import IconTextInput from '../components/IconTextInput';
import RoundButton from '../components/RoundButton';

import { login } from '@services/auth';

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameInput  : '',
			emailInput : ''
		};
	}

	submitLogin = async (email, name) => {
		//AsyncStorage.Clear();
		const data = await login(email, name);
		// console.log('data??????');
		// console.log(data);
		console.log(data);
		if (data) {
			console.log('-------data-------');
			// console.log(data);

			await AsyncStorage.setItem('user', JSON.stringify(data));
			return this.props.navigation.navigate('Home');
		}
		// [AsyncStorage의 4가지 사용.]
		// 1. AsyncStorage.setItem(“key”, Value)
		// 2. AsyncStorage.getItem(“key”)
		// 3. AsyncStorage.removeItem(“key”, Value)
		// 4. AsyncStorage.clear()

		//d = await AsyncStorage.getItem("user");
		//console.log(d);
	};

	render() {
		return (
			<KeyboardAvoidingView
				style={{
					flex           : 1,
					flexDirection  : 'column',
					justifyContent : 'center'
				}}
				behavior="padding"
			>
				<View style={styles.container}>
					<Text style={styles.title}>CAR AUCTION</Text>
					<IconTextInput
						style={{ marginTop: 10 }}
						iconName={'ios-person'}
						placeholder={'이름'}
						onChange={(text) => this.setState({ nameInput: text })}
					/>
					<IconTextInput
						style={{ marginTop: 10 }}
						iconName={'ios-mail'}
						placeholder={'이메일'}
						onChange={(text) => this.setState({ emailInput: text })}
					/>
					<RoundButton
						style={{ marginTop: 10 }}
						title={'회원가입 / 로그인'}
						onPress={() => {
							console.log('회원가입/ 로그인 pressed');
							this.submitLogin(
								this.state.emailInput,
								this.state.nameInput
							);
						}}
					/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	title     : {
		fontSize   : 30,
		color      : 'tomato',
		marginTop  : -20,
		fontWeight : '400'
	},
	container : {
		alignSelf     : 'center',
		flexDirection : 'column',
		padding       : 30,
		alignItems    : 'center'
	},
	textInput : {
		width       : 300,
		height      : 40,
		borderColor : 'black',
		borderWidth : 0.3
	}
});
