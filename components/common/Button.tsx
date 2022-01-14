import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colorPalette from '../../theme/colorPalette';

interface ButtonProps {
  text: string;
  color?: 'transparent';
  hasMarginLeft?: boolean;
  onPress: () => void;
}

function Button({ text, color, hasMarginLeft, onPress }: ButtonProps) {
  return (
    <Pressable
      style={[
        styles.button,
        color && styles[color],
        hasMarginLeft && { marginLeft: 8 },
      ]}
      onPress={onPress}>
      <Text style={[styles.text, color && styles[`text_${color}`]]}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: colorPalette.gray6,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    elevation: 5,
    backgroundColor: colorPalette.primary,
  },
  transparent: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colorPalette.primary,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colorPalette.gray0,
  },
  text_transparent: {
    color: colorPalette.primary,
  },
});

export default Button;
