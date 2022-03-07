import dynamicLinks from '@react-native-firebase/dynamic-links';

async function buildLink({ params }) {
  const query = Object.entries(params).map((item) => {
    return `${item[0]}=${item[1]}`;
  }).join('&');

  return await dynamicLinks().buildShortLink({
    link: `https://asknure.page.link?${query}`,
    domainUriPrefix: 'https://asknure.page.link',
    ...params,
  });
}

export default buildLink;
