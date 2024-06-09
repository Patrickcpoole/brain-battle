import { Client, Account, ID } from 'react-native-appwrite';

export const config = {
	endpoint: 'https://cloud.appwrite.io/v1',
	platform: 'com.brainbattle.app',
	projectId: '664eb7990012ea2e93ff',
	databaseId: '6663f45b0009273e0171',
	userColellectionId: '6663f48c0025ec3e8ee9',
};

// Init your React Native SDK
const client = new Client();

client
	.setEndpoint(config.endpoint) // Your Appwrite Endpoint
	.setProject(config.projectId) // Your project ID
	.setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

// Register User
export const createUser = () => {
	account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe').then(
		function (response) {
			console.log(response);
		},
		function (error) {
			console.log(error);
		}
	);
};
