import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Share, Text, useColorScheme, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import dynamicStyles from './styles';
import PostAnswer from './PostAnswer';
import { showErrorNotification } from '../../utils/toast';
import { fetchPostThunk } from '../../redux/thunks/posts';
import { AppTitle, Comment, HeaderTitle, Loader, ShareButton } from '../../components';
import buildLink from '../../utils/buildLink';

const Post = (props) => {
  const dispatch = useDispatch();
  const colorSchema = useColorScheme();
  const navigation = useNavigation();
  const styles = dynamicStyles(colorSchema);
  const postId = props.route.params.postId;

  const [post, setPost] = React.useState(null);
  const loading = useSelector((state) => state.posts.postLoading);

  React.useEffect(() => {
    if (postId) {
      dispatch(fetchPostThunk(postId)).then((response) => {
        if (response.success && response.data) {
          setPost(response.data);
        } else {
          showErrorNotification('Что-то пошло не так!', 'Повторите попытку позже');
          navigation.navigate('HomeScreen');
        }
      });
    } else {
      navigation.navigate('HomeScreen');
    }
  }, [postId]);

  const handleShare = React.useCallback(() => {
    buildLink({ postId }).then((link) => {
      Share.share({
        message: link,
      });
    });
  }, []);

  React.useEffect(() => {
    if (post) {
      navigation.setOptions({
        headerTitle: () => <HeaderTitle title={post.createdBy} />,
        headerRight: () => <ShareButton onPress={handleShare} />,
      });
    }
  }, [post]);

  const renderComment = (item, index) => {
    return <Comment item={item} key={index} />;
  };

  if (loading || !post) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tenderHeaderContainer}>
        <Text style={styles.userText}>Ответы: {post.comments?.length}</Text>
        <Text style={styles.userText}>{moment(post.createdAt).format('DD.MM.YYYY')}</Text>
      </View>
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'} style={styles.body}>
        <Text style={styles.text}>{post.title}</Text>
        {!!post.comments?.length && (
          <View style={styles.answersContainer}>
            <AppTitle style={styles.title}>Ответы</AppTitle>
            {post.comments.map(renderComment)}
          </View>
        )}
        <PostAnswer postId={post.id} setPost={setPost} post={post} />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Post;
