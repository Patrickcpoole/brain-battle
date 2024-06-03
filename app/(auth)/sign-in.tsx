import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import { Icon } from '../../types'; 

import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';

interface FormState {
	email: string;
	password: string;
}

const SignIn = () => {
	const [form, setForm] = useState({
		email: '',
		password: '',
	});

  const platformSignInOptions: {title: string; icon: Icon}[] = [
    {
      title: 'Apple',
      icon: 'apple'  // TypeScript recognizes this as an Icon
    },
    {
      title: 'Google',
      icon: 'google'  // TypeScript recognizes this as an Icon
    }
  ];

	const handleSignIn = () => {
		console.log('signing in');
	};

  const handlePlatformSignIn = (option: string) => {

  }

	const handleInputChange = (field: keyof FormState, value: string) => {
		setForm({ ...form, [field]: value });
	};
	return (
		<SafeAreaView className='bg-light h-full'>
			<ScrollView>
				<View className='w-full justify-center min-h-[85hv] px-4 my-6'>
					<View className='w-full flex flex-row justify-between items-start'>
						<Text className='text-3xl font-clashbold'>Hi Joe</Text>

						<Image source={images.logoSmall} />
					</View>
					<Text className='font-clashregular text-dark text-xl '>
						Let's get you in to Brain Battle
					</Text>
					<FormField
						label='Email'
						placeholder='Your email'
						value={form.email}
						handleChangeText={(value) => handleInputChange('email', value)}
						otherStyles='mt-7'
						textStyles='ml-4 mb-2'
						keyboardType='email-address'
						leftIcon={{ color: '#454D51', size: 24, name: 'mail' }}
					/>
					<FormField
						label='Password'
						placeholder='Your password'
						value={form.password}
						handleChangeText={(e) => setForm({ ...form, password: e })}
						otherStyles='mt-7'
						textStyles='ml-4 mb-2'
						leftIcon={{ color: '#454D51', size: 24, name: 'lock' }}
						rightIcon={{ color: '#454D51', size: 24, name: 'eye' }}
					/>
					<View className='w-full flex flex-row justify-end'>
						<Text className='text-primary text-lg font-clashsemibold mt-2'>
							Forgot Password?
						</Text>
					</View>
					<CustomButton
						title='Sign In'
						handlePress={handleSignIn}
						containerStyles='mt-6 rounded-[50%]'
						textStyles='text-xl font-clashsemibold text-light'
					/>
          <View className='flex-row items-center mt-6'>
						<View className='flex-1 h-px bg-gray-400'></View>
						<Text className='text-lg text-gray-400 font-clashsemibold px-2'>
							Or
						</Text>
						<View className='flex-1 h-px bg-gray-400'></View>
					</View>
          {platformSignInOptions.map(option => (
            <CustomButton 
              key={option.title}
              title={`Continue with ${option.title}`}
              customIcon={option.icon}
              iconSize={32}
              containerStyles='bg-light border-2 border-gray-300 mt-4 flex justify-start pl-4'
              textStyles='text-black font-clashsemibold text-lg pl-8'
              handlePress={() => handlePlatformSignIn(option.title)}
            />
          ))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;

const styles = StyleSheet.create({});
