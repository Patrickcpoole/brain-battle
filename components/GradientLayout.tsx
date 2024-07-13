import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import { images } from "../../src/assets";
import images from "@/constants/images";
import icons from "@/constants/icons";
import tests from "@/constants/tests";
import { windowHeight, windowWidth } from "@/utils/Dimensions";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import { appStyles } from "@/utils/appStyles";
import CustomText from "./CustomText";
import { fonts } from "@/utils/fonts";
import { deviceType, DeviceType } from "expo-device";
import { colors } from "@/utils/colors";

const GradientLayout = ({ children, color }: any) => {
  const isTablet = (deviceType == DeviceType.TABLET);

  return (
    <LinearGradient
      colors={[color || "#ECF6FF", color || "#FFFFFF"]}
      style={{ flex: 1 }}
      end={{x: 1, y: 0.7}}
    >
      <View style={{ flex: 1 }}>
        <View
          style={
            isTablet
              ? styles.iPadCircleContainer
              : {
                  position: "absolute",
                  width: scale(200),
                  height: verticalScale(180),
                  left: scale(-40),
                  // top: Platform.OS == "ios" ? 50 : 0,
                  alignItems: "flex-end",
                }
          }
        >
          <Image
            resizeMode="contain"
            style={{ width: "100%", height: "100%", position: "absolute" }}
            source={images.circle}
          />
          <View
            style={
              isTablet
                ? {
                    ...appStyles.row,
                    ...styles.iPadInnerTextContainer,
                  }
                : {
                    ...appStyles.row,
                    ...styles.innerTextContainer,
                  }
            }
          >
            <Image
              resizeMode="contain"
              style={{ width: moderateScale(25), height: moderateScale(25) }}
              source={icons.friends}
            />
            <CustomText
              size={29}
              // fontFam={fonts.medium}
              font="font-clashmedium"
              color="#3D3131"
              text={"Friends"}
            />
          </View>
        </View>

        <View
          style={{
           
            alignSelf: "flex-end",
            marginRight: scale(30),
            gap: scale(12),
            ...appStyles.row,
            marginTop:  isTablet? verticalScale(20):Platform.OS=="ios"?verticalScale(60):verticalScale(10),
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.black,
              borderRadius: 50,
              paddingHorizontal: scale(17),
              paddingVertical: verticalScale(3),
              flexDirection: "row",
              alignItems: "center",
              gap: scale(7),
              backgroundColor: colors.white,
              elevation: 5,
              shadowColor:  colors.black,
              shadowOffset: { width: 0, height: isTablet?  5:2 },
              shadowOpacity: 0.5,
              shadowRadius: 3,
            }}
          >
            <Image
              className="rounded-full"
              resizeMode="contain"
              style={{ width: moderateScale(25), height: moderateScale(25) }}
              source={tests.profile}
            />
            <CustomText
              size={18}
              // fontFam={fonts.medium}
              font="font-clashmedium"
              color={colors.black}
              text={"1235"}
            />
          </View>

          <View>
            <Image
              resizeMode="contain"
              style={{ width: moderateScale(23), height: moderateScale(23) }}
              source={icons.notifications}
            />
            <View
              style={{
                width: moderateScale(22),
                height: moderateScale(22),
                borderRadius: 999,
                backgroundColor: colors.red,
                position: "absolute",
                top: verticalScale(-8),
                right: scale(-7),
                alignItems:"center",
                justifyContent:"center"
              }}
            >
              <CustomText
              size={12}
           
              color={colors.white}
              text={"12"}
            />


            </View>
          </View>
        </View>

        {children}
      </View>
    </LinearGradient>
  );
};
export default GradientLayout;

const styles = StyleSheet.create({
  innerTextContainer: {
    gap: 10,
    marginTop: Platform.OS == "ios"?verticalScale(65):verticalScale(25),
    paddingRight: Platform.OS == "ios" ? "9%" : scale(18),
  },
  iPadInnerTextContainer: {
    gap: 20,
    marginTop: verticalScale(35),
    paddingRight: "22%",
  },
  iPadCircleContainer: {
    position: "absolute",
    width: scale(185),
    height: verticalScale(185),
    left: scale(-40),
    // top: 20,
    alignItems: "flex-end",
  },
});

// const
