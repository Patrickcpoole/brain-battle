import React from 'react';
import { Image } from 'react-native';
import icons from '../constants/icons'; // Ensure this path is correct

interface IconProps {
  name: keyof typeof icons; // This ensures you use only valid keys from the 'icons' object
}

const Icon: React.FC<IconProps> = ({ name }) => {
  const iconSource = icons[name]; // Access the correct image source using the name key
  return <Image source={iconSource} style={{ width: 50, height: 50 }} resizeMode="contain" />;
}

export default Icon;
