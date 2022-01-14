import React, { useCallback, useRef, useState } from 'react';
import {
  Dimensions,
  View,
  Animated,
  StyleSheet,
  Text,
  Pressable,
  ListRenderItemInfo,
} from 'react-native';
import colorPalette from '../theme/colorPalette';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from '../types';

interface QuizFlipItemProps {
  card: Card;
  inx: number;
}

function QuizFlipItem({ card, inx }: QuizFlipItemProps) {
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

  const backInterpolate = {
    transform: [
      {
        rotateX: animation.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
    zIndex: isFliped ? 999 : -1,
  };
  const frontInterpolate = {
    transform: [
      {
        rotateX: animation.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
    zIndex: isFliped ? -1 : 999,
  };

  return (
    <View style={{ height: screenHeight * 0.6 }}>
      <Animated.View style={[styles.flipCard, frontInterpolate]}>
        <Text style={styles.title}>
          {inx + 1}. {card.question}
        </Text>
        <View style={styles.frontFlex}>
          <Text style={styles.frontFlexText}>할 수 있다!</Text>
        </View>
        <Pressable style={styles.button} onPress={flip}>
          <Text style={styles.buttonText}>부끄러워하지 말아요</Text>
          <Icon name="touch-app" size={20} color={colorPalette.gray4} />
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[styles.flipCard, styles.flipCardBack, backInterpolate]}>
        <Text style={styles.title}>
          {inx + 1}. {card.question}
        </Text>
        <ScrollView style={styles.backFlex}>
          <Text style={styles.answerText}>{card.result}</Text>
        </ScrollView>
        <Pressable style={styles.button} onPress={flip}>
          <Text style={styles.buttonText}>한번 더!</Text>
          <Icon name="touch-app" size={20} color={colorPalette.gray4} />
        </Pressable>
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
    padding: 16,
    borderWidth: 1,
    borderColor: colorPalette.gray3,
  },
  flipCardBack: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  frontFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frontFlexText: {
    fontSize: 22,
    color: colorPalette.primary,
    fontWeight: 'bold',
  },
  backFlex: {
    flex: 1,
  },
  answerText: {
    color: colorPalette.gray6,
    fontSize: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    color: colorPalette.gray5,
    marginRight: 4,
  },
});

export default QuizFlipItem;
