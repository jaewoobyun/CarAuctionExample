import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class SampleHomeScreen extends Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{ fontSize: 40, fontWeight: 'bold', color: 'red' }}> 홈 스크린! </Text>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('SampleDetail')}>
					<Text style={{ fontSize: 30, color: 'green' }}>디테일 가기!</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
