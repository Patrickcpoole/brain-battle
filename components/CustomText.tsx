import { Text } from 'react-native'
import { colors } from '@/utils/colors'
import { fonts } from '@/utils/fonts'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

type Props = {
    color?: string,
    size?: number,
    fontFam?: string,
    font?: string, // I added this prop to Waqas's code to make the code work with our Tailwind CSS fonts
    text?: any,
    style?: any,
    lineHeight?: number
    numberOfLines?:number
    fontWeight?:string
    textDecorationLine?:string
    label?:string
}

const CustomText = ({ color, size, fontFam, font, text, style, lineHeight,numberOfLines,fontWeight,textDecorationLine,label }: Props) => {
    return (
        <Text
        numberOfLines={numberOfLines}
        className={font}
            style={[
                {
                    color: color || colors.black,
                    fontSize: moderateScale( size||12),
                    fontWeight: fontWeight ||"500",
                    fontFamily: fontFam||fonts.regular ,
                    textDecorationLine:textDecorationLine,
                
                    
                    ...(lineHeight && { lineHeight: lineHeight }),
                }, style
            ]}
        >
            {text}{label}
        </Text >
    )
}
export default CustomText
