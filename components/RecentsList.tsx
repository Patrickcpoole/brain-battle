import { View, Text, Image, StyleSheet } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import React from 'react'
import { router } from 'expo-router'
import Carousel from 'react-native-reanimated-carousel'
import RecentMatch from './RecentMatch'
import { LastMatchObject } from './LastGameCard'
import tests from '../constants/tests'

/*

interface InformationObject {
    gamePicture: keyof typeof tests;
    rivalName: string;
    rivalPicture: keyof typeof tests;
    eloChange: number;
}

interface RecentsListProps {
    information: [InformationObject, InformationObject, InformationObject];
    playerPicture: keyof typeof tests;
    // picture: keyof typeof tests;
    // picture: keyof typeof tests;
    // rivalPicture: keyof typeof tests;
    // rivalName: string;
    // win: boolean;
    // odd: boolean;
    // elo: number;
}

*/

interface RecentsListProps {
    profilePicture: string;
    lastMatches: LastMatchObject[];
}

const RecentsList = ({profilePicture, lastMatches}: RecentsListProps) => {

    // const playerSource = tests[playerPicture];
    // const gameSources = information.map(match => match.gamePicture);
    // const rivalNames = information.map(match => match.rivalName);
    // const rivalSources = information.map(match => match.rivalPicture);
    // const eloChanges = information.map(match => match.eloChange);

    const matchesGrouped: LastMatchObject[][] = [];

    for (let i=0; i<Math.ceil(lastMatches.length/3); i++) {
        matchesGrouped.push(lastMatches.slice(i*3, i*3 + 3));
    }

    return (
        <View className="shadow-sm shadow-gray-500">
            <View className="bg-light rounded-3xl overflow-hidden border border-gray-300" style={styles.recents}>
                <Carousel width={scale(160)} height={verticalScale(90)} loop={false} data={[...new Array(Math.ceil(lastMatches.length/3)).keys()]}
                    renderItem={(slide) => (
                        <>
                            {matchesGrouped[Number(slide)].map((match, row) => {
                                match && <RecentMatch profilePicture={profilePicture} lastMatch={match} colorRow={row%2 == 0 ? true : false} />
                            })}
                            {/* {lastMatches.map((match, index) => (
                                <RecentMatch profilePicture={profilePicture} lastMatch={lastMatches}
                            ))} */}
                        {/* {rivalNames.map((name, index) => (
                            <RecentMatch playerPicture={playerPicture} rivalName={name} rivalPicture={rivalSources[index]} colorRow={index%2 == 0} eloChange={eloChanges[index]} />
                        ))} */}
                            {/* <RecentMatch playerPicture={playerPicture} rivalName={rivalNames[0]} rivalPicture={rivalSources[0]} colorRow={true} eloChange={30} />
                            <RecentMatch playerPicture={playerPicture} rivalName={rivalNames[1]} rivalPicture={rivalSources[1]} colorRow={false} eloChange={-30} />
                            <RecentMatch playerPicture={playerPicture} rivalName={rivalNames[2]} rivalPicture={rivalSources[2]} colorRow={true} eloChange={-30} /> */}
                        </>
                    )}
                />
            </View>
        </View>
    )

}

export default RecentsList;

const styles = StyleSheet.create({

    recents: {
        width: scale(160),
        height: verticalScale(90),
    }

});
