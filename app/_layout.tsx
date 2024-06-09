import { StyleSheet, Text, View } from 'react-native';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';

import { GlobalProvider } from '@/context/GlobalProvider';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [fontsLoaded, error] = useFonts({
		ClashDisplayMedium: require('../assets/fonts/ClashDisplayMedium.otf'),
		ClashDisplayRegular: require('../assets/fonts/ClashDisplayRegular.otf'),
    ClashDisplayBold: require('../assets/fonts/ClashDisplayBold.otf'),
    ClashDisplaySemibold: require('../assets/fonts/ClashDisplaySemibold.otf'),
    ClashDisplayLight: require('../assets/fonts/ClashDisplayLight.otf'),
    ClashDisplayExtralight: require('../assets/fonts/ClashDisplayExtralight.otf')
    
	});

	useEffect(() => {
		if (error) throw error;

		if (fontsLoaded) SplashScreen.hideAsync();
	}, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
	return (
		<GlobalProvider>
		<Stack>
      <Stack.Screen name='index' options={{headerShown: false}} />
			<Stack.Screen name='(auth)' options={{headerShown: false}} />
			<Stack.Screen name='(tabs)' options={{headerShown: false}} />
    </Stack>
		</GlobalProvider>
	);
};

export default RootLayout;

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
