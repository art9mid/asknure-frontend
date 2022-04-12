import React from 'react';
import { useColorScheme, Modal, Pressable, StatusBar } from 'react-native';
import dynamicStyles from './styles';

function AppModal({ visible, onClose, children, contentContainerStyle = {} }) {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
      <Pressable onPress={onClose} style={styles.container}>
        <StatusBar backgroundColor="rgba(255,255,255,0)" translucent animated barStyle={'light-content'} />
        <Pressable style={[styles.wrapper, contentContainerStyle]}>{children}</Pressable>
      </Pressable>
    </Modal>
  );
}

export default AppModal;
