import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Linking, Pressable, ScrollView, Text, useColorScheme, View, Dimensions } from 'react-native';
import dynamicStyles from './styles';
import departments from '../../core/dummyData/departments.json';
import { showErrorNotification } from '../../utils/toast';
import { fetchPostsThunk } from '../../redux/thunks/posts';
import { QuestionListItemSkeleton, PostsList } from '../../components';

const deviceWidth = Dimensions.get('window').width;

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

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => Linking.openURL(item.link)}>
        <View style={styles.chairItemContainer}>
          <Text style={styles.chairItemText}>{item.name}</Text>
        </View>
      </Pressable>
    );
  };

  const slides = [
    { title: 'Ewewew', image: '' },
  ];

  function renderSlide({ item }) {
    return (
      <View style={styles.slideContainer}>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          source={{ uri: item?.mobile_image, priority: FastImage.priority.high }}
          style={styles.slideImage}
        />
        <View style={[styles.slideInfo, item?.shadow && styles.slideInfoShadow]}>
          <Text style={styles.slideTitle}>{item.title}</Text>
          <Text style={styles.slideSubText}>{item.text_on_image}</Text>
        </View>
      </View>
    );
  }

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
          <Carousel
            loop
            autoplay
            horizontal
            data={[]}
            useScrollView
            itemHeight={200}
            autoplayDelay={1500}
            scrollEnabled={false}
            inactiveSlideScale={1}
            autoplayInterval={7000}
            inactiveSlideOpacity={1}
            renderItem={renderSlide}
            firstItem={slides.length}
            loopClonesPerSide={slides.length}
            initialScrollIndex={slides.length}
            itemWidth={deviceWidth}
            sliderWidth={deviceWidth}
            contentContainerCustomStyle={styles.carouselContainer}
          />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chairContainer}
            data={departments}
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
