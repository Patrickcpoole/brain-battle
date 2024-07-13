import { View, Text, Image, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import React from 'react'
import { osName, deviceType, DeviceType } from 'expo-device';

interface OvalContainerProps {
    text: string;
    style?: StyleProp<ViewStyle>;
}

const OvalContainer = ({text, style}: OvalContainerProps) => {

    const isApple = (osName == "iOS" || osName == "iPadOS");
    const isTablet = (deviceType == DeviceType.TABLET);

    const textStyle = {fontSize: moderateScale(isTablet ? 16 : 14.5), transform: [{scaleX: 1/3}]};

    return (
        <View style={style}>
            <View className={`flex justify-center items-center bg-light rounded-full ${isApple ? "shadow-sm" : "shadow-md"} shadow-gray-500`} style={styles.oval}>
                <View style={styles.textbox}>
                    <Text numberOfLines={5} className="font-clashmedium text-center" style={textStyle}> {text} </Text>
                </View>
            </View>
        </View>
    );

}

export default OvalContainer;

const styles = StyleSheet.create({

    oval: {
        width: scale(100),
        aspectRatio: 1,
        transform: [{scaleX: 3}],
    },

    textbox: {
        width: scale(100)*2.35,
    },

});
