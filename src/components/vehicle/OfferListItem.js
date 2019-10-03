import React, { Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

export default class OfferListItem extends Component {
	static defaultProps = {
		bidPrice  : '',
		member    : '',
		timestamp : ''
	};
	render() {
		return (
			<View
				style={{
					flexDirection  : 'row',
					justifyContent : 'space-between',
					padding        : 10,
					paddingLeft    : 15
				}}
			>
				<Text style={{ fontSize: 18, color: '#333' }}>
					{' '}
					$ {this.props.bidPrice}{' '}
				</Text>
				<View style={{ flexDirection: 'column', marginRight: 5 }}>
					<Text style={{ fontSize: 13, color: '#aaa' }}>
						{`by ${this.props.member.split('#')[1].split('@')[0]}`}
					</Text>
					<Text style={{ fontSize: 13, color: '#aaa' }}>
						{moment(this.props.timestamp).fromNow()}
					</Text>
				</View>
			</View>
		);
	}
}
