import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, Modal, ScrollView, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { showErrorNotification } from '../../utils/toast';
import { fetchUserPostsThunk } from '../../redux/thunks/user';
import { Loader, NothingToShow, PostsList, QuestionListItemSkeleton } from '../../components';
import { CHANGE_FIRST_ENTER_USER_QUESTIONS } from '../../redux/actions';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const UserPosts = () => {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const posts = useSelector((store) => store.user.posts);
  const postsLoading = useSelector((store) => store.user.postsLoading);
  const deletePostLoading = useSelector((store) => store.user.deletePostLoading);
  const fistEnterUserQuestions = useSelector((store) => store.app.fistEnterUserQuestions);

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
    dispatch(fetchUserPostsThunk({ page: 0, size: 20, refreshing: true })).then(({ success }) => {
      setRefreshing(false);
      setPage(1);
      if (!success) {
        showErrorNotification(t('Something went wrong!'), t('Please try again later'));
      }
    });
  };

  React.useEffect(() => {
    dispatch(fetchUserPostsThunk({ page: 0, size: 20, refreshing: true })).then(({ success }) => {
      setScreenLoading(false);
      if (!success) {
        showErrorNotification(t('Something went wrong!'), t('Please try again later'));
        navigation.navigate('Profile');
      }
    });
  }, []);

  if (screenLoading) {
    return <QuestionListItemSkeleton />;
  }

  const onCloseModal = () => {
    dispatch({ type: CHANGE_FIRST_ENTER_USER_QUESTIONS });
  };

  if (!posts?.content?.length) {
    return (
      <View style={{ justifyContent: 'center', flex: 1, backgroundColor: 'red' }}>
        <NothingToShow />
      </View>
    );
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
          {!!posts?.content?.length && (
            <Modal transparent onRequestClose={onCloseModal} visible={fistEnterUserQuestions}>
              <Pressable onPress={onCloseModal} style={styles.modal}>
                <Image source={require('../../../assets/SWIP.gif')} width={100} height={100} />
              </Pressable>
            </Modal>
          )}
          {deletePostLoading && <Loader opacity />}
          <PostsList user fetchItems={loadItems} loading={postsLoading} posts={posts} stack={'MainStack'} />
        </ScrollView>
      )}
    />
  );
};

export default UserPosts;
