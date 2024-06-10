import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import icons from '../../constants/icons'
import tests from '../../constants/tests'

const Home = () => {
    return (
        <SafeAreaView className="bg-light" edges={["top", "left", "right"]}>
            <View className="w-full flex flex-row justify-between items-center pb-1 border-b-2 border-[#D8D6FF]">
                <View className="w-36 flex flex-row items-center mx-2">
                    <Image source={icons.logo} className="w-16 h-16" />
                    <Text className="font-clashmedium text-3xl"> Home </Text>
                </View>
                <View className="w-32 h-12 flex flex-row items-center mx-4 px-2 bg-light border-2 border-black rounded-full shadow-sm shadow-gray-500">
                    <Image source={tests.profile} className="w-10 h-10 mr-2 rounded-full" />
                    <Text className="font-poppinssemibold text-xl"> 1235 </Text>
                </View>
            </View>
            <ScrollView className="min-h-[75vh]">
                <Text className="font-clashmedium text-2xl mx-4 mt-6"> What your friends are playing </Text>
                <Text className="font-poppinsregular text-sm mx-8 mt-2"> Join in on the fun! </Text>
                {/* Carousel stuff */}
                <ScrollView horizontal={true}>
                    <View className="w-full h-44 flex flex-row justify-between items-center mt-5">
                        <TouchableOpacity className="w-36 h-40 ml-4 bg-light rounded-3xl shadow-sm shadow-gray-500">
                            <Image source={tests.sat} className="w-full h-full rounded-3xl" resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity className="w-36 h-40 ml-4 bg-light rounded-3xl shadow-sm shadow-gray-500">
                            <Image source={tests.act} className="w-full h-full rounded-3xl" resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity className="w-36 h-40 ml-4 bg-light rounded-3xl shadow-sm shadow-gray-500">
                            <Image source={tests.sat} className="w-full h-full rounded-3xl" resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity className="w-36 h-40 mx-4 bg-light rounded-3xl shadow-sm shadow-gray-500">
                            <Image source={tests.act} className="w-full h-full rounded-3xl" resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <Text className="font-clashmedium text-2xl mx-4 mt-6"> Your most recent game </Text>
                <Text className="font-poppinsregular text-sm mx-8 mt-2"> Finish what you started! </Text>
                {/* Most recent stuff */}
                <View className="w-80 h-48 flex flex-row justify-between items-center mx-4 mt-7 bg-emerald-300 rounded-3xl shadow-sm shadow-gray-500">
                    <View className="w-36 h-36 flex justify-between ml-4">
                        <Text className="font-clashregular text-3xl"> Intro to Physics </Text>
                        <TouchableOpacity className="w-32 p-3 bg-white rounded-xl">
                            <Text className="font-poppinsmedium text-lg text-center"> Play Again </Text>
                        </TouchableOpacity>
                    </View>
                    <View className="w-36 h-36 mr-4">
                        <Image source={tests.science} className="w-full h-full rounded-3xl" resizeMode="contain" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home