import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FlatList,
  LayoutAnimation,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import dynamicStyles from './styles';
import { addPostThunk } from '../../redux/thunks/posts';
import { LocalizationContext } from '../../localization';
import { useNavigation } from '@react-navigation/native';
import { useFormikWithErrorAutoClear } from '../../utils/formik';
import { addPostValidation } from '../../core/validation/addPostValidation';
import { showErrorNotification, showSuccessNotification } from '../../utils/toast';
import {
  MultilineTextInput,
  AppTitle,
  AppBtn,
  Loader,
  FilePicker,
  AppModal,
  AppTextInput,
  AuthModal,
} from '../../components';

const AddMoreCategories = ({ categories, setCategories }) => {
  const { t } = useContext(LocalizationContext);

  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Categories', {
      categories,
      setCategories,
    });
  };

  return (
    <Pressable style={[styles.category, styles.categoryActive, styles.categoryWrapperOther]} activeOpacity={0.8}
      onPress={onPress}>
      <View style={styles.categoryWrapper}>
        <Text style={[styles.categoryText, styles.categoryActiveText]}>
          {t('Outer categories')}
        </Text>
      </View>
    </Pressable>
  );
};

const AddPost = () => {
  const { t } = useContext(LocalizationContext);

  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const navigation = useNavigation();
  const loading = useSelector((state) => state.posts.addPostsLoading);
  const user = useSelector((state) => state.user.user);
  const categories = useSelector((state) => state.categories.categories);

  const [files, setFiles] = React.useState(null);
  const [selectedCategories, setSelectedCategories] = React.useState([]);

  const [authorized, setAuthorized] = React.useState(user);

  const filteredCategories = categories?.content?.filter((item) => selectedCategories.includes(item.id));

  const { formik } = useFormikWithErrorAutoClear(
    {
      initialValues: {
        title: '',
        text: '',
      },
      onSubmit: (params) => {
        const categoriesName = categories?.content?.reduce((accum, value) => {
          if (selectedCategories.includes(value.id)) {
            return [...accum, value.name];
          }
          return accum;
        }, []);

        const dataToSend = {
          title: params.title.trim(),
          text: params.text.trim(),
          photo: user?.avatar,
          categories: categoriesName,
        };
        dispatch(addPostThunk(dataToSend, files)).then((response) => {
          if (response.success) {
            showSuccessNotification(t('Post successfully created'), t('Your post is visible to all users of the ASKNURE forum!'));
            navigation.navigate('Home');
          } else {
            showErrorNotification(t('Something went wrong!'), t('Please try again later'));
          }
        });
      },
      validate: addPostValidation(t),
    },
    'addPostError',
  );

  const renderSelectedCategory = ({ item }) => {
    const removeCategory = () => {
      const filteredCategories = selectedCategories.filter((category) => category !== item.id);
      setSelectedCategories(filteredCategories);
      LayoutAnimation.configureNext({
        duration: 250,
        update: {
          type: LayoutAnimation.Types.easeIn,
          springDamping: 0.7,
        },
      });
    };

    return (
      <TouchableOpacity style={[styles.category, styles.categoryActive]}
        activeOpacity={0.8}
        onPress={removeCategory}>
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

  const renderCategory = ({ item }) => {
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
      <TouchableOpacity style={[styles.category, isSelected && styles.categoryActive]}
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

  return (
    <View style={styles.container}>
      <AuthModal visible={authorized} setVisible={setAuthorized} />
      {loading && <Loader opacity text={t('Loading data')} />}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}>
        <AppTitle style={styles.title}>👋 {t('Ask people')}</AppTitle>
        <AppTextInput
          style={{ marginBottom: 5, marginTop: 0 }}
          onBlur={formik.handleBlur('title')}
          onChangeText={formik.onValueChange('title')}
          value={formik.values.title}
          editable
          error={formik.touched.title && formik.errors.title}
          placeholder={t('Title') + '*'}
          maxLength={100}
        />
        <MultilineTextInput
          style={{ marginTop: 0 }}
          onChangeText={formik.onValueChange('text')}
          value={formik.values.text}
          editable
          multiline
          error={formik.errors.text}
          numberOfLines={6}
          maxLength={1000}
          placeholder={t('Ask people') + '...'}
        />
        {!!categories?.content?.length && (
          <View>
            <AppTitle>🌚 Додати категорию</AppTitle>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              ListFooterComponent={
                <AddMoreCategories
                  setCategories={setSelectedCategories}
                  categories={selectedCategories}
                />
              }
              data={categories.content.slice(0, 10)}
              renderItem={renderCategory}
              keyExtractor={({ id }, index) => id + index}
            />
            {!!filteredCategories.length && (
              <>
                <Text style={styles.selectedCategoriesText}>Обрані категорії</Text>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={filteredCategories}
                  renderItem={renderSelectedCategory}
                  keyExtractor={({ id }) => id}
                />
              </>
            )}
          </View>
        )}
        <AppTitle>📁 {t('Add image or documents')}</AppTitle>
        <FilePicker contentContainerStyle={{ paddingVertical: 5 }} files={files} setFiles={setFiles} />
      </ScrollView>
      <AppBtn style={{ container: { paddingVertical: 5 } }} onPress={formik.handleSubmit}>
        {t('Publish')}
      </AppBtn>
    </View>
  );
};

export default AddPost;
