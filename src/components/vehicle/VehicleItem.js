import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class VehicleItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<TouchableOpacity
				style={styles.touchable}
				onPress={this.props.onPress}
			>
				<Image
					style={styles.image}
					source={{ uri: this.props.image }}
				/>
				<View style={styles.titleView}>
					<Text style={styles.title}>{this.props.manufacturer}</Text>
					<View style={styles.detailIconView}>
						<Ionicons
							name={'ios-calendar'}
							size={15}
							style={{ marginRight: 5 }}
							color={'#666'}
						/>
						<Text style={styles.detail}>{this.props.year}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	touchable      : {
		height        : 90,
		flexDirection : 'row',
		alignItems    : 'center'
	},
	image          : {
		height      : 90,
		width       : 90,
		resizeMode  : 'contain',
		marginRight : 10,
		marginLeft  : 20
	},
	titleView      : {
		flexDirection : 'column'
	},
	title          : {
		fontSize   : 22,
		color      : '#333',
		fontWeight : '400'
	},
	detailIconView : {
		flexDirection : 'row',
		alignItems    : 'center'
	},
	detail         : {
		marginLeft : 5,
		fontSize   : 12,
		color      : '#666',
		fontWeight : '400'
	}
});
