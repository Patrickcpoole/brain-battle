import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

type Label = string | undefined;

interface Icon {
	name: string;
	color: string;
	size: number;
}

interface CustomFormFieldProps {

	label?: Label;
	placeholder?: string;
	handleChangeText: (text: string) => void;
	value: string;
	otherStyles?: string;
	textStyles?: string;
	leftIcon?: Icon;
	rightIcon?: Icon;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'ascii-capable' | 'numbers-and-punctuation' | 'url' | 'number-pad' | 'name-phone-pad' | 'decimal-pad' | 'twitter' | 'web-search' | 'visible-password';
}

const FormField = ({

	placeholder,
	value,
	otherStyles,
	textStyles,
	label,
	handleChangeText,
	rightIcon,
	leftIcon,
}: CustomFormFieldProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const showLabel: boolean = !!label;

	return (
		<View className={`space-y-2 w-full ${otherStyles}`}>
			{showLabel && <Text className='text-base text'>{label}</Text>}
			<View
				className='w-full flex flex-row 
      h-16 px-4 bg-[#d7dbe2] rounded-2xl 
      focus:border-secondary justify-center items-center'
			>
				{leftIcon && (
					<AntDesign
						name={leftIcon.name as any}
						size={leftIcon.size}
						color={leftIcon.color}
					/>
				)}
     
				<TextInput
					className={`flex-1 text-lg text-text font-psemibold ${textStyles}`}
					value={value}
					placeholder={placeholder}
					placeholderTextColor='#7b7b8b'
					onChangeText={handleChangeText}
					secureTextEntry={label === 'Password' && !showPassword}
				/>
				{rightIcon && (
					<FontAwesome
						name={showPassword ? 'eye-slash' : (rightIcon.name as any)}
						size={rightIcon.size}
						color={rightIcon.color}
						onPress={() => setShowPassword(!showPassword)}
					/>
				)}
			</View>
		</View>
	);
};

export default FormField;
