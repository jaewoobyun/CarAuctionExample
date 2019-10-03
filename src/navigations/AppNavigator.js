import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import MyVehicleListScreen from '../screens/MyVehicleListScreen';
import SampleScreen from '../screens/SampleScreen';
import LoginScreen from '../screens/LoginScreen';
import VehicleDetailScreen from '@screens/VehicleDetailScreen';
import AuctionListScreen from '@screens/AuctionListScreen';
import VehicleEditorScreen from '@screens/VehicleEditorScreen';
import ListingEditorScreen from '@screens/ListingEditorScreen';

import HomeStack from './HomeStackNavigator';
import AuctionStack from './AuctionStackNavigator';
import SettingsStack from './SettingStackNavigator';

/** 1. CONFIG(PLATFORM 등) 설정 */
const defaultNavigationOptions = {
	headerTintColor : 'white',
	headerStyle     : {
		backgroundColor : 'tomato'
	}
};

const MainTab = createBottomTabNavigator(
	{
		MyCars   : HomeStack,
		Auction  : AuctionStack,
		Settings : SettingsStack
	},
	{
		tabBarOptions : {
			activeTintColor   : 'tomato',
			inactiveTintColor : 'gray'
		}
	}
);

const VehicleEditorStack = createStackNavigator({
	VehicleEditor : VehicleEditorScreen // 차 수정 스크린
});

const ListingEditorStack = createStackNavigator({
	ListingEditor : ListingEditorScreen // 옥션 리스팅 수정 스크린
});

const RootStack = createStackNavigator(
	{
		Main               : {
			screen : MainTab
		},
		ListingEditorStack,
		VehicleEditorStack,
		Login              : LoginScreen
	},
	{
		mode       : 'modal',
		headerMode : 'none'
	}
);

// const AppNavigator = createStackNavigator(
// 	{
// 		SampleHome: SampleHomeScreen,
// 		SampleDetail: SampleDetailScreen
// 	},
// 	{
// 		initialRouteName: 'SampleHome'
// 	}
// );

// const AppContainer = createAppContainer(AppNavigator);
const AppContainer = createAppContainer(RootStack);
export default AppContainer;
