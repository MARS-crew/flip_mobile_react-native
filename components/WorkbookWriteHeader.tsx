import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useMutation, useQueryClient } from 'react-query';
import { deleteWorkbook } from '../api/workbooks';
import { RootStackNavigationProp } from '../screens/RootStack';
import colorPalette from '../theme/colorPalette';
import { Error, Workbook } from '../types';
import { customToast } from '../utils/toastConfig';
import IconButton from './common/IconButton';

interface WorkbookWriteHeaderProps {
  workbook: Workbook;
  onModify: () => void;
}

function WorkbookWriteHeader({ workbook, onModify }: WorkbookWriteHeaderProps) {
  const navigation = useNavigation<RootStackNavigationProp>();
  const { top } = useSafeAreaInsets();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteWorkbook, {
    onSuccess: () => {
      queryClient.invalidateQueries('myWorkbooks');
      customToast.success('문제집을 삭제하였습니다.');
      navigation.goBack();
    },
    onError: (error: Error) => {
      customToast.error(error);
      navigation.goBack();
    },
  });

  return (
    <>
      <View style={{ backgroundColor: '#fff', height: top }} />
      <View style={styels.headerBlock}>
        <IconButton name="arrow-back-ios" onPress={() => navigation.goBack()} />
        <Text style={styels.title}>문제집 수정</Text>
        <View style={styels.iconBlock}>
          <Pressable
            style={styels.buttonWrap}
            onPress={() => mutate(workbook.id)}>
            <Icon name="delete" size={24} color={colorPalette.danger} />
          </Pressable>
          <Pressable
            style={[styels.buttonWrap, { marginLeft: 16 }]}
            onPress={onModify}>
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
