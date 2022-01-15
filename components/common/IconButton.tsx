import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  name: string;
  color?: string;
  onPress: () => void;
  hasMarginLeft?: boolean;
}

function IconButton({ name, onPress, color, hasMarginLeft }: Props) {
  return (
    <Pressable onPress={onPress} style={hasMarginLeft && { marginLeft: 16 }}>
      <Icon name={name} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;
