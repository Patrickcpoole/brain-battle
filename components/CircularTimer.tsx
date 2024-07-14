import React, { useEffect, useState, useRef } from 'react';
import { View } from 'react-native';
import { Svg, Circle, Text } from 'react-native-svg';  // Make sure Text is imported from 'react-native-svg'
import { Animated } from 'react-native';

interface Props {
  isActive: boolean;
  onTimerComplete: () => void;  // Callback for when the timer completes
}

const CircularTimer = ({ isActive, onTimerComplete }: Props) => {
  const [timer, setTimer] = useState(3);
  const circumference = 100 * 2 * Math.PI;
  const animatedValue = useRef(new Animated.Value(0)).current; // Start animation from 0

  const circleRef = useRef();

  useEffect(() => {
    if (isActive) {
      animatedValue.setValue(0); // Ensure it starts from 0
      const animation = Animated.timing(animatedValue, {
        toValue: circumference,  // Animate to the full circumference to hide the circle
        duration: 3000,
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
      <Svg height="200" width="200" viewBox="0 0 200 200">
        <Circle
          ref={circleRef}
          cx="100"
          cy="100"
          r="90"
          stroke="#3498db"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          fill="transparent"
        />
        <Text
          x="100"
          y="105" // Slightly adjust based on font size
          textAnchor="middle" // Centers the text horizontally
          fontSize="24"
          fill="black"
          alignmentBaseline="central" // Centers the text vertically
        >
          {timer}
        </Text>
      </Svg>
    </View>
  );
};

export default CircularTimer;
