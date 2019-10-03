import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	ScrollView,
	TouchableOpacity,
	AsyncStorage
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IconTextInput from '../components/IconTextInput';
import RoundButton from '../components/RoundButton';
import IconText from '../components/IconText';

import postVehicleListing from 'src/services/vehicle';

class VehicleEditorScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			refreshing   : false,
			email        : 'jaewoobyun1@gmail.com',
			vin          : '',
			manufacturer : '',
			model        : '',
			year         : '',
			posts        : []
		};
	}

	postVehicleListing = async (email, vin, manufacturer, model, year) => {
		const data = await postVehicleListing(
			email,
			vin,
			manufacturer,
			model,
			year
		);

		if (data) {
			// console.log(data)
			await AsyncStorage.setItem('posts', JSON.stringify(data));
			console.log(posts);
		}
	};

	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle : (
				<IconText iconName={'ios-car'} size={20}>
					차 등록
				</IconText>
			),
			//navigation.getParam('otherParam', 'A Nested Details Screen'),
			headerLeft  : (
				<TouchableOpacity
					style={{ paddingLeft: 15 }}
					onPress={() => {
						navigation.goBack(null);
					}}
				>
					<Ionicons name={'ios-close'} size={44} color={'#aaa'} />
				</TouchableOpacity>
			)
		};
	};
	render() {
		return (
			<KeyboardAvoidingView
				style={{
					flex            : 1,
					backgroundColor : 'white'
				}}
				behavior="padding"
				keyboardVerticalOffset={64}
			>
				<ScrollView
					contentContainerStyle={{
						flex           : 1,
						flexDirection  : 'column',

						justifyContent : 'center'
					}}
				>
					<View style={styles.container}>
						<Text style={{ color: '#aaa' }}>
							<Ionicons name={'ios-warning'} /> 등록하시려는 차의 정보를 정확히
							입력해주세요.
						</Text>
						<IconTextInput
							style={{ marginTop: 10 }}
							iconName={'ios-barcode'}
							placeholder={'VIN'}
							autoFocus={true}
							onChange={(text) => this.setState({ vin: text })}
						/>
						<IconTextInput
							style={{ marginTop: 10 }}
							iconName={'ios-construct'}
							placeholder={'제조사'}
							onChange={(text) =>
								this.setState({ manufacturer: text })}
						/>
						<IconTextInput
							style={{ marginTop: 10 }}
							iconName={'ios-car'}
							placeholder={'모델명'}
							onChange={(text) => this.setState({ model: text })}
						/>
						<IconTextInput
							style={{ marginTop: 10 }}
							iconName={'ios-calendar'}
							placeholder={'연식'}
							keyboardType={'number-pad'}
							onChange={(text) => this.setState({ year: text })}
						/>
						<RoundButton
							iconName={'ios-add'}
							style={{ marginTop: 10 }}
							title={'등록 하기'}
							onPress={() => {
								console.log('등록하기 button pressed');
								this.postVehicleListing(
									this.state.email,
									this.state.vin,
									this.state.manufacturer,
									this.state.model,
									this.state.year
								);
							}}
						/>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		alignSelf     : 'center',
		flexDirection : 'column',
		padding       : 30,
		alignItems    : 'center'
	}
});

export default VehicleEditorScreen;
