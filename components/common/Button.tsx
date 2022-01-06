import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import colorPalette from '../../theme/colorPalette';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

function Button({ text, onPress }: ButtonProps) {
  return (
    <View style={styles.block}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 40,
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
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colorPalette.gray0,
  },
});

export default Button;
