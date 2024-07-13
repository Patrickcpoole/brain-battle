import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
// import CustomButton from '@/components/CustomButton';
import images from '@/constants/images';

import { Client, Account, Databases, ID } from 'react-native-appwrite';
// import { Client, Databases, ID } from 'node-appwrite';
// import { Client, Functions } from 'react-native-appwrite';
import { project, database, key } from '../lib/app-details';
// import { Functions } from 'node-appwrite';

const App = () => {

    const client = new Client();
    client.setEndpoint(project.endpoint);
    client.setProject(project.id);
    client.setPlatform(project.platform);

    const account = new Account(client);

    const result = account.get()
        .then((response) => {
            console.log(response);
            router.replace("/(demo)/ready");
        })
        .catch((exception) => (console.error(exception)));

    // const databases = new Databases(client);

    // const result = databases.createDocument(database.id, "668c613f003b11e3b3af", ID.unique(), {message: "Hello World"});
    // result.then((response) => {
    //     console.log(response);
    //     console.log("Hello World :)");
    // });

    // const result = functions.createExecution("6680572f0035bcbaec9d").then((res) => (console.log(res)));

    // console.log(result);

    // const result = await functions.createExecution();

    // client.subscribe("test-channel", (response) => {
    //     console.log("Hello World!");

    // });

    const [player, setPlayer] = useState("demouser1@gmail.com");

    //useEffect(() => (console.log(player)), [player]);

    function login() {
        
        console.log("Logged in with " + player);
        const account = new Account(client);

        const result = account.createEmailPasswordSession(player, "1234567890")
            .then((response) => {
                console.log(response);
                router.replace("/(demo)/ready")
            })
            .catch((exception) => (Alert.alert("Warning!")));

        // try {
        //     const result = await account.createSession(player, "1234567890").then();
        //     console.log(result);
        // } catch (exception) {
        //     console.error(exception)
        //     throw new Error("Login process failed!");
        // }

        // console.log(result);

    }

    return (
        <SafeAreaView className="bg-light">
            {/* <Text className="font-clashregular"> Brain Battle Demo </Text> */}
            <View className="w-full h-full flex justify-center" style={{gap: verticalScale(30)}}>
                <Image source={images.demoLogo} className="flex self-center" resizeMode="contain" style={{width: scale(300), height: verticalScale(100)}} />
                <Picker selectedValue={player} onValueChange={(email) => (setPlayer(email))}>
                    <Picker.Item label="Demo User 1" value={"demouser1@gmail.com"} style={{fontSize: moderateScale(14)}} />
                    <Picker.Item label="Demo User 2" value={"demouser2@gmail.com"} style={{fontSize: moderateScale(14)}} />
                </Picker>
                <TouchableOpacity onPress={login} className="flex self-center bg-primary rounded-full" style={{width: scale(300), paddingVertical: verticalScale(12), marginBottom: verticalScale(30)}}>
                    <Text className="font-clashsemibold text-center text-white" style={{fontSize: moderateScale(18)}}> Select User </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

};

export default App;

const styles = StyleSheet.create({


    
});

