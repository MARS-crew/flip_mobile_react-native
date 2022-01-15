import { useNavigation } from '@react-navigation/native';
import React from 'react';
import IconButton from './IconButton';

function GoBack() {
  const navigation = useNavigation();
  return (
    <IconButton name="arrow-back-ios" onPress={() => navigation.goBack()} />
  );
}

export default GoBack;
