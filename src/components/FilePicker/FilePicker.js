import React from 'react';
import { Image, Pressable, ScrollView, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import FileIcon from '../../SvgComponents/FileIcon';
import { showErrorNotification } from '../../utils/toast';
import { RoundCloseIcon, RoundPlusIcon } from '../../SvgComponents';
import { opacityLayoutAnimation } from '../../utils/layoutAnimations';
import filePicker, { FILE_SIZE_CODE, MAX_FILE_SIZE } from '../../utils/filePicker';

const FilePicker = ({ contentContainerStyle, files, setFiles }) => {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  const handlePickFile = async () => {
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
        showErrorNotification(`Файле больше ${MAX_FILE_SIZE / 1000}мб`);
      }
    }
  };

  const handleRemoveFile = (removedUri) => {
    const linkFiles = files.filter(({ uri }) => uri !== removedUri);
    setFiles(linkFiles);
  };

  const renderFile = (item, index) => {
    if (/image\//.test(item.type)) {
      return (
        <View key={index} style={styles.pickFileImage} onPress={handlePickFile}>
          <Image source={{ uri: item.uri }} style={styles.image} />
          <Pressable onPress={() => handleRemoveFile(item.uri)} style={styles.removeButton}>
            <RoundCloseIcon />
          </Pressable>
        </View>
      );
    }
    return (
      <View key={index} style={styles.pickFile} onPress={handlePickFile}>
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
          <Text style={styles.text}>Добавить</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};
export default FilePicker;
