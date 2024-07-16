import { View, Animated } from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import React, { useEffect, useState, useRef } from 'react';
import { Svg, Circle, Text } from 'react-native-svg';  // Make sure Text is imported from 'react-native-svg'

interface Props {
  isActive: boolean;
  onTimerComplete: () => void;  // Callback for when the timer completes
  seconds: number;
  radius: number;
  thickness: number;
  color: string;
}

const CircularTimer = ({ isActive, onTimerComplete, seconds, radius, thickness, color }: Props) => {
  const [timer, setTimer] = useState(seconds);
  const circumference = radius * 2 * Math.PI;
  const animatedValue = useRef(new Animated.Value(0)).current; // Start animation from 0

  const circleRef = useRef<Circle>(null);

  useEffect(() => {
    if (isActive) {
      animatedValue.setValue(0); // Ensure it starts from 0
      const animation = Animated.timing(animatedValue, {
        toValue: circumference,  // Animate to the full circumference to hide the circle
        duration: seconds*1000,
        useNativeDriver: false
      });

      animation.start(() => {
        onTimerComplete();  // Call the completion handler
      });

      animatedValue.addListener(v => {
        const strokeDashoffset = v.value;  // Direct use of the animated value
        if (circleRef.current) {
          circleRef.current.setNativeProps({ strokeDashoffset });
        }
      });

      const interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            animation.stop();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        clearInterval(interval);
        animatedValue.removeAllListeners();
        animation.stop();
      };
    }
  }, [isActive, circumference, animatedValue, onTimerComplete]);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Svg height={radius*2 + thickness*2} width={radius*2 + thickness*2} viewBox={`0 0 ${radius*2 + thickness*2} ${radius*2 + thickness*2}`}>
        <Circle
          ref={circleRef}
          cx={radius+thickness}
          cy={radius+thickness}
          r={radius}
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={circumference}
          fill="transparent"
        />
        <Text
          x={radius+thickness+scale(2)}
          y={radius+thickness} // Slightly adjust based on font size
          textAnchor="middle" // Centers the text horizontally
          fontSize={moderateScale(32)}
          fill="black"
          alignmentBaseline="central" // Centers the text vertically
        >
          {timer.toString() + "s"}
        </Text>
      </Svg>
    </View>
  );
};

export default CircularTimer;
