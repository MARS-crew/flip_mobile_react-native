import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RootStackNavigationProp } from '../screens/RootStack';
import colorPalette from '../theme/colorPalette';
import LabelWithInput from './common/LabelWithInput';

function WorkbookWriteHeader() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <>
      <View style={{ backgroundColor: '#fff', height: top }} />
      <View style={styels.headerBlock}>
        <Pressable
          style={styels.buttonWrap}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" size={20} />
        </Pressable>
        <Text style={styels.title}>문제집 추가</Text>
        <View style={styels.iconBlock}>
          <Pressable
            style={styels.buttonWrap}
            onPress={() => console.log('delete')}>
            <Icon name="delete" size={24} color={colorPalette.danger} />
          </Pressable>
          <Pressable
            style={[styels.buttonWrap, { marginLeft: 16 }]}
            onPress={() => console.log('check')}>
            <Icon name="check" size={24} color={colorPalette.success} />
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styels = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  headerBlock: {
    height: 44.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: colorPalette.gray0,
    borderBottomColor: colorPalette.gray3,
    borderBottomWidth: 0.5,
  },
  title: {
    position: 'absolute',
    right: 32,
    left: 32,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    zIndex: -1,
  },
  iconBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonWrap: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WorkbookWriteHeader;
