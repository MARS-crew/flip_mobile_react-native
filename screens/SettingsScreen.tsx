import { StackActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { clearToken } from '../api/client';
import Button from '../components/common/Button';
import useAuthActions from '../hooks/useAuthActions';
import authStorage from '../storages/authStorage';
import colorPalette from '../theme/colorPalette';
import { RootStackNavigationProp } from './RootStack';

function SettingsScreen() {
  const { logout } = useAuthActions();
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <View style={styles.block}>
      <Button
        text="로그아웃"
        onPress={() => {
          logout();
          clearToken();
          authStorage.clear();
          navigation.dispatch(StackActions.popToTop());
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
    backgroundColor: colorPalette.gray0,
  },
});

export default SettingsScreen;
