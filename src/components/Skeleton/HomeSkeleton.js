import React from 'react';
import { View, useColorScheme, FlatList } from 'react-native';
import dynamicStyles from './styles';
import Skeleton from './Skeleton';
import AppStyles from '../../AppStyles';

const HomeSkeleton = ({ productLength = 10 }) => {
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
    <View style={{
      height: '100%',
      padding: 15,
      backgroundColor: AppStyles.colorSet[colorScheme].whiteBackgroundColor,
    }}>
      <View style={styles.container}>
        <Skeleton style={{ height: 180, width: '100%' }} />
      </View>
      <View style={styles.container}>
        <Skeleton style={{ height: 45, width: '100%' }} />
      </View>
      <FlatList
        data={data}
        spacing={0}
        renderItem={renderSkeleton}
        initialNumToRender={5}
        maxToRenderPerBatch={30}
        onEndReachedThreshold={1}
      />
    </View>
  );
};

export default HomeSkeleton;
