import React from 'react';
import { BaseToast, BaseToastProps } from 'react-native-toast-message';
import colorPalette from '../theme/colorPalette';
import Toast from 'react-native-toast-message';
import { Error } from '../types';
import { getErrorMessage } from '.';

const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{
        height: 40,
        backgroundColor: colorPalette.success,
        borderLeftColor: colorPalette.success,
        borderRightColor: colorPalette.success,
        padding: 0,
      }}
      text1Style={{
        color: colorPalette.gray0,
        fontSize: 16,
        fontWeight: 'normal',
      }}
    />
  ),
  error: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{
        height: 40,
        backgroundColor: colorPalette.danger,
        borderLeftColor: colorPalette.danger,
        borderRightColor: colorPalette.danger,
        padding: 0,
      }}
      text1Style={{
        color: colorPalette.gray0,
        fontSize: 16,
        fontWeight: 'normal',
      }}
    />
  ),
};

export const customToast = {
  error: (error: Error) =>
    Toast.show({ type: 'error', text1: getErrorMessage(error) }),
  success: (message: string) => Toast.show({ type: 'success', text1: message }),
};

export default toastConfig;
