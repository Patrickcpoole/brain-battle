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
import icons from "@/constants/tests";
import CustomText from "../CustomText";
import { fonts } from "@/utils/fonts";
import { colors } from "@/utils/colors";
import { deviceType, DeviceType } from "expo-device";

const FrinedContainer = ({ navigation, item }: any) => {
  const isTablet = (deviceType == DeviceType.TABLET);

  return (
    <View
      style={{
        ...appStyles.row,
        gap: isTablet?  scale(20):scale(30),
        marginVertical: verticalScale(15),
        // backgroundColor:"red",
        alignSelf:"flex-start",
        alignItems:"flex-start"
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
            source={item?.image}
          />

        </View>
        <View style={{width:moderateScale(17),height:moderateScale(17),backgroundColor:"#49D65B",borderRadius:moderateScale(15),position:"absolute",bottom:verticalScale(5),right:scale(-3),zIndex:999}}/>


        <View
          style={{
            position: "absolute",
            top: verticalScale(-8),
            paddingVertical: scale(1),
            backgroundColor: "#E5E5E5",
            width: moderateScale(53),
            // zIndex: 999,
            borderRadius: scale(30),
            alignItems:"center",
            // justifyContent:"center"
            // paddingHorizontal:moderateScale(20)
          }}
        >
          <CustomText
            size={11}
            // fontFam={fonts.bold}
            font="font-clashbold"
            fontWeight="bold"
            color={colors.black}
            text={item?.friend}
          />
        </View>

      </View>
    

        <View style={{gap:verticalScale(10),marginTop:verticalScale(-5)}}>
        <CustomText
            size={17}
            // fontFam={fonts.regular}
            font="font-clashregular"
            fontWeight="500"
            color={colors.gray}
            text={item?.name}
          />
           <CustomText
            size={15}
            // fontFam={fonts.regular}
            font="font-clashregular"
            fontWeight="500"
            color={colors.gray}
            text={item?.des}
          />



        </View>
     
    </View>
  );
};
export default FrinedContainer;
