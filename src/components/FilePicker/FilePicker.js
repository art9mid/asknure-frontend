import React, { useContext } from 'react';
import { Image, Linking, Pressable, ScrollView, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import FileIcon from '../../SvgComponents/FileIcon';
import { showErrorNotification } from '../../utils/toast';
import { RoundCloseIcon, RoundPlusIcon } from '../../SvgComponents';
import { opacityLayoutAnimation } from '../../utils/layoutAnimations';
import filePicker, { FILE_SIZE_CODE, MAX_FILE_SIZE } from '../../utils/filePicker';
import { LocalizationContext } from '../../localization';

const imageFormat = ['raw', 'jpeg', 'jpg', 'tiff', 'psd', 'bmp', 'gif', 'png'];

export const FilesList = ({ files }) => {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  const renderFile = (item, index) => {
    const parts = item.split('.');
    const partsSlash = item.split('/');
    const format = parts[parts.length - 1];
    const fileName = partsSlash[partsSlash.length - 2];

    if (imageFormat.includes(format.toLowerCase())) {
      return (
        <Pressable key={index} style={styles.pickFileImage} onPress={() => Linking.openURL(item)}>
          <Image source={{ uri: item }} style={styles.image} />
        </Pressable>
      );
    }

    return (
      <Pressable key={index} style={styles.pickFile} onPress={() => Linking.openURL(item)}>
        <FileIcon />
        <Text style={styles.text} numberOfLines={1}>{fileName}</Text>
      </Pressable>
    );
  };

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.isArray(files) && files.map(renderFile)}
      </ScrollView>
    </View>
  );
};

const FilePicker = ({ contentContainerStyle, files, setFiles }) => {
  const { t } = useContext(LocalizationContext);

  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  const handlePickFile = async () => {
    if (files?.length >= 4) {
      return showErrorNotification('Максимальна кылькість файлів - 4');
    }
    try {
      const response = await filePicker();
      opacityLayoutAnimation();
      const newResponse = response.map((file) => {
        return { ...file, id: `[${Date.now()}]${file.name}` };
      });
      if (Array.isArray(files)) {
        setFiles([...files, ...newResponse]);
      } else {
        setFiles(newResponse);
      }
    } catch (error) {
      if (error.message === FILE_SIZE_CODE) {
        showErrorNotification(`Файле більше ${MAX_FILE_SIZE / 1000}мб`);
      }
    }
  };

  const handleRemoveFile = (removedUri) => {
    const linkFiles = files.filter(({ uri }) => uri !== removedUri);
    setFiles(linkFiles);
  };

  const renderFile = (item, index) => {
    if (/image\//.test(item.type) && item.type !== 'image/tiff') {
      return (
        <View key={index} style={styles.pickFileImage}>
          <Image source={{ uri: item.uri }} style={styles.image} />
          <Pressable onPress={() => handleRemoveFile(item.uri)} style={styles.removeButton}>
            <RoundCloseIcon />
          </Pressable>
        </View>
      );
    }
    return (
      <View key={index} style={styles.pickFile}>
        <FileIcon />
        <Text style={styles.text}>{item.name}</Text>
        <Pressable onPress={() => handleRemoveFile(item.uri)} style={styles.removeButton}>
          <RoundCloseIcon />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={contentContainerStyle}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.isArray(files) && files.map(renderFile)}
        <Pressable style={styles.pickFileButton} onPress={handlePickFile}>
          <RoundPlusIcon />
          <Text style={styles.text}>{t('Add')}</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};
export default FilePicker;
