import React, { Component } from 'react';
import { Text, View, TextInput, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default class MyLogin extends Component {
	static defaultProps = {};

	//MARK: constructor
	constructor(props) {
		super(props);
		this.state = {};
	}

	//MARK: render
	render() {
		return (
			<KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="padding">
				<View style={styles.container}>
					<Text style={styles.title}>CAR AUCTION</Text>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	keyboardAvoidingView: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center'
	},
	container: {
		alignSelf: 'center',
		flexDirection: 'column',
		padding: 30,
		alignItems: 'center'
	},
	title: {
		fontSize: 30,
		color: 'tomato',
		fontWeight: '400'
	},
	textInput: {
		width: 300,
		height: 40,
		borderColor: 'black',
		borderWidth: 0.3
	},
	button: {}
});
