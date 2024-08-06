import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { moderateScale, verticalScale } from "@/utils/Mertics";
import { country } from "@/utils/Data";
import { appStyles } from "@/utils/appStyles";
import CustomText from "@/components/CustomText";
import { colors } from "@/utils/colors";
import { isiPad } from "@/utils/CommonFun";

const CountryDropDown = ({ selectedCountry, setSelectedCountry }: any) => {
  console.log("selectedCountry", selectedCountry);
  return (
    <View
      style={{
        position: "absolute",
        width: moderateScale(320),
        maxHeight: verticalScale(300),
        top: verticalScale(isiPad ? 75 : 110),
        right: moderateScale(40),
        borderWidth: 1,
        borderColor: "#EEEFF2",
        backgroundColor: colors.white,
        paddingVertical: verticalScale(5),
        borderRadius: moderateScale(10),
      }}
    >
      <ScrollView>
        {country.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.5}
              onPress={() => setSelectedCountry(item)}
              style={{
                ...appStyles.row,
                justifyContent: "space-between",
                paddingHorizontal: moderateScale(20),
                paddingVertical: verticalScale(8),
              }}
            >
              <View style={{ width: "20%" }}>
                <Image
                  style={{
                    width: moderateScale(30),
                    height: moderateScale(30),
                  }}
                  resizeMode="contain"
                  source={item.image}
                />
              </View>
              <View style={{ width: "70%" }}>
                <CustomText
                  fontFam={"ClashDisplay-Medium"}
                  fontWeight="600"
                  numberOfLines={1}
                  label={item.name}
                  size={18}
                  style={{ textAlign: "left" }}
                  color={colors.gray}
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setSelectedCountry(item)}
                style={{
                  width: moderateScale(25),
                  height: moderateScale(25),
                  borderRadius: moderateScale(20),
                  borderColor:
                    selectedCountry.name == item.name ? "#003A7D" : "#EEEFF2",
                  borderWidth: 1,
                  backgroundColor: colors.white,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {selectedCountry.name == item.name && (
                  <View
                    style={{
                      width: moderateScale(20),
                      height: moderateScale(20),
                      borderRadius: moderateScale(20),
                      backgroundColor: "#003A7D",
                    }}
                  ></View>
                )}
              </TouchableOpacity>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default CountryDropDown;
