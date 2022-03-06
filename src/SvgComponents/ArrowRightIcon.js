import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function ArrowRightIcon({ color = '#212121' }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={`24`} height={`24`} viewBox={`0 0 24 24`}
      fill="none">
      <Path fillRule="evenodd" clipRule="evenodd"
        d="M9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L16.4142 12L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L13.5858 12L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289Z"
        fill={color}
      />
    </Svg>
  );
}
