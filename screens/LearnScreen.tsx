import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styled from 'styled-components/native';
import Button from '../components/common/Button';
import QuizFlipItem from '../components/QuizFlipItem';
import colorPalette from '../theme/colorPalette';
import { RootStackNavigationProp, RootStackParamList } from './RootStack';

type LearnScreenProps = RouteProp<RootStackParamList, 'Learn'>;

function LearnScreen() {
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation<RootStackNavigationProp>();
  const { params } = useRoute<LearnScreenProps>();
  const item = params.item;

  return (
    <Block>
      <LearnHeader>
        <QuizTitle>{item.title}</QuizTitle>
        <WorkbookInfoBlock>
          <Thumbnail>
            <Text>{item.user.email[0].toUpperCase()}</Text>
          </Thumbnail>
          <View>
            <Nickname>{item.user.email}</Nickname>
            <DateText>
              {item.user.email} · {item.cards.length}개 문제
            </DateText>
          </View>
        </WorkbookInfoBlock>
      </LearnHeader>
      <Carousel
        activeSlideAlignment="center"
        data={item.cards}
        renderItem={data => <QuizFlipItem card={data.item} inx={data.index} />}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 80}
        inactiveSlideOpacity={1}
      />
      <LearnFooter>
        <Button
          text="학습종료"
          onPress={() => navigation.navigate('MainTab')}
        />
      </LearnFooter>
    </Block>
  );
}

const Block = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background-color: ${colorPalette.gray0};
`;

const LearnHeader = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 16px;
  margin-bottom: 32px;
`;

const QuizTitle = styled.Text`
  font-size: 20px;
  color: ${colorPalette.gray7};
  font-weight: bold;
  margin-bottom: 8px;
`;

const WorkbookInfoBlock = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Thumbnail = styled.View`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  background-color: ${colorPalette.gray4};
  margin-right: 8px;
  border-radius: 18px;
`;

const Nickname = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${colorPalette.gray6};
  margin-bottom: 4px;
`;

const DateText = styled.Text`
  font-size: 12px;
  color: ${colorPalette.gray5};
`;

const LearnFooter = styled.View`
  padding: 16px 32px;
`;

export default LearnScreen;
