import React from 'react';
import { View, useColorScheme, FlatList } from 'react-native';
import dynamicStyles from './styles';
import Skeleton from './Skeleton';
import AppStyles from '../../AppStyles';

const QuestionListItemSkeleton = ({ productLength = 10 }) => {
  const data = new Array(productLength).fill(1);
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  function renderSkeleton() {
    return (
      <View style={styles.container}>
        <Skeleton style={{ height: 100, width: '100%' }} />
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      spacing={0}
      contentContainerStyle={{
        height: '100%',
        padding: 15,
        backgroundColor: AppStyles.colorSet[colorScheme].whiteBackgroundColor,
      }}
      renderItem={renderSkeleton}
      initialNumToRender={5}
      maxToRenderPerBatch={30}
      onEndReachedThreshold={1}
    />
  );
};

export default QuestionListItemSkeleton;
