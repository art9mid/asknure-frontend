import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated, Dimensions, FlatList, Pressable, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { LocalizationContext } from '../../localization';
import { AppBtn, Loader, NothingToShow, SearchInput } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { fetchCategoriesThunk } from '../../redux/thunks/categories';
import { showErrorNotification } from '../../utils/toast';
import { SET_SELECTED_CATEGORIES } from '../../redux/actions';

const tabWidth = (Dimensions.get('window').width / 2) - 15;

const CategoriesSettings = (props) => {
  const { t } = useContext(LocalizationContext);
  const navigator = useNavigation();
  const dispatch = useDispatch();

  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const categories = useSelector((state) => state.categories.categories);
  const storeSelectedCategories = useSelector((state) => state.categories.selectedCategories);
  const [categoriesLoading, setCategoriesLoading] = React.useState(true);
  const [currentTab, setCurrentTab] = React.useState(0);

  React.useEffect(() => {
    dispatch(fetchCategoriesThunk(categories?.totalElements || 1000)).then(({ success }) => {
      if (!success) {
        navigator.goBack();
        showErrorNotification(t('Something went wrong!'), t('Please try again later'));
      } else {
        setCategoriesLoading(false);
      }
    });
  }, []);

  const [selectedCategories, setSelectedCategories] = React.useState(storeSelectedCategories.map((item) => item.id));
  const [searchValue, setSearchValue] = React.useState('');
  const [categoriesState, setCategoriesState] = React.useState(categories?.content || []);

  const [translateValue] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    setSearchValue('');
    Animated.spring(translateValue, {
      toValue: currentTab * tabWidth,
      velocity: 10,
      useNativeDriver: true,
    }).start();
  }, [currentTab]);

  const getSelectedCategories = React.useMemo(() => {
    return categories?.content?.reduce((accum, value) => {
      if (selectedCategories.includes(value.id)) {
        return [...accum, value];
      }
      return accum;
    }, []);
  }, [selectedCategories]);

  React.useEffect(() => {
    setCategoriesState(categories?.content || []);
  }, [categories?.content]);

  React.useEffect(() => {
    if (searchValue) {
      const filteredCategory = categories?.content?.filter((category) => {
        const regex = new RegExp(searchValue, 'i');
        return category.name.search(regex) !== -1;
      });
      setCategoriesState(filteredCategory);
    } else {
      setCategoriesState(categories.content);
    }
  }, [searchValue]);

  const goToCreateCategoryScreen = () => {
    navigator.navigate('AddCategory');
  };

  const renderSelectedCategory = ({ item, index }) => {
    const handleSelect = () => {
      const filteredCategories = selectedCategories.filter((category) => category !== item.id);
      setSelectedCategories(filteredCategories);
    };

    return (
      <TouchableOpacity
        key={index}
        style={[styles.category, styles.categoryActive]}
        activeOpacity={0.8}
        onPress={handleSelect}>
        <View style={styles.categoryWrapper}>
          <Text style={[styles.categoryText, styles.categoryActiveText]}>
            {item.name}
          </Text>
        </View>
        <Text style={[styles.categoryPlus, styles.categoryActivePlus]}>
          -
        </Text>
      </TouchableOpacity>
    );
  };

  const onSave = () => {
    dispatch({ type: SET_SELECTED_CATEGORIES, data: getSelectedCategories });
    navigator.goBack();
  };

  const renderCategory = ({ item, index }) => {
    const isSelected = selectedCategories.includes(item.id);

    const handleSelect = () => {
      if (isSelected) {
        const filteredCategories = selectedCategories.filter((category) => category !== item.id);
        setSelectedCategories(filteredCategories);
      } else {
        setSelectedCategories([...selectedCategories, item.id]);
      }
    };

    return (
      <TouchableOpacity
        key={index}
        style={[styles.category, isSelected && styles.categoryActive]}
        activeOpacity={0.8}
        onPress={handleSelect}>
        <View style={styles.categoryWrapper}>
          <Text style={[styles.categoryText, isSelected && styles.categoryActiveText]}>
            {item.name || item}
          </Text>
        </View>
        <Text style={[styles.categoryPlus, isSelected && styles.categoryActivePlus]}>
          {isSelected ? '-' : '+'}
        </Text>
      </TouchableOpacity>
    );
  };

  if (categoriesLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Animated.View
          style={[styles.activeTabIndicatorContainer, {
            width: tabWidth,
            transform: [{ translateX: translateValue }],
          }]}>
          <View style={styles.activeTabIndicator} />
        </Animated.View>
        <Pressable style={styles.tab} onPress={() => setCurrentTab(0)}>
          <Text style={[styles.tabText, currentTab === 0 && styles.tabTextActive]}>
            {t('All')}
          </Text>
        </Pressable>
        <Pressable style={styles.tab} onPress={() => setCurrentTab(1)}>
          <Text style={[styles.tabText, currentTab === 1 && styles.tabTextActive]}>
            {t('My')}
          </Text>
        </Pressable>
      </View>
      <FlatList
        style={[{ paddingHorizontal: 10 }, currentTab === 1 && { display: 'none' }]}
        numColumns={2}
        data={categoriesState}
        initialNumToRender={40}
        maxToRenderPerBatch={40}
        onEndReachedThreshold={0.5}
        keyExtractor={({ id }, index) => id + index}
        renderItem={renderCategory}
        ListHeaderComponent={
          <View style={styles.searchContainer}>
            <SearchInput
              value={searchValue}
              placeholder={t('Search')}
              onChangeText={setSearchValue}
            />
          </View>
        }
        ListFooterComponent={
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomTitle}>{t('Did not you find what you were looking for')}</Text>
            <Text style={styles.bottomText}>{t('Create your own category for others to see')}</Text>
            <AppBtn onPress={goToCreateCategoryScreen}>{t('Create category')}</AppBtn>
          </View>
        }
      />

      {!!getSelectedCategories?.length ? (
        <FlatList
          style={[{ paddingHorizontal: 10 }, currentTab === 0 && { display: 'none' }]}
          numColumns={2}
          data={getSelectedCategories}
          initialNumToRender={40}
          maxToRenderPerBatch={40}
          onEndReachedThreshold={0.5}
          keyExtractor={({ id }, index) => id + index}
          renderItem={renderSelectedCategory}
        />
      ) : currentTab === 1 && (
        <NothingToShow />
      )}

      <View style={styles.buttonContainer}>
        <AppBtn onPress={onSave}>
          {t('Save')}
        </AppBtn>
      </View>
    </View>
  );
};

export default CategoriesSettings;
