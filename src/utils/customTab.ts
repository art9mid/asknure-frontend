import { CustomTabs } from 'react-native-custom-tabs';

export const openLinkInAppBrowser = (url = 'https://www.google.com') => {
  CustomTabs.openURL(url).then((launched) => {
    console.log(`Launched custom tabs: ${launched}`);
  }).catch(err => {
    console.error(err);
  });
};
