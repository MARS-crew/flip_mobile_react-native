import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MainTabNavigationProp } from '../screens/MainTab';
import colorPalette from '../theme/colorPalette';
import WorkbookItem from './WorkbookItem';

interface WorkBookListProps {
  title: string;
}

const list = [1, 2, 3];

function WorkBookList({ title }: WorkBookListProps) {
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation<MainTabNavigationProp>();
  return (
    <View style={styles.block}>
      <View style={styles.listHeader}>
        <Text style={styles.titleText}>{title}</Text>
        <Pressable
          style={styles.more}
          onPress={() => navigation.navigate('MyWorkbook')}>
          <Text style={{ marginRight: 4, color: colorPalette.gray6 }}>
            전체 보기
          </Text>
          <Icon name="arrow-forward-ios" size={16} color={colorPalette.gray6} />
        </Pressable>
      </View>
      <Carousel
        activeSlideAlignment="start"
        data={list}
        renderItem={() => <WorkbookItem />}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 40}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        slideStyle={{ marginLeft: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: colorPalette.gray0,
    marginTop: 16,
    paddingVertical: 16,
    borderTopColor: colorPalette.gray3,
    borderTopWidth: 1,
    borderBottomColor: colorPalette.gray3,
    borderBottomWidth: 1,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  more: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colorPalette.gray6,
  },
});

export default WorkBookList;
