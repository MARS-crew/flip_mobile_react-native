import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

function MyWorkbook() {
  return (
    <SafeAreaView>
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'black',
          transform: [{ rotateX: '45deg' }],
        }}
      />
    </SafeAreaView>
  );
}

export default MyWorkbook;
