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
import tests from "@/constants/tests";
import CustomText from "../CustomText";
import { fonts } from "@/utils/fonts";
import { colors } from "@/utils/colors";
import { deviceType, DeviceType } from "expo-device";

const RequestChallengeContainer = ({ navigation, item }: any) => {
  const isTablet = (deviceType == DeviceType.TABLET);

  return (
    <View
      style={{
        ...appStyles.row,
        marginVertical: verticalScale(15),
        alignItems: "center",
        justifyContent:"space-between",
        width:"100%"
      }}
    >
      <View style={{...appStyles.row,
             gap: isTablet ? scale(20) : scale(30),

      }}>
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
            source={tests.profile}
          />
        </View>
      </View>

      <View style={{ gap: verticalScale(10),  }}>
        <CustomText
          size={17}
          // fontFam={fonts.medium}
          font="font-clashmedium"
          fontWeight="500"
          color={colors.gray}
          text={"Zakerrrr"}
        />
        <CustomText
          size={15}
          // fontFam={fonts.regular}
          font="font-clashregular"
          fontWeight="400"
          color={colors.gray}
          text={"@zakerr"}
        />
      </View>

     

      </View>

      <View style={{ gap: verticalScale(10),marginRight:"20%",alignItems:"center" }}>
        <View style={{paddingHorizontal:scale(22),backgroundColor:"#E5E5E5",paddingVertical:verticalScale(10),borderRadius:moderateScale(30)}}>
        <CustomText
          size={17}
          // fontFam={fonts.medium}
          font="font-clashmedium"
          fontWeight="600"
          color={colors.black}
          text={"VS"}
        />

        </View>
      
        <View
          style={{
            paddingVertical: scale(1),
            backgroundColor: "#E5E5E5",
            // paddingHorizontal:scale(-20),
            width: moderateScale(60),
            // zIndex: 999,
            borderRadius: scale(30),
            alignItems:"center",
            // justifyContent:"center"
            // paddingHorizontal:moderateScale(20)
          }}
        >
          <CustomText
            size={13}
            // fontFam={fonts.medium}
            font="font-clashmedium"
            fontWeight="600"
            color={colors.black}
            text={"4-2"}
          />
        </View>
      </View>
     
    </View>
  );
};
export default RequestChallengeContainer;
