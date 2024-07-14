import { Stack } from 'expo-router';

const DemoLayout = () => {

    return (
        <Stack>
            <Stack.Screen name="ready" options={{headerShown: false}} />
            <Stack.Screen name="play" options={{headerShown: false}} />
        </Stack>
    );

}

export default DemoLayout;
