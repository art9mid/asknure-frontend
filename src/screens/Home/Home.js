import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Pressable, ScrollView, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { QuestionListItem } from '../../components';
import { openLinkInAppBrowser } from '../../utils/customTab';

const Home = () => {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.posts.posts);

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

  const renderСhair = ({ index, item }) => {
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

  const renderPosts = ({ index, item }) => {
    return <QuestionListItem onClick={handlePostPress(item.id)} item={item} />;
  };

  return (
    <FlatList
      data={[]}
      keyExtractor={(e, i) => 'dom' + i.toString()}
      ListEmptyComponent={null}
      renderItem={null}
      style={styles.container}
      ListHeaderComponent={() => (
        <ScrollView>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chairContainer}
            data={dummyData}
            renderItem={renderСhair}
            keyExtractor={(item, index) => index.toString()}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.containerList}
            data={posts?.content?.reverse()}
            renderItem={renderPosts}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      )}
    />
  );
};

export default Home;
