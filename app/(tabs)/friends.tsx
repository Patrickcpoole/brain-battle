// import { View, Text } from 'react-native'
// import React from 'react'

// const Friends = () => {
//   return (
//     <View>
//       <Text>Friends</Text>
//     </View>
//   )
// }

// export default Friends

import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import { ScrollView } from 'react-native'
import GradientLayout from "@/components/GradientLayout";
import { appStyles } from "../../utils/appStyles";
import { colors } from "../../utils/colors";
import CustomText from "@/components/CustomText";
import { fonts } from "../../utils/fonts";
// import DeviceInfo from "react-native-device-info";
import { deviceType, DeviceType } from "expo-device";
import { useState } from "react";
import FriendContainer from "@/components/Friends/FriendContainer";
import GroupPartiesContainer from "@/components/Friends/GroupPartiesContainer";
import RequestChallengeContainer from "@/components/Friends/RequestChallengeContainer";
import CustomSearch from "../../components/CustomSearch";
import FindFriendsContainer from "../../components/Friends/FindFriendsContainer";
import { FindFriends, groupParties, onlineFriends } from "../../utils/Data";

const Friends = ({ navigation }: any) => {
  const isTablet = (deviceType == DeviceType.TABLET);
  const [selectedTab, setSelected] = useState("All");

  const renderFindFriendsList = ({ item, index }: any) => {
    return (
      <>
        <View>
          <FindFriendsContainer item={item} />
        </View>
      </>
    );
  };

  return (
    <GradientLayout>
      <View style={{ flex: 1, paddingLeft: scale(20) }}>
        <View
          style={{
            ...appStyles.row,
            marginVertical: isTablet
              ? verticalScale(20)
              : Platform.OS == "ios"
              ? verticalScale(17)
              : verticalScale(20),
            gap: scale(10),
            paddingTop: isTablet
              ? verticalScale(10)
              : Platform.OS == "android"
              ? verticalScale(10)
              : 0,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setSelected("All")}
            style={
              isTablet
                ? {
                    ...styles.isPadTabContainer,
                    backgroundColor:
                      selectedTab == "All" ? "#51B5FD" : "transparent",
                  }
                : {
                    ...styles.tabContainer,
                    backgroundColor:
                      selectedTab == "All" ? "#51B5FD" : "transparent",
                  }
            }
          >
            <CustomText
              // fontFam={fonts.medium}
              font="font-clashmedium"
              fontWeight="600"
              label="All"
              size={16}
              color={selectedTab == "All" ? colors.white : colors.black}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setSelected("Find Friends")}
            style={
              isTablet
                ? {
                    ...styles.isPadTabContainer,
                    backgroundColor:
                      selectedTab == "Find Friends" ? "#51B5FD" : "transparent",
                  }
                : {
                    ...styles.tabContainer,
                    backgroundColor:
                      selectedTab == "Find Friends" ? "#51B5FD" : "transparent",
                  }
            }
          >
            <CustomText
              // fontFam={fonts.medium}
              font="font-clashmedium"
              fontWeight="600"
              label="Find Friends"
              size={16}
              color={
                selectedTab == "Find Friends" ? colors.white : colors.black
              }
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            borderTopLeftRadius: 25,
            paddingHorizontal: scale(15),
          }}
        >
          {selectedTab == "All" && (
            <View style={{ paddingTop: verticalScale(20) }}>
              <CustomText
                // fontFam={fonts.medium}
                font="font-clashmedium"
                fontWeight="600"
                label="Online (2)"
                size={18}
                style={{ marginBottom: verticalScale(15) }}
                color={colors.gray}
              />
              {onlineFriends.map((item: any, index: any) => {
                return <FriendContainer key={index} item={item} />;
              })}

              <CustomText
                // fontFam={fonts.medium}
                font="font-clashmedium"
                fontWeight="600"
                label="Group Parties"
                size={18}
                style={{ marginBottom: verticalScale(10) }}
                color={colors.gray}
              />
              {groupParties.map((item: any, index: any) => {
                return <GroupPartiesContainer key={index} item={item} />;
              })}

              <CustomText
                // fontFam={fonts.medium}
                font="font-clashmedium"
                fontWeight="600"
                label="Request Challenge"
                size={18}
                style={{
                  marginBottom: verticalScale(5),
                  marginTop: verticalScale(15),
                }}
                color={colors.gray}
              />
              <RequestChallengeContainer />
            </View>
          )}

          {selectedTab == "Find Friends" && (
            <View
              style={{
                flex: 1,
                paddingHorizontal: scale(20),
                paddingTop: verticalScale(15),
              }}
            >
              <CustomSearch placeholder="search" />

              <FlatList
                data={FindFriends}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ gap: 10 }}
                renderItem={renderFindFriendsList}
              />
            </View>
          )}
        </View>
      </View>
    </GradientLayout>
  );
};
export default Friends;

const styles = StyleSheet.create({
  isPadTabContainer: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(5),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  tabContainer: {
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(5),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});