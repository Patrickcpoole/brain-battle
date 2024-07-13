import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import images from '@/constants/images';
import {
	demoLogin,
	checkForCurrentSession,
	removeCurrentSessions,
} from '@/lib/appwrite';
import { project } from '../lib/app-details';

const App = () => {
	const [player, setPlayer] = useState('demouser1@gmail.com');

	useEffect(() => {
		const checkForAndRemoveSessions = async () => {
			const currentSessions = await checkForCurrentSession();
			console.log('current sessions', currentSessions);
			if (currentSessions.length > 0) {
                console.log('removing sessions')
				removeCurrentSessions();
			}
		};
		checkForAndRemoveSessions();
	}, []);

	return (
		<SafeAreaView className='bg-light'>
			<View
				className='w-full h-full flex justify-center'
				style={{ gap: verticalScale(30) }}
			>
				<Image
					source={images.demoLogo}
					className='flex self-center'
					resizeMode='contain'
					style={{ width: scale(300), height: verticalScale(100) }}
				/>
				<Picker
					selectedValue={player}
					onValueChange={(email) => setPlayer(email)}
				>
					<Picker.Item
						label='Demo User 1'
						value={'demouser1@gmail.com'}
						style={{ fontSize: moderateScale(14) }}
					/>
					<Picker.Item
						label='Demo User 2'
						value={'demouser2@gmail.com'}
						style={{ fontSize: moderateScale(14) }}
					/>
				</Picker>
				<TouchableOpacity
					onPress={() => demoLogin(player)}
					className='flex self-center bg-primary rounded-full'
					style={{
						width: scale(300),
						paddingVertical: verticalScale(12),
						marginBottom: verticalScale(30),
					}}
				>
					<Text
						className='font-clashsemibold text-center text-white'
						style={{ fontSize: moderateScale(18) }}
					>
						{' '}
						Select User{' '}
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default App;
