import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Pressable, ScrollView, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { Loader, QuestionListItem, QuestionListItemSkeleton } from '../../components';
import { openLinkInAppBrowser } from '../../utils/customTab';
import { fetchPostsThunk } from '../../redux/thunks/posts';
import { showErrorNotification } from '../../utils/toast';

const HomeTape = () => {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [waiting, setWaiting] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const posts = useSelector((store) => store.posts.posts);
  const postsLoading = useSelector((store) => store.posts.postsLoading);

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

  const handlePostPress = React.useCallback((postId) => {
    return () => {
      navigation.navigate('Home', {
        screen: 'PostScreen',
        params: { postId },
      });
    };
  }, []);

  const renderPosts = ({ item }) => {
    return <QuestionListItem onClick={handlePostPress(item.id)} item={item} />;
  };

  const onEndReached = async () => {
    if (!(posts.totalPages === page) && !waiting) {
      setWaiting(true);
      await dispatch(fetchPostsThunk({ page, size: 20 })).then((response) => {
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
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chairContainer}
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
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
    </>
  );
};

const Home = () => {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const dispatch = useDispatch();
  const [screenLoading, setScreenLoading] = React.useState(false);

  const loadItems = () => {
    setScreenLoading(true);
    dispatch(fetchPostsThunk({ page: 0, size: 20, refreshing: true })).then(({ success }) => {
      setScreenLoading(false);
      if (!success) {
        showErrorNotification('Что-то пошло не так');
      }
    });
  };

  React.useEffect(() => {
    loadItems();
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
      refreshing={screenLoading}
      onRefresh={loadItems}
      ListFooterComponent={() => (
        <ScrollView style={styles.container}>
          <HomeTape />
        </ScrollView>
      )}
    />
  );
};

export default Home;
