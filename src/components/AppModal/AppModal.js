import React from 'react';
import { useColorScheme, Modal, Pressable } from 'react-native';
import dynamicStyles from './styles';

export function AppInfoModal({ visible, onClose, children, contentContainerStyle = {} }) {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
      <Pressable onPress={onClose} style={styles.container}>
        <Pressable style={[styles.wrapper, contentContainerStyle]}>{children}</Pressable>
      </Pressable>
    </Modal>
  );
}
