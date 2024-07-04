import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { useNearbySchools } from '@/hooks/useNearbySchools';

const school = () => {
	const { schools, loading, error } = useNearbySchools();
	if (loading) return <ActivityIndicator />;
	if (error) return <Text>Error fetching schools</Text>;
    console.log('schools in component', schools)
	return (
		<View>
			{/* <FlatList
                data={schools}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            /> */}
			<Text>Schools Page</Text>
			<Link href={'/'}>Go Back</Link>
		</View>
	);
};

export default school;
