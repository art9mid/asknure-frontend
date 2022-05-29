import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Loader, QuestionListItem } from '../index';

let waiting = false;

const PostsList = ({ posts, loading, fetchItems, stack = 'Home' }) => {
  const navigation = useNavigation();

  const handlePostPress = React.useCallback((postId) => {
    return () => {
      navigation.navigate(stack, { screen: 'PostScreen', params: { postId } });
    };
  }, [navigation]);

  const renderPosts = ({ item }) => {
    return <QuestionListItem onClick={handlePostPress(item.id)} item={item} />;
  };

  const onEndReached = async () => {
    waiting = true;
    await fetchItems();
    waiting = false;
  };

  const renderLoading = () => {
    if (loading) {
      return (
        <View style={{ height: 80 }}>
          <Loader />
        </View>
      );
    }
  };

  return (
    <FlatList
      style={{ paddingHorizontal: 15 }}
      data={posts?.content}
      renderItem={renderPosts}
      initialNumToRender={6}
      maxToRenderPerBatch={40}
      onEndReachedThreshold={0.5}
      onEndReached={!waiting && onEndReached}
      keyExtractor={({ id }, index) => id + index}
      ListFooterComponent={renderLoading()}
    />
  );
};

export default PostsList;
