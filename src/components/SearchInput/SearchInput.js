import React from 'react';
import { Pressable, TextInput, View, useColorScheme } from 'react-native';
import dynamicStyles from './styles';
import AppStyles from '../../AppStyles';
import { CirclesCloseIcon, SearchIcon } from '../../SvgComponents';

function SearchInput({ value, onChangeText, placeholder, style = {}, ...props }) {
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
        <SearchIcon size={28} color={AppStyles.colorSet[colorScheme].blackTextColor} />
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
      {!!value && (
        <Pressable style={styles.searchContainer} onPress={onClear}>
          <CirclesCloseIcon size={16} color={AppStyles.colorSet[colorScheme].grey1} />
        </Pressable>
      )}
    </View>
  );
}

export default SearchInput;
