import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, StyleSheet, Dimensions, Animated, Easing } from 'react-native';

const { width } = Dimensions.get('window');

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);

const Skeleton = ({ style = {} }) => {
  const animatedValue = new Animated.Value(0);

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear.inOut,
        useNativeDriver: true,
      }),
    ).start();
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width * 1.5, width * 1.5],
  });

  return (
    <View
      style={{
        height: 150,
        borderRadius: 10,
        ...style,
        backgroundColor: '#efefef',
        borderColor: '#b0b0b0',
        overflow: 'hidden',
      }}>
      <AnimatedLG
        colors={['#f1f1f1', '#d9d9d9', '#d9d9d9', '#f1f1f1']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          ...StyleSheet.absoluteFill,
          transform: [{ translateX: translateX }],
        }}
      />
    </View>
  );
};

export default Skeleton;
