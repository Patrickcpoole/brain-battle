import { View, Text, Image, TouchableOpacity, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { osName, deviceType, DeviceType } from 'expo-device';
import icons from '@/constants/icons';

const Ready = () => {

    const isApple = (osName == "iOS" || osName == "iPadOS");
    const isTablet = (deviceType == DeviceType.TABLET);

    const [searching, setSearching] = useState(false);

    useEffect(() => (console.log(searching)), [searching]);

    return (
        <SafeAreaView className="bg-light" edges={["top", "left", "right"]}>
            <View className="w-full h-full flex justify-between items-center">
                <View className="flex items-center">
                <View className="flex flex-row items-center" style={{paddingVertical: verticalScale(4)}}>
                    <Text className="font-clashmedium" style={{fontSize: moderateScale(28), color: "#930000"}}> Face Off </Text>
                    <Image source={icons.faceOff} resizeMode="contain" style={{width: scale(50), height: verticalScale(50)}} />
                </View>
                <Text className="font-clashmedium" style={{fontSize: moderateScale(14), color: "#707070"}}> SAT - Writing and Language </Text>
                <View style={{paddingVertical: verticalScale(8)}}>
                    <View className={`flex justify-center items-center bg-light rounded-full ${isApple ? "shadow-sm" : "shadow-md"} shadow-gray-500`} style={{width: scale(100), aspectRatio: 1, transform: [{scaleX: 3}]}}>
                        <View className="" style={{width: scale(100)*2.35}}>
                            <Text numberOfLines={3} className="font-clashmedium text-center" style={{fontSize: moderateScale(isTablet ? 16 : 14.5), transform: [{scaleX: 1/3}]}}>
                                Click the buzzer and answer before your opponent, Jeopardy style! Be quick!
                            </Text>
                        </View>
                    </View>
                </View>
                </View>
                {/* <Text> You logged in! </Text> */}
                <Image source={icons.faceOff} resizeMode="contain" style={{width: scale(200), height: verticalScale(200)}}/>
                <View className={`w-full flex justify-center items-center bg-gray-100 rounded-t-3xl ${isApple ? "shadow-md" : "shadow-lg"} shadow-gray-500`} style={{height: verticalScale(90)}}>
                    {searching ? <ActivityIndicator size={isApple ? "large" : 75} color="#930000" /> :
                        <TouchableOpacity className={`bg-light rounded-full ${isApple ? "shadow-sm" : "shadow-md"} shadow-gray-500`} style={{width: scale(100), paddingVertical: verticalScale(8)}}>
                            <Text onPress={() => (setSearching(true))} className="font-clashsemibold text-center" style={{fontSize: moderateScale(24)}}> Play </Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </SafeAreaView>
    );

}

export default Ready;
