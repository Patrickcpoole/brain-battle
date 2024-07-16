import {
	Client,
	Account,
	Avatars,
	Databases,
	ID,
	Query,
} from 'react-native-appwrite';
import { router } from 'expo-router';
export const config = {
	endpoint: 'https://cloud.appwrite.io/v1',
	platform: 'com.brainbattle.app',
	projectId: '664eb7990012ea2e93ff',
	databaseId: '6663f45b0009273e0171',
	userCollectionId: '6663f48c0025ec3e8ee9',
};

// Init your React Native SDK
const client = new Client();

client
	.setEndpoint(config.endpoint) // Your Appwrite Endpoint
	.setProject(config.projectId) // Your project ID
	.setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const getUserId = async () => {
	try {
			const result = await account.get();
			console.log('get account result', result.targets[0].userId);  // Use $id instead of userId
			return result.targets[0].userId
	} catch (error) {
			console.error('Error fetching account details:', error);
			return null;  // Return null or appropriate error handling
	}
};

export const demoLogin = async (playerEmail: string) => {
	console.log('Logged in with ' + playerEmail);
	const account = new Account(client);

	const result = await account
		.createEmailPasswordSession(playerEmail, '1234567890')
		.then((response) => {
			console.log(`This is the login response ${response}`);
			router.replace('/(demo)/ready');
		})
		.catch((error) => {
			console.error(`This is the login error ${error}`);
		});

	return result;
};

export const checkForCurrentSession = async () => {
	const result = await account.listSessions();
	console.log('result in check for current sessions', result);
	return result.sessions;
};

export const removeCurrentSessions = async () => {
	const result = await account.deleteSessions();
	return result;
};

// Register User
export const createUser = async (
	email: string,
	password: string,
	username: string
) => {
	try {
		const newAccount = await account.create(
			ID.unique(),
			email,
			password,
			username
		);

		if (!newAccount) throw Error;

		const avatarUrl = avatars.getInitials(username);

		await signIn(email, password);

		const newUser = await databases.createDocument(
			config.databaseId,
			config.userCollectionId,
			ID.unique(),
			{
				accountId: newAccount.$id,
				email,
				username,
				avatar: avatarUrl,
			}
		);
		return newUser;
	} catch (error: any) {
		console.error(`Create user error${error}`);
		throw new Error(error);
	}
};

export const signIn = async (email: string, password: string) => {
	try {
		const session = await account.createEmailPasswordSession(email, password);

		return session;
	} catch (error) {
		console.error(error);
	}
};

interface UserData {
	accountId: string;
	email: string;
	username: string;
	avatar: string;
}

interface Document {
	account_id: string; // Example structure, adjust according to actual data
	mail: string;
	user_name: string;
	profile_picture: string;
}

export const getCurrentUser = async (): Promise<UserData | undefined> => {
	try {
		const currentAccount = await account.get();

		if (!currentAccount) {
			throw new Error('No account found');
		}

		const currentUser = await databases.listDocuments(
			config.databaseId,
			config.userCollectionId,
			[Query.equal('accountId', currentAccount.$id)]
		);

		if (!currentUser || currentUser.documents.length === 0) {
			throw new Error('No user documents found');
		}

		// Map the document to UserData if structure is known and consistent
		const userDocument = currentUser.documents[0] as unknown as Document; // First cast to unknown if needed
		return mapDocumentToUserData(userDocument); // Convert to UserData using a mapping function
	} catch (error) {
		console.error('Failed to fetch current user:', error);
		return undefined;
	}
};

function mapDocumentToUserData(doc: Document): UserData {
	return {
		accountId: doc.account_id,
		email: doc.mail,
		username: doc.user_name,
		avatar: doc.profile_picture,
	};
}
