import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';

import MyVehicleListScreen from '../screens/MyVehicleListScreen';
import SampleScreen from '../screens/SampleScreen';
import LoginScreen from '@screens/LoginScreen';
import SettingScreen from '@screens/SettingScreen';

import TabBarIcon from '../components/TabBarIcon';

/** 1. CONFIG(PLATFORM 등) 설정 */
const defaultNavigationOptions = {
	headerTintColor : 'white',
	headerStyle     : {
		backgroundColor : 'tomato'
	}
};

/*** 2. Navigator 정의 */
const SettingsStack = createStackNavigator(
	{
		Settings : SettingScreen
	},
	{
		defaultNavigationOptions
	}
);

/*** 3. NAVIGATOR 옵션 정의 */
SettingsStack.navigationOptions = {
	tabBarLabel : 'Settings',
	tabBarIcon  : ({ focused, horizontal, tintColor }) => (
		<TabBarIcon
			focused={focused}
			color={tintColor}
			name={Platform.OS === 'ios' ? 'ios-settings' : 'ios-settings'}
		/>
	)
};

export default SettingsStack;
