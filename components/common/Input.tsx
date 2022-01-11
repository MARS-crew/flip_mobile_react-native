import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import colorPalette from '../../theme/colorPalette';

export interface InputProps {
  placeholder: string;
  secureTextEntry?: boolean;
}

function Input({ placeholder, secureTextEntry }: InputProps) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      placeholder={placeholder}
      placeholderTextColor={colorPalette.gray4}
      selectionColor={colorPalette.primary}
      style={[styles.input, isFocus && styles.focus]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colorPalette.gray3,
    // shadowColor: colorPalette.gray6,
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // shadowOffset: {
    //   height: 3,
    //   width: 3,
    // },
    // elevation: 5,
  },
  focus: {
    borderColor: colorPalette.primary,
  },
});

export default Input;
