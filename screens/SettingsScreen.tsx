import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/common/Button';
import colorPalette from '../theme/colorPalette';

function SettingsScreen() {
  return (
    <View style={styles.block}>
      <Button text="로그아웃" onPress={() => {}} />
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
