import { View, Text, Image, StyleSheet } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import React from 'react'
import { router } from 'expo-router'
import { LastMatchObject } from './LastGameCard'
import tests from '../constants/tests'

// interface RecentMatchProps {
//     playerPicture: keyof typeof tests;
//     rivalName: string;
//     rivalPicture: keyof typeof tests;
//     colorRow: boolean;
//     eloChange: number;
//     // picture: keyof typeof tests;
//     // rivalPicture: keyof typeof tests;
//     // rivalName: string;
//     // win: boolean;
//     // odd: boolean;
//     // elo: number;
// }

interface RecentMatchProps {
    profilePicture: string;
    lastMatch: LastMatchObject;
    colorRow: boolean;
}

const RecentMatch = ({profilePicture, lastMatch, colorRow}: RecentMatchProps) => {

    // const playerSource = tests[playerPicture];
    // const rivalSource = tests[rivalPicture];

    const matchWon = (lastMatch.eloChange > 0) ? true : false;

    return (
        <View className={`w-full h-1/3 flex flex-row justify-around items-center ${colorRow ? "bg-gray-100" : "bg-white"}`} style={styles.row}>
            <Text className={matchWon ? "font-clashsemibold text-green-500" : "font-clashmedium text-red-500"}> {matchWon ? "Win" : "Loss"} </Text>
            <View className="flex justify-center items-center">
                <Text> You </Text>
                <Image source={{uri: profilePicture}} className="rounded-full" style={styles.picture} />
            </View>
            <Text> VS </Text>
            <View className="flex justify-center items-center">
                <Text> {lastMatch.name} </Text>
                <Image source={{uri: lastMatch.link}} className="rounded-full" style={styles.picture} />
            </View>
            <Text className={matchWon ? "font-clashsemibold text-green-500" : "font-clashmedium text-red-500"}> {(matchWon ? "+" : "") + lastMatch.eloChange} </Text>
        </View>
    )

}

export default RecentMatch;

const styles = StyleSheet.create({

    row: {
        //height: verticalScale(30),
    },

    picture: {
        width: scale(15),
        height: scale(15),
        aspectRatio: 1/1.1,

        //height: scale(15),
    },

    bevel: {
        width: scale(130),
        aspectRatio: 1/1.1,
    },

});
