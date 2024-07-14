import { StyleSheet, Text, View, Image } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import icons from '@/constants/icons';
import React from 'react';

const FaceOffHeader = () => {
	return (
		<View>
			<View
				className='flex flex-row items-center'
				style={{ paddingVertical: verticalScale(4) }}
			>
				<Text
					className='font-clashmedium'
					style={{ fontSize: moderateScale(28), color: '#930000' }}
				>
					{' '}
					Face Off{' '}
				</Text>
				<Image
					source={icons.faceOff}
					resizeMode='contain'
					style={{ width: scale(50), height: verticalScale(50) }}
				/>
			</View>
			<Text
				className='font-clashmedium'
				style={{ fontSize: moderateScale(14), color: '#707070' }}
			>
				{' '}
				SAT - Writing and Language{' '}
			</Text>
		</View>
	);
};

export default FaceOffHeader;

const styles = StyleSheet.create({});
