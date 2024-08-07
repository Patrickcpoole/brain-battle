import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { appStyles } from "@/utils/appStyles";
import { horizontalScale, moderateScale, verticalScale } from "@/utils/Metrics";
import icons from "@/constants/icons";
import CustomText from "@/components/CustomText";
import { fonts } from "@/utils/fonts";
import { colors } from "@/utils/colors";
import { isiPad } from "@/utils/CommonFun";

const LeaderBoadUserCard = ({
  navigation,
  item,

  selectedLeaderBoardUser,
  setSelectedLeaderBoardUser,
  index,
}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => setSelectedLeaderBoardUser(index)}
      style={{
        ...appStyles.row,
        marginBottom: verticalScale(20),
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingVertical: horizontalScale(20),
        paddingHorizontal: moderateScale(15),
        backgroundColor:
          selectedLeaderBoardUser == index ? "#E4FFE2" : colors.white,
        borderRadius: moderateScale(20),
        borderWidth: selectedLeaderBoardUser == index ? 1 : 0,
      }}
    >
      <View
        style={{
          ...appStyles.row,
          gap: isiPad ? horizontalScale(10) : horizontalScale(10),
        }}
      >
        <View
          style={{
            borderRadius: moderateScale(30), // This value is sufficiently large to ensure a perfect circle
            borderWidth: selectedLeaderBoardUser == index ? 2 : 1.2,
            borderColor:
              selectedLeaderBoardUser == index ? colors.black : "#E6E6E6",
            alignItems: "center",
            justifyContent: "center",
            width: moderateScale(30), // Add fixed width
            height: moderateScale(30), // Add fixed height
          }}
        >
          <CustomText
            size={12}
            fontFam="ClashDisplay-Medium"
            fontWeight="bold"
            color={
              selectedLeaderBoardUser == index ? colors.black : colors.gray200
            }
            text={item.count}
          />
        </View>
        <View>
          <View
            style={{
              width: moderateScale(60),
              height: moderateScale(60),
              borderRadius: moderateScale(60),

              overflow: "hidden",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
              source={item.image}
            />
          </View>

          <Image
            style={{
              width: moderateScale(33),
              height: moderateScale(33),
              position: "absolute",
              right: horizontalScale(-5),
              bottom: verticalScale(-6),
            }}
            resizeMode="contain"
            source={item.rooseveltBadge}
          />
        </View>

        <View style={{ gap: verticalScale(isiPad ? 17 : 8) }}>
          <View style={{ ...appStyles.row, gap: horizontalScale(5) }}>
            <CustomText
              size={17}
              fontFam={
                selectedLeaderBoardUser == index
                  ? "ClashDisplay-Semibold"
                  : "ClashDisplay-Medium"
              }
              fontWeight="600"
              color={colors.black}
              text={item.name}
            />
          </View>

          <CustomText
            size={15}
            fontFam={"ClashDisplay-Medium"}
            fontWeight="600"
            color={colors.black}
            text={item.points}
          />
        </View>
      </View>
      {selectedLeaderBoardUser == index && (
        <View
          style={{
            paddingTop: verticalScale(20),
            alignItems: "flex-end",
            gap: verticalScale(5),
            marginRight: moderateScale(10),
          }}
        >
          <Image
            style={{
              width: moderateScale(20),
              height: moderateScale(20),
              alignSelf: "flex-end",
            }}
            resizeMode="contain"
            source={icons.send}
          />
          <CustomText
            size={15}
            fontFam={fonts.regular}
            fontWeight="400"
            color={colors.black}
            text={"Flex"}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};
export default LeaderBoadUserCard;
