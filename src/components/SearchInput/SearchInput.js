import React from 'react';
import { Pressable, TextInput, View, useColorScheme } from 'react-native';
import dynamicStyles from './styles';
import AppStyles from '../../AppStyles';
import SearchIcon from '../../SvgIconComponents/SearchIcon';
import ChatTabIcon from '../../SvgIconComponents/CirclesCloseIcon';

export function SearchInput({ value, onChangeText, placeholder, style = {}, ...props }) {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  const inputRef = React.useRef(null);

  function onFocus() {
    inputRef.current.focus();
  }

  function onClear() {
    onChangeText(() => '');
    inputRef.current.focus();
  }

  return (
    <View style={[styles.container, style.container]}>
      <Pressable style={styles.searchContainer} onPress={onFocus}>
        <SearchIcon size={28} color={AppStyles.colorSet[colorScheme].mainTextColor} />
      </Pressable>
      <TextInput
        ref={inputRef}
        selectionColor={AppStyles.colorSet[colorScheme].selectionColor}
        style={[styles.input, style.input]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        {...props}
      />
      <Pressable style={styles.searchContainer} onPress={onClear}>
        <ChatTabIcon size={16} color={AppStyles.colorSet[colorScheme].grey7} />
      </Pressable>
    </View>
  );
}
