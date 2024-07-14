import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import React from 'react';
import { router } from 'expo-router';
import images from '../constants/images';
import tests from '../constants/tests';

interface PlayerAvatarProps {
	picture: string;
	elo: number;
}

const PlayerAvatar = ({ picture, elo }: PlayerAvatarProps) => {
	// const avatarSource = tests[picture];
    console.log('picture prop', picture)
    const imageSource = images[picture];
	return (
		<View className='flex flex-col'>
			<View
				className='flex flex-row items-center justify-center bg-light border-2 border-black 
                rounded-full shadow-sm 
                shadow-gray-500 -mb-4 z-50'
				style={styles.bevel}
			>
				<Text className='font-poppinssemibold' style={styles.rating}>
					{' '}
					{elo}{' '}
				</Text>
			</View>
			<View className='rounded-full border-2 p-1 border-blue-300'>
				<Image
					source={imageSource}
					className='rounded-full w-20 h-20'
					style={styles.picture}
				/>
			</View>
		</View>
	);
};

export default PlayerAvatar;

const styles = StyleSheet.create({
	bevel: {
		paddingVertical: verticalScale(2),
	},

	picture: {
		width: scale(36),
		aspectRatio: 1,
	},

	rating: {
		fontSize: moderateScale(16),
	},
});
