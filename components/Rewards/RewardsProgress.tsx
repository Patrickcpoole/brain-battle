import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as Progress from "react-native-progress";
import images from "@/constants/images";
import icons from "@/constants/icons";
import CustomText from "../CustomText";
import { appStyles } from "../../utils/appStyles";
import { moderateScale, verticalScale } from "../../utils/Mertics";
import { windowWidth } from "../../utils/Dimensions";
import { colors } from "react-native-swiper-flatlist/src/themes";
import { isiPad } from "@/utils/CommonFun";
import { rewardRanks } from "@/utils/Data";

const RANKS: any = [
  {
    startName: "Beginner",
    nextName: "Prodigy",
    min: 0,
    max: 499,
    minImage: images.beginner,
    maxImage: images.prodigy,
    minImageShadowColor: "#C0F0FA",
    maxImageShadowColor: "#F0BDCC",
  },
  {
    startName: "Prodigy",
    nextName: "Elite",
    min: 500,
    max: 1249,
    minImage: images.prodigy,
    maxImage: images.elite,

    minImageShadowColor: "#F0BDCC",
    maxImageShadowColor: "#1C361A",
  },
  {
    startName: "Elite",
    nextName: "Mastermind",

    min: 1250,
    max: 1999,
    minImage: images.elite,
    maxImage: images.mastermind,
    minImageShadowColor: "#1C361A",
    maxImageShadowColor: "#C200D3",
  },
  {
    startName: "Mastermind",
    nextName: "King/Queen",
    min: 2000,
    max: 2249,
    minImage: images.mastermind,
    maxImage: images.kingQueen,
    minImageShadowColor: "#C200D3",
    maxImageShadowColor: "#037676",
  },
  {
    name: "King/Queen",
    startName: "King/Queen",
    nextName: "Legend",
    min: 2250,
    max: 2499,
    minImage: images.kingQueen,
    maxImage: images.legend,
    minImageShadowColor: "#037676",
    maxImageShadowColor: "#F6DE8A",
  },
  {
    name: "Legend",
    startName: "Legend",
    nextName: "",
    min: 2500,
    max: Infinity,
    minImage: images.prodigy,
    maxImage: null,
    minImageShadowColor: "#F6DE8A",
  },
];

// const getProgress = (elo) => {
//   const totalRange = RANKS[RANKS.length - 1].max;
//   return elo / totalRange;
// };

// const getRank = (elo) => {
//   for (let rank of RANKS) {
//     if (elo >= rank.min && elo <= rank.max) {
//       return rank.name;
//     }
//   }
//   return "Unknown";
// };

const RewardProgress = ({
  elo,
  setSelectedRanking,
  selectectedRanking,

  selectectedRedwardsRankIndex,
  setSelectectedRedwardsRankIndex,
  selectectedRewarsRank,
  setSelectectedRewarsRank,
  isSelectectedRewarsRank,
  setIsSelectectedRewarsRank,
}: any) => {
  const item = rewardRanks[selectectedRedwardsRankIndex]; // Accessing only the first item

  // console.log("elo", elo);
  // const progress = getProgress(elo);
  // const rank = getRank(elo);

  console.log("progress", selectectedRedwardsRankIndex);

  return (
    <View style={styles.container}>
      <View style={{ ...appStyles.row, gap: moderateScale(7) }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            setSelectectedRedwardsRankIndex(selectectedRedwardsRankIndex - 1);
          }}
        >
          <Image
            style={{ width: moderateScale(15), height: moderateScale(15) }}
            resizeMode="cover"
            source={icons.backArrow}
          />
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            activeOpacity={0.4}
            onPress={() => {
              setSelectectedRewarsRank({
                data: item?.data,
                name: item?.startName,
                min: 0,
                max: 499,
                image: item.minImage,
                shadowColor: item?.minImageShadowColor,
              });
              setIsSelectectedRewarsRank(true);
            }}
          >
            <View
              style={{
                width: moderateScale(50),
                alignItems: "center",
                height: verticalScale(20),
              }}
            >
              <CustomText
                fontFam={"ClashDisplay-Medium"}
                text={item.startName}
                style={{ textAlign: "center" }}
                size={11}
                color={"#7B7B7B"}
              />
            </View>

            <View
              style={{
                width: moderateScale(40),
                height: moderateScale(40),
                borderRadius: moderateScale(40),
                borderWidth: 1,
                borderColor: "#FFC700",
                // backgroundColor: colors.white,
                alignItems: "center",
                justifyContent: "center",
                elevation: 10,
                shadowColor: item.minImageShadowColor,
                shadowOffset: { width: -2, height: isiPad ? 5 : 2 },
                shadowOpacity: 0.5,
                shadowRadius: 3,
              }}
            >
              <Image
                style={{ width: "76%", height: "76%" }}
                resizeMode="cover"
                source={item.minImage}
              />
            </View>

            <CustomText
              fontFam={"ClashDisplay-Semibold"}
              fontWeight="bold"
              text={item.min.toLocaleString()}
              label=" ELO"
              style={{ textAlign: "center", marginTop: verticalScale(3) }}
              size={12}
              color={"#007B23"}
            />
          </TouchableOpacity>
        </View>

        <Progress.Bar
          color={"#15A000"}
          unfilledColor={"#D9D1C2"}
          animated={true}
          borderWidth={-1}
          style={{
            // marginTop: verticalScale(16),
            borderRadius: 100,
            marginLeft: moderateScale(-9),
          }}
          height={verticalScale(11)}
          progress={0.6}
          width={windowWidth / 1.8}
        />
        <View>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => {
              setSelectectedRewarsRank({
                data: item?.data,
                name: item?.nextName,
                min: 0,
                max: 499,
                image: item?.maxImage,
                shadowColor: item?.maxImageShadowColor,
              });
              setIsSelectectedRewarsRank(true);
            }}
            style={{
              alignItems: "center",
              marginLeft: moderateScale(-15),
            }}
          >
            <View
              style={{
                width: moderateScale(50),
                alignItems: "center",
                height: verticalScale(20),
              }}
            >
              <CustomText
                fontFam={"ClashDisplay-Medium"}
                text={item.nextName}
                style={{ textAlign: "center" }}
                size={11}
                color={"#7B7B7B"}
              />
            </View>

            <View
              style={{
                width: moderateScale(40),
                height: moderateScale(40),
                borderRadius: moderateScale(40),
                borderWidth: 1,
                borderColor: "#FFC700",
                alignItems: "center",
                justifyContent: "center",
                elevation: 10,
                shadowColor: item.maxImageShadowColor,
                shadowOffset: { width: -2, height: isiPad ? 5 : 2 },
                shadowOpacity: 0.5,
                shadowRadius: 3,
              }}
            >
              <Image
                style={{ width: "76%", height: "76%" }}
                resizeMode="cover"
                source={item.maxImage}
              />
            </View>

            <CustomText
              fontFam={"ClashDisplay-Medium"}
              fontWeight="bold"
              text={item.max.toLocaleString()}
              label=" ELO"
              style={{ textAlign: "center", marginTop: verticalScale(3) }}
              size={13}
              color={"#877777"}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            setSelectectedRedwardsRankIndex(selectectedRedwardsRankIndex + 1);
          }}
        >
          <Image
            style={{ width: moderateScale(15), height: moderateScale(15) }}
            resizeMode="contain"
            source={icons.nextArrow}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    // padding: 20,
    height: verticalScale(100),
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default RewardProgress;
