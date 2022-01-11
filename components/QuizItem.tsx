import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, View, Animated, StyleSheet, Text } from 'react-native';
import colorPalette from '../theme/colorPalette';
import Button from './common/Button';

function QuizItem() {
  const [isFliped, setIsFliped] = useState(false);
  const screenHeight = Dimensions.get('window').height;
  const animation = useRef(new Animated.Value(0)).current;

  const flip = useCallback(() => {
    setIsFliped(!isFliped);
    Animated.timing(animation, {
      toValue: isFliped ? 0 : 180,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [animation, isFliped]);

  return (
    <View style={{ height: screenHeight * 0.6 }}>
      <Animated.View
        style={[
          styles.flipCard,
          {
            transform: [
              {
                rotateX: animation.interpolate({
                  inputRange: [0, 180],
                  outputRange: ['0deg', '180deg'],
                }),
              },
            ],
          },
          { zIndex: isFliped ? -1 : 999 },
        ]}>
        <Text>Front</Text>
        <Button text="Flip to back" onPress={flip} />
      </Animated.View>
      <Animated.View
        style={[
          styles.flipCard,
          styles.flipCardBack,
          {
            transform: [
              {
                rotateX: animation.interpolate({
                  inputRange: [0, 180],
                  outputRange: ['180deg', '360deg'],
                }),
              },
            ],
          },
          { zIndex: isFliped ? 999 : -1 },
        ]}>
        <Text>Back</Text>
        <Button text="Flip to front" onPress={flip} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  flipCard: {
    backgroundColor: colorPalette.gray0,
    borderRadius: 8,
    backfaceVisibility: 'hidden',
    width: '100%',
    height: '100%',
  },
  flipCardBack: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default QuizItem;
