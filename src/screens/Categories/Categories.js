import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { LocalizationContext } from '../../localization';
import { AppBtn, Loader, SearchInput } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { fetchCategoriesThunk } from '../../redux/thunks/categories';
import { showErrorNotification } from '../../utils/toast';

const Categories = (props) => {
  const { t } = useContext(LocalizationContext);
  const navigator = useNavigation();
  const dispatch = useDispatch();

  const setCategories = props.route.params.setCategories;
  const categoriesFromProps = props.route.params.categories;

  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const categories = useSelector((state) => state.categories.categories);

  const [categoriesLoading, setCategoriesLoading] = React.useState(true);

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

  const [selectedCategories, setSelectedCategories] = React.useState(categoriesFromProps || []);
  const [searchValue, setSearchValue] = React.useState('');
  const [categoriesState, setCategoriesState] = React.useState(categories?.content || []);

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

  const renderCategory = ({ item, index }) => {
    const isSelected = selectedCategories.includes(item.id);

    const handleSelect = () => {
      if (isSelected) {
        const filteredCategories = selectedCategories.filter((category) => category !== item.id);
        setCategories && setCategories(filteredCategories);
        setSelectedCategories(filteredCategories);
      } else {
        setCategories && setCategories([...selectedCategories, item.id]);
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
            {item.name}
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
      <View style={styles.searchContainer}>
        <SearchInput
          style={{ container: styles.input }}
          value={searchValue}
          placeholder={t('Search')}
          onChangeText={setSearchValue}
        />
      </View>
      <FlatList
        style={{ paddingHorizontal: 10 }}
        numColumns={2}
        data={categoriesState}
        initialNumToRender={40}
        maxToRenderPerBatch={40}
        onEndReachedThreshold={0.5}
        keyExtractor={({ id }, index) => id + index}
        renderItem={renderCategory}
        ListFooterComponent={
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomTitle}>{t('Did not you find what you were looking for')}</Text>
            <Text style={styles.bottomText}>{t('Create your own category for others to see')}</Text>
            <AppBtn onPress={goToCreateCategoryScreen}>{t('Create category')}</AppBtn>
          </View>
        }
      />
      <View style={styles.buttonContainer}>
        <AppBtn onPress={navigator.goBack}>
          OK
        </AppBtn>
      </View>
    </View>
  );
};

export default Categories;
