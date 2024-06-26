import {
	Text,
	View,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, Redirect, router} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import images from '../constants/images';
import CustomButton from '../components/CustomButton';
import Icon from '../components/Icon';
import { useGlobalContext } from '@/context/GlobalProvider';

export default function App() {

	const {isLoading, isLoggedIn} = useGlobalContext();

	if(!isLoading && isLoggedIn) return <Redirect href='/home' />

	return (
		<SafeAreaView className='bg-light h-full'>
			<ScrollView contentContainerStyle={{ height: '100%' }}>
				<View className='w-full min-h-[85vh] justify-between items-center px-4'>
					<View className='w-full h-[50%] justify-between items-center'>
						<Text className='font-clashmedium text-3xl color-dark mt-4'>
							Welcome to
						</Text>
						<View className='relative w-full h-full flex items-center'>
							<Image
								source={images.map}
								resizeMode='cover'
								className='absolute w-[100%] h-[100%]'
							/>
							<Image
								source={images.logo}
								resizeMode='contain'
								className='absolute top-[10%] self-center'
							/>
							<Text className='font-clashsemibold text-center text-lg color-dark absolute top-[80%]'>
								Unlocking Brilliance Through Competition
							</Text>
						</View>
					</View>
					<View className='w-full mt-7 flex justify-center items-center'>
						<Link href={'/sign-in'}>
							<CustomButton
								title='Get Started'
								handlePress={() => router.push('/sign-in')}
								containerStyles='w-[350px] mt-7'
								textStyles='text-lg text-white font-clashsemibold'
							/>
						</Link>
					</View>
					{/* Helper link for reaching the Home screen from the entry point */}
					<Link href="/(tabs)/home"> Go to home </Link>
					<View className='flex-row items-center mt-6'>
						<View className='flex-1 h-px bg-gray-400'></View>
						<Text className='text-lg text-gray-400 font-clashsemibold px-2'>
							Sign in with
						</Text>
						<View className='flex-1 h-px bg-gray-400'></View>
					</View>
					<View className='w-full flex flex-row justify-evenly mt-4'>
						<Icon name='apple' />
						<Icon name='google' />
						<Icon name='facebook' />
					</View>
					<View className='flex flex-row'>
						<Text className='font-clashsemibold text-lg text-dark'>
							Don't have an account?
						</Text>
						<Link
							href='/sign-up'
							className='cursor-pointer text-primary text-lg font-clashsemibold ml-2'
						>
							Sign Up
						</Link>
					</View>
				</View>
			</ScrollView>
			<StatusBar hidden={true} />
		</SafeAreaView>
	);
}
