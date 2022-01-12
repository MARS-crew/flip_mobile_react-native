import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import colorPalette from '../../theme/colorPalette';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  title: string;
  onPress: () => void;
}

function FloatingButton({ title, onPress }: Props) {
  return (
    <Pressable style={styles.floatingButton} onPress={onPress}>
      <Icon name="add" size={20} color={colorPalette.gray0} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    height: 48,
    width: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorPalette.primary,
  },
  buttonText: {
    fontSize: 20,
    color: colorPalette.gray0,
    fontWeight: 'bold',
  },
});

export default FloatingButton;
