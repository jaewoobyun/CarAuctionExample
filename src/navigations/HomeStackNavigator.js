import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';

import MyVehicleListScreen from '../screens/MyVehicleListScreen';
// import SampleDetailScreen from '../screens/SampleDetailScreen';
import VehicleDetailScreen from '@screens/VehicleDetailScreen';

import SampleScreen from '../screens/SampleScreen';
import TabBarIcon from '../components/TabBarIcon';

/** 1. CONFIG(PLATFORM 등) 설정 */
const defaultNavigationOptions = {
	headerTintColor : 'white',
	headerStyle     : {
		backgroundColor : 'tomato'
	}
};

/**2. Navigator 정의 **/
const HomeStack = createStackNavigator(
	{
		Home          : MyVehicleListScreen, //home
		VehicleDetail : VehicleDetailScreen //car detail screen
	},
	{
		defaultNavigationOptions //navigation option
	}
);

/**3. NAVIGATOR 옵션 정의 */
HomeStack.navigationOptions = {
	tabBarLabel : 'MyCars',
	tabBarIcon  : ({ focused, horizontal, tintColor }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-car' : 'ios-car'}
		/>
	)
};

export default HomeStack;
