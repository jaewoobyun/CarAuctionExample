import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import TabBarIcon from './src/components/TabBarIcon';

// import VectorIconExample from './src/components/VectorIconExample';
// import LoginScreen from './src/screens/LoginScreen';
// import SampleHomeScreen from './src/screens/SampleHomeScreen';
// import SampleDetailScreen from './src/screens/SampleDetailScreen';

// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';

// import MyVehicleListScreen from './src/screens/MyVehicleListScreen';

import AppNavigator from './src/navigations/AppNavigator';

const DefaultScreen = (props) => {
	return (
		<View>
			<Text>Screen 구조를 위한 Sample Screen</Text>
		</View>
	);
};

// export default function App() {
// 	return (
// 		<View style={styles.container}>
// 			{/*<VectorIconExample />*/}
// 			{/*<LoginScreen />*/}
// 			<SampleHomeScreen />
// 		</View>
// 	);
// }

// export default AppNavigator;

export default function() {
	return <AppNavigator />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
