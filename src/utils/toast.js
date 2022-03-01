import React from 'react';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

export function showSuccessNotification(text1, text2) {
  Toast.show({
    text1: text1,
    text2: text2,
    position: 'top',
    autoHide: true,
    type: 'success',
    visibilityTime: 500000,
  });
}

export function showErrorNotification(text, text2) {
  Toast.show({
    text1: text,
    text2: text2,
    position: 'top',
    autoHide: true,
    type: 'error',
    visibilityTime: 5000,
  });
}

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ paddingHorizontal: 10, borderLeftColor: '#7dc02a', height: 'auto', width: 'auto', marginHorizontal: 10 }}
      contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 15 }}
      text1Style={{
        fontSize: 15,
      }}
      text2Style={{
        fontSize: 13,
      }}
      text2Props={{
        numberOfLines: 4,
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ paddingHorizontal: 10, borderLeftColor: '#dc3a20', height: 'auto', width: 'auto', marginHorizontal: 10 }}
      contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 15 }}
      text1Style={{
        fontSize: 15,
      }}
      text2Style={{
        fontSize: 13,
      }}
      text2Props={{
        numberOfLines: 4,
      }}
    />
  ),
};
