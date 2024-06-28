import { Stack } from 'expo-router'

const ProfileLayout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="profile" />
            <Stack.Screen name="settings" />
            <Stack.Screen name="details" />
        </Stack>
    )
}

export default ProfileLayout;
