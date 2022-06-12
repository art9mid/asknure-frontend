import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pressable, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { FilterIcon } from '../../SvgComponents';
import { LocalizationContext } from '../../localization';
import { showErrorNotification } from '../../utils/toast';
import { fetchPostsThunk } from '../../redux/thunks/posts';
import { PostsList, HomeSkeleton } from '../../components';
import { useNavigation } from '@react-navigation/native';

const HomeTape = ({ page, setPage }) => {
  const navigator = useNavigation();
  const { t } = useContext(LocalizationContext);
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  const posts = useSelector((store) => store.posts.posts);
  const postsByCategories = useSelector((store) => store.posts.postsByCategories);

  const postsLoading = useSelector((store) => store.posts.postsLoading);
  const storeSelectedCategories = useSelector((state) => state.categories.selectedCategories);

  const [screenLoading, setScreenLoading] = React.useState(true);
  const [currentTab, setCurrentTab] = React.useState(0);

  React.useEffect(() => {
    setScreenLoading(true);
    dispatch(fetchPostsThunk({
      page: 0,
      size: 20,
      refreshing: true,
      categories: storeSelectedCategories,
    }))
      .then(() => {
        setCurrentTab(0);
        setScreenLoading(false);
      });
  }, [storeSelectedCategories]);

  const loadItems = () => {
    if (!posts.last) {
      dispatch(fetchPostsThunk({ page, size: 20 })).then(() => {
        setPage(page + 1);
      });
    }
  };

  const goToCategoriesSettingScreen = () => {
    navigator.navigate('MainStack', {
      screen: 'CategoriesSettings',
    });
  };

  if (screenLoading) {
    return <HomeSkeleton />;
  }

  return (
    <>
      {postsByCategories?.content?.length ? (
        <View style={styles.activeCategories}>
          <View style={styles.tabsContainer}>
            <Pressable style={styles.tabWrapper} onPress={() => setCurrentTab(0)}>
              <View style={[styles.tab, currentTab === 0 && styles.tabActive]}>
                <Text style={[styles.tabText, currentTab === 0 && styles.tabTextActive]}>
                  {t('All ribbon')}
                </Text>
              </View>
            </Pressable>
            <Pressable style={styles.tabWrapper} onPress={() => setCurrentTab(1)}>
              <View style={[styles.tab, currentTab === 1 && styles.tabActive]}>
                <Text style={[styles.tabText, currentTab === 1 && styles.tabTextActive]}>
                  {t('My ribbon')}
                </Text>
              </View>
            </Pressable>
          </View>
          <Pressable style={styles.tapeContainerActive} onPress={goToCategoriesSettingScreen}>
            <FilterIcon size={40} />
          </Pressable>
        </View>
      ) : (
        <Pressable style={styles.tapeContainer} onPress={goToCategoriesSettingScreen}>
          <Text style={styles.tapeText}>{t('Customize categories')}</Text>
          <FilterIcon size={40} />
        </Pressable>
      )}

      {currentTab === 0 && (
        <PostsList fetchItems={loadItems} loading={postsLoading} posts={posts} />
      )}

      {currentTab === 1 && (
        <PostsList fetchItems={loadItems} loading={postsLoading} posts={postsByCategories} />
      )}
    </>
  );
};

export default HomeTape;
