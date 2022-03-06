import { CustomTabs } from 'react-native-custom-tabs';

export const openLinkInAppBrowser = (url = 'https://www.google.com') => {
  CustomTabs.openURL(url)
    .then((launched) => {
    })
    .catch((error) => {
      console.error(error);
    });
};
