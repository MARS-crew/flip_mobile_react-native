import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colorPalette from '../../theme/colorPalette';
import Input, { InputProps } from './Input';

interface LabelWithInputProps extends InputProps {
  label: string;
  hasMarginBottom?: boolean;
  secureTextEntry?: boolean;
}

function LabelWithInput({
  label,
  placeholder,
  hasMarginBottom,
  secureTextEntry,
  multiline,
}: LabelWithInputProps) {
  return (
    <View style={[styles.block, hasMarginBottom && styles.hasMarginBottom]}>
      <Text style={styles.label}>{label}</Text>
      <Input
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    marginTop: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'bold',
    color: colorPalette.gray6,
  },
  hasMarginBottom: {
    marginBottom: 16,
  },
});

export default LabelWithInput;
