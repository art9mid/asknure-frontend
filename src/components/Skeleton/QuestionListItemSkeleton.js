import React from 'react';
import SkeletonContent from 'react-native-skeleton-content';

const QuestionListItemSkeleton = () => {
  return (
    <SkeletonContent
      containerStyle={{ flex: 1, width: 300 }}
      animationDirection="horizontalLeft"
      layout={[
        { width: 220, height: 20, marginBottom: 6 },
        { width: 180, height: 20, marginBottom: 6 },
      ]}
      isLoading
    />
  );
};

export default QuestionListItemSkeleton;
