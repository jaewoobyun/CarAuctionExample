import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class VehicleStatusInfo extends Component {
	static defaultProps = {
		isForSale : false
	};

	render() {
		if (this.props.isForSale) {
			return (
				<View
					style={{
						height          : 40,
						flexDirection   : 'row',
						alignItems      : 'center',
						justifyContent  : 'center',
						backgroundColor : 'white',
						marginTop       : 30
					}}
				>
					<Text style={{ color: 'tomato' }}>경매 진행중</Text>
				</View>
			);
		} else {
			return (
				<View
					style={{
						marginTop      : 30,
						paddingLeft    : 15,
						paddingRight   : 15,
						flexDirection  : 'column',
						alignItems     : 'center',
						justifyContent : 'center'
					}}
				>
					<Text style={{ color: '#333' }}>진행중인 경매가 없습니다.</Text>
				</View>
			);
		}
	}
}
