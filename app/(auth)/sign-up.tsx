import {Text, Image, View, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import { Icon, SignUpFormProps } from '../../types'; 
import { Link, router } from 'expo-router';

import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';

import {createUser} from '../../lib/appwrite'

interface FormState {
	email: string;
	password: string;
  username: string;
}

const SignUp = () => {
	const [form, setForm] = useState({
    username: '',
		email: '',
		password: '',
	});
  const [isSubmitting, setIsSubmitting] = useState(false)

  const platformSignUpOptions: {title: string; icon: Icon}[] = [
    {
      title: 'Apple',
      icon: 'apple'  // TypeScript recognizes this as an Icon
    },
    {
      title: 'Google',
      icon: 'google'  // TypeScript recognizes this as an Icon
    }
  ];

	const handleSignUp = async () => {
		console.log('signing up');
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields')
    }
    setIsSubmitting(true)

    try {

      const result = await createUser(form.email, form.password, form.username)

      // set to global state using context  

      router.replace('/home')

    } catch(error:any) {
      Alert.alert('Error', error.message)
    } finally {
      setIsSubmitting(false)
    }
	};



	const handleInputChange = (field: keyof FormState, value: string) => {
		setForm({ ...form, [field]: value });
	};
	return (
		<SafeAreaView className='bg-light h-full'>
			<ScrollView>
				<View className='w-full justify-center min-h-[85hv] px-4 my-6'>
					<View className='w-full flex flex-row justify-between items-start'>
						<Text className='text-3xl font-clashbold'>Sign up to Brain Battle</Text>

						<Image source={images.logoSmall} />
					</View>
					<Text className='font-clashregular text-dark text-xl '>
          Outscore and dominate the competition across a range of subjects, 
          enhancing your skills in a dynamic, engaging environment.
					</Text>
          <FormField
						label='Username'
						placeholder='Create Username'
						value={form.username}
						handleChangeText={(value) => handleInputChange('username', value)}
						otherStyles='mt-7' 
						textStyles='ml-4 mb-2'
            keyboardType='default'
						leftIcon={{ color: '#454D51', size: 24, name: 'user' }}
					/>
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
          <View className='flex flex-column  justify-between items-center '>

         
          	<View className='flex flex-column justify-center items-center w-full'>
						
            <Link  
            href='/sign-in' 
            className=' text-primary text-xl font-clashsemibold mt-8  '>
              Already have an account?  
               </Link>
               <Link  
            href='/sign-in' 
            className=' text-primary text-xl font-clashsemibold m2-8  '>
             Sign In
               </Link>
					</View>
          <CustomButton
						title='Sign Up'
						handlePress={handleSignUp}
						containerStyles='mt-6 rounded-[50%] w-3/4'
						textStyles='text-xl font-clashsemibold text-light'
					/>
          </View>
				
        </View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUp;

