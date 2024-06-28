import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { router } from 'expo-router'
import PlayerAvatar from '../../components/PlayerAvatar'
import icons from '../../constants/icons'
import tests from '../../constants/tests'

const Profile = () => {
    return (
        <SafeAreaView className="bg-light" edges={["top", "left", "right"]}>
            <View className="w-full flex flex-row justify-between items-center pb-1 border-b-2 border-[#D8D6FF]">
                <View className="w-36 flex flex-row items-center mx-2">
                    <Image source={icons.logo} className="w-16 h-16" />
                    <Text className="font-clashmedium text-3xl"> Home </Text>
                </View>
                <PlayerAvatar picture="profile" elo={1235} />
            </View>
        </SafeAreaView>
    )
}

export default Profile