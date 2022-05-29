import React, { useContext } from 'react';
import dynamicStyles from './styles';
import { PostsList, QuestionListItemSkeleton, SearchInput } from '../../components';
import { Pressable, SafeAreaView, Text, useColorScheme, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { searchPostsThunk } from '../../redux/thunks/posts';
import { useDispatch, useSelector } from 'react-redux';
import { LocalizationContext } from '../../localization';

const SearchScreen = () => {
  const { t } = useContext(LocalizationContext);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  const posts = useSelector((store) => store.posts.searchPosts);
  const postsLoading = useSelector((store) => store.posts.searchPostsLoading);

  const [page, setPage] = React.useState(1);
  const [searchValue, setSearchValue] = React.useState('');
  const [searching, setSearching] = React.useState(false);

  React.useEffect(() => {
    if (searchValue.length >= 3) {
      setPage(1);
      setSearching(true);
      dispatch(searchPostsThunk({ page: 0, size: 20, value: searchValue })).then((response) => {
        if (response.success) {
          setSearching(false);
        }
      });
    }
  }, [searchValue]);

  const loadItems = () => {
    if (!posts.last) {
      dispatch(searchPostsThunk({
          page,
          size: 20,
          value: searchValue,
          loadMore: true,
        }),
      ).then(() => {
        setPage(page + 1);
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchWrapper}>
        <SearchInput
          style={{ container: styles.input }}
          value={searchValue}
          placeholder={t('Search')}
          onChangeText={setSearchValue}
          autoFocus
        />
        <Pressable style={styles.searchCloseContainer} onPress={navigation.goBack}>
          <Text style={styles.searchCloseText}>
            {t('Close')}
          </Text>
        </Pressable>
      </View>
      {searching ? <QuestionListItemSkeleton /> : searchValue.length < 3 ? (
        <View style={styles.emptyContainer}>
          <View style={styles.box}>
            <Text style={styles.boxText}>Aa</Text>
          </View>
          <Text style={styles.emptySearchText}>
            {t('Start search')}
          </Text>
        </View>
      ) : posts.content?.length ? (
        <View style={{ paddingTop: 20, paddingBottom: 60 }}>
          <PostsList fetchItems={loadItems} loading={postsLoading} posts={posts} stack={'MainStack'} />
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <View style={styles.box}>
            <Text style={styles.boxText}>Qw</Text>
          </View>
          <Text style={styles.emptySearchText}>
            {t('Nothing found, please enter another query')}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
