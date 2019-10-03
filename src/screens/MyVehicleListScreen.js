import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	FlatList,
	StyleSheet,
	AsyncStorage
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import VehicleItem from '../components/vehicle/VehicleItem';

import { getMyVehicleList } from '@services/vehicle';

const mockData = [
	{
		vin          : 'abc',
		manufacturer : 'Tesla',
		model        : 'Model 3',
		year         : 2018,
		image        :
			'https://www.tesla.com/sites/default/files/images/model-3/model_3--side_profile.png?20170801'
	},
	{
		vin          : 'abc123',
		manufacturer : 'Tesla',
		model        : 'Model 3',
		year         : 2017,
		image        :
			'https://www.tesla.com/tesla_theme/assets/img/compare/model_s--side_profile.png?20170524'
	},
	{
		vin          : 'abc123',
		manufacturer : 'Tesla',
		model        : 'Model 3',
		year         : 2017,
		image        :
			'https://www.tesla.com/tesla_theme/assets/img/compare/model_s--side_profile.png?20170524'
	},
	{
		vin          : 'abc123',
		manufacturer : 'Tesla',
		model        : 'Model 3',
		year         : 2017,
		image        :
			'https://www.tesla.com/tesla_theme/assets/img/compare/model_s--side_profile.png?20170524'
	},
	{
		vin          : 'abc123',
		manufacturer : 'Tesla',
		model        : 'Model 3',
		year         : 2017,
		image        :
			'https://www.tesla.com/tesla_theme/assets/img/compare/model_s--side_profile.png?20170524'
	}
];

export default class MyVehicleListScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			refreshing : false,
			vehicles   : [ mockData ]
		};
	}

	refreshData = () => {
		AsyncStorage.getItem('user').then((resp) => {
			const user = JSON.parse(resp);
			console.log(user.email);

			getMyVehicleList(user.email).then((data) => {
				if (!data) {
					return false;
				} else {
					this.setState({ vehicles: data });
				}
			});
		});
	};

	renderItem = ({ item }) => {
		return (
			<VehicleItem
				{...item}
				onPress={() => {
					this.props.navigation.push('VehicleDetail', {
						vehicle : item,
						title   : item.model,
						vin     : item.vin
					});
				}}
			/>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					style={{ flexGrow: 1 }}
					// data={mockData}
					data={this.state.vehicles}
					renderItem={this.renderItem}
					onRefresh={this.refreshData}
					refreshing={this.state.refreshing}
					keyExtractor={(item, index) => item.vin}
					ItemSeparatorComponent={({ highlighted }) => (
						<View
							style={{
								height          : StyleSheet.hairlineWidth,
								marginLeft      : 20,
								marginRight     : -20,
								width           : '100%',
								backgroundColor : 'gray'
							}}
						/>
					)}
				/>
			</View>
		);
	}

	static navigationOptions = ({ navigation }) => {
		const params = navigation.state.params || {};

		return {
			headerRight : (
				<TouchableOpacity
					style={{ padding: 5, paddingRight: 15 }}
					onPress={() => {
						navigation.navigate('VehicleEditorStack');
					}}
				>
					<Ionicons name={'ios-add'} size={35} color={'white'} />
				</TouchableOpacity>
			),
			title       : 'My Cars'
		};
	};
}

const styles = StyleSheet.create({
	container : {
		flexDirection  : 'column',
		flexGrow       : 1,
		justifyContent : 'center',
		alignItems     : 'stretch'
	}
});
