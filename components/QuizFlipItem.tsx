import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  View,
  Animated,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';
import colorPalette from '../theme/colorPalette';
import Button from './common/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';

function QuizFlipItem() {
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
        <Text style={styles.title}>1. 문제</Text>
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
        <Text style={styles.title}>1. 문제</Text>
        <ScrollView style={styles.backFlex}>
          <Text style={styles.answerText}>
            자바스크립트에선 실행 중인 함수, 코드 블록 스크립트 전체는 렉시컬
            환경(Lexical Environment) 이라 불리는 내부 숨김 연관 객체(internal
            hidden associated object)를 갖습니다. 렉시컬 환경 객체는 두 부분으로
            구성됩니다. 환경 레코드(Environment Record) – 모든 지역 변수를
            프로퍼티로 저장하고 있는 객체입니다. this 값과 같은 기타 정보도
            여기에 저장됩니다. 외부 렉시컬 환경(Outer Lexical Environment) 에
            대한 참조 – 외부 코드와 연관됨 ’변수’는 특수 내부 객체인 환경
            레코드의 프로퍼티일 뿐입니다. '변수를 가져오거나 변경’하는 것은
            '환경 레코드의 프로퍼티를 가져오거나 변경’함을 의미합니다. 아래 두
            줄짜리 코드엔 렉시컬 환경이 하나만 존재합니다. 프로퍼티로 저장하고
            있는 객체입니다. this 값과 같은 기타 정보도 여기에 저장됩니다. 외부
            렉시컬 환경(Outer Lexical Environment) 에 대한 참조 – 외부 코드와
            연관됨 ’변수’는 특수 내부 객체인 환경 레코드의 프로퍼티일 뿐입니다.
            '변수를 가져오거나 변경’하는 것은 '환경 레코드의 프로퍼티를
            가져오거나 변경’함을 의미합니다. 아래 두 줄짜리 코드엔 렉시컬 환경이
            하나만 존재합니다. 프로퍼티로 저장하고 있는 객체입니다. this 값과
            같은 기타 정보도 여기에 저장됩니다. 외부 렉시컬 환경(Outer Lexical
            Environment) 에 대한 참조 – 외부 코드와 연관됨 ’변수’는 특수 내부
            객체인 환경 레코드의 프로퍼티일 뿐입니다. '변수를 가져오거나
            변경’하는 것은 '환경 레코드의 프로퍼티를 가져오거나 변경’함을
            의미합니다. 아래 두 줄짜리 코드엔 렉시컬 환경이 하나만 존재합니다.
            프로퍼티로 저장하고 있는 객체입니다. this 값과 같은 기타 정보도
            여기에 저장됩니다. 외부 렉시컬 환경(Outer Lexical Environment) 에
            대한 참조 – 외부 코드와 연관됨 ’변수’는 특수 내부 객체인 환경
            레코드의 프로퍼티일 뿐입니다. '변수를 가져오거나 변경’하는 것은
            '환경 레코드의 프로퍼티를 가져오거나 변경’함을 의미합니다. 아래 두
            줄짜리 코드엔 렉시컬 환경이 하나만 존재합니다. 프로퍼티로 저장하고
            있는 객체입니다. this 값과 같은 기타 정보도 여기에 저장됩니다. 외부
            렉시컬 환경(Outer Lexical Environment) 에 대한 참조 – 외부 코드와
            연관됨 ’변수’는 특수 내부 객체인 환경 레코드의 프로퍼티일 뿐입니다.
            '변수를 가져오거나 변경’하는 것은 '환경 레코드의 프로퍼티를
            가져오거나 변경’함을 의미합니다. 아래 두 줄짜리 코드엔 렉시컬 환경이
            하나만 존재합니다. 프로퍼티로 저장하고 있는 객체입니다. this 값과
            같은 기타 정보도 여기에 저장됩니다. 외부 렉시컬 환경(Outer Lexical
            Environment) 에 대한 참조 – 외부 코드와 연관됨 ’변수’는 특수 내부
            객체인 환경 레코드의 프로퍼티일 뿐입니다. '변수를 가져오거나
            변경’하는 것은 '환경 레코드의 프로퍼티를 가져오거나 변경’함을
            의미합니다. 아래 두 줄짜리 코드엔 렉시컬 환경이 하나만 존재합니다.
          </Text>
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
