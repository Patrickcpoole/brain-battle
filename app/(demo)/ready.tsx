import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import { router } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { osName, deviceType, DeviceType } from 'expo-device';
import FaceOffHeader from '@/components/FaceOffHeader';
import OvalContainer from '@/components/OvalContainer';
import PlayerAvatar from '@/components/PlayerAvatar';
import icons from '@/constants/icons';

const Ready = () => {
    
	const isApple = (osName == 'iOS' || osName == 'iPadOS');
	const isTablet = (deviceType == DeviceType.TABLET);

	const [searching, setSearching] = useState(false);

    const handleSearch = () => {
        setSearching(true)
        setTimeout(() => {
            console.log('searching')

			
			
            // Implement actual searching logic here
            router.replace('/(demo)/play')
        }, 2000);
    }

	return (
		<SafeAreaView className='bg-light' edges={['top', 'left', 'right']}>
			<View className='w-full h-full flex justify-between items-center'>
				<View className='flex items-center'>
					<FaceOffHeader />
					<OvalContainer
						text={
							'Click the buzzer and answer before your opponent, Jeopardy style! Be quick!'
						}
						style={{ paddingVertical: verticalScale(8) }}
					/>
				</View>
				<View className='flex flex-row justify-center items-center' style={{ gap: scale(20) }}>
					<PlayerAvatar picture='user1' elo={1235} />
					<View className='border border-1 rounded-lg border-gray-950 mx-4 p-2'>
						<Text className='font-clashmedium' style={{ fontSize: moderateScale(12) }}> VS </Text>
					</View>
					<PlayerAvatar picture='user2' elo={1235} />
				</View>
				<Image
					source={icons.faceOff}
					resizeMode='contain'
					style={{ width: scale(200), height: verticalScale(200) }}
				/>
				<View
					className={`w-full flex justify-center items-center bg-gray-100 rounded-t-3xl ${
						isApple ? 'shadow-md' : 'shadow-lg'
					} shadow-gray-500`}
					style={{ height: verticalScale(90) }}
				>
					<TouchableOpacity
						onPress={handleSearch}
						className={`bg-light rounded-full ${
							isApple ? 'shadow-sm' : 'shadow-md'
						} shadow-gray-500`}
						style={{ width: scale(100), paddingVertical: verticalScale(8) }}
					>
						<Text
							className='font-clashsemibold text-center'
							style={{ fontSize: moderateScale(24) }}
						>
							{' '}
							Play{' '}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Ready;
