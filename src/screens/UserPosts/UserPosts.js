import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { FlatList, ScrollView, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { showErrorNotification } from '../../utils/toast';
import { fetchUserPostsThunk } from '../../redux/thunks/user';
import { Loader, QuestionListItem, QuestionListItemSkeleton } from '../../components';

const Posts = () => {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [waiting, setWaiting] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const posts = useSelector((store) => store.user.posts);
  const postsLoading = useSelector((store) => store.user.postsLoading);

  const handlePostPress = React.useCallback((postId) => {
    return () => {
      navigation.navigate('PostScreen', {
        postId,
      });
    };
  }, []);

  const renderPosts = ({ item }) => {
    return <QuestionListItem onClick={handlePostPress(item.id)} item={item} />;
  };

  const onEndReached = async () => {
    if (!(posts.totalPages === page) && !waiting) {
      setWaiting(true);
      await dispatch(fetchUserPostsThunk({ page, size: 20 })).then((response) => {
        if (response.success) {
          setPage(page + 1);
        } else {
          showErrorNotification('Что-то пошло не так');
        }
      });
      setWaiting(false);
    }
  };

  const renderLoading = () => {
    if (postsLoading) {
      return <View style={{ height: 80 }}><Loader /></View>;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.containerList}
        data={posts?.content}
        renderItem={renderPosts}
        initialNumToRender={10}
        onEndReachedThreshold={.5}
        onEndReached={onEndReached}
        keyExtractor={({ id }) => id.toString()}
        ListFooterComponent={renderLoading()}
      />
    </View>
  );
};

const UserPosts = () => {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const [screenLoading, setScreenLoading] = React.useState(true);

  const loadItems = () => {
    setRefreshing(true);
    dispatch(fetchUserPostsThunk({ page: 0, size: 20, refreshing: true })).then(({ success }) => {
      setRefreshing(false);
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
      onRefresh={loadItems}
      ListFooterComponent={() => (
        <ScrollView style={styles.container}>
          <Posts />
        </ScrollView>
      )}
    />
  );
};

export default UserPosts;
