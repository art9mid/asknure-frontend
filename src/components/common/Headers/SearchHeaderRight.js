import { SearchIcon } from '../../../SvgComponents';
import { Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HeaderRightSubCategoryListScreen() {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  const navigation = useNavigation();

  const goToSearchScreen = () => navigation.navigate('MainStack', { screen: 'SearchScreen' });

  return (
    <View style={{ flexDirection: 'row' }}>
      <Pressable style={styles.iconContainer} onPress={goToSearchScreen}>
        <SearchIcon size={28} color={'black'} />
      </Pressable>
    </View>
  );
}

export default;
