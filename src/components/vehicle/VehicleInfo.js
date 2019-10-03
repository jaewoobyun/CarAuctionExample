import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';

import IconText from '@components/IconText';

export default class VehicleInfo extends Component {
	static defaultProps = {
		image        :
			'https://image.shutterstock.com/z/stock-photo-internet-browser-error-message-no-image-available-handwritten-with-white-chalk-on-blackboard-with-39202789.jpg',
		vin          : '',
		manufacturer : '',
		model        : '',
		year         : ''
	};

	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					pagingEnabled={true}
					horizontal={true}
					contentContainerStyle={{ flexGrow: 1 }}
				>
					<Image
						style={styles.image}
						source={{ uri: this.props.image }}
					/>
				</ScrollView>
				<View style={styles.infoView}>
					<View style={styles.innerView} />
					<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
						<IconText iconName={'ios-barcode'}>
							{this.props.vin}
						</IconText>
						<IconText iconName={'ios-construct'}>
							{this.props.manufacturer}
						</IconText>
						<IconText iconName={'ios-car'}>
							{this.props.model}
						</IconText>
						<IconText iconName={'ios-calendar'}>
							{this.props.year}
						</IconText>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		flexDirection : 'column'
	},
	image     : {
		width      : '100%',
		height     : 150,
		resizeMode : 'cover'
	},
	infoView  : {
		flexGrow    : 1,
		paddingLeft : 10
	},
	innerView : {
		position        : 'absolute',
		height          : '70%',
		width           : 1,
		left            : '50%',
		top             : '15%',
		backgroundColor : '#aaa'
	}
});
