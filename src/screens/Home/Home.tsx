import React from 'react';
import { useDispatch } from 'react-redux';
import { FlatList, Pressable, ScrollView, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { fetchPostsThunk } from '../../redux/thunks/posts';
import { openLinkInAppBrowser } from '../../utils/customTab';

const Home = () => {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const dispatch = useDispatch();

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

  React.useEffect(() => {
    dispatch(fetchPostsThunk());
  }, []);

  const renderСhair = ({index, item}) => {
    return (
      <Pressable onPress={() => openLinkInAppBrowser(item.link)}>
        <View style={styles.chairItemContainer}>
          <Text style={styles.chairItemText}>{item.name}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 5}}
        data={dummyData}
        renderItem={renderСhair}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
};

export default Home;
