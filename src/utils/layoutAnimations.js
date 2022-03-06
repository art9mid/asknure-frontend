import { LayoutAnimation } from 'react-native';

export const opacityLayoutAnimation = (...opts) => {
  LayoutAnimation.configureNext({
    duration: 500,
    create: {
      type: LayoutAnimation.Types.easeIn,
      property: LayoutAnimation.Properties.opacity,
      springDamping: 0.7,
    },
    ...opts,
  });
};
