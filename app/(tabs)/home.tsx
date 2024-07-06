import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { router } from 'expo-router'
import PlayerAvatar from '@/components/PlayerAvatar'
import FriendsGameCard from '@/components/FriendsGameCard'
import LastGameCard from '@/components/LastGameCard'
import icons from '@/constants/icons'
import tests from '@/constants/tests'

// Picture links for testing

const profileLink = "https://cloud.appwrite.io/v1/storage/buckets/6671e766000a2e95c85b/files/6672f081000dff2b9cbe/view?project=664eb7990012ea2e93ff&mode=admin";
const satLink = "https://cloud.appwrite.io/v1/storage/buckets/6672f0dc00381095fe41/files/6672f3200029050e9fc8/view?project=664eb7990012ea2e93ff&mode=admin";
const actLink = "https://cloud.appwrite.io/v1/storage/buckets/6672f0dc00381095fe41/files/6672f32e000682240407/view?project=664eb7990012ea2e93ff&mode=admin";
const scienceLink = "https://cloud.appwrite.io/v1/storage/buckets/6672f0dc00381095fe41/files/6672fa6e001dd8339846/view?project=664eb7990012ea2e93ff&mode=admin";

// Response 1: JSON with a link to the user's profile picture and the user's ELO rating

const response1 = {link: profileLink, eloRating: 1235}

// Response 2: JSON with an array of links (with a maximum size of 5) to the recent games of the user's friends

const response2 = {links: [satLink, actLink, scienceLink]}

// Response 3: JSON with the name of the user's most recent game and a link to the game's picture

const response3 = {name: "Intro to Physics", link: satLink}

// Response 4: JSON with an array (with a maximum size of 9) containing the last matches of the user's most recent game
// Each match is a JSON with the rival's name, a link to the rival's profile picture and the user's ELO rating change

const response4 = {matches: [
    {name: "Enemy 1", link: profileLink, eloChange: 30},
    {name: "Enemy 2", link: profileLink, eloChange: -30},
    {name: "Enemy 3", link: profileLink, eloChange: -30},
]}

const Home = () => {
    return (
        <SafeAreaView className="bg-light" edges={["top", "left", "right"]}>
            <View className="w-full flex flex-row justify-between items-center border-b-2 border-[#D8D6FF]" style={styles.header}>
                <View className="flex flex-row items-center">
                    <Image source={icons.logo} style={styles.logo} />
                    <Text className="font-clashmedium" style={styles.title}> Home </Text>
                </View>
                <PlayerAvatar picture={response1.link} elo={response1.eloRating} />
            </View>
            <ScrollView className="min-h-[75vh]">
                <View className="flex justify-between" style={styles.texts}>
                    <Text className="font-clashmedium" style={styles.largeText}> What your friends are playing </Text>
                    <Text className="font-poppinsregular" style={styles.smallText}> Join in on the fun! </Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View className="w-full flex flex-row justify-between items-center" style={styles.carousel}>
                        {response2.links.map((link) => (
                            <FriendsGameCard picture={link} key={link} style={styles.carouselCard} />
                        ))}
                    </View>
                </ScrollView>
                <View className="flex justify-between" style={styles.texts}>
                    <Text className="font-clashmedium" style={styles.largeText}> Your most recent game </Text>
                    <Text className="font-poppinsregular" style={styles.smallText}> Finish what you started! </Text>
                </View>
                <LastGameCard frontColor="lightgreen" backColor="honeydew" lastGame={response3} profilePicture={response1.link} lastMatches={response4.matches} style={styles.recentCard}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({

    header: {
        paddingLeft: scale(8),
        paddingRight: scale(14),
        paddingBottom: verticalScale(2),
    },

    logo: {
        width: scale(58),
        aspectRatio: 1,
    },

    title: {
        fontSize: moderateScale(28),
    },
    
    texts: {
        paddingLeft: scale(14),
        paddingTop: verticalScale(22),
        paddingBottom: verticalScale(16),
    },

    largeText: {
        fontSize: moderateScale(20),
        marginBottom: verticalScale(8),
    },

    smallText: {
        fontSize: moderateScale(14),
        marginLeft: scale(16)
    },

    carousel: {
        paddingHorizontal: scale(8),
        paddingVertical: verticalScale(4),
    },

    carouselCard: {
        marginHorizontal: scale(8),
    },

    recentCard: {
        marginLeft: scale(16),
        marginTop: verticalScale(4),
    }



    
    
});
