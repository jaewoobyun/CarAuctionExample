export async function getMyVehicleList(email) {
	let url = `http://52.78.89.146:3000/api/Vehicle?filter={"where":{"owner": "resource:org.acme.vehicle.auction.Member#${email}"}}`; // or #= %40

	console.log(url);
	const response = await fetch(url);
	if (response.ok) {
		return response.json();
	}
	return false;
}

export async function postVehicle(email, vin, manufacturer, model, year) {
	let url = `http://52.78.89.146:3000/api/Vehicle`;
	let listingId = new Date().valueOf();
	let body = {
		$class       : 'org.acme.vehicle.auction.Vehicle',
		vin          : vin,
		manufacturer : manufacturer,
		model        : model,
		year         : year,
		image        : String(
			'https://cdn.motor1.com/images/mgl/63KVE/s1/lamborghini-forsennato-concept.jpg'
		),
		owner        : 'resource:org.acme.vehicle.auction.Member#${email}'
	};

	const response = await fetch(url, {
		method  : 'POST',
		headers : {
			Accept         : 'application/json',
			'Content-Type' : 'application/json'
		},
		body    : JSON.stringify(body)
	});
	console.log('Post Vehicle Response');
	console.log(response);
	if (response.ok) {
		return await response.json();
	} else {
		tem = await response.json();
		console.error(temp);
	}
	return false;
}

export async function postVehicleListing(vehicleId, reservePrice, description) {
	let url = 'http://52.78.89.146:3000/api/VehicleListing'; // or #=%40
	let listingId = new Date().valueOf();
	let body = {
		$class       : 'org.acme.vehicle.auction.VehicleListing',
		listingId    : String(listingId),
		vehicle      : `org.acme.vehicle.auction.Vehicle#${vehicleId}`,
		reservePrice : reservePrice,
		description  : description,
		offers       : [],
		state        : 'FOR_SALE'
	};

	const response = await fetch(url, {
		method  : 'POST',
		headers : {
			Accept         : 'application/json',
			'Content-Type' : 'application/json'
		},
		// mode: "cors",
		//cache: "default",
		body    : JSON.stringify(body)
	});
	console.log('Post Vehicle Listing Response');
	console.log(response);
	if (response.ok) {
		return await response.json();
	} else {
		temp = await response.json();
		console.error(temp);
	}
	return false;
}

export async function getVehicleListingByVin(vin) {
	let url = 'http://52.78.89.146:3000/api/VehicleListing'; // or #=> %40

	filter = {
		where   : { vehicle: `org.acme.vehicle.auction.Vehicle#${vin}` },
		include : 'resolve',
		limit   : 1
	};

	const response = await fetch(url, {
		method  : 'GET',
		headers : {
			Accept         : 'application/json',
			'Content-Type' : 'application/json'
		}
	});
	console.log(response);
}
