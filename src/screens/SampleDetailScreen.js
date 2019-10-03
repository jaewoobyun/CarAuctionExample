import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class SampleDetailScreen extends Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{ fontSize: 40, fontWeight: 'bold' }}> 상세 스크린! </Text>
				<TouchableOpacity onPress={() => this.props.navigation.push('SampleDetail')}>
					<Text style={{ fontSize: 30, color: 'blue' }}>디테일의 디테일 가기!</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
					<Text style={{ fontSize: 30, color: 'yellow' }}>뒤로 가기!</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.popToTop()}>
					<Text style={{ fontSize: 30, color: 'red' }}>처음으로 가기!</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
