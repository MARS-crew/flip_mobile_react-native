import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colorPalette from '../../theme/colorPalette';
import { ITerm } from '../../types';
import Input, { InputProps } from './Input';

interface LabelWithInputProps extends InputProps {
  label: string;
  hasMarginBottom?: boolean;
  secureTextEntry?: boolean;
  term?: ITerm;
}

function LabelWithInput({
  label,
  placeholder,
  hasMarginBottom,
  secureTextEntry,
  multiline,
  term,
  ...rest
}: LabelWithInputProps) {
  return (
    <View style={[styles.block, hasMarginBottom && styles.hasMarginBottom]}>
      <View style={styles.labelBlock}>
        <Text style={styles.label}>{label}</Text>
        {term?.value && (
          <Text style={{ color: colorPalette.danger, fontSize: 12 }}>
            {term.message}
          </Text>
        )}
      </View>
      <Input
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    marginTop: 16,
  },
  labelBlock: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
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
