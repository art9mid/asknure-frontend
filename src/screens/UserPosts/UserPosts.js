import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, ScrollView, useColorScheme } from 'react-native';
import dynamicStyles from './styles';
import { showErrorNotification } from '../../utils/toast';
import { fetchPostsThunk } from '../../redux/thunks/posts';
import { fetchUserPostsThunk } from '../../redux/thunks/user';
import { PostsList, QuestionListItemSkeleton } from '../../components';
import { useNavigation } from '@react-navigation/native';

const UserPosts = () => {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const posts = useSelector((store) => store.user.posts);
  const postsLoading = useSelector((store) => store.user.postsLoading);

  const [page, setPage] = React.useState(1);
  const [refreshing, setRefreshing] = React.useState(false);
  const [screenLoading, setScreenLoading] = React.useState(true);

  const loadItems = () => {
    if (!posts.last) {
      dispatch(fetchUserPostsThunk({ page, size: 20 })).then((response) => {
        setPage(page + 1);
      });
    }
  };

  const refreshItems = () => {
    setRefreshing(true);
    dispatch(fetchPostsThunk({ page: 0, size: 20, refreshing: true })).then(({ success }) => {
      setRefreshing(false);
      setPage(1);
      if (!success) {
        showErrorNotification('Что-то пошло не так');
      }
    });
  };

  React.useEffect(() => {
    dispatch(fetchUserPostsThunk({ page: 0, size: 20, refreshing: true })).then(({ success }) => {
      setScreenLoading(false);
      if (!success) {
        showErrorNotification('Что-то пошло не так');
        navigation.navigate('Profile')
      }
    });
  }, []);

  if (screenLoading) {
    return <QuestionListItemSkeleton />;
  }

  return (
    <FlatList
      data={[]}
      keyExtractor={(e, i) => 'dom' + i.toString()}
      ListEmptyComponent={null}
      renderItem={null}
      refreshing={refreshing}
      onRefresh={refreshItems}
      ListFooterComponent={() => (
        <ScrollView style={styles.container}>
          <PostsList fetchItems={loadItems} loading={postsLoading} posts={posts} stack={'MainStack'} />
        </ScrollView>
      )}
    />
  );
};

export default UserPosts;
