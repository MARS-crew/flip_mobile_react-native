import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import colorPalette from '../../theme/colorPalette';

interface Props {
  title: string;
  onPress: () => void;
}

function FloatingButton({ title, onPress }: Props) {
  return (
    <Pressable style={styles.floatingButton} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 12,
    left: 32,
    right: 32,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorPalette.primary,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: colorPalette.gray0,
    fontWeight: 'bold',
  },
});

export default FloatingButton;
