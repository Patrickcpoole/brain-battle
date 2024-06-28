import { View, Text, Image, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import React from 'react'
import FlipCard from 'react-native-flip-card'
import Carousel from 'react-native-reanimated-carousel'
import RecentsList from './RecentsList'
import tests from '../constants/tests'

interface LastGameObject {
    name: string;
    link: string;
}

export interface LastMatchObject {
    name: string;
    link: string;
    eloChange: number;
}

interface LastGameCardProps {
    frontColor: string;
    backColor: string;
    lastGame: LastGameObject;
    profilePicture: string;
    lastMatches: LastMatchObject[];
    style?: StyleProp<ViewStyle>;
}

const LastGameCard = ({frontColor, backColor, lastGame, profilePicture, lastMatches, style}: LastGameCardProps) => {

    //const gameCardSource = tests[picture];

    const colorStyles = StyleSheet.create({
        frontBevel: {backgroundColor: frontColor},
        backBevel: {backgroundColor: backColor, borderColor: frontColor}
    });

    return (
        <FlipCard>
            {/* Front Card */}
            <View className="flex flex-row justify-between items-center rounded-3xl shadow-sm shadow-gray-500" style={[style, colorStyles.frontBevel, styles.bevel]}>
                <Text className="font-clashregular" style={styles.largeName}> {lastGame.name} </Text>
                <View className="bg-light rounded-3xl" style={styles.largePicture}>
                    <Image source={{uri: lastGame.link}} className="w-full h-full rounded-3xl" resizeMode="contain" />
                </View>
            </View>
            {/* Back Card */}
            <View className="flex justify-between items-center rounded-3xl border-2 shadow-sm shadow-gray-500" style={[style, colorStyles.backBevel, styles.bevel]}>
                <View className="w-full flex flex-row justify-center items-center">
                    <Text className="font-clashregular" style={styles.smallName}> {lastGame.name} </Text>
                    <View className="bg-light rounded-lg" style={styles.smallPicture}>
                        <Image source={{uri: lastGame.link}} className="w-full h-full rounded-lg" resizeMode="contain" />
                    </View>
                </View>
                <View className="w-full flex flex-row justify-around items-center">
                    <TouchableOpacity className="bg-light rounded-xl shadow-sm shadow-gray-500" style={styles.button}>
                        <Text className="font-clashsemibold" style={styles.buttonText}> Play </Text>
                    </TouchableOpacity>
                    <View className="flex items-center">
                        <Text className="font-clashmedium" style={styles.recentsText}> Recent Games </Text>
                        <View className="shadow-sm shadow-gray-500">
                        <View className="bg-light rounded-3xl overflow-hidden border border-gray-300" style={styles.recents}>
                        <Carousel width={scale(160)} height={verticalScale(90)} loop={false} data={[...new Array(3).keys()]}
                            renderItem={() => (
                                <>
                                    
                                </>
                            )}
                        />
                        </View>
                        </View>
                    </View>
                </View>
            </View>
        </FlipCard>
    )
    
    /*

    return (
        <View className={`flex flex-row justify-between items-center ${color} rounded-3xl shadow-sm shadow-gray-500`} style={styles.bevel}>
            <View className="w-36 h-36 flex justify-between ml-4">
                <Text className="font-clashregular text-3xl"> {title} </Text>
                <TouchableOpacity className="w-32 p-3 bg-white rounded-xl">
                    <Text className="font-poppinsmedium text-lg text-center"> Play Again </Text>
                </TouchableOpacity>
            </View>
            <View className="w-36 h-36 mr-4">
                <Image source={gameCardSource} className="w-full h-full rounded-3xl" resizeMode="contain" />
            </View>
        </View>
    )

    */

}

export default LastGameCard;

const styles = StyleSheet.create({

    bevel: {
        width: scale(300),
        aspectRatio: 1.65/1,
        paddingHorizontal: scale(18),
        paddingVertical: verticalScale(6),
        //paddingVertical: scale(6),
    },

    largeName: {
        fontSize: moderateScale(28),
        width: scale(130),
    },

    smallName: {
        fontSize: moderateScale(24),
        marginRight: scale(2),
    },

    largePicture: {
        width: scale(130),
        aspectRatio: 1,
    },

    smallPicture: {
        width: scale(40),
        aspectRatio: 1,
    },

    button: {
        paddingHorizontal: scale(12),
        paddingVertical: verticalScale(20),
    },

    buttonText: {
        fontSize: moderateScale(20),
    },

    recentsText: {
        fontSize: moderateScale(14),
        marginBottom: verticalScale(4),
    },

    recents: {
        width: scale(160),
        height: verticalScale(90),
    }

});
