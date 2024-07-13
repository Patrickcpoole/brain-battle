import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { appStyles } from "@/utils/appStyles";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
// import { images } from "../../src/assets";
import icons from "@/constants/icons";
import CustomText from "../CustomText";
import { fonts } from "@/utils/fonts";
import { colors } from "@/utils/colors";
import { deviceType, DeviceType } from "expo-device";
import { ShadowedView } from 'react-native-fast-shadow';

const FindFriendsContainer = ({ navigation, item }: any) => {
  const isTablet = (deviceType == DeviceType.TABLET);

  return (
    <View
      style={{
        ...appStyles.row,
        marginVertical: verticalScale(10),
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingLeft: scale(10),
        //   backgroundColor:"red"
      }}
    >
      <View
        style={{
          ...appStyles.row,
          gap: isTablet ? scale(10) : scale(10),
        }}
      >
        <View>
          <View
            style={{
              width: moderateScale(50),
              height: moderateScale(50),
              borderRadius: moderateScale(50),

              overflow: "hidden",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
              source={item.image}
            />
          </View>
          {item.monsterBadge && (
            <ShadowedView
            style={{
              shadowOpacity: 0.5,
              shadowRadius: 10,
              elevation:5,
              shadowColor:"#530182",
              shadowOffset: {
                width: 5,
                height: 5,
              },
            }}
          >
                      <Image
              style={{
                width: moderateScale(35),
                height: moderateScale(35),
                position: "absolute",
                left: scale(-10),
                bottom: verticalScale(-14),
             
                
              }}
              resizeMode="contain"
              source={item.monsterBadge}
            />
            </ShadowedView>
            // <View
            // style={{
            //     elevation: 5,
            //     shadowColor:  "#bf90db",
            //     shadowOffset: { width: 0, height: 30 },
            //     shadowOpacity: 0.5,
            //     shadowRadius: 3,
            // }}
            // >
            //          <Image
            //   style={{
            //     width: moderateScale(35),
            //     height: moderateScale(35),
            //     position: "absolute",
            //     left: scale(-10),
            //     bottom: verticalScale(-14),
             
                
            //   }}
            //   resizeMode="contain"
            //   source={item.monsterBadge}
            // />
            //     </View>
       
          )}

          {item?.tagBadge && (
            <View
              style={{
                width: moderateScale(25),
                height: moderateScale(25),
                position: "absolute",
                left: isTablet ? scale(-8) : scale(-10),
                bottom: verticalScale(-8),
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                // resizeMode="contain"
                source={item.tagBadge}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: verticalScale(5),
                  left: isTablet ? scale(5) : scale(6),
                }}
              >
                <CustomText
                  size={7}
                  // fontFam={fonts.regular}
                  font="font-clashregular"
                  fontWeight="400"
                  color={colors.black}
                  text={"#52"}
                />
              </View>
            </View>
          )}
          <Image
            style={{
              width: moderateScale(30),
              height: moderateScale(30),
              position: "absolute",
              right: scale(-8),
              bottom: verticalScale(-12),
            }}
            resizeMode="contain"
            source={item.rooseveltBadge}
          />
        </View>

        <View style={{ gap: verticalScale(5) }}>
          <View style={{ ...appStyles.row, gap: scale(5) }}>
            <CustomText
              size={14}
              // fontFam={fonts.semiBold}
              font="font-clashsemibold"
              fontWeight="600"
              color={colors.black}
              text={"Community Name here"}
            />
            <Image
              style={{ width: moderateScale(15), height: moderateScale(15) }}
              resizeMode="contain"
              source={icons.verified}
            />
          </View>

          <CustomText
            size={15}
            // fontFam={fonts.regular}
            font="font-clashregular"
            fontWeight="400"
            color={colors.black}
            text={"1.1M followers"}
          />
        </View>
      </View>
      <Image
        style={{ width: moderateScale(15), height: moderateScale(15) }}
        resizeMode="contain"
        source={icons.add}
      />
    </View>
  );
};
export default FindFriendsContainer;
