import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';

import MyVehicleListScreen from '../screens/MyVehicleListScreen';
// import SampleScreen from '../screens/SampleScreen';
import VehicleDetail from '@screens/VehicleDetailScreen';
import AuctionListScreen from '@screens/AuctionListScreen';

import TabBarIcon from '../components/TabBarIcon';
import VehicleDetailScreen from '@screens/VehicleDetailScreen';

/** 1. CONFIG(PLATFORM 등) 설정 */
const defaultNavigationOptions = {
	headerTintColor : 'white',
	headerStyle     : {
		backgroundColor : 'tomato'
	}
};

/*** 2. Navigator 정의 */
const AuctionStack = createStackNavigator(
	{
		AuctionList   : AuctionListScreen,
		VehicleDetail : VehicleDetailScreen
	},
	{
		defaultNavigationOptions
	}
);

/*** 3. NAVIGATOR 옵션 정의 */
AuctionStack.navigationOptions = {
	tabBarLabel : 'Auction',
	tabBarIcon  : ({ focused, horizontal, tintColor }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-trending-up' : 'ios-trending-up'}
		/>
	)
};

export default AuctionStack;
