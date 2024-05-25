import { 
  ViewProps as RNViewProps, 
  TextProps as RNTextProps, 
  TouchableOpacityProps as RNTouchableOpacityProps,
  ImageProps as RNImageProps} from 'react-native';

declare module 'react-native' {
  export interface ViewProps extends RNViewProps {
    className?: string;
  }
  export interface TextProps extends RNTextProps {
    className?: string;
  }

  export interface TouchableOpacityProps extends RNTouchableOpacityProps{
    className?: string;
  }

  export interface ImageProps extends RNImageProps{
    className?: string;
  }

  declare module '*.webp' {
    const content: any;
    export default content;
}

}
