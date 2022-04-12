import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { SearchIcon } from '../../../SvgComponents';

function SearchHeaderRight() {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const navigation = useNavigation();

  const goToSearchScreen = () => navigation.navigate('MainStack', { screen: 'SearchScreen' });

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable style={styles.iconContainer} onPress={goToSearchScreen}>
        <SearchIcon size={28} color={'black'} />
      </Pressable>
    </View>
  );
}

export default SearchHeaderRight;
