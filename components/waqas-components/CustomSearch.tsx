import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import CustomText from "./CustomText";
import { colors } from "../../utils/colors";
import { windowWidth } from "../../utils/Dimensions";
import { fonts } from "../../utils/fonts";
// import { images } from "../../src/assets";
import icons from "../../constants/icons";
type Props = {
  label?: string;
  placeholder?: string;
  error?: string;
  isPassword?: boolean;
  source?: any;
  keyboard?: any;
  props?: any;
  value?: any;
  onChangeText?: any;
  onBlur?: any;
  isCenter?: boolean;
  onShowPassword?: any;
  editable?: boolean;
  color?: string;
  maxLength?: number;
  leftSource?: any;
  fontWeight?: any;
  marginTop?: any;
  multiline?: boolean;
  height?: any;
  dropdown?: boolean;
  items?: any;
  setItems?: any;
  dropdownValue?: any;
  setDropdownValue?: any;
  open?: any;
  setOpen?: any;
  zIndex?: any;
  onOpen?: any;
  onClose?: any;
  disabled?: boolean;
  labelSize?: any;
};

const CustomSearch = ({
  label,
  placeholder,
  keyboard,
  isPassword,
  source,
  props,
  isCenter,
  fontWeight,
  marginTop,
  multiline,
  height,
  dropdown,
  open,
  value,
  onChangeText,
  onBlur,
  error,
  onShowPassword,
  editable,
  color,
  maxLength,
  leftSource,
  items,
  setItems,
  dropdownValue,
  setDropdownValue,
  setOpen,
  zIndex,
  onOpen,
  onClose,
  disabled,
  labelSize,
}: Props) => {
  return (
    <View style={{ ...props }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: scale(10),
          height: verticalScale(55),

          alignItems: "center",
          borderRadius: moderateScale(8),
          borderWidth: moderateScale(1.2),
          borderColor: colors.lightBlue54,
        }}
      >
        <View style={{ flex: 1 }}>
          <TextInput
            value={value}
            editable={editable}
            style={{
              fontSize: moderateScale(17),
              width: windowWidth / 1.2,
              alignItems: "center",
              // paddingTop:20,
              fontFamily: fonts.regular,
              fontWeight: fontWeight,
              color: color || colors.black,
              ...(isCenter && { alignSelf: "center" }),
            }}
            placeholder={placeholder}
            multiline={multiline}
            placeholderTextColor={colors.lightBlue}
            keyboardType={keyboard}
            maxLength={maxLength}
            secureTextEntry={isPassword || false}
            onChangeText={onChangeText}
            onBlur={onBlur}
            autoCapitalize="none"
          />
        </View>

        <Image
          style={{
            width: moderateScale(20),
            height: moderateScale(20),
            paddingRight: scale(40),
          }}
          source={icons.search}
          resizeMode="center"
        />
      </View>
    </View>
  );
};
export default CustomSearch;
