import { Stack } from 'expo-router'

const RewardsLayout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="game" />
            <Stack.Screen name="battleground" />
            <Stack.Screen name="matching" />
            <Stack.Screen name="race" />
            <Stack.Screen name="quiz" />
            <Stack.Screen name="results" />
        </Stack>
    )
}

export default RewardsLayout;
