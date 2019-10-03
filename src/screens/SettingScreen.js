import React, { Component } from 'react';
import { View, Button } from 'react-native';

class SettingScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title : '설정'
		};
	};
	render() {
		return (
			<View
				style={{
					flex           : 1,
					justifyContent : 'center',
					alignItems     : 'center'
				}}
			>
				{/* other code from before here */}
				<Button
					title="Logout"
					onPress={() => this.props.navigation.navigate('Login')
					// console.log('Log Out Button Pressed')
					}
				/>
			</View>
		);
	}
}

export default SettingScreen;
