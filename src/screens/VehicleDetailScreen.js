import React, { Component } from 'react';
import {
	SectionList,
	Text,
	View,
	Image,
	ScrollView,
	StyleSheet,
	FlatList
} from 'react-native';
import IconText from '../components/IconText';
import { Ionicons } from '@expo/vector-icons';
import RoundButton from '../components/RoundButton';

import VehicleInfo from '@components/vehicle/VehicleInfo';
import VehicleStatusInfo from '@components/vehicle/VehicleStatusInfo';
import OfferListItem from '@components/vehicle/OfferListItem';
import moment from 'moment';

const sampleOffer = [
	{
		$class        : 'org.example.mynetwork.Offer',
		bidPrice      : 3500,
		listing       :
			'resource:org.example.mynetwork.VehicleListing#listingId:ABCD',
		member        :
			'resource:org.example.mynetwork.Member#memberB@acme.org',
		transactionId :
			'acc535a33d102b15e31e1f0468bdba22490c49c36380bd7efd4d273932d23c0b',
		timestamp     : '2018-12-03T06:28:39.510Z'
	},
	{
		$class        : 'org.example.mynetwork.Offer',
		bidPrice      : 2000,
		listing       :
			'resource:org.example.mynetwork.VehicleListing#listingId:ABCD',
		member        :
			'resource:org.example.mynetwork.Member#memberA@acme.org',
		transactionId :
			'9d9001b8048dab4fbaec43fef815fb4168320efde5ea8efcd349cc32684d90c7',
		timestamp     : '2018-12-03T06:27:55.241Z'
	}
];

class VehicleDetailScreen extends Component {
	static defaultProps = {};

	// constructor

	constructor(props) {
		super(props);
		// vehicle 전달받음.
		const vehicle = this.props.navigation.getParam('vehicle');
		// state 설정
		this.state = {
			vehicle,
			refreshing : false, // 초기값 refresh: false
			offers     : vehicle.year % 2 === 0 ? sampleOffer : [], // 임시 Offer
			isForSale  : vehicle.year % 2 === 0 // // 상태 임시
		};
	}

	// NavigationOptions
	static navigationOptions = ({ navigation }) => {
		return {
			title : navigation.getParam('title')
		};
	};

	renderItem = ({ item }) => {
		return <OfferListItem {...item} />;
	};
	renderSectionHeader = ({ section: { title, data } }) => {};
	refreshData = () => {
		this.setState({
			refreshing : true
		});
		fetch('http://localhost:3000/api/Offer')
			.then((r) => r.json())
			.then((result) => {
				console.log(result);
				this.setState({
					vehicleListing : result,
					refreshing     : false
				});
			});
	};
	render() {
		return (
			<ScrollView>
				{/* Vehicle 정보 */}
				<VehicleInfo {...this.state.vehicle} />
				<VehicleStatusInfo isForSale={this.state.isForSale} />
				{!this.state.isForSale ? (
					<RoundButton
						style={{ marginTop: 10 }}
						iconName={'ios-trending-up'}
						title={'이 차를 경매에 등록하기'}
						onPress={() => {
							this.props.navigation.navigate('ListingEditor', {
								vehicleId : this.props.navigation.getParam(
									'vin'
								)
							});
						}}
					/>
				) : (
					<View />
				)}
				<FlatList
					onRefresh={this.refreshData}
					data={this.state.offers}
					refreshing={this.state.refreshing}
					renderItem={this.renderItem}
					keyExtractor={(item) => item.transactionId}
					ItemSeparatorComponent={({ highlighted }) => (
						<View
							style={{
								height          : StyleSheet.hairlineWidth,
								marginLeft      : 20,
								width           : '100%',
								backgroundColor : 'gray'
							}}
						/>
					)}
				/>
			</ScrollView>
		);
	}
}

export default VehicleDetailScreen;
