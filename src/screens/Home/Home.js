import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Pressable, ScrollView, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { showErrorNotification } from '../../utils/toast';
import { fetchPostsThunk } from '../../redux/thunks/posts';
import { openLinkInAppBrowser } from '../../utils/customTab';
import { QuestionListItemSkeleton, PostsList } from '../../components';

const Home = () => {
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  const posts = useSelector((store) => store.posts.posts);
  const postsLoading = useSelector((store) => store.posts.postsLoading);

  const [page, setPage] = React.useState(1);
  const [refreshing, setRefreshing] = React.useState(false);
  const [screenLoading, setScreenLoading] = React.useState(true);

  React.useEffect(() => {
    dispatch(fetchPostsThunk({ page: 0, size: 20, refreshing: true })).then(({ success }) => {
      setScreenLoading(false);
      if (!success) {
        showErrorNotification('Что-то пошло не так');
      }
    });
  }, []);

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

  const loadItems = () => {
    if (!posts.last) {
      dispatch(fetchPostsThunk({ page, size: 20 })).then((response) => {
        setPage(page + 1);
      });
    }
  };

  const dummyData = [
    {
      name: 'КИТАМ',
      link: 'https://nure.ua/department/kafedra-kompyuterno-integrirovannyih-tehno-logiy-avtomatizatsii-i-mehatroniki-kitam',
    },
    {
      name: 'СТas dasd asdsa d',
      link: 'https://nure.ua/department/kafedra-kompyuterno-integrirovannyih-tehno-logiy-avtomatizatsii-i-mehatroniki-kitam',
    },
    {
      name: 'РТas dasd a',
      link: 'https://nure.ua/department/kafedra-kompyuterno-integrirovannyih-tehno-logiy-avtomatizatsii-i-mehatroniki-kitam',
    },
    {
      name: 'KOSDas das da',
      link: 'https://nure.ua/department/kafedra-kompyuterno-integrirovannyih-tehno-logiy-avtomatizatsii-i-mehatroniki-kitam',
    },
    {
      name: 'FDFDFDas dsa da',
      link: 'https://nure.ua/department/kafedra-kompyuterno-integrirovannyih-tehno-logiy-avtomatizatsii-i-mehatroniki-kitam',
    },
    {
      name: 'FDWEWE',
      link: 'https://nure.ua/department/kafedra-kompyuterno-integrirovannyih-tehno-logiy-avtomatizatsii-i-mehatroniki-kitam',
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => openLinkInAppBrowser(item.link)}>
        <View style={styles.chairItemContainer}>
          <Text style={styles.chairItemText}>{item.name}</Text>
        </View>
      </Pressable>
    );
  };

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
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chairContainer}
            data={dummyData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <PostsList fetchItems={loadItems} loading={postsLoading} posts={posts} />
        </ScrollView>
      )}
    />
  );
};

export default Home;
