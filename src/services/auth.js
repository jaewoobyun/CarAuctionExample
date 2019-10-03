export async function login(email, lastname) {
	//Fake Login
	console.log(`http://52.78.89.146:3000/api/Member/${email}`);
	const response = await fetch(
		// 'http://52.78.89.146:3000/api/Member/jaewoobyun1@gmail.com',
		`http://52.78.89.146:3000/api/Member/${email}`,
		{
			method  : 'GET',
			headers : {
				Accept : 'application/json'
			}
		}
	);
	console.log('---auth response-----');
	// console.log(response);

	if (!response.ok) {
		return false;
	}

	const data = await response.json();
	// console.log('-------login data------');
	// console.log(data);
	return data;
}
