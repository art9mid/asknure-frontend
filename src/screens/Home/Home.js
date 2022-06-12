import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { useDispatch } from 'react-redux';
import { FlatList, Linking, Pressable, ScrollView, Text, useColorScheme, View, Dimensions, Image } from 'react-native';
import dynamicStyles from './styles';
import HomeTape from './HomeTape';
import { LocalizationContext } from '../../localization';
import { showErrorNotification } from '../../utils/toast';
import { fetchPostsThunk } from '../../redux/thunks/posts';
import home_banner from '../../core/dummyData/home_banner';

const deviceWidth = Dimensions.get('window').width;

const Home = () => {
  const { t } = React.useContext(LocalizationContext);
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  const [page, setPage] = React.useState(1);
  const [refreshing, setRefreshing] = React.useState(false);

  const refreshItems = () => {
    setRefreshing(true);
    dispatch(fetchPostsThunk({ page: 0, size: 20, refreshing: true })).then(({ success }) => {
      setRefreshing(false);
      setPage(1);
    });
  };

  function renderSlide({ item }) {
    return (
      <Pressable style={styles.slideContainer} onPress={() => Linking.openURL(item.link)}>
        <Image
          source={item.image}
          resizeMode={'contain'} style={styles.slideImage}
        />
        <View style={[styles.slideInfo, item?.shadow && styles.slideInfoShadow]}>
          <Text style={styles.slideTitle}>{item.title}</Text>
          <Text style={styles.slideSubText}>{item.text_on_image}</Text>
        </View>
      </Pressable>
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
          <Carousel
            loop
            autoplay
            horizontal
            data={home_banner}
            useScrollView
            autoplayDelay={1500}
            inactiveSlideScale={1}
            autoplayInterval={5000}
            inactiveSlideOpacity={1}
            renderItem={renderSlide}
            firstItem={home_banner.length}
            loopClonesPerSide={home_banner.length}
            initialScrollIndex={home_banner.length}
            itemWidth={deviceWidth}
            sliderWidth={deviceWidth}
          />
          <HomeTape page={page} setPage={setPage} />
        </ScrollView>
      )}
    />
  );
};

export default Home;
