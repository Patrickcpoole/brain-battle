import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import { Client, Databases } from 'react-native-appwrite';
// import { Client, Databases, ID } from 'node-appwrite';
import { Client, Functions } from 'react-native-appwrite';
import { project, database, key } from '../lib/app-details';
// import { Functions } from 'node-appwrite';

const App = () => {

    const client = new Client();
    client.setEndpoint(project.endpoint);
    client.setProject(project.id);
    //client.setKey(key);
    client.setPlatform(project.platform);

    const functions = new Functions(client);

    // const result = await functions.createExecution();

    // client.subscribe("test-channel", (response) => {
    //     console.log("Hello World!");

    // });

    return (
        <SafeAreaView>
            <Text> Brain Battle Demo </Text>
        </SafeAreaView>
    );

};

export default App;

