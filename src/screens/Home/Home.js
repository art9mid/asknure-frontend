import React, { useContext } from 'react';
import Carousel from 'react-native-snap-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Linking, Pressable, ScrollView, Text, useColorScheme, View, Dimensions, Image } from 'react-native';
import dynamicStyles from './styles';
import { FilterIcon } from '../../SvgComponents';
import { LocalizationContext } from '../../localization';
import { showErrorNotification } from '../../utils/toast';
import { fetchPostsThunk } from '../../redux/thunks/posts';
import { QuestionListItemSkeleton, PostsList } from '../../components';

const deviceWidth = Dimensions.get('window').width;

const slides = [
  {
    title: 'Горячие линии ПК',
    shadow: true,
    text_on_image: 'На время действия правового режима военного положения в Украине, работают телефоны горячей линии ХНУРЭ по вступительной кампании: +380974189953, +380954201113.',
    image: require('../../../assets/banner/1.jpg'),
    link: 'https://nure.ua/ru/branch/priyomnaya-komissiya',
  },
  {
    title: 'Перечень специальностей',
    shadow: true,
    text_on_image: 'Предлагаем ознакомиться с перечнем специальностей и образовательных программ  Харьковского национального университета радиоэлектроники!',
    image: require('../../../assets/banner/2.jpg'),
    link: 'https://nure.ua/ru/abiturientam/spetsialnosti-i-spetsializatsii',
  },
  {
    title: 'Курсы на базе ХНУРЭ',
    shadow: true,
    text_on_image: 'Образовательная инициатива ХНУРЭ, которая даёт дополнительные возможности профессионального и творческого развития!',
    image: require('../../../assets/banner/3.jpg'),
    link: 'https://nure.ua/ru/skills-school',
  },
  {
    title: 'Информационная линия',
    shadow: true,
    text_on_image: 'Вниманию работников и соискателей высшего образования! В Харьковском национальном университете радиоэлектроники заработала информационная телефонная линия.',
    image: require('../../../assets/banner/4.jpg'),
    link: 'https://nure.ua/informacijna-linija-harkivskogo-nacionalnogo-universitetu-radioelektroniki',
  },
];

const Home = () => {
  const { t } = useContext(LocalizationContext);
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
        <ScrollView stickyHeaderIndices={[1]} style={styles.container}>
          <Carousel
            loop
            autoplay
            horizontal
            data={slides}
            useScrollView
            autoplayDelay={1500}
            inactiveSlideScale={1}
            autoplayInterval={5000}
            inactiveSlideOpacity={1}
            renderItem={renderSlide}
            firstItem={slides.length}
            loopClonesPerSide={slides.length}
            initialScrollIndex={slides.length}
            itemWidth={deviceWidth}
            sliderWidth={deviceWidth}
          />
          <>
            <Pressable style={styles.tapeContainer}>
              <Text style={styles.tapeText}>{t('Customize categories')}</Text>
              <FilterIcon size={40}  />
            </Pressable>
          </>
          {/*<FlatList*/}
          {/*  horizontal*/}
          {/*  showsHorizontalScrollIndicator={false}*/}
          {/*  contentContainerStyle={styles.chairContainer}*/}
          {/*  data={departments}*/}
          {/*  renderItem={renderItem}*/}
          {/*  keyExtractor={(item, index) => index.toString()}*/}
          {/*/>*/}
          <PostsList fetchItems={loadItems} loading={postsLoading} posts={posts} />
        </ScrollView>
      )}
    />
  );
};

export default Home;
