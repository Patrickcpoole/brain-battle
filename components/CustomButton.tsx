import { TouchableOpacity, Text} from 'react-native'
import React from 'react'

interface CustomButtonProps {
	title: string;
	handlePress: () => void;
	containerStyles?: string;
	textStyles?: string;
	isLoading?: boolean;
	iconSize?: number;
	iconName?: string;
	iconColor?: string;
}

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}: CustomButtonProps) => {
  return (
    <TouchableOpacity 
      className={`bg-primary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      >
      <Text className={`text-light font-clashregular ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton