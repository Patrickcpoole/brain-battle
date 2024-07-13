import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { osName, deviceType, DeviceType } from 'expo-device';
import OvalContainer from '@/components/OvalContainer';
import PlayerAvatar from '@/components/PlayerAvatar';
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
                    <OvalContainer text={"Click the buzzer and answer before your opponent, Jeopardy style! Be quick!"} style={{paddingVertical: verticalScale(8)}} />
                </View>
                <View>
                <PlayerAvatar picture="user1" elo={1235} />
                <PlayerAvatar picture="user2" elo={1235} />
                </View>
                <Image source={icons.faceOff} resizeMode="contain" style={{width: scale(200), height: verticalScale(200)}}/>
                <View className={`w-full flex justify-center items-center bg-gray-100 rounded-t-3xl ${isApple ? "shadow-md" : "shadow-lg"} shadow-gray-500`} style={{height: verticalScale(90)}}>
                    <TouchableOpacity onPress={() => (setSearching(!searching))} className={`bg-light rounded-full ${isApple ? "shadow-sm" : "shadow-md"} shadow-gray-500`} style={{width: scale(100), paddingVertical: verticalScale(8)}}>
                        <Text className="font-clashsemibold text-center" style={{fontSize: moderateScale(24)}}> {searching ? "Looking..." : "Play"} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );

}

export default Ready;
